import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import CurrentQueueStatus from './CurrentQueueStatus';

const TruckQueueMgt = () => {
  const [showList, setShowList] = useState(false);
  const [formData, setFormData] = useState({
    truck_id: '',
    company_organization: '',
    driver_name: '',
    driver_phone_number: '',
    priority: '',
    merge_containers: '',
    assigned_terminal: '',
    assigned_booking_no: '',
    assigned_journey_code: '',
    total_trucks_in_queue: '',
    average_queue_waiting_time: '',
    average_container_processing_time: '',
    estimated_time_of_next_container_assignment: ''
  });

  const handleShowList = () => {
    setShowList(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/trucks/', {
        truck_id: formData.truck_id,
        company_organization: formData.company_organization,
        driver_name: formData.driver_name,
        driver_phone_number: formData.driver_phone_number,
        priority: formData.priority,
        merge_containers: `${formData.container1}, ${formData.container2}, ${formData.container3}`,
        assigned_terminal: formData.assigned_terminal,
        status: 'Pending'
      });
      toast.success('Truck assigned successfully');
    } catch (error) {
      toast.error('Failed to assign truck');
    }
  };

  return (
    <div className="">
      {!showList ? (
        <div className='m-10 poppins'>
          <h2 className='font-bold text-2xl'>Truck Queue Management</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-12">
              <div className="mt-10">
                <div>
                  <div className="my-10">
                    <h2 className='text-lg font-bold text-[#045985]'>Truck Information</h2>
                    <div className="flex justify-between items-center mt-7">
                      <label htmlFor="driver_name" className="block font-semibold text-base">Driver's Name: </label>
                      <input type='text' name='driver_name' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.driver_name} onChange={handleInputChange} />
                    </div>
                    <div className="flex justify-between items-center my-1">
                      <label htmlFor="company_organization" className="block font-semibold text-base">Company/Organization: </label>
                      <input type='text' name='company_organization' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.company_organization} onChange={handleInputChange} />
                    </div>
                    <div className="flex justify-between items-center my-1">
                      <label htmlFor="truck_id" className="block font-semibold text-base">Truck ID: </label>
                      <input type='text' name='truck_id' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.truck_id} onChange={handleInputChange} />
                    </div>
                    <div className="flex justify-between items-center my-1">
                      <label htmlFor="driver_phone_number" className="block font-semibold text-base">Driver's Phone: </label>
                      <input type='text' name='driver_phone_number' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.driver_phone_number} onChange={handleInputChange} />
                    </div>
                    <div className="flex justify-between items-center my-1">
                      <label htmlFor="priority" className="block font-semibold text-base">Priority: </label>
                      <input type='text' name='priority' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.priority} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="my-10">
                    <h2 className='text-lg font-bold text-[#045985]'>Merged Containers</h2>
                    <p className='font-semibold'>  </p>
                    <div className="">
                      <div className="flex justify-between items-center mt-7">
                        <label htmlFor="container1" className="block font-semibold text-base">Container 1: </label>
                        <input type='text' name='container1' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.container1} onChange={handleInputChange} />
                      </div>
                      <div className="flex justify-between items-center my-2">
                        <label htmlFor="container2" className="block font-semibold text-base">Container 2: </label>
                        <input type='text' name='container2' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.container2} onChange={handleInputChange} />
                      </div>
                      <div className="flex justify-between items-center my-2">
                        <label htmlFor="container3" className="block font-semibold text-base">Container 3: </label>
                        <input type='text' name='container3' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.container3} onChange={handleInputChange} />
                      </div>
                      <p>(Add more container as needed)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div>
                  <div className="my-10">
                    <h2 className='text-lg font-bold text-[#045985]'>Merge Destination:</h2>
                    <div className="flex justify-between items-center mt-7">
                      <label htmlFor="assigned_terminal" className="block font-semibold text-base">Assigned Terminal: </label>
                      <input type='text' name='assigned_terminal' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.assigned_terminal} onChange={handleInputChange} />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label htmlFor="assigned_booking_no" className="block font-semibold text-base">Assigned Booking No: </label>
                      <input type='text' name='assigned_booking_no' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.assigned_booking_no} onChange={handleInputChange} />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label htmlFor="assigned_journey_code" className="block font-semibold text-base">Assigned Journey Code: </label>
                      <input type='text' name='assigned_journey_code' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.assigned_journey_code} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="my-10">
                    <h2 className='text-lg font-bold text-[#045985]'>Queue Status:</h2>
                    <div className="flex justify-between items-center mt-7">
                      <label htmlFor="total_trucks_in_queue" className="block font-semibold text-base">Total Trucks in Queue: </label>
                      <input type='text' name='total_trucks_in_queue' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.total_trucks_in_queue} onChange={handleInputChange} />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label htmlFor="average_queue_waiting_time" className="block font-semibold text-base">Average Queue Waiting Time: </label>
                      <input type='text' name='average_queue_waiting_time' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.average_queue_waiting_time} onChange={handleInputChange} />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label htmlFor="average_container_processing_time" className="block font-semibold text-base">Average Container Processing Time: </label>
                      <input type='text' name='average_container_processing_time' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.average_container_processing_time} onChange={handleInputChange} />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label htmlFor="estimated_time_of_next_container_assignment" className="block font-semibold text-base">Estimated Time of Next Container Assignment: </label>
                      <input type='text' name='estimated_time_of_next_container_assignment' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='' value={formData.estimated_time_of_next_container_assignment} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons flex items-center gap-3 mx-[200px] mt-10">
              <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' type='submit'>Assign Truck</button>
              <button className='text-white bg-[#828282] rounded-md py-1 px-10' type='reset'>Merge Containers</button>
              <p className='text-[#4e9352] underline font-semibold text-lg py-1 px-10 cursor-pointer' onClick={handleShowList}>View Queue</p>
            </div>
          </form>
          <ToastContainer />
        </div>
      ) : (
        <CurrentQueueStatus />
      )}
    </div>
  );
};

export default TruckQueueMgt;
