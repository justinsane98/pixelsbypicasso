import React from 'react'
import Link from 'gatsby-link'
import getCanvasPixelColor from 'get-canvas-pixel-color'

import Colors from '../components/Colors'
import Canvas from '../components/Canvas'
import FileUpload from '../components/FileUpload'

 export default class BetaPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageBase64: null,
      imageElem: null,
      canvasElem: null,
      canvasId: 'picasso-canvas',
      hasImageData: false,
      hasPixelData: false,
      pixels: []
    }
    this.setImageBase64 = this.setImageBase64.bind(this)
    this.processImage = this.processImage.bind(this)
    this.setCanvasElem = this.setCanvasElem.bind(this)
  }
  
  setImageBase64 = function(base64String){
    var self = this
    var img = new window.Image();
    
    this.setState({ imageBase64: base64String })
    img.setAttribute("src", this.state.imageBase64);
    
    img.onload = () => {
      debugger
      this.setState({ hasImageData: true})
      this.setState({ imageElem: img })
      self.process()
    }
   
  }
  
  process = function() {
    this.processImage()
  }
  
  quantize = function(){
    console.log("TODO: quantize image")
  }
  
  pixelate = function(){
    console.log("TODO: pixelate image")
  }
  
  resize = function(){
    console.log("TODO: resize image")
  }
  
  crop = function(){
    console.log("TODO: crop image")
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
  
  setCanvasElem = function(){
    var elem = document.getElementById(this.state.canvasId).getElementsByTagName('canvas')[0]
    this.setState(canvasElem: elem)
  }
  
  processImage = function(){
    this.quantize()
    this.pixelate()
    this.resize()
    this.crop()
    this.setCanvasElem()
    
    var colorCache = []
    // UGH this is hacky but I can't figure out how to identify the canvas instance
    debugger
    // crop to top 26px...
    this.state.canvasElem.getContext("2d").drawImage(this.state.imageElem, 0, 0, this.state.canvasWidth,  this.state.canvasHeight, 0, 0, this.state.canvasWidth, this.state.canvasHeight);
    
    // For each pixel...
    for(var y = 0; y < self.state.canvasHeight; y++){
      for(var x = 0; x < self.state.canvasWidth; x++){
        var pixelColor = getCanvasPixelColor(canvasElem, x, y).rgb
        var pixel = {rgb: pixelColor, colorArray: [[x, y]]}

        if(colorCache.length > 0){
          var pixelColorInColorCache = self.colorInArray(pixelColor, colorCache)
          var colorCacheIndex = self.colorInArray(pixelColor, colorCache)
          var addPixelColorToColorCache = self.colorToArray
          var addCoordsToColorInColorCache = self.coordsToColorInArray

          if(pixelColorInColorCache > -1){
              self.addCoordsToColorInColorCache(x, y, pixelColor, colorCache, colorCacheIndex)
          } else {
            self.addPixelColorToColorCache(pixel, colorCache)
          }
        } else {
            self.addPixelColorToColorCache(pixel, colorCache)
        }
      }
    }
    self.setState({ pixels: colorCache })
  }
  
  render() {   
    const fileUpload = this.state.hasImageData ? (
        <div>
        <h2 className='fadein3000'>File uploaded!</h2>
        <FileUpload base64Image={this.setImageBase64}/>
        </div>
      ):(
        <FileUpload base64Image={this.setImageBase64}/>
    )
       
    
    const sortedColors = this.state.pixels.sort((a, b) => b.colorArray.length - a.colorArray.length)
    const showColors = sortedColors.map((color, index) => {
      return (
        <li key={index}>
        <p>{this.state.pixels[index].rgb} has {this.state.pixels[index].colorArray.length} instances.</p>
        <h4>Locations @:</h4>
        <p style={{margin: '-15px 0 30px'}}>
          {color.colorArray.map((color, i) => {
              return (
                <span key={i}>[{color[0]}, {color[1]}] </span>
              )
            })
          }
        </p>
      </li>
      )
    })
    
    const showLegend = this.state.pixels.length < 1 ? (
      <ul>{showColors}</ul>
    ) : (
      <div>
      <h2>{this.state.pixels.length} colors:</h2>
      <ul>{showColors}</ul>
      </div>
    )
    
    return (
    <div className='flex-container'>
      <div id="canvas-target" className='flex-box canvas-box'>
         {fileUpload}
         <Canvas id = 'picasso-canvas'
            height = '26'
            width = '26'
            zoom = '10'
            pixelData = {this.state.pixels}
            canvasElem = {this.props.canvasElem}/>
      </div>
      <div className='flex-box directions-box'>
        {showLegend}
      </div>
    </div>
    )
  }
}
