import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BloodPressure extends Component {

  render(){
    return(
      <div>
      <Link to='/main'>Back to main page</Link>
        Blood pressure

        <div>
          Form for new submition
        </div>
        <div>
          Diagram
        </div>
        <div>
          List of all tests
        </div>
      </div>
    )
  }
}