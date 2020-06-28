import React from 'react'
import './contact.css'
import Link from 'gatsby-link'

const Contact = () => (
  <div className="Contact">
      <div className="Details">
        <h1>
          Reach out to us.
        </h1>
        <p>
          We are heaquartered in Amsterdam, with representative offices in New York, Chennai, Gurgaon and Kolkata.
        </p>
        <div className="DetailsCol">
          <p>
            Address
            <br/>
            <br/>Left Field Services B.V.
            <br/>Prinsengracht 829
            <br/>Amsterdam 1017 KB
            <br/>The Netherlands
          </p>
          <p>
            Contact us
            <br/>
            <br/>+31 (0) 20 890 2143 
            <br/>
            <br/>mohan@leftfield-services.com
            <br/><a href="mailto:x@y.com">Email Us</a>
          </p>
        </div>
      </div>
      <div></div>
      <div className="Newsletter"><h1>Sign up for our newsletter.</h1></div>
  </div>
)

export default Contact