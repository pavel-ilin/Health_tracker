import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchApiAction } from '../actionCreator'


class BloodPressureTest extends Component {


    fetchApi () {
        this.props.fetchApiAction(this.props.zipcode)
    }

  render(){
    return(
      <div>
        Blood Pressure Test
        <div className="emdeb-responsive">
              <iframe src={`https://www.google.com/maps/embed/v1/place?key=APIkey
    &q=Space+Needle,Seattle+WA`}></iframe>
        </div>

      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
      zipcode: state.zipcode

    }
  }

export default withRouter(connect(mapStateToProps, { fetchApiAction }) (BloodPressureTest))
