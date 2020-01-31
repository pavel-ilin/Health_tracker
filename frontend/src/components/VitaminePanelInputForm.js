import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../assets/index.css';
import { vitaminePanelTestSubmit } from '../actionCreator'


class VitaminePanelInputForm extends Component {

  state = {
        systolic: '',
        diastolic: '',
        puls: '',
        stress_level: '',
        userId: null,
        errors: []
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
    this.props.vitaminePanelTestSubmit(this.state)
    this.setState({
      systolic: '',
      diastolic: '',
      puls: '',
      stress_level: '',
      errors: []
    })
  }

  render(){
    return(

      <div className='g1'>
      <form className='input_form'>
         <p>{this.props.errors ? this.props.errors : null}</p>
         <label>Systolic: </label>
         <input onChange={this.onChange} autoComplete="systolic" name="systolic" type="number" value={this.state.systolic}/>
         <br />
         <label>Diastolic: </label>
         <input onChange={this.onChange} autoComplete="diastolic" name="diastolic" type="number" value={this.state.diastolic}/>
         <br />
         <label>Pulse: </label>
         <input onChange={this.onChange} autoComplete="puls" name="puls" type="number" value={this.state.puls}/>
         <br />
         <label>Stress level: </label>
         <input onChange={this.onChange} autoComplete="stress_level" name="stress_level" type="number" value={this.state.stress_level}/>
         <br />
         <button onClick={this.submitClick}>Submit</button>
       </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
  }
}

export default withRouter(connect(mapStateToProps, { vitaminePanelTestSubmit }) (VitaminePanelInputForm))