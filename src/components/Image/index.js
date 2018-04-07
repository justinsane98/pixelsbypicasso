import React from "react"

export default class Image extends React.Component {  

  render() {
    return (
      <div>
        {this.props.data &&
          <img src={this.props.data} alt='User Uploaded Image'/>
        }
      </div>
    )
  }
}