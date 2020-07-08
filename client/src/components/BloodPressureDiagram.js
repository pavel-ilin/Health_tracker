import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import { useSelector } from 'react-redux';
import '../assets/index.css';

let combinedArray = {
  dataSystolic: [],
  dataDiastolic: [],
  dataPuls: [],
  dataStress: []
 }

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
    const chartRef = useRef()
    
    useEffect(() => {
      const myChartRef = chartRef.current.getContext("2d");

      new Chart(myChartRef, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "March"],
          datasets: [
              {
                  label: "Systolic",
                  data: [86, 67, 91],
              }
          ]
      },
      options: {
          //Customize chart options
      }
      });
    })

    return  (
      <div>
         <canvas id="myChart" ref={chartRef} />
      </div>
    )
  }

export default BloodPressureDiagram