import React, { Component } from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

let dataSystolic = [];
let dataDiastolic = [];
let dataPuls = [];
let dataStress = [];

class RenderDiagram extends Component {

 mapTestResulsts () {
   let dataSystolic = [];
   let dataDiastolic = [];
   let dataPuls = [];
   let dataStress = [];

  let  iterateObject = {}

  if (this.props.bloodPressures) {
    this.props.bloodPressures.map((test) => {
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

   let combinedArray = {
    dataSystolic: dataSystolic,
    dataDiastolic: dataDiastolic,
    dataPuls: dataPuls,
    dataStress: dataStress,
  }

  return combinedArray
}


render(){

  const bloodPressureItems = [
    {title: 'Systolic', color: 'red', strokeWidth: 6},
    {title: 'Diastolic', color: 'blue', strokeWidth: 6},
    {title: 'Puls', color: 'green', strokeWidth: 6},
    {title: 'Stress level', color: 'black', strokeWidth: 6}
  ]


let combinedArray = this.mapTestResulsts ()

return  (
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
              title="Puls"
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
}


const mapStateToProps = state => {
  console.log(state)
  return {
    userId: state.userId,
    bloodPressures: state.blood_pressures
  }
}

export default withRouter(connect(mapStateToProps) (RenderDiagram))