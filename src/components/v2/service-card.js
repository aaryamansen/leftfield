import React from 'react'
import './service-card.css'

const ServiceCard = props => (
    <div className="ServiceCard">
        <img src={props.image} />
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <h3>{props.stat}</h3>
    </div>
)

export default ServiceCard