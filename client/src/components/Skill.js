import React from 'react';
import AlbumIcon from '@material-ui/icons/Album';
import './Skill.css';
import { lime } from '@material-ui/core/colors';

function Skill({skill}){
  return (
    <div className="skill">
      <AlbumIcon style={{ color: lime[400] }} />
      <span> {skill} </span>
    </div>
  )
}

export default Skill;