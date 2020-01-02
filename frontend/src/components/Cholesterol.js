import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../index.css';

import CholesterolResult from './CholesterolResult'
import { cholesterolTestSubmit } from '../actionCreator'
import CholesterolDiagram from './CholesterolDiagram'

class Cholesterol extends Component {


  state = {
        ldl: '',
        hdl: '',
        triglycerides: '',
        total_cholesterol: '',
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
    this.props.cholesterolTestSubmit(this.state)
    this.setState({
      ldl: '',
      hdl: '',
      triglycerides: '',
      total_cholesterol: '',
      errors: []
    })
  }


  listTests () {
    return this.props.cholesterols.map((result) => {
      return <CholesterolResult key={result.id} result={result}/>
    })
  }



  render(){
    return(
      <div>

      <ul className='results_inline'>
        <li><Link to='/main'>Back to main page</Link></li>
        <h2>Cholesterol</h2>
      </ul>

      <div className='row'>
      <div className='col'>
        <form className='input_form'>
           <p>{this.props.errors ? this.props.errors : null}</p>
           <label>LDL: </label>
           <input onChange={this.onChange} autoComplete="ldl" name="ldl" type="number"/>
           <br />
           <label>HDL: </label>
           <input onChange={this.onChange} autoComplete="hdl" name="hdl" type="number"/>
           <br />
           <label>Triglycerides: </label>
           <input onChange={this.onChange} autoComplete="triglycerides" name="triglycerides" type="number"/>
           <br />
           <label>Total cholesterol: </label>
           <input onChange={this.onChange} autoComplete="total_cholesterol" name="total_cholesterol" type="number"/>
           <br />
           <button onClick={this.submitClick}>Submit</button>
         </form>
        </div>



        <div className='col'>
          <CholesterolDiagram />
        </div>
      </div>

        <div className='results_list'>
          {this.listTests ()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    userId: state.userId,
    cholesterols: state.cholesterols,
  }
}

export default withRouter(connect(mapStateToProps, {cholesterolTestSubmit}) (Cholesterol))