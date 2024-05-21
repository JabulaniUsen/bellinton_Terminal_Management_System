import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContainerTransfer = () => {
  const [cargoId, setCargoId] = useState('');
  const [transferFrom, setTransferFrom] = useState('');
  const [transferTo, setTransferTo] = useState('');
  const [transferDate, setTransferDate] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [reasonForTransfer, setReasonForTransfer] = useState('');
  const [containers, setContainers] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const containerResponse = await axios.get('https://exprosys-backend.onrender.com/api/v1/container-transfer/');
      const locationResponse = await axios.get('https://exprosys-backend.onrender.com/api/v1/locations/');
      setContainers(containerResponse.data);
      setLocations(locationResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async () => {
    const transferData = {
      cargoId,
      transferFrom,
      transferTo,
      transferDate,
      confirmationCode,
      reasonForTransfer,
    };

    try {
      await axios.post('https://exprosys-backend.onrender.com/api/v1/transfers/', transferData);
      toast.success('Transfer initiated successfully!', {
        autoClose: 2000,
      });
      clearForm();
    } catch (error) {
      toast.error('Error initiating transfer.');
      console.error('Error submitting transfer:', error);
    }
  };

  const clearForm = () => {
    setCargoId('');
    setTransferFrom('');
    setTransferTo('');
    setTransferDate('');
    setConfirmationCode('');
    setReasonForTransfer('');
  };

  return (
    <div className='m-10'>
      <div className="my-10 mx-5">
        <div className="">
          <h4 className='text-2xl font-semibold pb-8'>Container Transfer</h4>
        </div>
        <div className="body my-5 grid grid-cols-2 gap-20">
          <div className="col2 flex flex-col gap-10">
            <div className="flex flex-col">
              <label htmlFor="cargoId" className='font-semibold text-base'>Container ID:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <select
                  className='outline-none w-full'
                  value={cargoId}
                  onChange={(e) => setCargoId(e.target.value)}
                >
                  <option value="" className='text-[#a1a1a1]'>Enter the unique identifier for the container</option>
                  {containers.map((container) => (
                    <option key={container.containerId} value={container.containerId}>
                      {container.containerId}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="transferFrom" className='font-semibold text-base'>Transfer From:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <select
                  className='outline-none w-full'
                  value={transferFrom}
                  onChange={(e) => setTransferFrom(e.target.value)}
                >
                  <option value="" className='text-[#a1a1a1]'>Select current location of the container</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="transferDate" className='font-semibold text-base'>Transfer Date:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input
                  type="date"
                  className='outline-none w-full'
                  value={transferDate}
                  onChange={(e) => setTransferDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmationCode" className='font-semibold text-base'>Confirmation Code:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input
                  type="text"
                  className='outline-none w-full'
                  placeholder='Enter the confirmation code for the transfer'
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col2 flex flex-col gap-10">
            <div className="flex flex-col">
              <label htmlFor="transferTo" className='font-semibold text-base'>Transfer To:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <select
                  className='outline-none w-full'
                  value={transferTo}
                  onChange={(e) => setTransferTo(e.target.value)}
                >
                  <option value="" className='text-[#a1a1a1]'>Select the destined location of the container</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="reasonForTransfer" className='font-semibold text-base'>Reasons For Transfer:</label>
              <div className="border-[#999999] rounded-lg border-[1px] flex items-center p-3">
                <textarea
                  name="reasonForTransfer"
                  id="reasonForTransfer"
                  cols="20"
                  rows="10"
                  className='outline-none w-full h-[100px]'
                  value={reasonForTransfer}
                  onChange={(e) => setReasonForTransfer(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="buttons flex gap-5 justify-end items-end my-10">
              <button className='text-white bg-[#4E9352] px-10 py-2 rounded-full roboto' onClick={handleSubmit}>
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContainerTransfer;
