import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

const useForm = () => {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayError, setDisplayError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
 
    let inputErrors = {};

    if (!values.user_name) {
      inputErrors.user_name = "Username required";
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.user_email) {
      inputErrors.user_email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.user_email)) {
      inputErrors.user_email = "Email address is invalid";
    }
  
    if (!values.user_message) {
      inputErrors.user_message = "type in message";
    }
  
  setErrors(inputErrors);
  console.log(errors)
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setDisplayError(errors);
   
    
    if (Object.keys(errors).length === 0 && isSubmitting) {
        if(!loading){
            setLoading(true);
            setSuccess(false);
          }
          emailjs.sendForm('service_vkbn5xs', 'template_943ka0b', e.target, 'user_8E5DaCnxLl3jFmVOxnQsj')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
                setLoading(false);
                setValues({
                  user_name: "",
                  user_email: "",
                  user_message: ""
                });
            }).catch((error) => {
                console.log(error.text);
            });

            setTimeout(function() {
                setSuccess(false);
                setLoading(false);
             }, 5000);
    }
  };


  return { handleChange, handleSubmit, values, errors, loading, success, displayError };
};

export default useForm;
