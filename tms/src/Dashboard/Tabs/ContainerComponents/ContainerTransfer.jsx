import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContainerTransfer = () => {
  const [containerId, setContainerId] = useState('');
  const [transfer_from, setTransfer_from] = useState('');
  const [transfer_to, setTransferTo] = useState('');
  const [transfer_date, settransfer_date] = useState('');
  const [confirmation_code, setConfirmation_code] = useState('');
  const [reasons_for_transfer, setReasonForTransfer] = useState('');
  const [containers, setContainers] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const containerResponse = await axios.get('https://exprosys-backend.onrender.com/api/v1/containers/');
      // const locationResponse = await axios.get('https://exprosys-backend.onrender.com/api/v1/containers/');
      setContainers(containerResponse.data);
      setLocations(locationResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async () => {
    const transferData = {
      containerId,
      transfer_from,
      transfer_to,
      transfer_date,
      confirmation_code,
      reasons_for_transfer,
    };

    try {
      await axios.post('https://exprosys-backend.onrender.com/api/v1/container-transfer/', transferData);
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
    setContainerId('');
    setTransfer_from('');
    setTransferTo('');
    settransfer_date('');
    setConfirmation_code('');
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
              <label htmlFor="containerId" className='font-semibold text-base'>Container ID:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                {/* <select
                  className='outline-none w-full'
                  value={containerId}
                  onChange={(e) => setContainerId(e.target.value)}
                >
                  <option value="" className='text-[#a1a1a1]'>Enter the unique identifier for the container</option>
                  {containers.map((container) => (
                    <option key={container.container_id} value={container.container_id}>
                      {container.container_id}
                    </option>
                  ))}
                </select> */}
                <input 
                  type="text"
                  value={containerId}
                  onChange={(e) => setContainerId(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="transfer_from" className='font-semibold text-base'>Transfer From:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text"
                  className='outline-none w-full'
                  value={transfer_from}
                  onChange={(e) => setTransfer_from(e.target.value)}
                  />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="transfer_date" className='font-semibold text-base'>Transfer Date:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input
                  type="date"
                  className='outline-none w-full'
                  value={transfer_date}
                  onChange={(e) => settransfer_date(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmation_code" className='font-semibold text-base'>Confirmation Code:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input
                  type="text"
                  className='outline-none w-full'
                  placeholder='Enter the confirmation code for the transfer'
                  value={confirmation_code}
                  onChange={(e) => setConfirmation_code(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col2 flex flex-col gap-10">
            <div className="flex flex-col">
              <label htmlFor="transfer_to" className='font-semibold text-base'>Transfer To:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  className='outline-none w-full'
                  value={transfer_to}
                  onChange={(e) => setTransferTo(e.target.value)} type="text"
                  />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="reasons_for_transfer" className='font-semibold text-base'>Reasons For Transfer:</label>
              <div className="border-[#999999] rounded-lg border-[1px] flex items-center p-3">
                <textarea
                  name="reasons_for_transfer"
                  id="reasons_for_transfer"
                  cols="20"
                  rows="10"
                  className='outline-none w-full h-[100px]'
                  value={reasons_for_transfer}
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
