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
      image: [],
      hasImageData: false,
      pixels: [],
      hasPixelData: false,
    }
    this.storeData = this.storeData.bind(this)
  }
  
  /* function to capture image data from "upload" */
  /* function to convert img to pixel array */
  storeData = function(image){
    this.setState({ image: image });
    this.setState({ hasImageData: true });
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
  
  processImage = function(){
    this.quantize()
    this.pixelate()
    this.resize()
    this.crop()
    var self = this
    
    var id = "fuck"
    var can = document.createElement("canvas");
    id && can.setAttribute("id", id);
    can.width = 26; //  <--------------------------  SET TO REAL WIDTH
    can.height = 26; // <--------------------------  SET TO REAL HEIGHT
    var img = new window.Image();
    document.body.appendChild(can);
    
    img.setAttribute("src", this.state.image);
    //wait until the image below loads...
    img.addEventListener("load", function () {
      can.getContext("2d").drawImage(img, 0, 0);
      var colorCache = []
        
        // For each pixel...
        for(var y = 0; y < can.height; y++){
          for(var x = 0; x < can.width; x++){
            var pixelColor = getCanvasPixelColor(can, x, y).rgb
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
    });
  }
  
  
  
  render() {
    const pixels = this.state.pixels
    const hasImageData = this.state.hasImageData
    const fileUpload = hasImageData ? (
        <h2>File uploaded!</h2>
      ):(
        <FileUpload storeData={this.storeData}/>
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
    
    return (
    <div>
      {fileUpload}
      <h2>Total colors: {this.state.pixels.length}</h2>
      <ul>{showColors}</ul>
      
      {/* zoom: {'.1',1px},{'1',10px},{'10',100px}  */}
      <Canvas zoom="1" pixelData={this.state.pixels}/>
      
    </div>
    )
  }
}
