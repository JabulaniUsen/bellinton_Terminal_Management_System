import React from 'react';
import { Chart } from 'react-google-charts';
// import 'react-google-charts/dist/react-google-charts.css';

const InputOutput = () => {
  const options = {
    title: 'Curvy Bar Chart',
    colors: ['green', 'yellow', 'blue'],
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: {
      title: 'Months',
      textStyle: {
        color: '#333',
      },
    },
    vAxis: {
      title: 'Values',
      ticks: [0, 20, 40, 60, 80],
      textStyle: {
        color: '#333',
      },
    },
  };

  const data = [
    ['Months', 'Green Bar', 'Yellow Line', 'Blue Line'],
    ['January', 30, 15, 50],
    ['February', 45, 25, 40],
    ['March', 60, 35, 30],
    ['April', 75, 45, 20],
    ['May', 80, 55, 10],
  ];

  return (
    <div className="grid-cols-2 grid">
      <div className="m-6 p-10 rounded-2xl shadow-lg">
        <div style={{ width: '100%', height: '400px' }}>
          <Chart
            chartType="ComboChart"
            data={data}
            options={options}
            width="100%"
            height="100%"
            legendToggle
          />
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default InputOutput;
