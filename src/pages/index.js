import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Howdy Folks!</h1>
    <p>We are currently working <em>hard</em> on a beta version of the first product from Pixels by Picasso. Our mission is to help kids of all ages realize that painting is not magic and that it can be broken down into a science.  Take a look at our basic concept below and if you are interested in joining or hearing more about our beta program, <Link to="/about/">please let us know</Link>.</p>
  
    <h4>First you:</h4>
    <ul>
      <li>Purchase the Pixels by Picasso starter kit</li>
      <li>Take any photo and upload it to our app</li>
    </ul>
  
    <h4>Then we instantly:</h4>
    <ul>
      <li>Match the colors in your photo to real acrylic paints</li>
      <li>Pixelate your photo <br/><em style={{fontSize: '10px', opacity: 0.5, position: 'relative', top: '-4px'}}>* blocky kinda like an 80's video game</em></li>
      <li>Generate the color legend</li>
      <li>Calculate the color formulas</li>
      <li>Show you a preview of the color map</li>
     </ul>
          
     <h4>Now whenever you are ready it's time to:</h4>
      <ul>
        <li>Hook our pixel map to a standard 10"x10" canvas</li>
        <li>Mix paints using our color formulas</li>
        <li>Map each color to a coordinate on the canvas using the pixel map and legend</li>
        <li>Customize your canvas!</li>
      </ul>
        
      <h4>After you are finished:</h4>
      <ul>
        <li>Watch the paint dry...</li>
        <li>Remove the pixel map from the canvas</li>
        <li>Hang your new pixelated picasso on the wall</li>
        <li>Tell your friends?</li>
      </ul>
  </div>
)

export default IndexPage
