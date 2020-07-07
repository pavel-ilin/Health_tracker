import React, { useRef, useEffect } from 'react'
// import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, DiscreteColorLegend } from 'react-vis';
import { useSelector } from 'react-redux'
import '../assets/index.css';

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
    for(let i = 0; i < bloodPressures.length; i++){
      iterateObject = {x: bloodPressures[i].id , y: bloodPressures[i].systolic}
       combinedArray.dataSystolic = [...combinedArray.dataSystolic, iterateObject]

       iterateObject = {x: bloodPressures[i].id , y: bloodPressures[i].diastolic}
       combinedArray.dataDiastolic = [...combinedArray.dataDiastolic, iterateObject]

       iterateObject = {x: bloodPressures[i].id , y: bloodPressures[i].puls}
       combinedArray.dataPuls = [...combinedArray.dataPuls, iterateObject]

       iterateObject = {x: bloodPressures[i].id , y: bloodPressures[i].stress_level}
       combinedArray.dataStress = [...combinedArray.dataStress, iterateObject]
    }
   }
 }

const BloodPressureDiagram = () => {
    let bloodPressures = useSelector(state => state.blood_pressures);
    testResults(bloodPressures)
    // const svgRef = useRef()

   

    return  (
      <div>
         comming soon
      </div>
    )
  }

export default BloodPressureDiagram


{/* <>
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
          </> */}



        //   useEffect(() => {
        //     const svg = select(svgRef.current);
        //     const myLine = line()
        //       .x((value, index) => index * 10)
        //       .y(value => value)
            
        //     svg.selectAll('path')
        //       .data([data])
        //       .join('path')
        //       .attr('d', value => myLine(value))
        //       .attr('fill', 'none')
        //       .attr('stroke', 'blue')
        //       .attr("stroke-width", 1.5)
        //       .attr("stroke-linejoin", "round")
        //       .attr("stroke-linecap", "round")
        //   }, [data])
          
        // return(
        //       <div>
        //         <svg ref={svgRef} height='100%' width='30%'></svg>
        //       </div>
        //   )