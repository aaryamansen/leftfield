import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/header'
import Sublog from "../components/sublog"
import Serv1 from "../components/serv1"
import Serv2 from "../components/serv2"

const IndexPage = () => (
  <div>
    <div className="Hero">
      <Header />
      <div className="HeroGroup">
        <h1>A new kind of growth agency.</h1>
        <Link to="/"><button>Work with us</button></Link>
      </div>
    </div>
    <Sublog />
    <Serv1 />
    <Serv2 />
  </div>
)

export default IndexPage
