import React from 'react'
import Link from 'gatsby-link'
import headerBackground from './../../images/header.jpg'
import headerBackground2x from './../../images/header@2x.jpg'

export default class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          borderTop: '4px solid #5AB5A4',
          borderBottom: '1px solid #fff',
          backgroundColor: '#6FDDC1',
          backgroundImage: "-webkit-image-set(url(" + headerBackground + ") 1x, url("+ headerBackground2x +") 2x)",
          backgroundPosition: 'center center',
          marginBottom: '20px',
          height: '250px'
        }}
      >
      </div>
    )
  }
}