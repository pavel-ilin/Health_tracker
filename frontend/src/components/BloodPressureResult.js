import React from 'react'
import '../assets/index.css';


const BloodPressureResult = (props) => {
  return(
        <div>
          <ul className='results_inline'>
            <li className='g1'>Systolic: {props.result.systolic}</li>
            <li className='g1'>Diastolic: {props.result.diastolic}</li>
            <li className='g1'>Pulse: {props.result.puls}</li>
            <li className='g1'>Stress Level: {props.result.stress_level}</li>
          </ul>
        </div>
    )
}

export default BloodPressureResult