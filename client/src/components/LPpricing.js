import React from "react";
import "./LPpricing.css";

function LPpricing(){
  return (
    <div className="lpPricing">
       <h2> Pricing </h2>
       <div className="lpPricing_container">
         <div className="price_container one">
           <div className="price_container_info">
             <p>1-2 pages</p>
             <p>Responsive design</p>
             <h4>Simple Websites</h4>
             <p>Amazing look of website</p>
             <p>Source code</p>
           </div>

           <div className="price_container_price">
              <p>
                <small>$</small>
                <strong> 15-50 </strong>
              </p>
           </div>
         </div>
         <div className="price_container two">
           <div className="price_container_info">
             <p>3-5 pages</p>
             <p>Responsive design</p>
             <p>Amazing look of website</p>
             <h4>Intermediate Websites</h4>
             <p>Browser compatibility</p>
             <p>Connected to Backend</p>
             <p>Source code</p>
           </div>

           <div className="price_container_price">
              <p>
                <small>$</small>
                <strong> 100-500 </strong>
              </p>
           </div>
         </div>

         <div className="price_container three">
           <div className="price_container_info">
             <p>4 or more pages</p>
             <p>Responsive design</p>
             <p>Amazing look of website</p>
             <p>Browser compatibility</p>
             <h4>Advance Website/webapps</h4>
             <p>Connected to backend with database</p>
             <p>Google,facebook,... authentication</p>
             <p>Source code</p>
           </div>

           <div className="price_container_price">
              <p>
                <small>$</small>
                <strong> 1k-5k </strong>
              </p>
           </div>
         </div>

       </div>
    </div>
  )
}

export default LPpricing;