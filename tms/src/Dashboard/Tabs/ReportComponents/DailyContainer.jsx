import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const DailyContainer = () => {
  const [selectedOption, setSelectedOption] = useState('year'); 

  const yearData = [
    { name: 10, greenBar: 10, orangeBar: 15, blueBar: 5, purpleBar: 8 },
    { name: 20, greenBar: 20, orangeBar: 25, blueBar: 10, purpleBar: 5 },
    { name: 30, greenBar: 15, orangeBar: 30, blueBar: 12, purpleBar: 3 },
    { name: 40, greenBar: 10, orangeBar: 15, blueBar: 5, purpleBar: 7 },
    { name: 50, greenBar: 20, orangeBar: 25, blueBar: 10, purpleBar: 2 },
    { name: 60, greenBar: 15, orangeBar: 30, blueBar: 12, purpleBar: 10 },
    { name: 70, greenBar: 10, orangeBar: 15, blueBar: 5, purpleBar: 8 },
    { name: 80, greenBar: 20, orangeBar: 25, blueBar: 10, purpleBar: 5 },
    { name: 90, greenBar: 15, orangeBar: 30, blueBar: 12, purpleBar: 3 },
  ];

  const monthData = [
    { name: 'Jan', greenBar: 5, orangeBar: 8, blueBar: 3, purpleBar: 6 },
    { name: 'Feb', greenBar: 15, orangeBar: 18, blueBar: 8, purpleBar: 12 },
    { name: 'Mar', greenBar: 10, orangeBar: 25, blueBar: 5, purpleBar: 10 },
    { name: 'Apr', greenBar: 8, orangeBar: 12, blueBar: 4, purpleBar: 8 },
    { name: 'May', greenBar: 12, orangeBar: 20, blueBar: 6, purpleBar: 15 },
    { name: 'Jun', greenBar: 18, orangeBar: 22, blueBar: 9, purpleBar: 14 },
    { name: 'Jul', greenBar: 25, orangeBar: 30, blueBar: 12, purpleBar: 20 },
    { name: 'Aug', greenBar: 20, orangeBar: 28, blueBar: 10, purpleBar: 18 },
    { name: 'Sep', greenBar: 15, orangeBar: 18, blueBar: 7, purpleBar: 12 },
  ];

  const data = selectedOption === 'year' ? yearData : monthData;

  return (
    <div className='m-5 pr-5 pb-5 shadow-lg rounded-lg'>
      <div className="m-10 flex rounded-lg justify-between items-center">
        <div className="poppins">
          <h3 className='font-bold text-xl'>Daily Container Intake/Output</h3>
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
        {/* <Legend /> */}
        <Bar dataKey="greenBar" stackId="status" fill="#00a76f" name="Green Bar" barSize={15} />
        <Bar dataKey="orangeBar" stackId="status" fill="#ff5630" name="Orange Bar" barSize={15} />
        <Bar dataKey="blueBar" stackId="status" fill="#ffab00" name="Blue Bar" barSize={15} />
        <Bar dataKey="purpleBar" stackId="status" fill="#919eab" name="Purple Bar" barSize={15} />
      </BarChart>
    </div>
  );
};

export default DailyContainer;





