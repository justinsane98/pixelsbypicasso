import React from "react"
import getCanvasPixelColor from 'get-canvas-pixel-color'

export default class SlimCanvas extends React.Component { 
  constructor(props){
    super(props)
  }
  
  componentDidUpdate() {

    if(this.props.readyToDraw) {
      this.clearCanvas()
      this.drawImageToCanvas()
      if(this.props.readyToRead){
        this.getCanvasData()
        this.props.setReadyToRead(false)
      }
    } else {
      this.loadCanvas()
    }
  }
  
  loadCanvas() {
      const img = new Image()
      const self = this

      img.src = this.props.imageString
      img.onload = function() {
        self.props.setCanvasData(img)
        self.props.setReadyToRead(true)
      };
  }
  
  drawImageToCanvas() {
    this.refs.canvas.getContext('2d').drawImage(this.props.imageElem, 0, 0, this.props.width, this.props.height, 0, 0, this.props.width, this.props.height)
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
  
  getCanvasData = function() {
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
    if(colorCache.length > 0){
      self.props.setColorArray(colorCache)
    }
  }
  
  render() {
    return (
      <canvas ref='canvas' id={this.props.id} width={this.props.width * this.props.zoom} height={this.props.height * this.props.zoom}></canvas>
    )
  }
}
