import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThroughputMetrics = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/trucks/');
        setMetrics(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching throughput metrics:', error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className='poppins'>
      <div className=''>
        <h2 className='font-semibold mb-2'>Container Assignments</h2>
        <table className='border-collapse border border-gray-800'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-800 px-2 py-1'>Container Number</th>
              <th className='border border-gray-800 px-2 py-1'>Destination</th>
              <th className='border border-gray-800 px-2 py-1'>Assigned Truck</th>
              <th className='border border-gray-800 px-2 py-1'>Assigned Driver</th>
              <th className='border border-gray-800 px-2 py-1'>Priority</th>
              <th className='border border-gray-800 px-2 py-1'>Notes/Instructions</th>
            </tr>
          </thead>
          <tbody>
            {metrics.length > 0 ? (
              metrics.map((metric, index) => (
                <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                  <td className='border border-gray-800 px-2 py-1'>{metric. merge_containers}</td>
                  <td className='border border-gray-800 px-2 py-1'>{metric.destination}</td>
                  <td className='border border-gray-800 px-2 py-1'>{metric.truck_id}</td>
                  <td className='border border-gray-800 px-2 py-1'>{metric.driver_name}</td>
                  <td className='border border-gray-800 px-2 py-1'>{metric.priority}</td>
                  <td className='border border-gray-800 px-2 py-1'>{metric.notes}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className='border border-gray-800 px-2 py-1 text-center'>No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ThroughputMetrics;
