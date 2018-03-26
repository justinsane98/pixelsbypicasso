import React from 'react'
import Link from 'gatsby-link'

import Colors from '../components/Colors'
import Canvas from '../components/Canvas'

export default class BetaPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: {
        path: '',
        base: ''
      },
    }
  }
  
  /* function to capture image data from "upload" */
  /* function to convert img to pixel array */

  
  render() {
    return (
    <div>
      {/* upoad form */}
      <form className="upload">
        <input type="text"/>
        <button>upload</button>
      </form>
      
      {/* pass in... pixel array to render*/}
      {/* zoom: {'.1',1px},{'1',10px},{'10',100px}  */}
      <Canvas zoom="1"/>
      
      {/* color output ordered by # of pixels */}
      <ul>
        {/* color */}
        <li>
          <p>Color: color.name</p>
          <p>Paint: color.paint</p>
          <p>Pixels:</p>
          {/* pixel list */}
          <ul>
            {/* individual pixels */}
            <li>[x, y]</li>
            <li>[x, y]</li>
          </ul>
        </li>
      </ul>
    </div>
    )
  }
}
