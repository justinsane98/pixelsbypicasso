import React from "react"
import Konva from 'konva'
import { Stage, Layer } from 'react-konva'

import Pixel from './../Pixel'

export default class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '250',
      height: '250',
      zoom: this.props.zoom,
      backgroundColor: 'white',
      pixelArray: this.props.pixelData
    }
  }
  
  /* function to resize img standard size */
  /* function to crop img square */
  /* function to quantize colors in pixel array */
  /* function to update zoom level */
  
  
  render() {
    const pixelArray = this.state.pixelArray
    const hasPixels = this.state.hasPixels
    const self = this
    
    const pixels = function(){
      hasPixels ? (
        pixelArray.map((pixel) => {
        return <Pixel color={pixel.color} key={i} x={pixel.x} y={pixel.y} zoom={this.state.zoom} />
      })
      ) : (
        console.log('no pixels')
      )
      
      
    }
    return (
      <div style={{backgroundColor: 'white', width: this.state.width+'px', height: this.state.height +'px'}}>
        <Stage width={this.state.width} height={this.state.height}>
            <Layer>
              { pixels }
            </Layer>
        </Stage>
      </div>
    )
  }
}
