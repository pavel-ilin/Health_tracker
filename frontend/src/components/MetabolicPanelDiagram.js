import React, { Component } from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

let dataSodium = [];
let dataGlucose = [];
let dataCalcium = [];

class MetabolicPanelDiagram extends Component {


 mapTestResulsts () {
   let dataSodium = [];
   let dataGlucose = [];
   let dataCalcium = [];

  let  iterateObject = {}

  if (this.props.metabolic_panels) {
    this.props.metabolic_panels.map((test) => {
      iterateObject = {x: test.id , y: test.sodium}
      dataSodium = [...dataSodium, iterateObject]

      iterateObject = {x: test.id , y: test.glucose}
      dataGlucose = [...dataGlucose, iterateObject]

      iterateObject = {x: test.id , y: test.calcium}
      dataCalcium = [...dataCalcium, iterateObject]
    })
  }

   let combinedArray = {
    dataSodium: dataSodium,
    dataGlucose: dataGlucose,
    dataCalcium: dataCalcium,
  }

  return combinedArray
}


render(){

  const mitabolicPanelItems = [
    {title: 'Sodium', color: 'red', strokeWidth: 6},
    {title: 'Glucose', color: 'blue', strokeWidth: 6},
    {title: 'Calcium', color: 'green', strokeWidth: 6},
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
}


const mapStateToProps = state => {
  console.log(state)
  return {
    userId: state.userId,
    metabolic_panels: state.metabolic_panels
  }
}

export default withRouter(connect(mapStateToProps) (MetabolicPanelDiagram))