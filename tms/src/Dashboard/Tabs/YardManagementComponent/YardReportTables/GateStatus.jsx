import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GateStatus = () => {
  const [mergedContainers, setMergedContainers] = useState([]);

  useEffect(() => {
    const fetchMergedContainers = async () => {
      try {
        const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/trucks/');
        setMergedContainers(response.data);
      } catch (error) {
        console.error('Error fetching merged containers:', error);
      }
    };

    fetchMergedContainers();
  }, []);

  return (
    <div className='poppins'>
      <div className=''>
        <h2 className='font-semibold mb-2'>Merged Containers</h2>
        <table className='border-collapse border border-gray-800'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-800 px-2 py-1'>Merged Destination</th>
              <th className='border border-gray-800 px-2 py-1'>Assigned Truck</th>
              <th className='border border-gray-800 px-2 py-1'>Assigned Driver</th>
              <th className='border border-gray-800 px-2 py-1'>Note/Instructions</th>
            </tr>
          </thead>
          <tbody>
            {mergedContainers.length > 0 ? (
              mergedContainers.map((container, index) => (
                <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                  <td className='border border-gray-800 px-2 py-1'>{container.merge_destination}</td>
                  <td className='border border-gray-800 px-2 py-1'>{container.truck_id}</td>
                  <td className='border border-gray-800 px-2 py-1'>{container.driver_name}</td>
                  <td className='border border-gray-800 px-2 py-1'>{container.notes}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className='border border-gray-800 px-2 py-1 text-center'>No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GateStatus;
