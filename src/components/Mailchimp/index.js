import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class Mailchimp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailAddress: '',
      subscribed: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e) {
    this.setState({emailAddress: e.target.value})
  }
 
  handleSubmit = (e) => {
    var self = this
    e.preventDefault()
    addToMailchimp(this.state.emailAddress)
    .then(function(data){
      if(data.result != 'error'){
        self.setState({subscribed: 1})
      }
    })
    .catch(function(){
    })
    
  }
 
  render () {
    return (
      <div>
        {this.state.subscribed == 0 ? (
          <form onSubmit={this.handleSubmit} style={{display: 'block', marginTop: '-10px'}}>
            <input placeholder='example@gmail.com' type='email' value={this.state.emailAddress} onChange={this.handleChange} style={{padding: '7px 10px', minWidth: '260px', borderRadius: "5px", border: '1px solid rgba(0, 0, 0, 0.1)', margin:'10px 5px 0 0'}}/>
            <button style={{color: '#fff', backgroundColor: 'rgb(90, 181, 164)', border: '1px solid rgba(255, 255, 255, 0.9)', padding: '7px 12px', borderRadius: '5px', marginTop: '10px', fontWeight: 200}}>Get Notified</button>
          </form>
          ) : (
            <div>
              <h4>OMG thank you!</h4>
              <p>We'll let you know as soon we're ready for beta.</p>
            </div>
          )
        }
      </div>
    )
  }
}