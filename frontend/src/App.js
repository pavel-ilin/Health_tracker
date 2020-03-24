import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import Welcome from './containers/Welcome'
import Main from './containers/Main'
import Header from './containers/Header'
import MainMenu from './components/MainMenu'

import BloodPressure from './components/BloodPressure'
import Cholesterol from './components/Cholesterol'
import MetabolicPanel from './components/MetabolicPanel'
import VitaminePanel from './components/VitaminePanel'

import FlueShot from './components/FlueShot'
import BloodPressureTest from './components/BloodPressureTest'

import Profile from './components/Profile'
import Login from './components/Login'

import { setUserData } from './actionCreator'

class App extends Component {


  userData () {
    if (!this.props.userDataLoadingComplete) {
      this.props.setUserData()
    }
  }




  render(){
    return(
      <div className='App'>

          {!localStorage.token ?  <Redirect to='/welcome' /> :

              <>
                {this.selectNode ()}
                {this.userData()}
                <Header />
                <MainMenu />
              </>
            }

            <>
              <Switch>
                <Route path="/main"><Main /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/welcome"><Welcome /></Route>
                <Route exact path='/'><Redirect to='/welcome' /></Route>

                <Route path="/profile"><Profile /></Route>

                <Route path="/bloood-pressure"><BloodPressure /></Route>
                <Route path="/cholesterol"><Cholesterol /></Route>
                <Route path="/metabolic-panel"><MetabolicPanel /></Route>
                <Route path="/vitamine-panel"><VitaminePanel /></Route>

                <Route path="/flue-shot"><FlueShot /></Route>
                <Route path="/blood-presure-test"><BloodPressureTest /></Route>
              </Switch>
            </>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    userId: state.userId,
    userDataLoadingComplete: state.userDataLoadingComplete
  }
}


export default withRouter(connect(mapStateToProps, {setUserData}) (App))