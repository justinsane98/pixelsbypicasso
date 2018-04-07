import React from 'react'
import FileUpload from '../components/FileUpload'

import Legend from '../components/Legend'
import SlimCanvas from '../components/SlimCanvas'

 export default class FishPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "FISH!",
      base64String: null,
      canvasData: [],
      colorArray: [],
    }
    this.setImageBase64 = this.setImageBase64.bind(this)
    this.setCanvasData = this.setCanvasData.bind(this)
  }
  
  setCanvasData = function(canvasData){
    this.setState({ canvasData: canvasData })
  }
    
  setImageBase64 = function(base64String){
    this.setState({ base64String: base64String })
    this.setState({
          colorArray: [
            {id: 'id:Int',
             name: 'name:String',
             rgb: 'rgb:Array',
             paint: 'paint:String',
             instances: 'instances:Array'}
          ]
        })
    
  }

  render() {
    return(
      <div className='flex-container'>
      <div className='flex-box canvas-box'>
        <h1>{this.state.title}</h1>
        <FileUpload base64Image={this.setImageBase64}/>
        <SlimCanvas id='picasso' width='26' height='26' zoom='10' image={this.state.base64String} canvasData={this.setCanvasData}/>
      </div>
      <div className='flex-box directions-box'>
        <Legend colorArray={this.state.colorArray}/>
      </div>
    </div>
    )
  }
 }