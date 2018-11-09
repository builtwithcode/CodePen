import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import './stylesheet.css'



const Success = (props) => (
    <Layout>
<div id="nav">
    <Link to="/learnMore" style={{paddingLeft: '30px', textDecoration: 'none',}}>About</Link>
    <a href="https://www.eventbrite.co.uk/e/codepen-hull-concurrency-coding-for-parallel-processing-tickets-51658640384?aff=erelexpmlt" id="navBookNow">Book Now</a>
    <Link to="/passTalks" style={{paddingLeft: '30px', textDecoration: 'none',}}>Pass Talks</Link>
    <Link to="/contact" style={{paddingLeft: '30px', textDecoration: 'none',}}>Contact</Link>
    </div>

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