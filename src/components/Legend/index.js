import React from "react"
import LegendItem from '../LegendItem'

export default class Legend extends React.Component {
  render (){
    const colors = this.props.colorArray.map((color, i) =>
      <li key={i}>
        <LegendItem rgb={color.rgb} id={color.id} paint={color.paint} name={color.name}  locations={color.locations} />
      </li>
      )
   return (
    <div>
     <ul className='legend naked'>{colors}</ul>
    </div>
  )
  }
}