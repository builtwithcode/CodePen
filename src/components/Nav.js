import React from 'react'
import { Link } from 'gatsby'
import '../pages/stylesheet.css'



    const Nav = () => (
    <div id="nav">
    <Link to="/learnMore" style={{paddingLeft: '30px', textDecoration: 'none',}}>About</Link>
    <a href="https://www.eventbrite.co.uk/e/codepen-hull-concurrency-coding-for-parallel-processing-tickets-51658640384?aff=erelexpmlt" id="navBookNow">Book Now</a>
    <Link to="/passTalks" style={{paddingLeft: '30px', textDecoration: 'none',}}>Pass Talks</Link>
    <Link to="/contact" style={{paddingLeft: '30px', textDecoration: 'none',}}>Contact</Link>
    </div>
    )

export default Nav
