import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import Welcome from './containers/Welcome'
import Main from './containers/Main'
import Profile from './components/Profile'
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/target"><Main /></Route>
        <Route exact path='/'><Redirect to='/target' /></Route>
      </Switch>
    </div>
  );
}





export default App

