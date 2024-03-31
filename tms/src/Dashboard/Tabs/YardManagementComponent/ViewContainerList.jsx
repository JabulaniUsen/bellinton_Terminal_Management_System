import React from 'react';

const ViewContainerList = () => {
  const data = [
    { containerId: 'CN001', size: '40ft', type: 'Dry', origin: 'Shanghai', arrivalTime: '2024-03-15', owner: 'Shipping', specialInstructions: 'Fragile cargo' },
    { containerId: 'CN002', size: '20ft', type: 'Reefer', origin: 'New York', arrivalTime: '2024-03-16', owner: 'None', specialInstructions: 'Fragile cargo' },
    { containerId: 'CN003', size: '45ft', type: 'Dry', origin: 'Singapore', arrivalTime: '2024-03-18', owner: 'Fragile cargo', specialInstructions: 'Fragile cargo' },
  ];

  return (
    <div className='m-10 poppins'>
      <h2 className="text-2xl font-bold mb-4">Container List</h2>
      <div className=''>
        <table className='border-collapse border border-gray-800 w-[100%]'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-800 px-4 py-2'>Container ID</th>
              <th className='border border-gray-800 px-4 py-2'>Size</th>
              <th className='border border-gray-800 px-4 py-2'>Type</th>
              <th className='border border-gray-800 px-4 py-2'>Origin</th>
              <th className='border border-gray-800 px-4 py-2'>Arrival Time</th>
              <th className='border border-gray-800 px-4 py-2'>Owner</th>
              <th className='border border-gray-800 px-4 py-2'>Special Instructions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                <td className='border border-gray-800 px-4 py-2'>{row.containerId}</td>
                <td className='border border-gray-800 px-4 py-2'>{row.size}</td>
                <td className='border border-gray-800 px-4 py-2'>{row.type}</td>
                <td className='border border-gray-800 px-4 py-2'>{row.origin}</td>
                <td className='border border-gray-800 px-4 py-2'>{row.arrivalTime}</td>
                <td className='border border-gray-800 px-4 py-2'>{row.owner}</td>
                <td className='border border-gray-800 px-4 py-2'>{row.specialInstructions}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons flex justify-center items-center gap-10 my-20 text-white">
            <button className='bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-7 py-1 rounded-full'>Acknowledge Reciept</button>
            <button className='bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-7 py-1 rounded-full'>Allocate Yard Space</button>
        </div>
      </div>
    </div>
  );
}

export default ViewContainerList;
