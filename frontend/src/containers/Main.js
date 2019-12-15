import React, { Component } from 'react'
import Logout from '../components/Logout'
import Profile from '../components/Profile'
import BloodPressure from '../components/BloodPressure'
import Cholesterol from '../components/Cholesterol'
import LipidPanel from '../components/LipidPanel'
import Weight from '../components/Weight'
import HealthInsurance from '../components/HealthInsurance'
import FlueShot from '../components/FlueShot'
import BloodPressureTest from '../components/BloodPressureTest'

export default class App extends Component {


  render(){

    return(
      <div>
        <h2>You are logged in!</h2>

        <div className='profile'>
        <Logout />
        <Profile />
        </div>

        <div className='my_health'>
          <BloodPressure />
          <Cholesterol />
          <LipidPanel />
          <Weight />
        </div>

        <div className='my_neighborhood'>
          <HealthInsurance />
          <FlueShot  />
          <BloodPressureTest />
        </div>
      </div>
    )
  }
}