import { fas } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GateAccessControlList from './GateAccessControlList';

const GateAccessControl = () => {
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [showList, setShowList] = useState(false)

    const handleShowList = () => {
      setShowList(true)
    }

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
          setIsFileUploaded(true);
        } else {
          setIsFileUploaded(false);
        }
      };

    const options2 = [
        { value: '', label: 'Select Cargo/BL ID', isDisabled: true },
        { value: '0012345', label: 'CON12345' },
        { value: '0014534', label: 'CON14534' },
        { value: '0024565', label: 'CON24565' },
        { value: '0030923', label: 'CON30923' },
      ];
      const accessType = [
        {value: '', label: "(driver's license, employee ID)", isDisabled: true},
        { value: "Driver's License", label: "Driver's License" },
        { value: 'Employee ID', label: 'Employee ID' },
      ]
      const authType = [
        {value: '', label: "driver's license, employee ID", isDisabled: true},
        {value: 'Entry', label: 'Entry'}, 
        {value: 'Exit', label: 'Exit'}
      ]
      const vehicle = [
        {value: '', label: "e.g., vehicle inspection", isDisabled: true},
        {value: 'SUV', label: 'SUV'}, 
        {value: 'Truck', label: 'Truck'}
      ]
      const inre = [
        {value: 'Good', label: 'Good'}, 
        {value: 'Bad', label: 'Bad'}
      ]
      const yn = [
        {value: 'Yes', label: 'Yes'}, 
        {value: 'No', label: 'No'}
      ]
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Form submitted successfully!');
  };

  return (
    <div className="">
      {!showList ? (
        <div className='m-10 poppins'>
        <h2 className='font-bold text-2xl'>Gate Access Control</h2>
        <form onSubmit={handleSubmit} >
          <div className="grid grid-cols-2 gap-12">
            <div className="mt-10">
              <div>
                <div className="my-10">
                  <h2 className='text-lg font-bold'>Access Control Details</h2>
                  <div className="flex justify-between items-center mt-7">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Date and Time of Access: </label>
                      <div className="w-[260px]">
                        <input type='date' className='border-gray-400 border-[1px] rounded-lg p-1' />
                        <input type='time' className='border-gray-400 border-[1px] rounded-lg p-1' />
                      </div>
                  </div>
                  <div className="flex justify-between items-center my-1">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Gate/Entry Point: </label>
                      <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                  </div>
                  <div className="flex justify-between items-center my-1">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Security Officer Name: </label>
                      <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                  </div>
                  <div className="flex justify-between items-center my-1">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Security Officer ID/Number: </label>
                      <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                  </div>
                </div>
    
                <div className="my-10">
                  <h2 className='text-lg font-bold'>Truck Information:</h2>
                  <div className="flex justify-between items-center mt-7">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Truck Number/ID: </label>
                      <Select
                        options={options2}
                        isSearchable
                        className='w-[260px]'
                        
                        />
                      {/* <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' /> */}
                  </div>
                </div>
    
                <div className="my-10">
                  <h2 className='text-lg font-bold'>Company/Organization:</h2>
                  <div className="flex justify-between mt-7">
                    <label htmlFor="description" className="block font-semibold text-base">ID Verification: </label>
                    <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                  </div>
                </div>
    
                <div className="my-10">
                  <h2 className='text-lg font-bold'>Access Permission</h2>
                  <div className="flex justify-between items-center mt-7">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Access Type: </label>
                      <Select
                        options={accessType}
                        isSearchable
                        className='w-[260px]'
                        placeholder="Driver's license, ID "
                        
                        />
                  </div>
                  <div className="flex justify-between items-center my-1">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Authorized Entry/Exit Time: </label>
                      <Select
                        options={authType}
                        isSearchable
                        className='w-[260px]'
                        placeholder="Entry, exit"
                        
                        />
                      {/* <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' /> */}
                  </div>
                  <div className="flex justify-between items-center my-1">
                      <label htmlFor="containerWidth" className="block font-semibold text-base">Authorized Areas/Sections: </label>
                      <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                  </div>
                </div>
    
                <div className="flex justify-between gap-4 items-center my-7">
                  <label htmlFor="location" className="text-lg font-bold">Signature/Confirmation: </label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='Enter security code' />
                </div>
              </div>
            </div>
    
            <div className="mt-10">
              <div>
                <div className="my-10">
                  <h2 className='text-lg font-bold'>Reason for Access:</h2>
                  <div className="flex justify-between items-center mt-7">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">Purpose of Vist: </label>
                    <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">Destination: </label>
                    <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                  </div>
                </div>
    
                <div className="my-10">
                  <h2 className='text-lg font-bold'>Security Checkpoints:</h2>
                  <div className="flex justify-between items-center mt-7">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">Security Checkpoint 1: </label>
                    <Select
                        options={vehicle}
                        isSearchable
                        className='w-[260px]'
                        placeholder="Vehicle Inspection"
                        />
                    {/* <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' /> */}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">Inspection Result: </label>
                    <Select
                        options={inre}
                        isSearchable
                        className='w-[260px]'
                        />
                    {/* <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' /> */}
                  </div>
                  
    
    
                  <div className="my-10">
                    <h2 className='text-lg font-bold'>Access Control Status:</h2>
                    <div className="flex justify-between items-center mt-2">
                      <label className="block font-semibold text-base">Access Granted:</label>
                    <Select
                        options={yn}
                        isSearchable
                        className='w-[260px]'
                        placeholder='Yes or No'
                        />
                    </div>
                    <div className="flex justify-between my-7">
                        <div className="">
                            <label htmlFor="description" className="block font-semibold text-base">Access Denied Reason (if applicable): </label>
                            <small>
                                <input type="file" name="" id="attachment" className='hidden' onChange={handleFileChange} />
                                {!isFileUploaded ? (
                                    <label htmlFor="attachment" className='text-blue-500 cursor-pointer'>Attachments(e.g., photos, documents)</label>
                                ) : (
                                    <label className='text-green-600'>File uploaded successfully!</label>
                                )}
                            </small>
                        </div>
                        <textarea className='border-gray-400 border-[1px] rounded-lg p-4 w-[65%]'  name="description" id="description" rows="3"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons flex items-center gap-3 mx-[300px] mt-10">
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit'>Submit</button>
            <button className='text-white bg-[#828282] rounded-md py-1 px-10' type='reset'>Reset</button>
            <p className='text-white bg-[#4000FF] rounded-md py-1 px-10 cursor-pointer' onClick={handleShowList}>View Access List</p>
          </div>
        </form>
        <ToastContainer />
      </div>
      ) : (
        <GateAccessControlList/>
      )}
    </div>
  );
};

export default GateAccessControl;
