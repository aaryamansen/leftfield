import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/header'
import Sublog from "../components/sublog"
import Serv1 from "../components/serv1"
import Serv2 from "../components/serv2"
import Clients from "../components/clients"

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Leftfield is a new kind of growth agency.</h1>
        <h2>We help startups with sales, growth marketing, enterprise customer acquisition and fundraising.</h2>
        <Link to="/"><button>Work with us</button></Link>
        <p></p>
        <Link to="/">or explore our services</Link>
      </div>
      <div className="Social">Find us on <a href="https://www.linkedin.com">LinkedIn</a>, <a href="https://www.facebook.com">Facebook</a>, and <a href="https://www.instagram.com">Instagram</a>.</div>
    </div>
    <Sublog />
    <Serv1 />
    <Serv2 />
    <Clients />
  </div>
)

export default IndexPage
