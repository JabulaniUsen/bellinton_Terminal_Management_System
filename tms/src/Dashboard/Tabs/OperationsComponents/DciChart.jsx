import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const DciChart = () => {
  const lineData = [
    { name: 'Jan', pageViews: 0, uniqueVisitors: 0, sales: 0, },
    { name: 'Mar', pageViews: 0, uniqueVisitors: 0, sales: 0, },
    { name: 'May', pageViews: 0, uniqueVisitors: 0, sales: 0 },
    { name: 'July', pageViews: 0, uniqueVisitors: 0, sales: 0, },
    { name: 'Sep', pageViews: 0, uniqueVisitors: 0, sales: 0, },
    { name: 'Nov', pageViews: 0, uniqueVisitors: 0, sales: 0, },
    { name: 'Dec', pageViews: 0, uniqueVisitors: 0, sales: 0, },
  ];

  const renderBar = (props) => {
    const { x, y, width, height, fill } = props;

    return <rect x={x} y={y} width={width} height={height} fill={fill} rx={10} ry={10} />;
  };

  return (
    <div className="p-1 rounded-3xl shadow-lg border">
      <div className="head my-10 ml-8">
        <h3 className='font-bold poppins text-2xl'>Daily Container Intake/Output</h3>
        <p className='text-[#637381] poppins'>(+0%) than last year</p>
      </div>
      <ComposedChart width={500} height={300} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 0, }} >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="pageViews" barSize={20} fill="#0af50" />
        <Line type="monotone" dataKey="uniqueVisitors" stroke="#ffab00" strokeWidth={3} />
        <Line type="monotone" dataKey="sales" stroke="#00b8d9" strokeWidth={3} />
      </ComposedChart>
    </div>
  );
};

export default DciChart;