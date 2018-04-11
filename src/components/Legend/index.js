import React from "react"
import LegendItem from '../LegendItem'

export default class Legend extends React.Component {
  render (){
    const colors = this.props.colorArray.map((color, i) =>
      <li key={i}>
        <LegendItem rgb={color.rgb} id={color.id} paint={color.paint} locations={color.locations} />
      </li>
      )
   return (
    <div>
     {this.props.colorArray.length ? <h1>Colors ({this.props.colorArray.length})</h1> : ""}
     <ul className='legend naked'>{colors}</ul>
    </div>
  )
  }
}