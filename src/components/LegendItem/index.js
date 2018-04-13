import React from "react"

import Location from "../Location"

export default class LegendItem extends React.Component {
  render() {
    const coords = this.props.locations.map((coord) =>
      <Location x={coord[0]} y={coord[1]} key={coord.toString()}/>
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
