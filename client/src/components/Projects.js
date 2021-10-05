import React,{useEffect} from 'react';
import "./Projects.css";
import {fetchProjects} from "./projectSlice";
import {useSelector, useDispatch} from "react-redux";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CircularProgress from '@material-ui/core/CircularProgress';
import { pink } from '@material-ui/core/colors';

function Projects() {
    const projectsData = useSelector(state=>state.projectsReducer.projects);
    const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProjects());
   },[]);

    return (
        <div className="projects"> 
          <div className="project_quote">
            <FormatQuoteIcon
              className="project_quote_icon"
              style={{ fontSize: 40, color: "rgb(187, 48, 48)" }}
            />
            <p>
             What you are the world is.And without your transformation,there can be no transformation of the world.
            </p>
          </div>
          <h2>Collection Of My Projects</h2> 

           {
             projectsData.length===0 
             ? (<CircularProgress  style={{ color: pink[500] }} size={35} />) 
             :( <div className="project_container">

                {projectsData.map(item => {
              return (
               <div key={item._id} className="project_singlproject">
                <div className="project_singlproject_title">
                  <h3> { item.projectName } </h3>
                </div>
                <div className="project_singlproject_body">
                  <img 
                    src={item.images[1]?item.images[1]:"https://media.istockphoto.com/photos/responsive-devices-on-home-desktop-showing-web-design-website-picture-id1224339524?k=6&m=1224339524&s=612x612&w=0&h=IJtwvOtTDBxOrP7a16L6I0KdQ6oEPWpeac9s8dt-Ua0="}
                    alt="" />
                  <div className="project_singlproject_body_description">
                    {item.functionalities.map((feature,index) => {
                      return (
                        <p key={index}> <span>✍</span> {feature} </p>
                      );
                    })}
                    <a href={`/projects/${item._id}`}>
                    <button>
                       Detail
                    </button>
                    </a>
                  </div>  
                </div>
               </div>
            );
          })}
        </div>)
          } 
        </div>
    )
}

export default Projects
