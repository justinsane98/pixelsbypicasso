import React from "react"
import Konva from 'konva'
import { Stage, Layer } from 'react-konva'
import Pixel from './../Pixel'

export default class Canvas extends React.Component {  
  mapPixels = function(){
    if(this.props.canvasElem){
       if(this.props.pixelData.length > 0){
        this.props.pixelData.map((pixel, index) => {
          return <Pixel color={pixel.color} key={index} x={pixel.x} y={pixel.y} zoom={this.props.zoom} />
      })
      }
    }
  }

  render() {
    return (
      <div id={this.props.id} style={{backgroundColor: 'white', width: this.props.width * this.props.zoom+'px', height: this.props.height * this.props.zoom +'px'}}>
        <Stage width={this.props.width * this.props.zoom} height={this.props.height * this.props.zoom}>
            <Layer>
              {this.mapPixels()}
            </Layer>
        </Stage>
      </div>
    )
  }
}
