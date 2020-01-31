import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../assets/index.css';
import { vitaminePanelTestSubmit } from '../actionCreator'
import VitaminePanelResult from './VitaminePanelResult'
import VitaminePanelDiagram from './VitaminePanelDiagram'
import VitaminePanelInputForm from './VitaminePanelInputForm'


const listTests = (vitaminePanels) => {
  return vitaminePanels.map((result) => {
    return <VitaminePanelResult key={result.id} result={result}/>
  })
}

const VitaminePanel = () => {
  const vitaminePanels = useSelector(state => state.vitamine_panels);

    return(
      <div className='App'>

      <div>
        <li><Link to='/main'>Back to main page</Link></li>
        <li><h2>Vitamine Panel</h2></li>
      </div>

        <div className='grid2'>
          <div className='g1'>
            <VitaminePanelInputForm />
          </div>
          <div className='g1'>
            <VitaminePanelDiagram />
          </div>
        </div>

        <div className='results_list'>
          {listTests(vitaminePanels)}
        </div>
      </div>
    )
}

export default VitaminePanel