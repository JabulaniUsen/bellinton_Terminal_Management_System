import React from 'react';
import { PieChart, Pie, Cell, Legend, Label } from 'recharts';

const data = [
    { name: 'Green', value: 0.0, fill: '#00A76F' },
    { name: 'Red', value: 0.0, fill: '#FF5630' },
    { name: 'Blue', value: 0.0, fill: '#00B8D9' },
    { name: 'Yellow', value: 0.0, fill: '#FFAB00' },
];

const Yup = () => {
  return (
    <div className="">
        <div className="head ">
            <h3 className='font-bold poppins text-2xl'>Yard Utilization Percentage</h3>
        </div>
        <PieChart width={400} height={400}>
        <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={170}
            fill="#8884d8"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill="#fff" textAnchor="middle" className='font-semibold text-lg oxygen' dominantBaseline="central">
                {` ${value}%`}
                </text>
            );
            }}
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
        </Pie>
        {/* <Legend /> */}
        </PieChart>
    </div>
  );
};

export default Yup;
