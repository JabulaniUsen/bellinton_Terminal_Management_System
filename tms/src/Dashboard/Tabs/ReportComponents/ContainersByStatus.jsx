import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ContainersByStatus = () => {
  const [selectedOption, setSelectedOption] = useState('year'); // Default option is 'year'

  const yearData = [
    { name: 0, greenBar: 0, orangeBar: 0 },
    { name: 0, greenBar: 0, orangeBar: 0 },
    { name: 0, greenBar: 0, orangeBar: 0 },
    { name: 0, greenBar: 0, orangeBar: 0 },
    { name: 0, greenBar: 0, orangeBar: 0 },
    { name: 0, greenBar: 0, orangeBar: 0 },
    { name: 0, greenBar: 0, orangeBar: 0 },
    { name: 0, greenBar: 0, orangeBar: 0 },
    { name: 0, greenBar: 0, orangeBar: 0 },
  ];

  const monthData = [
    { name: 'Jan', greenBar: 0, orangeBar: 0 },
    { name: 'Feb', greenBar: 0, orangeBar: 0 },
    { name: 'Mar', greenBar: 0, orangeBar: 0 },
    { name: 'Apr', greenBar: 0, orangeBar: 0 },
    { name: 'May', greenBar: 0, orangeBar: 0 },
    { name: 'Jun', greenBar: 0, orangeBar: 0 },
    { name: 'Jul', greenBar: 0, orangeBar: 0 },
    { name: 'Aug', greenBar: 0, orangeBar: 0 },
    { name: 'Sep', greenBar: 0, orangeBar: 0 },
  ];

  const data = selectedOption === 'year' ? yearData : monthData;

  return (
    <div className='m-5 pr-5 pb-5 shadow-lg rounded-lg'>
      <div className="m-10 flex rounded-lg justify-between items-center">
        <div className="poppins">
          <h3 className='font-bold text-xl'>Containers by Status</h3>
          <p className='text-[#637381] text-sm'>(+0% Sold | +0% Canceled) than last year</p>
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