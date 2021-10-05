//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const https = require("https");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
const FileReader = require('filereader');
const Pusher = require("pusher");
const multer = require('multer');
const upload = multer({ dest: 'uploads' });
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.set("view engine", "ejs");

app.use(express.urlencoded({limit: "50mb",extended: true})); 
app.use(express.json({limit: "50mb"}));
 
app.use(express.static('public'));

/*..........Pusher SetUP.....*/

const pusher = new Pusher({
  appId: "1236958",
  key: "b6adbe58378609c354f0",
  secret: "ffb3493c08b4740c7082",
  cluster: "ap2",
  useTLS: true
});


/*.....DB Setup....*/

mongoose.connect(process.env.CONNECTION_URL, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });


const postSchema = {
  caption: String,
  image: String
}

const Post = mongoose.model("Post",postSchema);

const projectSchema = {
  projectName: String,
  images:[String],
  languages: String,
  urlLink: String,
  caseStudy:{
    lineOne: String,
    lineTwo: String,
    lineThree: String
  },
  functionalities:[String],
  charge: String
}

const Projects = mongoose.model("Projects",projectSchema);

mongoose.connection.once("open", ()=>{
  console.log("DB connected");
  try {
    const changeStream = mongoose.connection.collection("posts").watch();
    changeStream.on("change",(change)=>{
      console.log("change triggered")
      
      if(change.operationType==="insert"){
        const postDetail = change.fullDocument;
        pusher.trigger("posts","inserted", {
          caption: postDetail.caption,
          image: postDetail.image
        })
      }
    });
  } catch (error) {
    console.error(error);
  }
 
});

/*.....API request......*/


app.post("/upload", (req, res)=>{

  try {
   const body=req.body;
    Post.create(body, (err, data)=>{
      if(err){
        res.status(500).send(err);
      }else{
        res.status(201).send(data);
      }
    })
  } catch (error) {
    console.error(error);
  }
 
});

app.get("/sync", (req,res)=>{
  try {
    Post.find((err, data)=>{
      if(err){
        res.status(500).send(err);
      }else{
        res.status(200).send(data);
      }
    })
  } catch (error) {
    console.error(error);
  }
   
});

app.get("/news",async function(req,res){
  let array = [];
   const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=319e355529ec41ebbac867d629b97073";
   try {
    const response = await axios.get(url);
  
    const articles = response.data.articles;
    
    articles.map(item=>{
      array.push({
        title: item.title,
        description: item.description,
        image: item.urlToImage,
        content: item.content,
        id: item.publishedAt
      }); 
  });
  } catch (error) {
    console.error(error);
  }
  
  res.send(array);
});


app.post('/api/projects', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  
function base64_encode(file) {
    return "data:image/gif;base64,"+fs.readFileSync(file, 'base64');
}

const images = req.files.map(item => {
  return  base64_encode(item.path);
})

  const body= {
    projectName: req.body.projectName,
    images: images,
    languages: req.body.languages,
    caseStudy: {
      lineOne: req.body.lineOne,
      lineTwo: req.body.lineTwo,
      lineThree: req.body.lineThree
    },
    functionalities: req.body.f,
    charge: req.body.charge
 }

  Projects.create(body, (err, data)=>{
    if(err){
      res.status(500).send(err);
    }else{
      console.log(images);
      res.status(201).send(data);
    }
  });
  // req.body will contain the text fields, if there were any
});

app.get("/api/projects", (req,res)=>{
  try {
    Projects.find((err, data)=>{
      if(err){
        res.status(500).send(err);
      }else{
        res.status(200).send(data);
      }
    })
  } catch (error) {
    console.error(error);
  }
});

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

if(process.env.NODE_ENV=="production"){
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,function(){
    console.log("server is running at port 5000");
});
