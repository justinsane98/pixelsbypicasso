import React from "react"
import getCanvasPixelColor from 'get-canvas-pixel-color'

export default class SlimCanvas extends React.Component { 
  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    
  }
  
  componentDidUpdate() {
    this.updateCanvas()
  }
  
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d')
    const img = new Image()
    const self = this
    
    img.src = this.props.image
    
    img.onload = function() {
      ctx.drawImage(img, 0, 0, self.props.width, self.props.height, 0, 0, self.props.width, self.props.height)
      
      
      // push image data up to parent so ...
      // 1. sibling buttons can trigger a new image instance
      // 2. so I can send mutated data back this this component AND others...
      
      
      //this.props.imageObject(img)
    };
  }
  
  clearCanvas() {
    this.refs.canvas.getContext('2d').clearRect(0, 0, this.props.width, this.props.height, 0, 0, this.props.width, this.props.height);
  }
  
  colorInArray = function(color, colorArray){
    var position = -1
    for(var i = 0, len = colorArray.length; i < len; i++){
        if (color === colorArray[i].rgb) {
          position = i
          return position
        }
    }
    return position
  }
  
  addCoordsToColorInColorCache = function(x, y, pixelColor, colorCache, colorCacheIndex){
    colorCache[colorCacheIndex].colorArray.push([x, y])
  }
  
  addPixelColorToColorCache = function(pixel, colorCache){
    colorCache.push(pixel)
  }
  
  getCanvasData() {
    var colorCache = []
    var self = this
    for(var y = 0; y < this.props.height; y++){
      for(var x = 0; x < this.props.width; x++){
        var pixelColor = getCanvasPixelColor(this.refs.canvas, x, y).rgb
        var pixel = {rgb: pixelColor, colorArray: [[x, y]]}
        if(colorCache.length > 0){
          var pixelColorInColorCache = this.colorInArray(pixelColor, colorCache)
          var colorCacheIndex = this.colorInArray(pixelColor, colorCache)
          var addPixelColorToColorCache = this.colorToArray
          var addCoordsToColorInColorCache = this.coordsToColorInArray

          if(pixelColorInColorCache > -1){
              this.addCoordsToColorInColorCache(x, y, pixelColor, colorCache, colorCacheIndex)
            } else {
              this.addPixelColorToColorCache(pixel, colorCache)
            }
          } else {
              this.addPixelColorToColorCache(pixel, colorCache)
        }
      }
    }
    this.setState({ pixels: colorCache })
  }
  
  render() {
    return (
      <canvas ref='canvas' id={this.props.id} width={this.props.width * this.props.zoom} height={this.props.height * this.props.zoom}></canvas>
    )
  }
}
