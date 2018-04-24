import React from "react"
export default class Location extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      check: false
    }
  }
  
  toggleOnOff = function(){
    this.setState(prevState => ({
      check: !prevState.check
    }));
  }
  
  toggleClassName = function(){
    if(this.state.check){
      return 'pixel-complete'
    } else {
      return ''
    }
  }
  
  render() {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const self = this
    return (
      <a key={this.props.x+this.props.y} 
        href=''
        className={self.toggleClassName()}
        style={{
          flex: '0 1 10%',
          display: 'inline-block',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '11px',
          textAlign: 'center',
          border: '1px solid rgba(0,0,0,0.05)',
          margin: '0 5px 5px 0',
          lineHeight: '26px'}}
        onClick={function(e){
          e.preventDefault()
          self.toggleOnOff()
        }}
        onMouseOver={function(e){
          e.target.style.backgroundColor = 'rgba(0,0,0,0.05)'
        }}
        onMouseOut={function(e){
          e.target.style.backgroundColor = ''
        }}
      >
      {alpha.charAt(this.props.y)}{this.props.x+1}
      </a>
    )
  }
}
