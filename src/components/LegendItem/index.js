import React from "react"

import Location from "../Location"

export default class LegendItem extends React.Component {
  render() {
    const coords = this.props.locations.map((coord) =>
      <Location x={coord[0]} y={coord[1]} key={coord.toString()}/>
    )

    return (
      <div key={this.props.rgb} style={{position: 'relative'}}>
        <div className='swatch' style={{backgroundColor: this.props.rgb}}></div>
        <div style={{margin: '5px 0 0 5px'}}> 
          <h3>{this.props.name} (#{this.props.id})</h3>
          <p style={{margin: '-15px 0 15px', fontSize: '14px'}}>{this.props.paint}<br/>
          {this.props.rgb}<br/>
          Locations({this.props.locations.length}):</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>{coords}</div>
      </div>
    )
  }
}
