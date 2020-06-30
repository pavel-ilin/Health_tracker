import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../assets/index.css';
import { vitaminePanelTestSubmit } from '../actionCreator'

class VitaminePanelInputForm extends Component {

  state = {
      d: '',
      b12: '',
      a1: '',
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
    this.props.vitaminePanelTestSubmit(this.state)
    this.setState({
      d: '',
      b12: '',
      a1: '',
      userId: null,
      errors: [],
    })
  }

  render(){
    return(

      <div className='g1'>
        <form className='input_form'>
           <p>{this.props.errors ? this.props.errors : null}</p>
           <label>D: </label>
           <input onChange={this.onChange} autoComplete="d" name="d" type="number"/>
           <br />
           <label>B12: </label>
           <input onChange={this.onChange} autoComplete="b12" name="b12" type="number"/>
           <br />
           <label>A1: </label>
           <input onChange={this.onChange} autoComplete="a1" name="a1" type="number"/>
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