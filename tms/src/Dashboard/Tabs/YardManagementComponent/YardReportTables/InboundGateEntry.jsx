import React from 'react';

const InboundGateEntry = () => {
  const data = [
    { TruckID: 'TRK123', arrivalTime: '2024-02-17 08:45 AM', driverName: 'John Smith', licensePlate: 'ABC123', companyName: 'ABC Shipping Co.', cargoDescription: 'Electronic', gatePassStatus: 'Approved'},
    { TruckID: 'TRK235', arrivalTime: '2024-02-17 08:45 AM', driverName: 'Emily Johnson', licensePlate: 'XYZ456', companyName: 'XYZ Logistics', cargoDescription: 'Automotive Parts', gatePassStatus: 'Pending Approval'},
    { TruckID: 'TRK345', arrivalTime: '2024-02-17 08:45 AM', driverName: 'Sarah Lee', licensePlate: 'HFJ273', companyName: 'Global Freight Inc.', cargoDescription: 'Chemicals', gatePassStatus: 'Approved'},
  ];

  return (
    <div className='poppins'>
        <div className=''>
        <h2 className='font-semibold mb-2'>In bound Gate Entry</h2>
        <table className='border-collapse border border-gray-800 '>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-800 px-2 py-1'>Truck ID</th>
              <th className='border border-gray-800 px-2 py-1'>Driver Name</th>
              <th className='border border-gray-800 px-2 py-1'>License Plate</th>
              <th className='border border-gray-800 px-2 py-1'>Company Name</th>
              <th className='border border-gray-800 px-2 py-1'>Cargo Description</th>
              <th className='border border-gray-800 px-2 py-1'>Arrival Time</th>
              <th className='border border-gray-800 px-2 py-1'>Gate Pass Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                <td className='border border-gray-800 px-2 py-1'>{row.TruckID}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.driverName}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.licensePlate}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.companyName}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.cargoDescription}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.arrivalTime}</td>
                <td className='border border-gray-800 px-2 py-1'>{row.gatePassStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InboundGateEntry;
