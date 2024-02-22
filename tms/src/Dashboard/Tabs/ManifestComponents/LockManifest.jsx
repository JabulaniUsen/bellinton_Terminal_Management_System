import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const LockManifest = () => {
  const [lockMessage, setLockMessage] = useState(false)

  const manifestData = [
    { vesselName: "Ocean Voyager", eta: '2023-09-05 08:00 AM', etd: "2023-09-10 02:00 PM", status: "In Transit", manifestStatus: 'Complete'}
  ];

  const handleShowMessage = () => {
    setLockMessage(true)
  } 

  const handleOk = () => {
    setLockMessage(false)
  }

  return (
    <div className='m-10 oxygen'>
        <div className="head flex justify-between">
            <h3 className='text-2xl font-bold'>Lock Manifest</h3>
        </div>

        { manifestData.map ((item, index) => (
            <div className="vesselInfo my-5 flex flex-col gap-5" key={index}>
            <div className="">
                <p className='font-semibold mb-4 text-lg'>Vessel Information</p>      
                <div className="mx-5 flex flex-col gap-4">
                    <p className='font-semibold'> • Vessel Name: <span className='font-normal'>{item.vesselName}</span></p>
                    <p className='font-semibold'> • ETA (Estimated Time of Arrival): <span className='font-normal'>{item.eta}</span></p>
                    <p className='font-semibold'> • ETD (Estimated Time of Departure): <span className='font-normal'>{item.etd}</span></p>
                    <p className='font-semibold'> • Status: <span className='font-normal'>{item.status}</span></p>
                </div>
            </div>

            <div className="">
                <p className='font-semibold mb-4 text-lg'>Manifest Details</p>
                <div className="mx-5 flex flex-col gap-4">
                    <p className='font-semibold'> • Manifest Status: <span className='font-normal'>{item.manifestStatus}</span></p>
                </div>
            </div>
        </div>
        )) }



        <div className="table overflow-x-auto my-10">
          <table className="border border-collapse">
            <thead>
              <tr>
                <th className="border border-black p-2 px-5 text-center">Vessel Name</th>
                <th className="border border-black p-2 px-5 text-center">ETA</th>
                <th className="border border-black p-2 px-5 text-center">ETD</th>
                <th className="border border-black p-2 px-5 text-center">Status</th>
                <th className="border border-black p-2 px-5 text-center">Manifest Status</th>
              </tr>
            </thead>
            <tbody>
              {manifestData.map((item, index) => (
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
        </div>


        <div className="flex justify-center items-center my-[7rem]">
            <button className='bg-[#4000FF] py-1 px-12 rounded-lg text-white font-semibold' onClick={handleShowMessage}>Lock Manifest</button>
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