import React, { useEffect } from "react";
import "./LPproject.css";
import {fetchProjects} from "./projectSlice";
import {useSelector, useDispatch} from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { pink } from '@material-ui/core/colors';

function LPproject() {

  const projectsData = useSelector(state=>state.projectsReducer.projects);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProjects());
   },[]);

  return (
    
    <div className="lpProject">
      <h2>My Projects</h2>
      <div className="lpProject_container">
        {
          projectsData.length !== 0?projectsData.map(item => {
            return (
              <div className="lpProject_singlproject">
                <a href={`/projects/${item._id}`}>
                  <img
                     src={item.images?item.images[0]:"https://media.istockphoto.com/photos/responsive-devices-on-home-desktop-showing-web-design-website-picture-id1224339524?k=6&m=1224339524&s=612x612&w=0&h=IJtwvOtTDBxOrP7a16L6I0KdQ6oEPWpeac9s8dt-Ua0="}
                     alt=""
                   />
                   <h3>
                     <span>{item.projectName}</span>
                   </h3>
                </a>
               </div>
            )
          })
          :  <CircularProgress className="progressBar" style={{ color: pink[500] }} size={35}/>
        } 
      </div>
      <a href="/projects">
      <button className="view_more">
          View more
      </button>
      </a>
    </div>
  );
}

export default LPproject;
