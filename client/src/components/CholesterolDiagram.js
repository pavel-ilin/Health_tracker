import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, DiscreteColorLegend } from 'react-vis';
import { useSelector } from 'react-redux'

  let combinedArray = {
   dataLdl: [],
   dataHdl: [],
   dataTtriglycerides: [],
   dataTotalCholesterol: [],
  }

  const cholesterolItems = [
    {title: 'LDL', color: 'red', strokeWidth: 6},
    {title: 'HDL', color: 'blue', strokeWidth: 6},
    {title: 'Ttriglycerides', color: 'green', strokeWidth: 6},
    {title: 'Total Cholesterol', color: 'black', strokeWidth: 6}
  ]

  const testResults = (cholesterols) => {
    combinedArray = {
     dataLdl: [],
     dataHdl: [],
     dataTtriglycerides: [],
     dataTotalCholesterol: [],
    }

   let  iterateObject = {}

   if (cholesterols) {
      for(let i = 0; i < cholesterols.length; i++){
        iterateObject = {x: cholesterols[i].id , y: cholesterols[i].ldl}
        combinedArray.dataLdl = [...combinedArray.dataLdl, iterateObject]

        iterateObject = {x: cholesterols[i].id , y: cholesterols[i].hdl}
        combinedArray.dataHdl = [...combinedArray.dataHdl, iterateObject]

        iterateObject = {x: cholesterols[i].id , y: cholesterols[i].triglycerides}
        combinedArray.dataTtriglycerides = [...combinedArray.dataTtriglycerides, iterateObject]

        iterateObject = {x: cholesterols[i].id , y: parseInt(cholesterols[i].total_cholesterol)}
        combinedArray.dataTotalCholesterol = [...combinedArray.dataTotalCholesterol, iterateObject]
      } 
    }
  }

const CholesterolDiagram = () => {
  let cholesterols = useSelector(state => state.cholesterols);
  testResults(cholesterols)

  return(
    <>
        <XYPlot
          width={500}
          height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />

          <LineSeries
            title="Systolic"
            style={{stroke: 'red', strokeWidth: 3}}
            data={combinedArray.dataLdl}/>
          <XAxis title="Time"/>
          <YAxis />

          <LineSeries
              title="Diastolic"
              style={{stroke: 'blue', strokeWidth: 3}}
              data={combinedArray.dataHdl}/>
          <YAxis />

          <LineSeries
              title="Pulse"
              style={{stroke: 'green', strokeWidth: 3}}
              data={combinedArray.dataTtriglycerides}/>
          <YAxis />

          <LineSeries
              title="Stress level"
              style={{stroke: 'black', strokeWidth: 3}}
              data={combinedArray.dataTotalCholesterol}/>
          <YAxis />

          <DiscreteColorLegend orientation="horizontal" width={300} items={cholesterolItems} />

        </XYPlot>
      </>
  )
}

export default CholesterolDiagram