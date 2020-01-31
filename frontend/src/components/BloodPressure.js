import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../assets/index.css';
import BloodPressureResult from './BloodPressureResult'
import BloodPressureDiagram from './BloodPressureDiagram'
import BloodPressureInputForm from './BloodPressureInputForm'

const listTests = function (bloodPressures) {
  return bloodPressures.map((result) => {
    return <BloodPressureResult key={result.id} result={result}/>
  })
}

const BloodPressure = () => {
  const bloodPressures = useSelector(state => state.blood_pressures);

    return(
      <>
        <div className='App'>

          <div>
            <li><Link to='/main'>Back to main page</Link></li>
            <li><h2>Blood pressure</h2></li>
          </div>

          <div className='grid2'>
              <div className='g1'>
                <BloodPressureInputForm />
              </div>
              <div className='g1'>
                <BloodPressureDiagram />
              </div>
          </div>

          <div className='results_list'>
            {listTests (bloodPressures)}
          </div>

        </div>
      </>
    )
}

export default BloodPressure