import React from 'react'
import Link from 'gatsby-link'

import Nav from '../Nav'

const Header = () => (
  <div
    style={{
      background: '#50E3C2',
      marginBottom: '20px',
      height: '100px'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '2rem 1.75rem 0',
        opacity: .75,
        fontWeight: 100
      }}
    >
    
    <Link to="/" style={{ color: '#22584C', textDecoration: 'none', fontSize: '36px' }}>Pixels by Picasso</Link>
    <Nav></Nav>
    </div>
  </div>
);

export default Header
