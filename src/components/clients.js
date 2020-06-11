import React from 'react'
import './clients.css'
import ClientStats from "../components/clientstats"

const Clients = () => (
  <div className="Clients">
    <div className="ClientCard">
      <h1>Client 1</h1>
      <p>Here is the work we did for Client 1. This is dummy text. Trying to make it long enough to look like a paragraph. Still dummy text</p>
      <ClientStats />
      <button>View Case Study</button>
    </div>
    <div className="ClientCard">
      <h1>Client 2</h1>
      <p>Here is the work we did for Client 2. This is dummy text. Trying to make it long enough to look like a paragraph. Still dummy text</p>
      <ClientStats />
      <button>View Case Study</button>
    </div>
    <div className="ClientCard">
      <h1>Client 3</h1>
      <p>Here is the work we did for Client 3. This is dummy text. Trying to make it long enough to look like a paragraph. Still dummy text</p>
      <ClientStats />
      <button>View Case Study</button>
    </div>
  </div>
)

export default Clients