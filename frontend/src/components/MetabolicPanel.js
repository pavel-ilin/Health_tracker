import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../index.css';

import MetabolicPanelResult from './MetabolicPanelResult'
import { metabolicPanelTestSubmit } from '../actionCreator'
import MetabolicPanelDiagram from './MetabolicPanelDiagram'

class MetabolicPanel extends Component {

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
      errors: []
    })
  }

  listTests () {
    return this.props.metabolic_panels.map((result) => {
      return <MetabolicPanelResult key={result.id} result={result}/>
    })
  }


  render(){
    return(
      <div>
      <ul className='results_inline'>
        <li><Link to='/main'>Back to main page</Link></li>
      </ul>
      
        Metabolic Panel

        <div>
        <form>
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
        <div>
          Diagram
          <MetabolicPanelDiagram />
        </div>
        <div>
          List of all tests
          {this.listTests()}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    userId: state.userId,
    metabolic_panels: state.metabolic_panels,
  }
}

export default withRouter(connect(mapStateToProps, {metabolicPanelTestSubmit}) (MetabolicPanel))