import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, DiscreteColorLegend } from 'react-vis';
import { useSelector } from 'react-redux'

let combinedArray = {
  dataSystolic: [],
  dataDiastolic: [],
  dataPuls: [],
  dataStress: []
 }

 const bloodPressureItems = [
   {title: 'Systolic', color: 'red', strokeWidth: 6},
   {title: 'Diastolic', color: 'blue', strokeWidth: 6},
   {title: 'Puls', color: 'green', strokeWidth: 6},
   {title: 'Stress level', color: 'black', strokeWidth: 6}
 ]

 const testResults = (bloodPressures) => {
   combinedArray = {
     dataSystolic: [],
     dataDiastolic: [],
     dataPuls: [],
     dataStress: []
    }
    
   let  iterateObject = {}

   if (bloodPressures) {
     bloodPressures.map((test) => {
       iterateObject = {x: test.id , y: test.systolic}
       combinedArray.dataSystolic = [...combinedArray.dataSystolic, iterateObject]

       iterateObject = {x: test.id , y: test.diastolic}
       combinedArray.dataDiastolic = [...combinedArray.dataDiastolic, iterateObject]

       iterateObject = {x: test.id , y: test.puls}
       combinedArray.dataPuls = [...combinedArray.dataPuls, iterateObject]

       iterateObject = {x: test.id , y: test.stress_level}
       combinedArray.dataStress = [...combinedArray.dataStress, iterateObject]
     })
   }
 }

const BloodPressureDiagram = () => {
    let bloodPressures = useSelector(state => state.blood_pressures);
    testResults(bloodPressures)

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
              data={combinedArray.dataSystolic}/>
            <XAxis title="Time"/>
            <YAxis />

            <LineSeries
                title="Diastolic"
                style={{stroke: 'blue', strokeWidth: 3}}
                data={combinedArray.dataDiastolic}/>
            <YAxis />

            <LineSeries
                title="Pulse"
                style={{stroke: 'green', strokeWidth: 3}}
                data={combinedArray.dataPuls}/>
            <YAxis />

            <LineSeries
                title="Stress level"
                style={{stroke: 'black', strokeWidth: 3}}
                data={combinedArray.dataStress}/>
            <YAxis />

            <DiscreteColorLegend orientation="horizontal" width={300} items={bloodPressureItems} />

          </XYPlot>
          </>
    )
}

export default BloodPressureDiagram