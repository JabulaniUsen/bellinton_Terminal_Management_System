import React, { useState } from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InboundGateReport from './InboundGateReport';

const InboundGate = () => {
  const [showReport, setShowReport] = useState(false)
  const containerId = [
    { value: '', label: 'Select Container ID', isDisabled: true },
    { value: 'CON2173', label: 'CON2173' },
    { value: 'CON2742', label: 'CON2742' },
];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Form submitted successfully!');
  };

  const handleShowReport = () => {
    setShowReport(true)
  }

  return (
    <div className="">
      {!showReport ? (
        <div className='m-10 poppins'>
        <h2 className='font-bold text-2xl'>Inbound Gate Entry</h2>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="my-10">
              <h2 className='text-lg font-bold'>Container Information:</h2>
              <div className="flex justify-between items-center w-[70%] mt-5">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Container ID: </label>
                  <Select
                    options={containerId}
                    isSearchable
                    className='w-[400px]'
                    required
                  />
              </div>
              <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="movementType" className="block font-semibold text-base">Movement Type: </label>
                  {/* <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required/> */}
                  <select name="" id="" className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]'>
                    <option value="">Choose a Type...</option>
                    <option value="Type A">Import full</option>
                    <option value="Type B">Import empty</option>
                  </select>
              </div>
            </div>
  
            <div className="flex justify-between items-center w-[70%] my-7">
              <label htmlFor="location" className="text-lg font-bold">Gate-in Date: </label>
              <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required/>
            </div>
  
            <div className="my-10">
              <h2 className='text-lg font-bold'>Truck Information:</h2>
              <div className="flex justify-between w-[70%] mt-7">
                  <label htmlFor="description" className="block font-semibold text-base">License Plate Number: </label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required/>
              </div>
              <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="exportGateInDate" className="block font-semibold text-base">Driver's Name: </label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required/>
              </div>
              <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Driver's Contact Number:</label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required />
              </div>
              <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="loadedOnboardDate" className="block font-semibold text-base">Company/Organization:</label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required />
              </div>
            </div>
  
            <div className="my-10">
              <h2 className='text-lg font-bold'>Security Check:</h2>
              <div className="flex justify-between items-center w-[32%] mt-5">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Hazardous Materials Check: </label>
                  <input type='checkbox' className='w-[20px] h-[20px]' required/>
              </div>
              <div className="flex justify-between items-center w-[32%] my-4">
                  <label htmlFor="movementType" className="block font-semibold text-base">Security Clearance Check: </label>
                  <input type='checkbox' className='w-[20px] h-[20px]' required/>
              </div>
              <div className="flex justify-between items-center w-[32%] my-4">
                  <label htmlFor="movementType" className="block font-semibold text-base">Temperature-sensitive Cargo:  </label>
                  <input type='checkbox' className='w-[20px] h-[20px]' required/>
              </div>
            </div>
  
  
            <div className="buttons flex w-[70%] gap-3 mx-[200px] mt-10">
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit'>Submit</button>
              <button className='text-white bg-[#828282] rounded-md py-1 px-10' type='reset'>Reset</button>
              <p className='text-white bg-[#4000FF] rounded-md py-1 px-10 cursor-pointer' onClick={handleShowReport}>View Entry Details</p>
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

export default InboundGate;