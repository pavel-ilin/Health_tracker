import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, DiscreteColorLegend } from 'react-vis';
import { useSelector } from 'react-redux'

  let combinedArray = {
     dataSodium: [],
     dataGlucose: [],
     dataCalcium: []
  }

  const mitabolicPanelItems = [
    {title: 'Sodium', color: 'red', strokeWidth: 6},
    {title: 'Glucose', color: 'blue', strokeWidth: 6},
    {title: 'Calcium', color: 'green', strokeWidth: 6},
  ]

  const testResults = (metabolicPanels) => {
    combinedArray = {
       dataSodium: [],
       dataGlucose: [],
       dataCalcium: []
    }

    let  iterateObject = {}

    if (metabolicPanels) {
      for(let i = 0; i < metabolicPanels.length; i++){
        iterateObject = {x: metabolicPanels[i].id , y: metabolicPanels[i].sodium}
        combinedArray.dataSodium = [...combinedArray.dataSodium, iterateObject]

        iterateObject = {x: metabolicPanels[i].id , y: metabolicPanels[i].glucose}
        combinedArray.dataGlucose = [...combinedArray.dataGlucose, iterateObject]

        iterateObject = {x: metabolicPanels[i].id , y: metabolicPanels[i].calcium}
        combinedArray.dataCalcium = [...combinedArray.dataCalcium, iterateObject]
      }
    }
}


const MetabolicPanelDiagram = () => {
  let metabolicPanels = useSelector(state => state.metabolic_panels);
  testResults(metabolicPanels)

  return(
    <>
        <XYPlot
          width={500}
          height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />

          <LineSeries
            title="Sodium"
            style={{stroke: 'red', strokeWidth: 3}}
            data={combinedArray.dataSodium}/>
          <XAxis title="Time"/>
          <YAxis />

          <LineSeries
              title="Glucose"
              style={{stroke: 'blue', strokeWidth: 3}}
              data={combinedArray.dataGlucose}/>
          <YAxis />

          <LineSeries
              title="Calcium"
              style={{stroke: 'green', strokeWidth: 3}}
              data={combinedArray.dataCalcium}/>
          <YAxis />

          <DiscreteColorLegend orientation="horizontal" width={300} items={mitabolicPanelItems} />

        </XYPlot>
        </>
  )
}

export default MetabolicPanelDiagram