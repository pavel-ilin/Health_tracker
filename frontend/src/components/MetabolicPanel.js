import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../assets/index.css';
import { metabolicPanelTestSubmit } from '../actionCreator'
import MetabolicPanelResult from './MetabolicPanelResult'
import MetabolicPanelDiagram from './MetabolicPanelDiagram'
import MetabolicPanelInputForm from './MetabolicPanelInputForm'

const listTests = (metabolicPanels) => {
  return metabolicPanels.map((result) => {
    return <MetabolicPanelResult key={result.id} result={result}/>
  })
}


 const MetabolicPanel = () => {
   const metabolicPanels = useSelector(state => state.metabolic_panels);

    return(
      <div className='App'>

        <div>
          <li><Link to='/main'>Back to main page</Link></li>
          <li><h2>Metabolic Panel</h2></li>
        </div>

        <div className='grid2'>
          <div className='g1'>
            <MetabolicPanelInputForm />
          </div>
          <div className='g1'>
            <MetabolicPanelDiagram />
          </div>
        </div>

          <div className='results_list'>
            {listTests(metabolicPanels)}
          </div>
      </div>
    )
}

export default MetabolicPanel