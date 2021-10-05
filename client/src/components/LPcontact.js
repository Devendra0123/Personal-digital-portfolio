import React from "react";
import "./LPcontact.css";
import SendIcon from '@material-ui/icons/Send';
import useForm from "./formValidate";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';
import { green } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
function LPcontact(){
  const { handleChange, handleSubmit, values, displayError, loading, success } = useForm();
  const classes = useStyles();
  return (
    <div id="contact" className="lpContact">
      <h2>Contact Me</h2>
    
      <div className="lpContact_container" style={{backgroundImage:`url("https://i2.wp.com/desktopbackground.org/download/1920x1080/2013/02/20/533787_high-resolution-black-flower-desktop-wallpapers-hd-14-full-size_1920x1200_h.jpg")`}}>
        <div className="lpContact_left">
           <form onSubmit={handleSubmit}>
             <label>Fullname</label>
             <input 
                type="text"
                name="user_name"
                value={values.user_name}
                onChange={handleChange}
                />
          {displayError.user_name && <p>{displayError.user_name}</p>}
             <label>E-mail</label>
             <input 
                type="email"
                name="user_email"
                value={values.user_email}
                onChange={handleChange}
                />  
          {displayError.user_email && <p>{displayError.user_email}</p>}
            <label>Message</label> 
            <textarea rows="8" 
              name="user_message"
              value={values.user_message}
              onChange={handleChange} />
          {displayError.user_message && <p>{displayError.user_message}</p>}   
                <Button
                   type="submit"
                   variant="contained"
                   style={{backgroundColor: success? green[500] : yellow[500] }}
                   disabled={loading || !values.user_name}
                   className={classes.button}
                   endIcon={loading
                       ? <CircularProgress size={35} />
                       : success ? <CheckIcon />
                       : <SendIcon />}
                   >
                   {success? "Message sent" : "Send"}
                 </Button>             
               
           </form>
        </div>

        <div className="lpContact_right">
                 <div className="contact_info">
                    <div className="flex">
                        <PhoneIphoneIcon className="material_icon" />
                        <h3>(+977)9807717694</h3>
                    </div>
                    <div className="flex">
                        <LocationOnIcon className="material_icon" />
                        <h3>Kathmandu,Nepal</h3>
                    </div>
                    <div className="flex">
                        <EmailIcon className="material_icon" />
                        <h3>devendra13.dc@gmail.com</h3>
                    </div>
                  </div>
              <div className="social_media">
                 <div className="lpSocialMedia_logo_image">
                    <a href="https://www.facebook.com/debendra.chy.7">
                     <FacebookIcon className="social_media_icon" />
                    </a>
                    </div> 
                    <div className="lpSocialMedia_logo_image">
                    <a href="https://www.instagram.com/chydebendra/">
                     <InstagramIcon className="social_media_icon" />
                    </a>  
                    </div>
                    <div className="lpSocialMedia_logo_image"> 
                    <a href="https://www.linkedin.com/in/devendra-chaudhary-18548a11b/">
                      <LinkedInIcon className="social_media_icon" />
                    </a>
                  </div>    
              </div>
                   
        </div>
      </div>
    </div>
  )
}

export default LPcontact;