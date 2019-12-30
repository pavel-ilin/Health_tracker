import React, { Component } from 'react'
import '../index.css';


class BloodPressureResult extends Component {

  render(){
    return(
      <div>
        <ul className='results_inline'>
          <li>Systolic: {this.props.result.systolic}</li>
          <li>Diastolic: {this.props.result.diastolic}</li>
          <li>Pulse: {this.props.result.puls}</li>
          <li>StressLevel: {this.props.result.stress_level}</li>
        </ul>
      </div>
    )
  }
}

export default BloodPressureResult
