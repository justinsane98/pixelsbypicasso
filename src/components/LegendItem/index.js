import React from "react"

export default class LegendItem extends React.Component {
  render() {
    const color = this.props.color
    return (
      <li key={color.id}>
        <h4>color.{color.id}</h4>
        <p>color.{color.name}</p>
        <p>color.{color.rgb}</p>
        <p>color.{color.paint}</p>
        <p>color.{color.instances}</p>
      </li>
    )
  }
}
