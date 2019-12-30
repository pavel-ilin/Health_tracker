import React, { Component } from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

let dataLdl = [];
let dataHdl = [];
let dataTtriglycerides = [];
let dataTotalCholesterol = [];

class CholesterolDiagram extends Component {

 mapTestResulsts () {
   let dataLdl = [];
   let dataHdl = [];
   let dataTtriglycerides = [];
   let dataTotalCholesterol = [];

  let  iterateObject = {}

  if (this.props.cholesterols) {
    this.props.cholesterols.map((test) => {
      iterateObject = {x: test.id , y: test.ldl}
      dataLdl = [...dataLdl, iterateObject]

      iterateObject = {x: test.id , y: test.hdl}
      dataHdl = [...dataHdl, iterateObject]

      iterateObject = {x: test.id , y: test.triglycerides}
      dataTtriglycerides = [...dataTtriglycerides, iterateObject]

      iterateObject = {x: test.id , y: parseInt(test.total_cholesterol)}
      dataTotalCholesterol = [...dataTotalCholesterol, iterateObject]
    })
  }

   let combinedArray = {
    dataLdl: dataLdl,
    dataHdl: dataHdl,
    dataTtriglycerides: dataTtriglycerides,
    dataTotalCholesterol: dataTotalCholesterol,
  }

  return combinedArray
}


render(){

  const cholesterolItems = [
    {title: 'LDL', color: 'red', strokeWidth: 6},
    {title: 'HDL', color: 'blue', strokeWidth: 6},
    {title: 'Ttriglycerides', color: 'green', strokeWidth: 6},
    {title: 'Total Cholesterol', color: 'black', strokeWidth: 6}
  ]


let combinedArray = this.mapTestResulsts ()
  console.log(combinedArray)
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
}


const mapStateToProps = state => {
  console.log(state)
  return {
    userId: state.userId,
    cholesterols: state.cholesterols
  }
}

export default withRouter(connect(mapStateToProps) (CholesterolDiagram))