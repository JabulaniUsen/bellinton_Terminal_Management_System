import React, {useState} from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OutboundGateReport from './OutboundGateReport';

const OutboundGate = () => { 
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
        <h2 className='font-bold text-2xl'>Outbound Gate Exit</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-12">
            <div className="mt-10">
              <div>
                <div className="my-10">
                  <h2 className='text-lg font-bold'>Loading Information:</h2>
                  <div className="flex justify-between items-center mt-7">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Container ID: </label>
                      <Select
                        options={containerId}
                        isSearchable
                        className='w-[300px]'
                        required
                      />
                  </div>
                </div>

                <div className="my-10">
                  <h2 className='text-lg font-bold'>Truck Information:</h2>
                  <div className="flex justify-between items-center mt-7">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Truck Number/ID: </label>
                      <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' required/>
                  </div>
                </div>

                <div className="my-10">
                  <h2 className='text-lg font-bold'>Driver Information:</h2>
                  <div className="flex justify-between mt-7">
                    <label htmlFor="description" className="block font-semibold text-base">Driver's Name: </label>
                    <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' required/>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Driver's Contact Number:</label>
                    <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' required />
                  </div>
                </div>

                <div className="my-10">
                  <h2 className='text-lg font-bold'>Security Check:</h2>
                  <div className="flex justify-between items-center mt-7">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Documentation Verification:</label>
                      <input type='checkbox' className='w-[20px] h-[20px]' required/>
                  </div>
                  <div className="flex justify-between items-center my-4">
                      <label htmlFor="movementType" className="block font-semibold text-base">Cargo Inspection:</label>
                      <input type='checkbox' className='w-[20px] h-[20px]' required/>
                  </div>
                  <div className="flex justify-between items-center my-4">
                      <label htmlFor="movementType" className="block font-semibold text-base">Driver Verification:</label>
                      <input type='checkbox' className='w-[20px] h-[20px]' required/>
                  </div>
                </div>
                <div className="flex justify-between gap-4 items-center my-7">
                  <label htmlFor="location" className="text-lg font-bold">Signature/Confirmation: </label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' placeholder='Enter security code' required/>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div>
                <div className="my-10">
                  <h2 className='text-lg font-bold'>Destination and Delivery:</h2>
                  <div className="flex justify-between items-center mt-7">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">Destination: </label>
                    <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' required/>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">TDO no: </label>
                    <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' required/>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">Last Payment Amount: </label>
                    <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' required/>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">TDO Validity Date: </label>
                    <input type='date' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' required/>
                  </div>
                </div>

                <div className="my-10">
                  <h2 className='text-lg font-bold'>Gate Out Information:</h2>
                  <div className="flex justify-between items-center mt-7">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">Gate Out Operation: </label>
                    <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' required/>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">Seal Information: </label>
                    <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' required/>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">Seal Condition: </label>
                    <select name="" id="" className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'>
                      <option value="">Select Seal Condition</option>
                      <option value="ok">Okay</option>
                      <option value="damaged">Damaged</option>
                    </select>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                      <label className="block font-semibold text-base">Security Check:</label>
                      <div className="flex items-center border-gray-400 border-[1px] rounded-lg p-1 w-[300px]">
                        <input type="radio" id="trueOption" name="securityCheck" value="true" required />
                        <label htmlFor="trueOption" className="ml-1 mr-3">True</label>
                        <input type="radio" id="falseOption" name="securityCheck" value="false" required />
                        <label htmlFor="falseOption" className="ml-1">False</label>
                      </div>
                  </div>
                  <div className="flex justify-between my-7">
                    <label htmlFor="description" className="block font-semibold text-base">Security Check Notes: </label>
                    <textarea className='border-gray-400 border-[1px] rounded-lg p-4 w-[300px]' required name="description" id="description" rows="3"></textarea>
                  </div>
                </div>

                <div className="flex justify-between items-center my-7">
                  <label htmlFor="location" className="text-lg font-bold">Gate-in Date: </label>
                  <input type='date' className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]' required/>
                </div>


              </div>
            </div>
          </div>
                <div className="buttons flex gap-3 mx-[200px] mt-10">
                  <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' type='submit'>Submit</button>
                  <button className='text-white bg-[#828282] rounded-md py-1 px-10' type='reset'>Reset</button>
                  <p className='text-white bg-[#4e9352] rounded-md py-1 px-10 cursor-pointer' onClick={handleShowReport}>View Entry Details</p>
                </div>
        </form>
        <ToastContainer />
      </div>
      ) : (
        <OutboundGateReport />
      )}
    </div>
  );
};

export default OutboundGate;
