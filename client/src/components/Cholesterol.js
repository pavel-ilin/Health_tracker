import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../assets/index.css';
import CholesterolResult from './CholesterolResult'
import CholesterolDiagram from './CholesterolDiagram'
import CholesterolInputForm from './CholesterolInputForm'


const listTests = function (cholesterols) {
    return cholesterols.map((result) => {
      return <CholesterolResult key={result.id} result={result}/>
    })
  }

const Cholesterol = () => {
  const cholesterols = useSelector(state => state.cholesterols);

    return(
      <div className='App'>

        <div>
          <li><Link to='/main'>Back to main page</Link></li>
          <li><h2>Cholesterol</h2></li>
        </div>

        <div className='grid2'>

          <div className='g1'>
            <CholesterolInputForm />
          </div>

          <div className='g1'>
            <CholesterolDiagram />
          </div>

        </div>

          <div className='results_list'>
            {listTests(cholesterols)}
          </div>
      </div>
    )
}

export default Cholesterol