import React from "react"
import Konva from 'konva'
import {Rect} from 'react-konva'

import Canvas from './../Canvas'

export default class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      x: this.props.x,
      y: this.props.y,
      color: this.props.color,
      zoom: this.props.zoom
    }
  }
  
  
  render() {
    debugger
    return (
     <Rect
        x={this.state.x * this.state.zoom}
        y={this.state.y * this.state.zoom}
        width={100 * this.state.zoom}
        height={100 * this.state.zoom}
        fill={this.state.color}
      />
    )
  }
}
