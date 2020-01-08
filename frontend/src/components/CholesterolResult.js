import React, { Component } from 'react'
import '../assets/index.css';


class CholesterolResult extends Component {

  render(){
    return(
      <div>
        <ul className='results_inline'>
          <li className='g1'>LDL: {this.props.result.ldl}</li>
          <li className='g1'>HDL: {this.props.result.hdl}</li>
          <li className='g1'>Triglycerides: {this.props.result.triglycerides}</li>
          <li className='g1'>Total cholesterol: {this.props.result.total_cholesterol}</li>
        </ul>
      </div>
    )
  }
}

export default CholesterolResult
