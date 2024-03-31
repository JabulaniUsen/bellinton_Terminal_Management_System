import React from 'react';

const ThroughputMetrics = () => {
  const data = [
    { date: '2024-02-17', hour: '00:00 - 01:00', totalVehicles: 25, inboundVehicles: 12, outboundVehicles: 22},
    { date: '2024-02-17', hour: '00:00 - 02:00', totalVehicles: 30, inboundVehicles: 15, outboundVehicles: 30},
    { date: '2024-02-17', hour: '00:00 - 03:00', totalVehicles: 22, inboundVehicles: 10, outboundVehicles: 42},
  ];

  return (
    <div className='poppins'>
        <div className=''>
        <h2 className='font-semibold mb-2'>Throughput Metrics</h2>
        <table className='border-collapse border border-gray-800'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-800 px-2 py-1'>Date</th>
              <th className='border border-gray-800 px-2 py-1'>Hour</th>
              <th className='border border-gray-800 px-2 py-1'>Total Vehicles</th>
              <th className='border border-gray-800 px-2 py-1'>Inbound Vehicles</th>
              <th className='border border-gray-800 px-2 py-1'>Outbound Vehicles</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                <td className='border border-gray-800 px-2 py-1'>{row.date}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.hour}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.totalVehicles}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.inboundVehicles}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.outboundVehicles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ThroughputMetrics;
