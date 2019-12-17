import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import Logout from '../components/Logout'

class Header extends Component {

  render(){
    return(
      <div className='header'>
        <Logout />
        <Link to='/profile'>Profile</Link>
      </div>
    )
  }
}

export default Header
