import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


import Welcome from './containers/Welcome'
import Main from './containers/Main'

import Profile from './components/Profile'
import Login from './components/Login'

class App extends Component {


  // componentDidUpdate(){
  //   if (!this.props.token){
  //     localStorage.clear()
  //   }
  // }

  // {localStorage.token ? null : <Redirect from='/profile' to='/welcome' />}


  render(){
    console.log(this.props)
    console.log(localStorage.token)
    return(
      <>
        <Switch>
          <Route path="/profile"><Profile /></Route>
          <Route path="/main"><Main /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/welcome"><Welcome /></Route>
          <Route exact path='/'><Redirect to='/welcome' /></Route>
        </Switch>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    userId: state.userId
  }
}

export default connect(mapStateToProps)(App)

// {this.props.token ? null : <Redirect from='/main' to='/welcome' />}


// {localStorage.token === 'undefined' || !localStorage.token ? null : <Redirect from='main' to='/welcome' />}

// {this.props.token ?  this.props.history.push("/main")  : this.props.history.push("/welcome")}

//{!localStorage.token ? this.props.history.push("/welcome") : null}
// componentWillUnmount(){
//     localStorage.clear()
//
//     this.setState({
//         loggedInUserId: null,
//         token: null
//     })
// }

// logOutClick = () => {
//   localStorage.clear()
//
//   this.setState({
//     loggedInUserId: null,
//     token: null
//   })
// }