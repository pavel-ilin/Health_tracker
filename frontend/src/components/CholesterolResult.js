import React, { Component } from 'react'
import '../index.css';


class CholesterolResult extends Component {

  render(){
    return(
      <div>
        <ul className='results_inline'>
          <li>LDL: {this.props.result.ldl}</li>
          <li>HDL: {this.props.result.hdl}</li>
          <li>Triglycerides: {this.props.result.triglycerides}</li>
          <li>Total cholesterol: {this.props.result.total_cholesterol}</li>
        </ul>
      </div>
    )
  }
}

export default CholesterolResult
