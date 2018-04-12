import React from 'react'
import groupArray from 'group-array'
import Link from 'gatsby-link'

import FileUpload from '../components/FileUpload'
import Legend from '../components/Legend'
import SlimCanvas from '../components/SlimCanvas'
import MasterColorList from '../components/Data/masterColorList'
import RgbConversionList from '../components/Data/rgbConversionList'


 export default class BetaPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      base64String: null,
      canvasData: [],
      colorArray: [],
      readyToDraw: false,
      readyToRead: false,
      legend: []
    }
    this.setImageBase64 = this.setImageBase64.bind(this)
    this.setCanvasData = this.setCanvasData.bind(this)
    this.setColorArray = this.setColorArray.bind(this)
    this.setReadyToDraw = this.setReadyToDraw.bind(this)
    this.setReadyToRead = this.setReadyToRead.bind(this)
  }
  
   
  setImageBase64 = function(base64String){
    this.setState({ base64String: base64String })
  }

  setCanvasData = function(canvasData){
    this.setState({ canvasData: canvasData })
    this.setState({ readyToDraw: true })  
  }
  
  setReadyToDraw = function(readyToDraw){
    this.setState({ readyToDraw: readyToDraw })
  }

  setReadyToRead = function(readyToRead){
    this.setState({ readyToRead: readyToRead })
  }
  
  setColorArray = function(colorArray){
    if(this.state.colorArray !== colorArray) {
    
      // janky require to hookup conversion list...
      const conversionList = RgbConversionList()
      const masterList = MasterColorList()
      const nearestColor = require('nearest-color').from(conversionList);
      
      let colorsForLegend = []

      colorArray.map(function(color, i){
        
         var nearest = nearestColor(color.rgb)
         var nearestId = nearest.name.substr(5)
         var nearestName = masterList[nearestId].name
         var nearestPaint = masterList[nearestId].paint
         var nearestRgb = nearest.value
         var distanceFromOriginal = Math.floor(nearest.distance)
         
         var c = {
           id: nearestId, 
           rgb: color.rgb, 
           nearestName: nearestName,
           nearestPaint: nearestPaint,
           nearestRgb: nearestRgb,
           distanceFromOriginal: distanceFromOriginal,
           locations: color.colorArray
         }
         colorsForLegend.push(c)
       })

       const groupedByRgb = groupArray(colorsForLegend, 'id')
       var sortedByInstances = []
       for(var color in groupedByRgb) {
          sortedByInstances.push([color, groupedByRgb[color]])
       }
      
       sortedByInstances.sort(function(a, b) {
          return b[1].length - a[1].length
       });
       
       var readyForLegend = []
       sortedByInstances.map(function(color, i){
          var colorId = color[0]
          var colorAncestors = color[1]
          
          var ancestorLocations = []
          var ancestorName = colorAncestors[0].nearestName
          var ancestorRgb = colorAncestors[0].rgb
          
          colorAncestors.map(function(ancestor, k){
             ancestorLocations.push.apply(ancestorLocations, ancestor.locations)
          })
          
          ancestorLocations.sort(function(a, b) {
            return a[0] - b[0] || a[1] - b[1]
          })

          readyForLegend.push({rgb: ancestorRgb, id: colorId, paint: ancestorName, locations: ancestorLocations})
       })
       
       // TODO sort ancestor Locations
       this.setLegend(readyForLegend)
       
       // TODO set color to something the canvas can use
       // TODO write large pixels canvas
       this.setState({ colorArray: colorArray })
    }
  }
  
  setLegend = function(colorsForLegend){
      this.setState({ legend: colorsForLegend })
  }
  
  nearestColorName = function(){
    const matchName = nearestColor(self.props.color.rgb).name
    const colorName = masterColorList[matchName.substr(5)].name
    return colorName
  }

  nearestColorRgb = function(){
    return nearestColor(self.props.color.rgb).value
  }

  nearestColorPaint = function(){
    const matchName = nearestColor(self.props.color.rgb).name
    const paint = masterColorList[matchName.substr(5)].paint
    return paint
  }

  nearestColorDistance = function(){
    return Math.floor(nearestColor(self.props.color.rgb).distance)
  }
  
  render() {
    return(
      <div className='flex-container'>
      <div className='flex-box canvas-box'>
        <h2>Pardon the dust?</h2>
        <p>Thanks for helping us test our new product. If you have any questions or feedback please <Link to="/about/">let us know</Link>.</p>
        <FileUpload base64Image={this.setImageBase64} readyToDraw={this.setReadyToDraw} />
        <SlimCanvas id='picasso' width='26' height='26' zoom='10' imageString={this.state.base64String} imageElem={this.state.canvasData} setCanvasData={this.setCanvasData} setColorArray={this.setColorArray} readyToDraw={this.state.readyToDraw} readyToRead={this.state.readyToRead} setReadyToRead={this.setReadyToRead}/>
      </div>
      <div className='flex-box directions-box'>
        <Legend colorArray={this.state.legend}/>
      </div>
    </div>
    )
  }
 }