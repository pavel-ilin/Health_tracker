import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
        <Logout />
        <Link to='/profile'>Profile</Link>
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