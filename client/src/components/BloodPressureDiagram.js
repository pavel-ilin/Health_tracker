import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import { useSelector } from 'react-redux';
import '../assets/index.css';

 let data = {
   labels: [],
   systolic: [],
   diastolic: [],
   puls: [],
   stress_level: [],
 }

 const testResults = (bloodPressures) => {
   if (bloodPressures) {
    for(let i = 0, index = bloodPressures.length - 1; i < bloodPressures.length; i++, index--){
      data.systolic = [...data.systolic, bloodPressures[index].systolic]
      data.diastolic = [...data.diastolic, bloodPressures[index].diastolic]
      data.puls = [...data.puls, bloodPressures[index].puls]
      data.stress_level = [...data.stress_level, bloodPressures[index].stress_level]
      data.labels = [...data.labels, bloodPressures[index].id]
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
                data: data.systolic,
              },
              {
                label: "Diastolic",
                data: data.diastolic,
              },
              {
                label: "Puls",
                data: data.puls,
              },
              {
                label: "Stress level",
                data: data.stress_level,
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