import React from 'react';

const ContainerAssignment = () => {
  const data = [
    { containerNo: 'CON123', destination: 'Port A', assignedTruck: 'TRK782', assignedDriver: 'John Smith', priority: 'High', notes: 'Electronic'},
    { containerNo: 'CON235', destination: 'Port B', assignedTruck: 'TRK782', assignedDriver: 'Emily Johnson', priority: 'Medium', notes: 'Automotive Parts'},
    { containerNo: 'CON345', destination: 'Port C', assignedTruck: 'TRK782', assignedDriver: 'Sarah Lee', priority: 'Low', notes: 'Chemicals'},
  ];

  return (
    <div className='poppins'>
        <div className=''>
        <h2 className='font-semibold mb-2'>In bound Gate Entry</h2>
        <table className='border-collapse border border-gray-800 '>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-800 px-2 py-1'>Container Number</th>
              <th className='border border-gray-800 px-2 py-1'>Destination</th>
              <th className='border border-gray-800 px-2 py-1'>Assigned Truck</th>
              <th className='border border-gray-800 px-2 py-1'>Driver Name</th>
              <th className='border border-gray-800 px-2 py-1'>Priority</th>
              <th className='border border-gray-800 px-2 py-1'>Notes/Instructions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                <td className='border border-gray-800 px-2 py-1'>{row.containerNo}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.destination}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.assignedTruck}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.driverName}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.priority}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContainerAssignment;
