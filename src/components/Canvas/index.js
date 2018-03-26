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
      pixelArray: [{x:0, y: 0, color:'green'}, {x:0, y: 10, color:'red'}],
      imgData: ''
    }
  }
  
  /* function to resize img standard size */
  /* function to crop img square */
  /* function to quantize colors in pixel array */
  /* function to update zoom level */
  
  render() {
    var self = this
    return (
      <div style={{backgroundColor: 'white', width: self.state.width+'px', height: self.state.height +'px'}}>
        <Stage width={self.state.width} height={self.state.height}>
            <Layer>
              {self.state.pixelArray.map(function(object, i){
                return <Pixel color={object.color} key={i} x={object.x} y={object.y} zoom={self.state.zoom} />
              })}
            </Layer>
        </Stage>
      </div>
    )
  }
}
