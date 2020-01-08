import React, { Component } from 'react'
import '../assets/index.css';


class BloodPressureResult extends Component {

  render(){
    return(
      <div>
        <ul className='results_inline'>
          <li className='g1'>Systolic: {this.props.result.systolic}</li>
          <li className='g1'>Diastolic: {this.props.result.diastolic}</li>
          <li className='g1'>Pulse: {this.props.result.puls}</li>
          <li className='g1'>StressLevel: {this.props.result.stress_level}</li>
        </ul>
      </div>
    )
  }
}

export default BloodPressureResult
