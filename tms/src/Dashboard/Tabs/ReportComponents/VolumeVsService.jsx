import React from 'react';
import { BarChart, Bar, CartesianGrid, Legend, Tooltip } from 'recharts';

const data = [
  { name: 1, uv: 50, pv: 77 },
  { name: 2, uv: 35, pv: 65 },
  { name: 3, uv: 39, pv: 50 },
  { name: 4, uv: 25, pv: 70 },
  { name: 5, uv: 40, pv: 60 },
  { name: 6, uv: 25, pv: 70 },
  { name: 7, uv: 40, pv: 80 },
];

const VolumeVsService = () => {
  return (
    <div className="p-10 rounded-lg shadow-lg my-10">
      <div className="">
        <h3 className='font-bold text-xl roboto mb-10'>Customer Satisfaction</h3>
      </div>
      <BarChart width={300} height={200} data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

        <Bar dataKey="pv" stackId="stack" fill="#14cb8e" name="Volume" barSize={15} />
        <Bar dataKey="uv" stackId="stack" fill="#0087e3" name="Services" barSize={15} />


        <Tooltip />
        <Legend verticalAlign="bottom" iconSize={20} iconType="circle" margin={{ top: 10, bottom: 10 }} />
      </BarChart>
      <div className="poppins flex justify-around px-12 mt-2 font-semibold">
        <p>1,135</p>
        <p>635</p>
      </div>
    </div>
  );
};

export default VolumeVsService;
