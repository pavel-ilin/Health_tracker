import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


import Logout from '../components/Logout'
import Profile from '../components/Profile'

import BloodPressure from '../components/BloodPressure'
import Cholesterol from '../components/Cholesterol'
import MetabolicPanel from '../components/MetabolicPanel'
import VitaminePanel from '../components/VitaminePanel'
import Weight from '../components/Weight'

import HealthInsurance from '../components/HealthInsurance'
import FlueShot from '../components/FlueShot'
import BloodPressureTest from '../components/BloodPressureTest'
import { setUserData } from '../actionCreator'



class MainComp extends Component {

  componentDidMount(){
    fetch(`http://localhost:3000/users/${localStorage.userId}`)
    .then(r => r.json())
    .then(resp => {
      this.props.setUserData(resp)
    })
  }

  // {localStorage.token ?  this.props.history.push("/main")  : this.props.history.push("/welcome")}


  render(){
    return(
      <>

        <h2>Welcome dear {this.props.userProfile.name}</h2>


        <div className='profile'>

          <Logout />

          <Profile />
          <Link to='/profile'>Profile</Link>

        </div>


        <div className='my_health'>
          <BloodPressure bloodPressure={this.props.blood_pressures}/>
          <Cholesterol cholesterols={this.props.cholesterols}/>
          <MetabolicPanel metabolic_panels={this.props.metabolic_panels}/>
          <VitaminePanel vitamine_panels={this.props.vitamine_panels}/>
          <Weight weights={this.props.weights}/>
        </div>

        <div className='my_neighborhood'>
          <HealthInsurance zipcode={this.props.zipcode}/>
          <FlueShot  zipcode={this.props.zipcode}/>
          <BloodPressureTest zipcode={this.props.zipcode}/>
        </div>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: {
      userId: state.userId,
      username: state.username,
      name: state.name,
      email: state.email,
      zipcode: state.zipcode
    },
    bloodPressure: state.blood_pressures,
    cholesterols: state.cholesterols,
    metabolic_panels: state.metabolic_panels,
    vitamine_panels: state.vitamine_panels,
    weights: state.weights,
    zipcode: state.zipcode
  }
}

export default connect(mapStateToProps, {setUserData}) (MainComp)

