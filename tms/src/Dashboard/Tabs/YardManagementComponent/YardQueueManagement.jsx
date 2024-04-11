import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const YardQueueManagement = () => {
  const [showReport, setShowReport] = useState(false)
    const [containerCount, setContainerCount] = useState(3); 

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Form submitted successfully!');
  };

  const handleShowReport = () => {
    setShowReport(true)
  }

  const options2 = [
    { value: 'Port of Lagos', label: 'Port of Lagos' },
    { value: 'Port of Chicago', label: 'Port of Chicago' },
    { value: 'Port of London', label: 'Port of London' },
    { value: 'Port of Dubai', label: 'Port of Dubai' },
  ];

  const truck = [
    { value: 'TRK231', label: 'TRK231' },
    { value: 'TRK112', label: 'TRK112' },
    { value: 'TRK983', label: 'TRK983' },
    { value: 'TRK532', label: 'TRK532' },
  ];

  const driver = [
    { value: 'John Doe', label: 'John Doe' },
    { value: 'Doe Mike', label: 'Doe Mike' },
    { value: 'Emeka Sunday', label: 'Emeka Sunday' },
    { value: 'Femi Ola', label: 'Femi Ola' },
  ];

  const priority = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' },
  ];

  const handleAddContainer = () => {
    setContainerCount(containerCount + 1);
  };

  const handleDeleteContainer = (index) => {
    setContainerCount(containerCount - 1);
  };

  return (
    <div className="">
      {!showReport ? (
        <div className='m-10 poppins'>
        <h2 className='font-bold text-2xl'>Yard Queue Management</h2>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="my-10">
              <h2 className='text-lg font-bold'>Container Assignment:</h2>
              <div className="flex justify-between items-center w-[70%] mt-5">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Container Number: </label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required/>
              </div>
              <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="movementType" className="block font-semibold text-base">Destination: </label>
                  <Select
                    options={options2}
                    isSearchable
                    className='w-[400px]'
                    required
                />
              </div>
              <div className="flex justify-between items-center w-[70%]">
                  <label htmlFor="description" className="block font-semibold text-base">Assigned Truck: </label>
                  <Select
                    options={truck}
                    isSearchable
                    className='w-[400px]'
                    required
                />
              </div>
              <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Assigned Driver:</label>
                  <Select
                    options={driver}
                    isSearchable
                    className='w-[400px]'
                    required
                />
              </div>
              <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Priority:</label>
                  <Select
                    options={priority}
                    isSearchable
                    className='w-[400px]'
                    placeholder="High, Medium, Low"
                    required
                />
              </div>
            </div>
  
  
            <div className="my-10">
              <h2 className='text-lg font-bold'>Merge Containers:</h2>
              <ul className='list-disc ml-6 my-3'>
                <li className='text-lg font-bold'>Select Containers to Merge:</li>
              </ul>
              {Array.from({ length: containerCount }, (_, index) => (
                <div className="">
                    <div key={index} className="flex justify-between items-center w-[70%] my-2">
                        <label htmlFor={`container${index + 1}`} className="block font-semibold text-base">{`Container ${index + 1}:`}</label>
                        <input type='text' id={`container${index + 1}`} className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required />
                        <button type="button" className='text-red-700' onClick={() => handleDeleteContainer(index)}><FontAwesomeIcon icon={faTrashCan}/></button>
                    </div>
                </div>
              ))}
              <button className='text-blue-600 underline' type="button" onClick={handleAddContainer}>(Add more containers as needed here)</button>
            </div>
  
            <div className="my-10">
              <h2 className='text-lg font-bold'>Merge Destination:</h2>
              <ul className='list-disc ml-6 my-3'>
                <li className='text-lg font-bold'>Select Containers to Merge:</li>
              </ul>
              <div className="flex justify-between w-[70%] mt-7">
                  <label htmlFor="description" className="block font-semibold text-base">Assigned Truck: </label>
                  <Select
                    options={truck}
                    isSearchable
                    className='w-[400px]'
                    required
                />
              </div>
              <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Assigned Driver:</label>
                  <Select
                    options={driver}
                    isSearchable
                    className='w-[400px]'
                    required
                />
              </div>
            </div>
  
            <div className="my-10">
              <h2 className='text-lg font-bold'>Container Assignment:</h2>
              <div className="flex justify-between items-center w-[70%] mt-5">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Total Containers in Queue: </label>
                  <input type='text' readOnly className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required/>
              </div>
              <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="movementType" className="block font-semibold text-base">Average Queue Waiting Time: </label>
                  <input type='text' readOnly className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required/>
              </div>
              <div className="flex justify-between items-center w-[70%]">
                  <label htmlFor="description" className="block font-semibold text-base">Average Container Processing Time: </label>
                  <input type='text' readOnly className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required/>
              </div>
              <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Estimated Time of Next Container Assignment:</label>
                  <input type='text' readOnly className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required/>
              </div>
            </div>
  
            <div className="buttons flex w-[70%] gap-3 mx-[200px] mt-10">
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10'>Assign Container</button>
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10'>Merge Containers</button>
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10'>View Queue</button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      ) : (
        <InboundGateReport/>
      )}
    </div>
  );
};

export default YardQueueManagement;