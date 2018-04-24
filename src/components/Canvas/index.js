import React from "react"

export default class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas()
  }
  
  componentDidUpdate() {
    this.updateCanvas()
  }
  
  updateCanvas() {
    const self = this
    const ctx = self.refs.canvas.getContext('2d')
    if(this.props.pixelData.length > 0){
      this.props.pixelData.forEach(function(color) {
        ctx.fillStyle = color.rgb
        color.locations.forEach(function(coord) {    
          var x = (coord[0] * self.props.zoom)
          var y = (coord[1] * self.props.zoom)
          ctx.fillRect(x, y, self.props.zoom-1, self.props.zoom-1);
      })
     })
    }
  }
  
  render() {
    return (
      <div id={this.props.id} style={{backgroundColor: 'white', width: this.props.width * this.props.zoom+'px', height: this.props.height * this.props.zoom +'px'}}>
        <canvas ref='canvas' width={this.props.width * this.props.zoom} height={this.props.height * this.props.zoom}></canvas>
      </div>
    )
  }
}
