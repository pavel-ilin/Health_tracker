import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import MapContainer from '../containers/MapContainer'

import { fetchApiAction } from '../actionCreator'


class BloodPressureTest extends Component {

  fetchApi () {
      this.props.fetchApiAction(this.props.zipcode)
  }


  render(){
    this.fetchApi()
    return(
      <div>
        <p><Link to='/main'>Back to main page</Link></p>
        <MapContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      zipcode: state.zipcode
    }
  }

export default withRouter(connect(mapStateToProps, { fetchApiAction } ) (BloodPressureTest))