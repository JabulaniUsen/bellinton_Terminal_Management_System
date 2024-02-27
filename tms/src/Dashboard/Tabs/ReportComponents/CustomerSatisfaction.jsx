import React from 'react';
import { LineChart, Line, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Area } from 'recharts';

const data = [
  { name: 1, uv: 50, pv: 77 },
  { name: 2, uv: 35, pv: 65 },
  { name: 3, uv: 39, pv: 50 },
  { name: 4, uv: 25, pv: 70 },
  { name: 5, uv: 40, pv: 60 },
  { name: 6, uv: 25, pv: 70 },
  { name: 7, uv: 40, pv: 80 },
];

const MyLineChart = () => {
  return (
    <div className="p-10 rounded-lg shadow-lg my-10">
      <div className="">
        <h3 className='font-bold text-xl roboto mb-10'>Customer Satisfaction</h3>
      </div>
      <LineChart width={300} height={200} data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

        <Line type="monotone" dataKey="uv" stroke="#0087e3" strokeWidth={2} dot={{ fill: '#0095ff' }} name="Last Month" />

        <Line type="monotone" dataKey="pv" stroke="#14cb8e" strokeWidth={2} dot={{ fill: '#07e098' }} name="This Month" />

        <Area type="monotone" dataKey="uv" fill="#0087e3" fillOpacity={0.2} />

        <Area type="monotone" dataKey="pv" fill="#14cb8e" fillOpacity={0.2} />

        {/* <XAxis dataKey="name" /> */}
        {/* <YAxis /> */}
        <Tooltip />
        <Legend verticalAlign="bottom" />
      </LineChart>
      <div className="poppins flex justify-around px-12 mt-2 font-semibold">
        <p>N3,004</p>
        <p>N4,504</p>
      </div>
    </div>
  );
};

export default MyLineChart;
