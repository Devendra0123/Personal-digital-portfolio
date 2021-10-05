import React, { useState } from "react";
import "./Home.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Skill from "./Skill";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import HomeServices from "./HomeServices";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    background:  'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '20px 30px',
  },
}));

function Home() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="home" className="home">
      <div className="home_container">
        <div className="home_me_image">
          <img
            src="assets/profile2.jpg"
            alt=""
          />
          <h2>Devendra Chaudhary</h2>
          <div className="hiring_info">
            <p>Please hire me on Upwork</p>
            <a href="https://www.upwork.com/freelancers/~01bb55ee677a28f499?viewMode=1">
            <button>My Upwork Profile</button>
            </a>
          </div>
        </div>
        <div className="home_middle_section">
          <div className="home_quote">
            <FormatQuoteIcon
              className="home_quote_icon"
              style={{ fontSize: 40, color: "rgb(187, 48, 48)" }}
            />
            <p>
              If we can really understand the problem,
              <br />
              the answer will come out of it, because <br /> the answer is not
              separate from the problem.
            </p>
          </div>

          <div className="home_intro">
            <h3>Hi there!</h3>
            <div className="intro_info">
              <div>
              <h3>   
                My name is <span>Devendra</span>.
              </h3>
              <p> I am a <span className="profession">Full Stack Web Developer</span>. </p>
              </div>
              <a className="link" href="/contact">
                 <button> Contact Me </button>
              </a>
              
            </div>
            <div className="skills">
              <Skill skill="React JS" />
              <Skill skill="NEXT JS" />
              <Skill skill="Node JS" />
              <Skill skill="Mongo DB" />
              <DoubleArrowIcon 
                className="arrow_icon" 
                onClick={handleOpen}
                />
                <Modal
                  aria-describedby="transition-modal-description"
                  aria-labelledby="transition-modal-title"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                     timeout: 500,
                     }}
                  >
                 <Fade in={open}>
                   <div className={classes.paper}>
                     <h2 id="transition-modal-title" style={{color:"black", marginBottom:"10px"}}>Language I'm Good at!</h2>
                     <div id="transition-modal-description" style={{display:"flex"}}>
                       <div style={{color:"white"}}>
                         <Skill skill="React JS" />
                         <Skill skill="NEXT JS" />
                         <Skill skill="Node JS" />
                         <Skill skill="Mongo DB" />
                         <Skill skill="Tailwind CSS" />
                         <Skill skill="Material UI" />
                       </div>
                       <div style={{color:"white"}}>
                         <Skill skill="Vanilla JS" />
                         <Skill skill="API" />
                         <Skill skill="Chart JS" />
                         <Skill skill="Leaflet JS" />
                         <Skill skill="HTML" />
                         <Skill skill="CSS" />
                       </div>
                     </div>
                   </div>
                 </Fade>
               </Modal>
            </div>
           
          </div>

          <div className="home_rating">
            <h2>Rated around 4.7<span>⭐</span> out of 5<span>⭐</span> by clients</h2>
          </div>

          <div className="home_experience">
            <h4>"I have been doing Web development for more<br/> than 2 years now..."</h4>
          </div>
        </div>

        <div className="home_right_section">
          <h2>My Services</h2>
          <HomeServices title=" Build more complex websites and web apps like Amazon, Facebook, Zoom, etc..." />
          <HomeServices title=" Build E-commerce website along with payment integration through Stripe, Paypal, etc..." />
          <HomeServices title=" Hosting website for client" />
          <HomeServices title=" Fetching data from APIs" />
          <HomeServices title=" Website customization" />
          <HomeServices title=" Bug fixing" />
          <HomeServices title=" integration of maps and graphs in website" />
          <button>Many more</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
