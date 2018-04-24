import React from "react"
import RgbQuant from 'rgbquant'
import getCanvasPixelColor from 'get-canvas-pixel-color'

import QuantizedPalette from '../Data/quantizedPalette'

export default class SlimCanvas extends React.Component { 
  constructor(props){
    super(props)
  }
  
  componentDidUpdate() {
    if(this.props.readyToDraw) {
      this.clearCanvas()
      //this.drawImageToCanvas()
      this.drawQuantizedImageToCanvas()
      if(this.props.readyToRead){
        this.getCanvasData()
      }
    } else {
      this.loadImage()
    }
  }
  
  loadImage() {
      const self = this
      const img = new Image()
      img.src = this.props.imageString
      img.onload = function() {
        self.props.setCanvasData(img)
        self.props.setReadyToRead(true)
      };
  }
  
  drawImageToCanvas() {
    this.refs.slimCanvas.getContext('2d').drawImage(this.props.imageElem, 0, 0, this.props.width, this.props.height, 0, 0, this.props.width, this.props.height)
  }
  
  drawQuantizedImageToCanvas() {
    const quantizedImageElem = new Image()
    quantizedImageElem.src = this.props.imageString

    var q = new RgbQuant({method: 2, colors: 94, palette: QuantizedPalette(), reIndex: true, useCache: false })
    
    q.sample(quantizedImageElem)
    var pal = q.palette()
    var reducedData = q.reduce(quantizedImageElem)
    var imgd = this.refs.slimCanvas.getContext('2d').createImageData(this.props.height,this.props.height);
    imgd.data.set(reducedData);
    
    this.refs.slimCanvas.getContext('2d').putImageData(imgd, 0, 0)
  }
  
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}
  
  clearCanvas() {
    this.refs.slimCanvas.getContext('2d').clearRect(0, 0, this.props.width, this.props.height, 0, 0, this.props.width, this.props.height);
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
        var pixelColor = getCanvasPixelColor(this.refs.slimCanvas, x, y).rgb
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
      <canvas ref='slimCanvas' id={this.props.id} width={this.props.width} height={this.props.height}></canvas>
    )
  }
}
