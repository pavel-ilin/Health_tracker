import React, { Component } from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

let dataD = [];
let dataB12 = [];
let dataA1 = [];

class VitaminePanelDiagram extends Component {


 mapTestResulsts () {
   let dataD = [];
   let dataB12 = [];
   let dataA1 = [];

  let  iterateObject = {}

  if (this.props.vitamine_panels) {
    this.props.vitamine_panels.map((test) => {
      iterateObject = {x: test.id , y: test.d}
      dataD = [...dataD, iterateObject]

      iterateObject = {x: test.id , y: test.b12}
      dataB12 = [...dataB12, iterateObject]

      iterateObject = {x: test.id , y: test.a1}
      dataA1 = [...dataA1, iterateObject]
    })
  }

   let combinedArray = {
    dataD: dataD,
    dataB12: dataB12,
    dataA1: dataA1,
  }

  return combinedArray
}


render(){

  const vitaminePanelItems = [
    {title: 'D', color: 'red', strokeWidth: 6},
    {title: 'B12', color: 'blue', strokeWidth: 6},
    {title: 'A1', color: 'green', strokeWidth: 6},
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
}


const mapStateToProps = state => {
  return {
    userId: state.userId,
    vitamine_panels: state.vitamine_panels
  }
}

export default withRouter(connect(mapStateToProps) (VitaminePanelDiagram))