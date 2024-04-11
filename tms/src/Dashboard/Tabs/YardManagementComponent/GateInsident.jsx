import React, {useState} from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GateInsidentList from './GateInsidentList';

const GateInsident = () => {
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

    const inType = [
        { value: '', label: '(e.g., Accident, security breach, safety hazard)', isDisabled: true },
        { value: 'Accident', label: 'Accident' },
        { value: 'Security breach', label: 'Security breach' },
        { value: 'Safty hazard', label: 'Safty hazard' },
      ];
      const secRes = [
        {value: '', label: "(e.g., Security personnel deployed)", isDisabled: true},
        {value: 'Security personnel deployed', label: 'Security personnel deployed'},
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
      <h2 className='font-bold text-2xl'>Gate Incident Reporting</h2>
      <form onSubmit={handleSubmit} >
      <div className="grid grid-cols-2 gap-12">
        <div className="mt-10">
          <div>
            <div className="my-10">
              <h2 className='text-lg font-bold'>Incident Details:</h2>
              <div className="flex justify-between items-center mt-7">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Incident Type: </label>
                  <Select
                    options={inType}
                    isSearchable
                    className='w-[260px]'
                    placeholder='Accident, hazard, etc...'
                    />
              </div>
              <div className="flex justify-between items-center my-1">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Incident Date and Time: </label>
                  <div className="flex gap-1 w-[260px]">
                    <input type='time' className='border-gray-400 border-[1px] rounded-lg p-1' />
                    <input type='date' className='border-gray-400 border-[1px] rounded-lg p-1' />
                  </div>
              </div>
              <div className="flex justify-between items-center my-1">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Incident Location: </label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
              </div>
              <div className="flex justify-between items-center my-1">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Incident Description: </label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
              </div>
            </div>

            <div className="my-10">
              <h2 className='text-lg font-bold'>Involved Parties:</h2>
              <div className="flex justify-between items-center mt-7">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Name(s) of Involved Party(s): </label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
              </div>
              <div className="flex justify-between items-center mt-7">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Affiliation/Company: </label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
              </div>
              <div className="flex justify-between items-center mt-7">
                  <label htmlFor="containerWidth" className="block font-semibold text-base">Contact Information (phone):</label>
                  <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
              </div>
            </div>

            <div className="my-10">
              <h2 className='text-lg font-bold'>Vehicle/Equipment Details:</h2>
              <div className="flex justify-between mt-7">
                <label htmlFor="description" className="block font-semibold text-base">Truck ID: </label>
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
              <h2 className='text-lg font-bold'>Injury/Damage Information:</h2>
              <div className="flex justify-between items-center mt-7">
                <label htmlFor="containerWidth" className="block font-semibold text-base">Description of Injuries/Damages: </label>
                <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
              </div>
              <div className="flex justify-between items-center mt-2">
                <label htmlFor="containerWidth" className="block font-semibold text-base">Severity of Injuries/Damages: </label>
                <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
              </div>
              <div className="flex justify-between items-center mt-2">
                  <label className="block font-semibold text-base">Propery Damange</label>
                 <Select
                    options={yn}
                    isSearchable
                    className='w-[260px]'
                    placeholder='Yes or No'
                    />
                </div>
            </div>

            <div className="my-10">
              <h2 className='text-lg font-bold'>Security Information:</h2>
              <div className="flex justify-between items-center mt-7">
                <label htmlFor="containerWidth" className="block font-semibold text-base">Security Response: </label>
                <Select
                    options={secRes}
                    isSearchable
                    className='w-[260px]'
                    placeholder="Vehicle Inspection"
                    />
                {/* <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' /> */}
              </div>
              <div className="flex justify-between items-center mt-2">
                <label htmlFor="containerWidth" className="block font-semibold text-base">Security Measures Implemented: </label>
                <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
              </div>
            </div>
            <div>
              <div className="my-10">
                <h2 className='text-lg font-bold'>Investigation Details:</h2>
                
                <div className="flex justify-between my-7">
                    <label htmlFor="description" className="block font-semibold text-base">Additional Comments or Notes: </label>
                    <textarea className='border-gray-400 border-[1px] rounded-lg p-4 w-[60%]'  name="description" id="description" rows="3"></textarea>
                </div>

                <div className="flex justify-between items-center my-1">
                  <label htmlFor="containerWidth" className="block font-bold text-lg">Incident Date and Time: </label>
                  <div className="flex gap-1 w-[260px]">
                    <input type='time' className='border-gray-400 border-[1px] rounded-lg p-1' />
                    <input type='date' className='border-gray-400 border-[1px] rounded-lg p-1' />
                  </div>
                </div>

                <div className="flex justify-between my-7">
                    <div>
                        <input type="file" name="" id="attachment" className='hidden' onChange={handleFileChange} />
                        {!isFileUploaded ? (
                            <label htmlFor="attachment" className='text-blue-500 cursor-pointer text-lg underline'>Attachments (e.g., scanned documents, photos)</label>
                        ) : (
                            <p className='text-green-600'>File uploaded successfully!</p>
                        )}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="buttons flex items-center justify-center gap-3 mt-10">
          <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit'>Submit</button>
          <button className='text-white bg-[#828282] rounded-md py-1 px-10' type='reset'>Reset</button>
          <p className='text-white bg-[#4000FF] rounded-md py-1 px-10 cursor-pointer' onClick={handleShowList}>View Incident List</p>          
        </div>
      </form>
      <ToastContainer />
    </div>
    ) : (
      <GateInsidentList/>
    )}
   </div> 
  );
};

export default GateInsident;
