import React, { useState } from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContainerMovementUpdate = () => {
  const options2 = [
    { value: '', label: 'Select Cargo/BL ID', isDisabled: true },
    { value: '0012345', label: 'CON12345' },
    { value: '0014534', label: 'CON14534' },
    { value: '0024565', label: 'CON24565' },
    { value: '0030923', label: 'CON30923' },
  ];
  const [seeHistory, setSeeHistory] = useState(false)

  const handleUpdate = (e) => {
    e.preventDefault();
    toast.success('Updated successfully!');
  };

  const handleSeeHistory = () => {
    setSeeHistory(true);
  }

  return (
    <div>
        <div className='m-10 poppins'>
        <h2 className='font-bold text-2xl'>Container Movement Update</h2>
        <div className="mt-10 grid grid-cols-2 gap-20">
        <form>
            <div className="flex justify-between items-center my-5">
              <label htmlFor="containerWidth" className="block font-semibold text-base">Container ID: </label>
              <Select
                options={options2}
                isSearchable
                className='w-[300px]'
                required
              />
            </div>
            <div className="flex justify-between items-center my-5">
              <label htmlFor="movementType" className="block font-semibold text-base">Movement Type: </label>
              <Select
                options={options2}
                isSearchable
                className='w-[300px]'
                required
              />
            </div>
            <div className="flex justify-between items-center my-5">
              <label htmlFor="location" className="block font-semibold text-base">Location: </label>
              <Select
                options={options2}
                isSearchable
                className='w-[300px]'
                required
              />
            </div>
            <div className="flex justify-between my-5">
              <label htmlFor="description" className="block font-semibold text-base">Description: </label>
              <textarea className='border-gray-400 border-[1px] rounded-lg p-4 w-[300px]' required name="description" id="description" rows="4"></textarea>
            </div>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Dsicharge Off-Out Date:</label>
              <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="emptyGateOutDate" name="emptyGateOutDate" />
            </div>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="exportGateInDate" className="block font-semibold text-base">Port Gate-In Date:</label>
              <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="exportGateInDate" name="exportGateInDate" />
            </div>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="loadedOnboardDate" className="block font-semibold text-base">Port Gate-In Date:</label>
              <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="loadedOnboardDate" name="loadedOnboardDate" />
            </div>
            <div className="flex justify-between items-center w-[60%] my-5">
              <label htmlFor="loadedOnboardDate" className="block font-semibold text-base">Loaded On-board Date:</label>
              <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="loadedOnboardDate" name="loadedOnboardDate" />
            </div>
            <div className="buttons flex gap-3 mx-[200px] mt-10">
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit' onClick={handleUpdate}>Update</button>
              <button className='text-white bg-[#828282] rounded-md py-1 px-10 cursor-pointer' type='reset'>Reset</button>
            </div>
          </form>
          <div className="historyList">
            <h3 className='font-bold'>Recent Movement Updates:</h3>
            <ul className='list-decimal'>
                <li>February 17, 2024: Departure from Port of Lagos - Container en route to Warehouse 5</li>
                <li>February 15, 2024: Arrival at Port of Lagos - Container unloaded from vessel</li>
                <li>February 12, 2024: Departure from Port of Shanghai - Container loaded onto vessel</li>
                <li>February 10, 2024: Arrival at Port of Shanghai - Container received for shipment</li>
            </ul>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContainerMovementUpdate;
