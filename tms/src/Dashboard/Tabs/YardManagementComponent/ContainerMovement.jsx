import React, { useState } from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContainerMovementHistory from './ContainerMovementHistory';

const ContainerMovement = () => {
  const options2 = [
    { value: '', label: 'Select Cargo/BL ID', isDisabled: true },
    { value: '0012345', label: 'CON12345' },
    { value: '0014534', label: 'CON14534' },
    { value: '0024565', label: 'CON24565' },
    { value: '0030923', label: 'CON30923' },
  ];
  const [seeHistory, setSeeHistory] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Form submitted successfully!');
  };

  const handleSeeHistory = () => {
    setSeeHistory(true);
  }

  return (
    <div>
      {!seeHistory ? (
        <div className='m-10 poppins'>
        <h2 className='font-bold text-2xl'>Container Movement</h2>
        <div className="mt-10">
          <form>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="containerWidth" className="block font-semibold text-base">Container ID: </label>
              <Select
                options={options2}
                isSearchable
                className='w-[400px]'
                required
              />
            </div>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="movementType" className="block font-semibold text-base">Movement Type: </label>
              <Select
                options={options2}
                isSearchable
                className='w-[400px]'
                required
              />
            </div>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="location" className="block font-semibold text-base">Location: </label>
              <Select
                options={options2}
                isSearchable
                className='w-[400px]'
                required
              />
            </div>
            <div className="flex justify-between w-[60%] my-5">
              <label htmlFor="description" className="block font-semibold text-base">Description: </label>
              <textarea className='border-gray-400 border-[1px] rounded-lg p-4 w-[400px]' required name="description" id="description" rows="4"></textarea>
            </div>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Empty Gate-Out Date:</label>
              <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="emptyGateOutDate" name="emptyGateOutDate" />
            </div>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="exportGateInDate" className="block font-semibold text-base">Export Gate-In Date:</label>
              <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="exportGateInDate" name="exportGateInDate" />
            </div>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="loadedOnboardDate" className="block font-semibold text-base">Loaded Onboard Date:</label>
              <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="loadedOnboardDate" name="loadedOnboardDate" />
            </div>
            <div className="buttons flex w-[60%] gap-3 mx-[200px] mt-10">
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit' onClick={handleSubmit}>Submit</button>
              <p className='text-white bg-[#828282] rounded-md py-1 px-10 cursor-pointer' onClick={handleSeeHistory}>View History</p>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      ) : (
        <ContainerMovementHistory/>
      )}
    </div>
  );
};

export default ContainerMovement;
