import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

const LockManifest = () => {
  const [lockMessage, setLockMessage] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false);

  const vesselData = [
    { vesselId: '001', vesselName: "Ocean Voyager", eta: '2024-11-04 09:00 AM', etd: "2023-09-10 14:00 PM", status: "In Transit", manifestStatus: 'Complete'},
    { vesselId: '002', vesselName: "Amazon", eta: '2024-12-07 10:00 PM', etd: "2023-09-10 17:01 PM", status: "Pending", manifestStatus: 'Inomplete'},
    { vesselId: '003', vesselName: "Aliexpress", eta: '2024-19-02 15:50 AM', etd: "2023-09-10 12:40 PM", status: "Pending", manifestStatus: 'Inomplete'},
    { vesselId: '004', vesselName: "Ocean Voyager", eta: '2024-09-04 20:30 PM', etd: "2023-09-10 18:35 PM", status: "In Transit", manifestStatus: 'Complete'}
  ];

  const handleSearch = () => {
    const filteredData = vesselData.filter(item =>
      item.vesselId.toString().includes(searchTerm.toLowerCase())
    );
  
    // Update the state with the filtered data
    setData(filteredData);
    setMoreInfo(true);
  };
  
  const [data, setData] = useState(vesselData);
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleShowMessage = () => {
    setLockMessage(true)
  } 

  const handleOk = () => {
    setLockMessage(false)
  }


  return (
    <div className='m-10 oxygen'>
        <div className="head flex justify-between">
            <h3 className='text-2xl font-bold'>Lock Vessel</h3>
        </div>

        <div className="">
            <div className="flex gap-2 my-10 items-center">
              <label htmlFor="" className='text-lg font-bold'>Select Vessel ID:</label>
              <div className="">
                <Select
                  options={vesselData.map((item) => ({ value: item.vesselId, label: item.vesselId }))}
                  value={{ value: searchTerm, label: searchTerm }}
                  onChange={(selectedOption) => setSearchTerm(selectedOption.value)}
                  isSearchable
                  placeholder="Select Vessel ID"
                  className='outline-none p-2 w-[300px] rounded'
                />
                {/* {errorText && <p className="text-red-600">Please enter your Vessel ID</p>} */}
              </div>

            <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleSearch} >View</button>
            </div>
          </div>

        {moreInfo && 
          <div className="">
            {data.map ((item, index) => (
            <div className="vesselInfo my-5 flex flex-col gap-5" key={index}>
            <div className="">
                <p className='font-semibold mb-4 text-lg'>Vessel Information</p>      
                <div className="mx-5 flex flex-col gap-4">
                    <p className='font-semibold grid grid-cols-2'> • Vessel Name: <span className='font-normal'>{item.vesselName}</span></p>
                    <p className='font-semibold grid grid-cols-2'> • ETA (Estimated Time of Arrival): <span className='font-normal'>{item.eta}</span></p>
                    <p className='font-semibold grid grid-cols-2'> • ETD (Estimated Time of Departure): <span className='font-normal'>{item.etd}</span></p>
                    <p className='font-semibold grid grid-cols-2'> • Status: <span className='font-normal'>{item.status}</span></p>
                </div>
            </div>

            <div className="">
                <p className='font-semibold mb-4 text-lg'>Manifest Details</p>
                <div className="mx-5 flex flex-col gap-4">
                    <p className='font-semibold grid grid-cols-2'> • Manifest Status: <span className='font-normal'>{item.manifestStatus}</span></p>
                </div>
            </div>
        </div>
        )) }
          </div>
        }
        <div className="agree flex justify-center items-start gap-2 my-28">
          <input type="checkbox" className='checkbox' name="" id="" />
          <p>
            By clicking the "Lock Manifest" button below, you will prevent any further <br />
            modifications to the manifest. Are you sure you want to proceed?
          </p>
        </div>



        {/* <div className="table overflow-x-auto my-10">
          <table className="border border-collapse">
            <thead>
              <tr>
                <th className="border text-white bg-black p-2 px-5 text-center">Vessel Name</th>
                <th className="border text-white bg-black p-2 px-5 text-center">ETA</th>
                <th className="border text-white bg-black p-2 px-5 text-center">ETD</th>
                <th className="border text-white bg-black p-2 px-5 text-center">Status</th>
                <th className="border text-white bg-black p-2 px-5 text-center">Manifest Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black p-2 px-5 text-center">{item.vesselName}</td>
                  <td className="border border-black p-2 px-5 text-center">{item.eta}</td>
                  <td className="border border-black p-2 px-5 text-center">{item.etd}</td>
                  <td className="border border-black p-2 px-5 text-center">{item.status}</td>
                  <td className="border border-black p-2 px-5 text-center">{item.manifestStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}


        <div className="flex justify-center items-center my-[7rem]">
            <button className='bg-[#4000FF] py-1 px-12 rounded-lg text-white font-semibold' onClick={handleShowMessage}>Lock Vessel</button>
        </div>


        {lockMessage && 
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#d9d9d9a1] "
          >
            <div className="bg-[#ffffffd3] shadow w-[471px] px-8 py-6 rounded-lg flex flex-col text-center">
              <div className="">
                <FontAwesomeIcon icon={faCircleExclamation} className='text-red-500 text-2xl'/>
              </div>
              <p className="text-2xl font-semibold py-2 my-2 border-b-[1px] border-dashed border-black">COSCO FUZHOU - 119w</p>
              <p className='text-xl font-semibold'>Manifest Is LOCKED</p>

              <div className="texts my-6 gap-3 flex flex-col justify-center items-center">
                <p>There Have Been:</p>
                <p>192 Invoice Issued,</p>
                <p>O Telex Status(es) Confirmed On The Manifest.</p>
                <p>You Can Only Add More To This Manifest By Following The Steps In The Form Instructions. Are You Sure You Want To Upload Additional Manifest?</p>
              </div>


              <div className="flex justify-center space-x-4">
                <button onClick={handleOk} className="bg-[#4000FF] text-white px-20 py-3 rounded-3xl">OK</button>
              </div>
            </div>
          </motion.div>
        }
    </div>
  )
}

export default LockManifest