import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, DiscreteColorLegend } from 'react-vis';
import { useSelector } from 'react-redux'


  let combinedArray = {
   dataD: [],
   dataB12: [],
   dataA1: [],
  }

  const vitaminePanelItems = [
    {title: 'D', color: 'red', strokeWidth: 6},
    {title: 'B12', color: 'blue', strokeWidth: 6},
    {title: 'A1', color: 'green', strokeWidth: 6},
  ]


  const testResults = (vitaminePanels) => {
    combinedArray = {
     dataD: [],
     dataB12: [],
     dataA1: [],
    }

   let  iterateObject = {}

   if (vitaminePanels) {
    for(let i = 0; i < vitaminePanels.length; i++){
      iterateObject = {x: vitaminePanels[i].id , y: vitaminePanels[i].d}
       combinedArray.dataD = [...combinedArray.dataD, iterateObject]

       iterateObject = {x: vitaminePanels[i].id , y: vitaminePanels[i].b12}
       combinedArray.dataB12 = [...combinedArray.dataB12, iterateObject]

       iterateObject = {x: vitaminePanels[i].id , y: vitaminePanels[i].a1}
       combinedArray.dataA1 = [...combinedArray.dataA1, iterateObject]
    }
   }
  }

  const VitaminePanelDiagram = () => {
    let vitaminePanels = useSelector(state => state.vitamine_panels);
    testResults(vitaminePanels)

  return  (
      <>
          <XYPlot
            width={500}
            height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />

            <LineSeries
              title="D"
              style={{stroke: 'red', strokeWidth: 3}}
              data={combinedArray.dataD}/>
            <XAxis title="Time"/>
            <YAxis />

            <LineSeries
                title="B12"
                style={{stroke: 'blue', strokeWidth: 3}}
                data={combinedArray.dataB12}/>
            <YAxis />

            <LineSeries
                title="A1"
                style={{stroke: 'green', strokeWidth: 3}}
                data={combinedArray.dataA1}/>
            <YAxis />

            <DiscreteColorLegend orientation="horizontal" width={300} items={vitaminePanelItems} />

          </XYPlot>
          </>
        )
    }


export default VitaminePanelDiagram