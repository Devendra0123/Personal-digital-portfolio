import React from "react";
import "./LPvideo.css";
import ReactPlayer from 'react-player/youtube';

function LPvideo(){
  return (
    <div className="lpVideo">
      <h2>Brief Introduction</h2>
      <div className="lpVideo_container">

        <div className="lpVideo_quote">
           <h3>
             <span>"</span>A mind that is limited to reason and analysis<br /> is incapable of perceiving what is truth<span>"</span>
           </h3>
        </div>

        <div className='player-wrapper'>
        <iframe
           width="100%"
           height="100%"
           src='https://www.youtube.com/embed/l5cAQxbVUr0'
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
           title="Intro Video"
         />
      </div>

      </div>
      
    </div>
  )
}

export default LPvideo;