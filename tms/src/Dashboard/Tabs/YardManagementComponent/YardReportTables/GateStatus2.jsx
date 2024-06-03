import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GateStatus2 = () => {
  const [queueMetrics, setQueueMetrics] = useState(null);


  useEffect(() => {
    const fetchQueueMetrics = async () => {
      try {
        const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/queue-metrics/');
        setQueueMetrics(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching queue metrics:', error);
      }
    };

    fetchQueueMetrics();
  }, []);



  return (
    <div className='poppins'>
      <div className=''>
        <h2 className='font-semibold mb-2'>Queue Status</h2>
        <div className="">
          <ul className='w-[550px]'>
            <li className='flex justify-between'>
              <p>● Total Containers in Queue:</p>
              <span>{queueMetrics ? queueMetrics.total_trucks_in_queue : 'Loading...'}</span>
            </li>
            <li className='flex justify-between'>
              <p>● Average Queue Waiting Time:</p>
              <span>{queueMetrics ? queueMetrics.average_queue_waiting_time : 'Loading...'}</span>
            </li>
            <li className='flex justify-between'>
              <p>● Average Container Processing Time: </p>
              <span>{queueMetrics ? queueMetrics.average_container_processing_time : 'Loading...'}</span>
            </li>
            <li className='flex justify-between'>
              <p>● Estimated Time of Next Container Assignment: </p>
              <span>{queueMetrics ? queueMetrics.estimated_time_of_next_container_assignment : 'Loading...'}</span>
            </li>
          </ul>
        </div>
      </div>

      
    </div>
  );
}

export default GateStatus2;
