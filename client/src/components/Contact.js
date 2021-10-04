import React,{useState} from 'react';
import "./Contact.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';
import { green } from '@material-ui/core/colors';
import { teal } from '@material-ui/core/colors';
import useForm from "./formValidate";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Contact() {

  const classes = useStyles();

  const { handleChange, handleSubmit, values, displayError, loading, success, errors } = useForm();

    return (
        <div className="contact">
            <div className="contact_container">
                <div className="contact_left">
                  <form  onSubmit={handleSubmit}>
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
                    onChange={handleChange}
                    />
            {displayError.user_message && <p>{displayError.user_message}</p>}
                  <Button
                   type="submit"
                   variant="contained"
                   style={{backgroundColor: success? green[500] : teal[500] }}
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
                <div className="contact_right">
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
                  <div className="contact_socialMedia">
                  <div className="socialMedia_logo_image">
                     <a href="https://www.facebook.com/debendra.chy.7">
                     <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png"
                      alt="" /></a>
                    </div> 
                    <div className="socialMedia_logo_image">
                    <a href="https://www.instagram.com/chydebendra/">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                      alt="" /></a>  
                    </div>
                    <div className="socialMedia_logo_image"> 
                    <a href="https://www.linkedin.com/in/devendra-chaudhary-18548a11b/">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                      alt="" /></a>
                    </div>   
                  </div>  
                </div>
            </div>
        </div>
    )
}

export default Contact
