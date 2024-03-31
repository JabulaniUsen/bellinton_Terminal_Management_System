import React from 'react';

const GateStatus = () => {
  const data = [
    { lastUpdated: '2024-02-17 10:15 AM', status: 'Open', gateNumber: 'Gate 1'},
    { lastUpdated: '2024-02-17 09:30 AM', status: 'Closed', gateNumber: 'Gate 2'},
    { lastUpdated: '2024-02-17 10:45 AM', status: 'Restricted', gateNumber: 'Gate 3'},
  ];

  return (
    <div className='poppins'>
        <div className=''>
        <h2 className='font-semibold mb-2'>Gate Status</h2>
        <table className='border-collapse border border-gray-800'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-800 px-2 py-1'>Gate Number</th>
              <th className='border border-gray-800 px-2 py-1'>status</th>
              <th className='border border-gray-800 px-2 py-1'>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                <td className='border border-gray-800 px-2 py-1'>{row.gateNumber}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.status}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GateStatus;
