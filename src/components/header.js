import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#0077CC',
      width: '100%',
    }}
  >
    <div
      style={{
        margin: 'auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 'auto' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            textAlign: 'center',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)
export default Header
