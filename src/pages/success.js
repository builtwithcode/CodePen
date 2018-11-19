import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import '../styles/stylesheet.css'

const Success = props => (
  <Layout>
    <Nav />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          <p>Thank you for contacting us!</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success
