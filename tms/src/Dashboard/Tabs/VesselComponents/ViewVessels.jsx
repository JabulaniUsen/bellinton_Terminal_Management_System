import React from 'react';

const ViewVessels = () => {
  const data = [
    { id: 'VSL001', name: 'Ocean Voyager', ETA: '9/5/2023 8:00', ETD: '9/10/2023 8:00', status: 'In Transit', totalContainer: '150', action: '[View Details]' },
    { id: 'VSL002', name: 'Nautical Spirit', ETA: '9/7/2023 14:00', ETD: '-', status: 'At Port', totalContainer: '120', action: '[View Details]' },
    { id: 'VSL003', name: 'Ocean Voyager', ETA: '9/5/2023 8:00', ETD: '9/10/2023 8:00', status: 'In Transit', totalContainer: '150', action: '[View Details]' },
    { id: 'VSL004', name: 'Nautical Spirit', ETA: '9/7/2023 14:00', ETD: '-', status: 'At Port', totalContainer: '120', action: '[View Details]' },
    { id: 'VSL005', name: 'Ocean Voyager', ETA: '9/5/2023 8:00', ETD: '9/10/2023 8:00', status: 'In Transit', totalContainer: '150', action: '[View Details]' },
    { id: 'VSL006', name: 'Nautical Spirit', ETA: '9/7/2023 14:00', ETD: '-', status: 'At Port', totalContainer: '120', action: '[View Details]' },
  ];

  const generateTable = () => {
    return data.map((rowData, index) => (
      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : 'black', color: index % 2 === 0 ? 'black' : 'white' }}>
        <td className='p-4'>{rowData.id}</td>
        <td className='p-4'>{rowData.name}</td>
        <td className='p-4'>{rowData.ETA}</td>
        <td className='p-4'>{rowData.ETD}</td>
        <td className='p-4'>{rowData.status}</td>
        <td className='p-4'>{rowData.totalContainer}</td>
        <td className='p-4 cursor-pointer'>{rowData.action}</td>
      </tr>
    ));
  };

  return (
    <table className='border border-bl bg-black text-white w-full mt-[4rem]'>
      <thead>
        <tr>
          <th className='py-3'>Vessel ID</th>
          <th className='py-3'>Vessel Name</th>
          <th className='py-3'>ETA</th>
          <th className='py-3'>ETD</th>
          <th className='py-3'>Status</th>
          <th className='py-3'>Total Containers</th>
          <th className='py-3'>Action</th>
        </tr>
      </thead>
      <tbody>{generateTable()}</tbody>
    </table>
  );
};

export default ViewVessels;
