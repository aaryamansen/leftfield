import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">Leftfield</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/team">Team</Link>
      <Link to="/press">Press</Link>
      <Link to="/contact"><button>Contact</button></Link>
    </div>
  </div>
)

export default Header
