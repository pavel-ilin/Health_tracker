import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutAction } from '../actionCreator'
import { Link } from 'react-router-dom'



class Logout extends Component {

  render(){
    return(
      <div>
        <button onClick={this.props.logoutAction}><Link to='/welcome'>Logout</Link></button>
      </div>
    )
  }
}


export default connect(undefined, {logoutAction}) (Logout)