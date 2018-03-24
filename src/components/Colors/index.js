import React from "react"
import color_json from './colors_data.json'

class colors extends React.Component {
  constructor() {
    super()
    this.state = { 
      items: color_json.data,
      swatchHeight: '70px',
      swatchWidth: '70px'
    }
  }
  
  

  render() {
    return (
      <div>
        <h1>Colors <small>({this.state.items.length})</small></h1>
        <ul style={{padding: 0, margin: 0, listStyle: 'none'}}>
          {color_json.data.map((color) => {
            const rgbStr = 'rgb(' + color.rgb[0] + ',' + color.rgb[1] + ',' + color.rgb[2] + ')';
            const li = <li key={color.name + color.id} style={{backgroundColor: 'white', margin: '5px', height: (this.state.swatchWidth + 10), padding: '5px', position: 'relative'}}>
                          <div style={{backgroundColor: rgbStr, width: this.state.swatchWidth, height: this.state.swatchHeight, position: 'absolute', top: '10px', right: '10px', textAlign: 'right'}}>
                            <div style={{position: 'absolute', bottom: '5px', right: '5px', fontSize: '10px'}}>{color.id}</div>
                          </div>
                          <p>Name: {color.name}</p>
                          <p>RGB: {rgbStr}</p>
                          <p>Paint: {color.paint}</p>
                        </li>
            return li
            } 
          )}
        </ul>
      </div>
    )
  }
}

export default colors