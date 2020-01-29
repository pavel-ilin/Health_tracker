import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutAction } from '../actionCreator'
import { Link } from 'react-router-dom'



class Logout extends Component {

  render(){
    return(
      <div className='App'>
        <button className='btn btn-danger' onClick={this.props.logoutAction}><Link style={{color: 'white'}} to='/welcome'>Logout</Link></button>
      </div>
    )
  }
}


export default connect(undefined, {logoutAction}) (Logout)