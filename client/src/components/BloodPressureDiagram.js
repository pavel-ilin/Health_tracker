import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import { useSelector } from 'react-redux';
import '../assets/index.css';

 let data = {
   labels: [],
   data: [],
 }

 const testResults = (bloodPressures) => {  
   if (bloodPressures) {
    let index = bloodPressures.length - 1
    for(let i = 0; i < bloodPressures.length; i++){
      data.data = [...data.data, bloodPressures[index].systolic]
      data.labels = [...data.labels, bloodPressures[index].id]
      index--
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
          labels: data.labels,
          datasets: [
              {
                  label: "Systolic",
                  data: data.data,
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