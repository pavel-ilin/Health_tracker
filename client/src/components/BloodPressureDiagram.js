import React, { useRef, useEffect } from 'react'
// import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, DiscreteColorLegend } from 'react-vis';
import { useSelector } from 'react-redux'
import { line, format, max, scaleLinear, extent, curveCatmullRom } from "d3";
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

    const width = 600, height = 450, margin = 20

    console.log(bloodPressures)

    const h = height - 2 * margin, w = width - 2 * margin

    //number formatter
    const xFormat = format('.2')
    
    //x scale
    const x = scaleLinear()
      .domain(extent(bloodPressures, d => d.id)) //domain: [min,max] of a
      .range([margin, w])
    
    //y scale
    const y = scaleLinear()
      .domain([0, max(bloodPressures, d => d.diastolic)]) // domain [0,max] of b (start from 0)
      .range([h, margin])
    
    //line generator: each point is [x(d.a), y(d.b)] where d is a row in data
    // and x, y are scales (e.g. x(10) returns pixel value of 10 scaled by x)
    const line1 = line()
      .x(d => x(d.id))
      .y(d => y(d.diastolic))
      .curve(curveCatmullRom.alpha(0.3)) //curve line
    
    const xTicks = x.ticks(6).map(d => (        
        x(d) > margin && x(d) < w ? 
          <g transform={`translate(${x(d)},${h + margin})`}>  
            <text>{d}</text>
            <line x1='0' x1='0' y1='0' y2='5' transform="translate(0,-20)"/>
          </g>
        : null
    ))

    const yTicks = y.ticks(5).map(d => (
        y(d) > 10 && y(d) < h ? 
          <g transform={`translate(${margin},${y(d)})`}>  
            <text x="-13" y="5">{d}</text>
            <line x1='0' x1='5' y1='0' y2='0' transform="translate(-5,0)"/>
            <line className='gridline' x1='0' x1={w - margin} y1='0' y2='0' transform="translate(-5,0)"/> 
          </g>
        : null
    ))

    return  (
      <svg width={width} height={height}>
         <line className="axis" x1={margin} x2={w} y1={h} y2={h}/>
         <line className="axis" x1={margin} x2={margin} y1={margin} y2={h}/>
         <path d={line1(bloodPressures)}/>
         <g className="axis-labels">
           {xTicks}
         </g>
         <g className="axis-labels">
           {yTicks}
         </g>
      </svg>
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