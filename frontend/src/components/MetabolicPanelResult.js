import React, { Component } from 'react'
import '../index.css';


class MetabolicPanelResult extends Component {

  render(){
    return(
      <div>
        <ul className='results_inline'>
          <li>Sodium: {this.props.result.sodium}</li>
          <li>Glucose: {this.props.result.glucose}</li>
          <li>Calcium: {this.props.result.calcium}</li>
        </ul>
      </div>
    )
  }
}

export default MetabolicPanelResult
