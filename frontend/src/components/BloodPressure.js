import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { bloodPressureTestSubmit } from '../actionCreator'
import BloodPressureResult from './BloodPressureResult'
import { renderDiagram }  from './renderDiagram'

class BloodPressure extends Component {

  state = {
        systolic: '',
        diastolic: '',
        puls: '',
        stress_level: '',
        userId: null,
        errors: [],
    }


  onChange = event => {
    if (!this.state.userId){
      this.setState({
        userId: this.props.userId
      })
    }
   this.setState({
     [event.target.name]: event.target.value,
   })
  }

  submitClick = event => {
    event.preventDefault()
    this.props.bloodPressureTestSubmit(this.state)
    this.setState({
      systolic: '',
      diastolic: '',
      puls: '',
      stress_level: '',
      errors: []
    })
  }

  listTests () {
    return this.props.bloodPressures.map((result) => {
      return <BloodPressureResult result={result}/>
    })
  }


  render(){
    console.log(this.props.bloodPressures)

    return(
      <div>
      <Link to='/main'>Back to main page</Link>
        Blood pressure

        <div>
        <form>
           <p>{this.props.errors ? this.props.errors : null}</p>
           <label>Systolic: </label>
           <input onChange={this.onChange} autoComplete="systolic" name="systolic" type="number"/>
           <br />
           <label>Diastolic: </label>
           <input onChange={this.onChange} autoComplete="diastolic" name="diastolic" type="number"/>
           <br />
           <label>Puls: </label>
           <input onChange={this.onChange} autoComplete="puls" name="puls" type="number"/>
           <br />
           <label>Stress level: </label>
           <input onChange={this.onChange} autoComplete="stress_level" name="stress_level" type="number"/>
           <br />
           <button onClick={this.submitClick}>Submit</button>
         </form>

        </div>
        <div>
          Diagram
          {renderDiagram(this.props.bloodPressures)}
        </div>
        <div>
          {this.listTests()}
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    userId: state.userId,
    bloodPressures: state.blood_pressures
  }
}

export default withRouter(connect(mapStateToProps, { bloodPressureTestSubmit }) (BloodPressure))