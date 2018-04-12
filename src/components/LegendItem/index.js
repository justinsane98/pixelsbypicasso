import React from "react"
export default class LegendItem extends React.Component {
  
  render() {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const coords = this.props.locations.map((coord) =>
       <a key={coord} href='' onClick={function(e){e.preventDefault()}} style={{display:'inline-block', width: '10%', textDecoration: 'none', textAlign: 'center', backgroundColor: 'rgba(255,255,255,1)', margin: '0 5px 5px 0'}}><span key={coord}>{alpha.charAt(coord[0])}{coord[1]}</span></a>
    )

    return (
      <div key={this.props.rgb} style={{marginBottom: '50px', position: 'relative'}}>
        <div className='swatch' style={{backgroundColor: this.props.rgb}}></div>
        <h3>{this.props.paint} (#{this.props.id})</h3>
        <p style={{margin: '-10px 0 10px 0'}}><strong>{this.props.rgb}</strong></p>
        <p><strong>Locations ({this.props.locations.length}):</strong><br/></p>
        <p>{coords}</p>
      </div>
    )
  }
}
