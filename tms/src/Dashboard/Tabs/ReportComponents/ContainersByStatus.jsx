import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ContainersByStatus = () => {
  const [selectedOption, setSelectedOption] = useState('year'); // Default option is 'year'

  const yearData = [
    { name: 10, greenBar: 10, orangeBar: 15 },
    { name: 20, greenBar: 20, orangeBar: 25 },
    { name: 30, greenBar: 15, orangeBar: 30 },
    { name: 40, greenBar: 10, orangeBar: 15 },
    { name: 50, greenBar: 20, orangeBar: 25 },
    { name: 60, greenBar: 15, orangeBar: 30 },
    { name: 70, greenBar: 10, orangeBar: 15 },
    { name: 80, greenBar: 20, orangeBar: 25 },
    { name: 90, greenBar: 15, orangeBar: 30 },
  ];

  const monthData = [
    { name: 'Jan', greenBar: 5, orangeBar: 8 },
    { name: 'Feb', greenBar: 15, orangeBar: 18 },
    { name: 'Mar', greenBar: 10, orangeBar: 25 },
    { name: 'Apr', greenBar: 8, orangeBar: 12 },
    { name: 'May', greenBar: 12, orangeBar: 20 },
    { name: 'Jun', greenBar: 18, orangeBar: 22 },
    { name: 'Jul', greenBar: 25, orangeBar: 30 },
    { name: 'Aug', greenBar: 20, orangeBar: 28 },
    { name: 'Sep', greenBar: 15, orangeBar: 18 },
  ];

  const data = selectedOption === 'year' ? yearData : monthData;

  return (
    <div className='m-5 pr-5 pb-5 shadow-lg rounded-lg'>
      <div className="m-10 flex rounded-lg justify-between items-center">
        <div className="poppins">
          <h3 className='font-bold text-xl'>Containers by Status</h3>
          <p className='text-[#637381] text-sm'>(+43% Sold | +12% Canceled) than last year</p>
        </div>
        <div>
          <select className='bg-[#F4F6F8] outline-none px-3 py-1 rounded-lg font-semibold' onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
            <option value="year">Year</option>
            <option value="month">Month</option>
          </select>
        </div>
      </div>
      <BarChart width={550} height={350} data={data}>
        <XAxis dataKey="name" label={{ position: 'insideBottom', offset: -10 }} />
        <YAxis />
        <Tooltip />
        <Bar 
          dataKey="greenBar" 
          fill="#00a76f" 
          name="Canceled" 
          barSize={10} 
        />
        <Bar 
          dataKey="orangeBar" 
          fill="#ffac82" 
          name="Sold" 
          barSize={10} 
        />
      </BarChart>
    </div>
  );
};

export default ContainersByStatus;