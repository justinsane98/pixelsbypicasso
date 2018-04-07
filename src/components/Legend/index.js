import React from "react"
import LegendItem from '../LegendItem'

export default class Legend extends React.Component {  
  render (){
    const colors = this.props.colorArray.map((color) =>
        <LegendItem key={color.toString()} color={color} />
      );
    
     return (
      <div>
        <h1>this.props.colorArray:</h1>  
        <ul>{colors}</ul>
      </div>
    )
  }
}
