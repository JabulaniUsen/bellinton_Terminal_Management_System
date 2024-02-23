import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const DciChart = () => {
  const lineData = [
    { name: 'Jan', pageViews: 20, uniqueVisitors: 40, sales: 50, },
    { name: 'Mar', pageViews: 25, uniqueVisitors: 50, sales: 38, },
    { name: 'May', pageViews: 28, uniqueVisitors: 38, sales: 54, },
    { name: 'July', pageViews: 25, uniqueVisitors: 60, sales: 45, },
    { name: 'Sep', pageViews: 30, uniqueVisitors: 40, sales: 60, },
    { name: 'Nov', pageViews: 37, uniqueVisitors: 48, sales: 33, },
    { name: 'Dec', pageViews: 20, uniqueVisitors: 20, sales: 50, },
  ];

  const renderBar = (props) => {
    const { x, y, width, height, fill } = props;

    return <rect x={x} y={y} width={width} height={height} fill={fill} rx={10} ry={10} />;
  };

  return (
    <div className="p-1 rounded-3xl shadow-lg border">
      <div className="head my-10 ml-8">
        <h3 className='font-bold poppins text-2xl'>Daily Container Intake/Output</h3>
        <p className='text-[#637381] poppins'>(+43%) than last year</p>
      </div>
      <ComposedChart width={500} height={300} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 0, }} >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="pageViews" barSize={20} fill="#4caf50" />
        <Line type="monotone" dataKey="uniqueVisitors" stroke="#ffab00" strokeWidth={3} />
        <Line type="monotone" dataKey="sales" stroke="#00b8d9" strokeWidth={3} />
      </ComposedChart>
    </div>
  );
};

export default DciChart;