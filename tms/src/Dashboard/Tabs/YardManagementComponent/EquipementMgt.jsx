import React from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EquipementMgt = () => {
    const options = [
        { value: '', label: 'Forklift, Crane, Reach Stacker, Other', isDisabled: true },
        { value: 'Forklift', label: 'Forklift' },
        { value: 'Crane', label: 'Crane' },
        { value: 'Reach Stacker', label: 'Reach Stacker' },
        { value: 'Other', label: 'Other' },
      ];

  const options2 = [
    { value: '', label: 'Available, In Use, Out of Service', isDisabled: true },
    { value: 'Available', label: 'Available' },
    { value: 'In Use', label: 'In Use' },
    { value: 'Out of Service', label: 'Out of Service' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Form submitted successfully!');
  };

  return (
    <div className='m-10 poppins'>
      <h2 className='font-bold text-2xl'>Equipment Management</h2>
      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center w-[65%] my-5">
            <label htmlFor="containerWidth" className="block font-semibold text-base">Equipment Type:  </label>
            <Select
              options={options}
              isSearchable
              className='w-[400px]'
              placeholder='Forklift, Crane, Reach Stacker, Other'
              required
            />
          </div>
          <div className="flex justify-between items-center w-[65%] my-5">
            <label htmlFor="movementType" className="block font-semibold text-base">Equipment ID:  </label>
            <input 
                type='text' 
                className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' 
                placeholder='Unique Identifier' 
                required id="" name="" />
          </div>
          <div className="flex justify-between items-center w-[65%] my-5">
            <label htmlFor="location" className="block font-semibold text-base">Status: </label>
            <Select
              options={options2}
              isSearchable
              className='w-[400px]'
              placeholder='Available, In Use, Out of Service'
              required
            />
          </div>
          <div className="flex justify-between items-center w-[65%] my-5">
            <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Last Maintenance Date: </label>
            <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="" name="" />
          </div>
          <div className="flex justify-between items-center w-[65%] my-5">
            <label htmlFor="exportGateInDate" className="block font-semibold text-base">Next Maintenance Date: </label>
            <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="" name="" />
          </div>
          <div className="flex justify-between items-center w-[65%] my-5">
            <label htmlFor="loadedOnboardDate" className="block font-semibold text-base">Assigned Task: </label>
            <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="" name="" />
          </div>
          <div className="flex justify-between items-center w-[65%] my-5">
            <label htmlFor="loadedOnboardDate" className="block font-semibold text-base">Assigned To: </label>
            <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="" name="" />
          </div>
          <div className="buttons flex w-[60%] gap-3 mx-[200px] mt-10">
            <p className='text-white bg-[#4000FF] rounded-md cursor-pointer py-1 px-10'>View</p>
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit'>Save</button>
            <button className='text-white bg-[#000] rounded-md py-1 px-10' type='reset'>Cancel</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EquipementMgt;
