import React from 'react';
import Link from 'gatsby-link';
import Section from '../components/v2/section';
import ServiceCard from '../components/v2/service-card'

const IndexPage = () => (
  <div>
    {/* NAVBAR */}
    <div className="hero">
      <div className="headline">
        <h1>Leftfield delivers world class business and corporate development services for your company.</h1>
        <h1>We help our clients grow revenues, increase market share and expand distribution, leveraging our expertise and relationships to help them secure enterprise customers in the public and private sectors.</h1>
        <div className="main-cta">
          <button className="active-button">Work with us</button>
        </div>
      </div>
    </div>
    <div className="card-group">
      <ServiceCard 
        title="Growth"
        image={require('../images/logo1.png')}
        text="We are focused on all of those activities that help a business grow revenues, expand its customer base, increase its distribution, and enter new markets."
        stat="$400M in Revenue Generated" />
      <ServiceCard 
        title="Financing"
        image={require('../images/logo2.png')}
        text="We facilitate introductions to traditional and non-traditional sources of capital, assistance with participating in the allocation process for grants or subsidies where relevant, and guidance on tax-efficient structuring of entities and transactions."
        stat="$450M in Capital Facilitated" />
      <ServiceCard 
        title="Government"
        image={require('../images/logo3.png')}
        text="Consulting with our clients to help them better engage with all levels of government where appropriate or relevant to further their objectives, and helping them understand fully the implications of any policies that exist or are introduced that have a bearing on their business."
        stat="$400M in Government Subsidies" />
    </div>
    {/* SOCIAL TICKER */}
    {/* SERVICES CARDS */}
    {/* TEAM + ADVISOR CARDS */}
    {/* FOOTER */}
  </div>
)

export default IndexPage
