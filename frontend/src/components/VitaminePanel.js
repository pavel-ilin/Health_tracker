import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../assets/index.css';

import VitaminePanelResult from './VitaminePanelResult'
import { vitaminePanelTestSubmit } from '../actionCreator'
import VitaminePanelDiagram from './VitaminePanelDiagram'


class VitaminePanel extends Component {

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
      errors: []
    })
  }

  listTests () {
    return this.props.vitamine_panels.map((result) => {
      return <VitaminePanelResult key={result.id} result={result}/>
    })
  }


  render(){
    return(
      <div>

      <div>
        <li><Link to='/main'>Back to main page</Link></li>
        <li><h2>Vitamine Panel</h2></li>
      </div>

        <div className='grid2'>
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
        <div className='g1'>
          <VitaminePanelDiagram />
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
  return {
    userId: state.userId,
    vitamine_panels: state.vitamine_panels,
  }
}

export default withRouter(connect(mapStateToProps, {vitaminePanelTestSubmit}) (VitaminePanel))