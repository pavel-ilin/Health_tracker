import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutAction } from '../actionCreator'



class Logout extends Component {

  render(){
    return(
      <div>
        <button onClick={this.props.logoutAction}>Logout</button>
      </div>
    )
  }
}


export default connect(undefined, {logoutAction}) (Logout)