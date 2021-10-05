import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchProjects} from "./projectSlice";
import "./SingleProject.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import { pink } from '@material-ui/core/colors';

function SingleProject({match}) {
    const {projectsId} = match.params;
    const projectData = useSelector(state=>state.projectsReducer.projects.find(item=> item._id===projectsId));
    const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProjects());
   },[]);

    return (
        <div className="singleProject">
            {
              projectData
              ? (<div className="singleProject_container">
                    <h1>{projectData.projectName}</h1>
                    <div className="singleProject_images">
                      { projectData.images?.map(image => {
                        return (<img src={image} alt="" />)
                       }) }
                    </div>

                    <div className="singleProject_languages">
                      <p>Programming Languages used :</p>
                      <h4> {projectData.languages} </h4>
                    </div>

                    <div className="singleProject_description">
                      <p> {projectData.caseStudy.lineOne} </p>
                      <p> {projectData.caseStudy.lineTwo} </p>
                      <p> {projectData.caseStudy.lineThree} </p>
                    </div>

                    <div className="singleProject_features">
                      <h2>Features</h2>
                      {
                        projectData.functionalities.map(feature => {
                          return (
                            <p> <span>👌</span>{feature} </p>
                          )
                        })
                      }
                    </div>

                    <div className="singleProject_charge">
                      <h2>How much should I charge for such project?</h2>
                      <p> {projectData.charge} </p>
                    </div>
                </div>)
              : <CircularProgress className="singleProject_progressBar" style={{ color: pink[500] }} size={35} />
            }
        </div>
    )
}

export default SingleProject
