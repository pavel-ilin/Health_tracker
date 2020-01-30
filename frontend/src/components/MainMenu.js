import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/index.css'

const MainMenu = () => (

  <div className='main_menu'>
    <div>
      <h5>Tests results:</h5>
      <Link to='/bloood-pressure'><p className="card-title">Blood Pressure</p></Link>
      <Link to='/cholesterol'><p className="card-title">Cholesterol</p></Link>
      <Link to='/vitamine-panel'><p className="card-title">Vitamine panel</p></Link>
      <Link to='/metabolic-panel'><p className="card-title">Metabolic panel</p></Link>
    </div>

    <div>
      <h5>Explore your neighborhood:</h5>
      <Link to='/flue-shot'><p className="card-title">Take a flu shot</p></Link>
      <Link to='/blood-presure-test'><p className="card-title">Check your blood presure</p></Link>
    </div>

  </div>

)

export default MainMenu
