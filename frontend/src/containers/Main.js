import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../assets/index.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from '../containers/Header'
import FrontPage from '../components/FrontPage'
import MainMenu from '../components/MainMenu'


class Main extends Component {
  render(){
    return(

      <div className='front_page'>
          {!this.props.userDataLoadingComplete ? <h1 className='display-1'>loading...</h1>  :

          <div>
            <FrontPage name={this.props.name}/>
          </div>
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDataLoadingComplete: state.userDataLoadingComplete,
    name: state.name,
    last_blood_pressures: state.blood_pressures[0],
    last_metabolic_panels: state.metabolic_panels[0],
    last_vitamine_panels: state.vitamine_panels[0],
    last_cholesterols: state.cholesterols[0]
  }
}

export default withRouter(connect(mapStateToProps) (Main))
