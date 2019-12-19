import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


import Welcome from './containers/Welcome'
import Main from './containers/Main'
import Header from './containers/Header'

import BloodPressure from './components/BloodPressure'
import Cholesterol from './components/Cholesterol'
import MetabolicPanel from './components/MetabolicPanel'
import VitaminePanel from './components/VitaminePanel'
import Weight from './components/Weight'

import HealthInsurance from './components/HealthInsurance'
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
    this.userData ()
    return(

      <div className='App'>

          {localStorage.token ?  null : <Redirect push to='/welcome' /> }
          {!localStorage.token ?  null : <Header /> }
          {!this.props.userDataLoadingComplete ? <h1>loading...</h1>  :

            <div>
            {!localStorage.token ?  null :<h2>Welcome dear {this.props.userProfile.name}</h2> }

            <Switch>
              <Route path="/main"><Main /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/welcome"><Welcome /></Route>
              <Route exact path='/'><Redirect to='/welcome' /></Route>

              <Route path="/profile"><Profile userProfile={this.props.userProfile}/></Route>

              <Route path="/bloood-pressure"><BloodPressure /></Route>
              <Route path="/cholesterol"><Cholesterol cholesterols={this.props.cholesterols}/></Route>
              <Route path="/metabolic-panel"><MetabolicPanel metabolic_panels={this.props.metabolicPanels}/></Route>
              <Route path="/vitamine-panel"><VitaminePanel vitamine_panels={this.props.vitaminePanels}/></Route>
              <Route path="/weight"><Weight weights={this.props.weights}/></Route>

              <Route path="/insurance"><HealthInsurance zipcode={this.props.zipcode}/></Route>
              <Route path="/flue-shot"><FlueShot zipcode={this.props.zipcode}/></Route>
              <Route path="/blood-presure-test"><BloodPressureTest zipcode={this.props.zipcode}/></Route>
            </Switch>
            </div>
          }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    userId: state.userId,
    userDataLoadingComplete: state.userDataLoadingComplete,
    userProfile: {
      userId: state.userId,
      username: state.username,
      name: state.name,
      email: state.email,
      zipcode: state.zipcode
    }
  }
}


export default withRouter(connect(mapStateToProps, {setUserData}) (App))