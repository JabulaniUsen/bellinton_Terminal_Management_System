import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContainerNotification = ({ handleShowLess }) => {
  const data = [
    { containerId: 'CN001', size: '40ft', type: 'Dry', origin: 'Shangai', arrivalTime: '2024-03-15', owner: 'Shipping', specialInstruction: 'Fragile cargo ' },
    { containerId: 'CN002', size: '40ft', type: 'Reefer', origin: 'Shangai', arrivalTime: '2024-03-16', owner: 'Logistics', specialInstruction: 'Perishable goods' },
    { containerId: 'CN003', size: '40ft', type: 'Flatrack', origin: 'Shangai', arrivalTime: '2024-03-18 14:30', owner: 'Logistics', specialInstruction: 'Oversized' },
    { containerId: 'CN004', size: '40ft', type: 'Dry', origin: 'Shangai', arrivalTime: '2024-03-15', owner: 'Shipping', specialInstruction: 'Hazardous' },
    { containerId: 'CN005', size: '40ft', type: 'Dry', origin: 'Shangai', arrivalTime: '2024-03-16', owner: 'Logistics', specialInstruction: 'None' },
    { containerId: 'CN006', size: '40ft', type: 'Flatrack', origin: 'Shangai', arrivalTime: '2024-03-18', owner: 'Logistics', specialInstruction: 'Heavy machinery' },
  ];

  const handleAck = () => {
    toast.success('Acknowledged!')
  }

  return (
    <div className=' poppins'>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Container List</h2>
        <h2 className=" mb-4 text-[#0095FF] underline font-semibold text-lg cursor-pointer" onClick={handleShowLess}>See less</h2>
      </div>
      <div className=''>
        <table className='border-collapse border border-gray-800 w-[100%]'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-800 px-2 py-2'>Container ID</th>
              <th className='border border-gray-800 px-2 py-2'>Size</th>
              <th className='border border-gray-800 px-2 py-2'>Type</th>
              <th className='border border-gray-800 px-2 py-2'>Origin</th>
              <th className='border border-gray-800 px-2 py-2'>Arrival Time</th>
              <th className='border border-gray-800 px-2 py-2'>Owner</th>
              <th className='border border-gray-800 px-2 py-2'>Special Instruction</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                <td className='border border-gray-800 px-3 py-2'>{row.containerId}</td>
                <td className='border border-gray-800 px-3 py-2'>{row.size}</td>
                <td className='border border-gray-800 px-3 py-2'>{row.type}</td>
                <td className='border border-gray-800 px-3 py-2'>{row.origin}</td>
                <td className='border border-gray-800 px-3 py-2'>{row.arrivalTime}</td>
                <td className='border border-gray-800 px-3 py-2'>{row.owner}</td>
                <td className='border border-gray-800 px-3 py-2'>{row.specialInstruction}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons flex justify-center items-center gap-10 my-20 text-white">
          <button className='bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-7 py-1 rounded-full' onClick={handleAck}>Acknowledge Receipt</button>
          <button className='bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-7 py-1 rounded-full'>Allocate Yard Space</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ContainerNotification;
