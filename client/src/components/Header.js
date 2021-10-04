import React,{useState} from "react";
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

function Header() {

  const [clicked, setClicked] = useState(false);

  return (
    <div className="header">

      <div className="header_logo">
       <a href="/">
         <h1>DEVEN</h1>
       </a>
      </div>

      <div className="header_link" id={clicked?"show_header":""} >
       <a onClick={()=> setClicked(false)} className="link" href="/">
         Home</a>
       <a onClick={()=> setClicked(false)} className="link" href="/services">
         Services</a>
       <a onClick={()=> setClicked(false)} className="link" href="/projects">
         Projects</a>
       <a onClick={()=> setClicked(false)} className="link" href="/contact">
         Contact Me</a>
      </div>
       {!clicked?<MenuIcon className="menuIcon" onClick={()=> setClicked(true)}/>:<MenuOpenIcon className="menuIcon" onClick={()=> setClicked(false)}/>}
    </div>
  );
}

export default Header;
