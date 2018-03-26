import React from "react"
import color_json from './colors_data.json'

export default class Colors extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      items: color_json.data,
      swatchHeight: '70px',
      swatchWidth: '70px',
      rowHeight: '90px'
    }
  }
  
  
  render() {
    return (
      <div>
        <h1>Colors <small>({this.state.items.length})</small></h1>
        <ul style={{padding: 0, margin: 0, listStyle: 'none'}}>
          {color_json.data.map((color) => {
            const rgbStr = 'rgb(' + color.rgb[0] + ',' + color.rgb[1] + ',' + color.rgb[2] + ')';
            const li = <li key={color.name + color.id} style={{backgroundColor: 'white', margin: '5px', height: this.state.rowHeight, display: 'block', padding: '5px', position: 'relative'}}>
                          <div style={{backgroundColor: rgbStr, width: this.state.swatchWidth, height: this.state.swatchHeight, position: 'absolute', top: '10px', right: '10px', textAlign: 'right'}}>
                            <div style={{position: 'absolute', bottom: '5px', right: '5px', fontSize: '10px'}}>{color.id}</div>
                          </div>
                          <p><strong>{color.name}</strong></p>
                          <small>{color.paint}</small><br/>
                          <small>{rgbStr}</small>
                        </li>
            return li
            } 
          )}
        </ul>
      </div>
    )
  }
}