import React, { Component } from 'react'
import '../assets/index.css';


class MetabolicPanelResult extends Component {

  render(){
    return(
      <div>
        <ul className='results_inline'>
          <li className='g1'>Sodium: {this.props.result.sodium}</li>
          <li className='g1'>Glucose: {this.props.result.glucose}</li>
          <li className='g1'>Calcium: {this.props.result.calcium}</li>
        </ul>
      </div>
    )
  }
}

export default MetabolicPanelResult
