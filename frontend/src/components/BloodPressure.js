import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../assets/index.css';

import { bloodPressureTestSubmit } from '../actionCreator'
import BloodPressureResult from './BloodPressureResult'
import BloodPressureDiagram from './BloodPressureDiagram'
import BloodPressureInputForm from './BloodPressureInputForm'

class BloodPressure extends Component {

  listTests () {
    return this.props.bloodPressures.map((result) => {
      return <BloodPressureResult key={result.id} result={result}/>
    })
  }


  render(){
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
            {this.listTests ()}
          </div>

        </div>

      </>

    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
    bloodPressures: state.blood_pressures,
  }
}

export default withRouter(connect(mapStateToProps, { bloodPressureTestSubmit }) (BloodPressure))