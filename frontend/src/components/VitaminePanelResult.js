import React, { Component } from 'react'
import '../assets/index.css';


class VitaminePanelResult extends Component {

  render(){
    return(
      <div>
        <ul className='results_inline'>
          <li className='g1'>D: {this.props.result.d}</li>
          <li className='g1'>B12: {this.props.result.b12}</li>
          <li className='g1'>A1: {this.props.result.a1}</li>
        </ul>
      </div>
    )
  }
}

export default VitaminePanelResult
