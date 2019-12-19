import React, { Component } from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalBarSeries, MarkSeries, VerticalGridLines, ChartLabel, DiscreteColorLegend, GradientDefs } from 'react-vis';


export function renderDiagram (testsData) {

  console.log(testsData)
  let  iterateObject = null

  let dataSystolic = [];
  let dataDiastolic = [];
  let dataPuls = [];
  let dataStress = [];

  if (testsData) {
    testsData.map(test => {
      iterateObject = {x: test.id , y: test.systolic}
      dataSystolic = [...dataSystolic, iterateObject]

      iterateObject = {x: test.id , y: test.diastolic}
      dataDiastolic = [...dataDiastolic, iterateObject]

      iterateObject = {x: test.id , y: test.puls}
      dataPuls = [...dataPuls, iterateObject]

      iterateObject = {x: test.id , y: test.stress_level}
      dataStress = [...dataStress, iterateObject]
    })
  }



  const bloodPressureItems = [
    {title: 'Systolic', color: 'red', strokeWidth: 6},
    {title: 'Diastolic', color: 'blue', strokeWidth: 6},
    {title: 'Puls', color: 'green', strokeWidth: 6},
    {title: 'Stress level', color: 'black', strokeWidth: 6}
  ]

return  (
        <XYPlot
          width={500}
          height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />

          <LineSeries
            title="Systolic"
            style={{stroke: 'red', strokeWidth: 3}}
            data={dataSystolic}/>
          <XAxis title="Time"/>
          <YAxis />

          <LineSeries
              title="Diastolic"
              style={{stroke: 'blue', strokeWidth: 3}}
              data={dataDiastolic}/>
          <YAxis />

          <LineSeries
              title="Puls"
              style={{stroke: 'green', strokeWidth: 3}}
              data={dataPuls}/>
          <YAxis />

          <LineSeries
              title="Stress level"
              style={{stroke: 'black', strokeWidth: 3}}
              data={dataStress}/>
          <YAxis />


          <DiscreteColorLegend orientation="horizontal" width={300} items={bloodPressureItems} />

        </XYPlot>
  )
}