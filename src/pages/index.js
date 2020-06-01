import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <p>Leftfield is a business development, marketing services and project delivery organization.</p>
        <p>We assist international firms in their efforts to sell their products and services in India.</p>
        <Link to="/page-2/">Work with us</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
