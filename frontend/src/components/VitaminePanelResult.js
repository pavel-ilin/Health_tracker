import React, { Component } from 'react'
import '../index.css';


class VitaminePanelResult extends Component {

  render(){
    return(
      <div>
        <ul className='results_inline'>
          <li>D: {this.props.result.d}</li>
          <li>B12: {this.props.result.b12}</li>
          <li>A1: {this.props.result.a1}</li>
        </ul>
      </div>
    )
  }
}

export default VitaminePanelResult
