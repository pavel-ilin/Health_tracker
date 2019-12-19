import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Main extends Component {

  
  render(){
    return(
      <div >

        <div className='my_health'>

          <Link to='/bloood-pressure'>Blood Pressure</Link>
          <Link to='/cholesterol'>Cholesterol</Link>
          <Link to='/metabolic-panel'>Metabolic Panel</Link>
          <Link to='/vitamine-panel'>Vitamine Panel</Link>
          <Link to='/weight'>Weight</Link>

        </div>

        <div className='my_neighborhood'>

          <Link to='/insurance'>Health insurance</Link>
          <Link to='/flue-shot'>Flue Shots</Link>
          <Link to='/blood-presure-test'>Check your blood pressure</Link>

        </div>
      </div>
    )
  }
}



export default Main

