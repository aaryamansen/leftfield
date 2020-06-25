import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/header'
import ServHead from "../components/servhead"
import Serv1 from "../components/serv1"
import Serv2 from "../components/serv2"
import Clients from "../components/clients"
import ClientHead from "../components/clienthead"
import Contact from "../components/contact"

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="Logo">Leftfield</div>
      <div className="HeroGroup">
        <h1>Leftfield delivers world class business and corporate development services for your company.</h1>
        <h2>We help our clients grow revenues, increase market share and expand distribution, leveraging our expertise and relationships to help them secure enterprise customers in the public and private sectors.</h2>
        <Link to="/"><button>Work with us</button></Link>
        <p></p>
        <Link to="/">or explore our services</Link>
      </div>
      <div className="Social">Find us on <a href="https://www.linkedin.com">LinkedIn</a>, <a href="https://www.facebook.com">Facebook</a>, and <a href="https://www.instagram.com">Instagram</a>.</div>
      <div className="Work">Work</div>
      <div className="Services">Services</div>
      <div className="Team">Team</div>
      <div className="Press">Press</div>
      <div className="ContactLink">Contact</div>
    </div>
    <ServHead />
    <Serv1 />
    <Serv2 />
    <ClientHead />
    <Contact />
  </div>
)

export default IndexPage
