import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchApiAction } from '../actionCreator'



class HealthInsurance extends Component {



  fetchApi () {
      this.props.fetchApiAction(this.props.zipcode)
  }


  render(){
    return(
      <div>
      <p>Health Insurance</p>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
      zipcode: state.zipcode

    }
  }


export default withRouter(connect(mapStateToProps, { fetchApiAction }) (HealthInsurance))