import React from 'react'
import { Link } from 'gatsby'
import '../styles/stylesheet.css'

const Nav = () => (
  <div id="nav">
    <Link to="/learnMore" className="nav-item">
      About
    </Link>

    <a
      href="https://www.eventbrite.co.uk/e/codepen-hull-concurrency-coding-for-parallel-processing-tickets-51658640384?aff=erelexpmlt"
      id="navBookNow"
      className="nav-item"
    >
      Book Now
    </a>

    <Link to="/passTalks" className="nav-item">
      Pass Talks
    </Link>
    <Link to="/contact" className="nav-item">
      Contact
    </Link>
  </div>
)

export default Nav
