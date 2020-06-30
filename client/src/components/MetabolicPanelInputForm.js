import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../assets/index.css';
import { metabolicPanelTestSubmit } from '../actionCreator'


class MetabolicPanelInputForm extends Component {

  state = {
    sodium: '',
    glucose: '',
    calcium: '',
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
    this.props.metabolicPanelTestSubmit(this.state)
    this.setState({
      sodium: '',
      glucose: '',
      calcium: '',
      userId: null,
      errors: [],
    })
  }

  render(){
    return(

      <div className='g1'>
        <form className='input_form'>
           <p>{this.props.errors ? this.props.errors : null}</p>
           <label>Sodium: </label>
           <input onChange={this.onChange} autoComplete="sodium" name="sodium" type="number"/>
           <br />
           <label>Glucose: </label>
           <input onChange={this.onChange} autoComplete="glucose" name="glucose" type="number"/>
           <br />
           <label>Calcium: </label>
           <input onChange={this.onChange} autoComplete="calcium" name="calcium" type="number"/>
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

export default withRouter(connect(mapStateToProps, { metabolicPanelTestSubmit }) (MetabolicPanelInputForm))