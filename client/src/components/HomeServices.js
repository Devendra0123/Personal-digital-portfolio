import React from 'react';
import "./HomeServices.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function HomeServices({title}){
  return (
    <div className="homeService">
        <ArrowForwardIosIcon fontSize="small" color="secondary" className="homeService_icon"/>
        <p> {title} </p>
    </div>
  )
}

export default HomeServices;