import React from 'react'
import HomeServices from './HomeServices'
import "./Services.css"

function Services() {
    return (
        <div className="services">
          <h2>My Services</h2>
          <div className="services_container">
           <div className="services_list" style={{color:"white"}}>
            <HomeServices title="Good communication with clients to provide products as clients wanted" />
            <HomeServices title="Beautiful looking website" />
            <HomeServices title="Much better user experience" />
            <HomeServices title="Google authentication, facebook authentication and many more" />
            <HomeServices title="Responsive website" />
            <HomeServices title="Browser compatibility" />
            <HomeServices title="Source code for future changes in website" />
            <HomeServices title="Fetching data from server and API" />
            <HomeServices title="Storing user's information in database" />
            <HomeServices title="Sending email to the user's" />
            <HomeServices title="Debugging" />
            <HomeServices title="Map integration,Chart integration, etc..." />
            <HomeServices title="Web hosting for my clients" />
           </div>
            <img src="assets/profile2.jpg" alt="" />
          </div>
        </div>
    )
}

export default Services
