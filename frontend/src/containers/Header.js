import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../index.css';

import { setUserData } from '../actionCreator'
import Logout from '../components/Logout'

class Header extends Component {

  userData () {
    if (!this.props.userDataLoadingComplete) {
      this.props.setUserData()
    }
  }

  render(){
    this.userData ()
    return(
      <div className='header'>
        <button><Link to='/profile'>Profile</Link></button>
        <Logout />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDataLoadingComplete: state.userDataLoadingComplete
    }
}

export default withRouter(connect(mapStateToProps, {setUserData}) (Header))