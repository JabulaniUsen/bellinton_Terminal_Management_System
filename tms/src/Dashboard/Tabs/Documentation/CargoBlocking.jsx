import React, { useState } from 'react'
import Select from 'react-select';
import { AnimatePresence, motion } from 'framer-motion';

const CargoBlocking = () => {
  const [blockConfirmMessage, setBlockConfirmMessage] = useState(false);
  const [unblockConfirmMessage, setUnblockConfirmMessage] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const cargoId = [
      { value: '', label: 'Select Cargo/BL ID', isDisabled: true },
      { value: 'CON13873', label: 'CON13873' },
      { value: 'CON23873', label: 'CON23873' },
  ];

  const spring = {
      type: "spring",
      damping: 10,
      stiffness: 800
  }

  const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
  };

  return (
    <div className='m-10'>
        <h3 className='font-bold text-2xl'>
          Cargo Blocking Management
        </h3>

        <div className="flex justify-between items-center w-[70%] mt-16 gap-2">
          <label htmlFor="" className="block font-semibold text-base">Select Administrative Action: </label>
          <div className="flex justify-between gap-5 ">
              <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="block-choice"
                    id="block"
                    value="block"
                    checked={selectedOption === 'block'}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="block">Block Cargo/BL</label>
              </div>
              <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="block-choice"
                    id="unblock"
                    value="unblock"
                    checked={selectedOption === 'unblock'}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="unblock">Unblock Cargo/BL</label>
              </div>
          </div>
      </div>
      { selectedOption == 'block' && 
      <div className="">
        <h3 className='text-2xl font-semibold my-5 py-5 border-b border-gray-500'>Block Cargo/BL</h3>
        <div className="cargo">
          <div className="flex justify-between items-center w-[62%] my-2 gap-2">
            <label htmlFor="" className="block font-semibold text-base">Select Cargo/BL: </label>
              <Select
                options={cargoId}
                isSearchable
                className='w-[400px]'
                required
              />
          </div>
          <div className="flex justify-between my-8 w-[80.6%]">
              <label htmlFor="containerWidth" className="block font-semibold text-base">Reason For Blocking:</label>
              <div className="flex flex-col">
                <textarea name="" className='border-gray-400 border-[1px] rounded-lg p-1 w-[400px]' id="" cols="30" rows="5"></textarea>
                <small className='text-gray-400 mt-1'>State the reason for blocking this bill of lading here. Its good to also enclose the B/L number.</small>
              </div>
          </div>

          <div className="flex justify-between items-center w-[50%] mt-16 gap-2">
            <label htmlFor="" className="block font-semibold text-base">Block Now: </label>
            <div className="flex justify-between gap-5 ">
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="choice"
                        id="yes"
                        value="yes"
                    />
                    <label htmlFor="yes">Yes</label>
                </div>
                <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="choice"
                      id="no"
                      value="no"
                    />
                    <label htmlFor="no">No</label>
                </div>
            </div>
          </div>
        </div>
        <div className="unblockButton flex justify-center gap-2 mt-7">
          <button className='px-5 py-1 rounded bg-blue-800 text-white mt-3' onClick={(e) => e.preventDefault() || setBlockConfirmMessage(true)}>Done</button>
        </div>
      </div>
      }

      {selectedOption === 'unblock' && 
      <div className="">
      <h3 className='text-2xl font-semibold my-5 py-5 border-b border-gray-500'>Unblock Cargo/BL</h3>
      <div className="cargo">
        <div className="flex justify-between items-center w-[62%] my-2 gap-2">
          <label htmlFor="" className="block font-semibold text-base">Select Cargo/BL: </label>
            <Select
              options={cargoId}
              isSearchable
              className='w-[400px]'
              required
            />
        </div>
        <div className="flex justify-between my-8 w-[80.6%]">
            <label htmlFor="containerWidth" className="block font-semibold text-base">Reason For Unblocking:</label>
            <div className="flex flex-col">
              <textarea name="" className='border-gray-400 border-[1px] rounded-lg p-1 w-[400px]' id="" cols="30" rows="5"></textarea>
              <small className='text-gray-400 mt-1'>State the reason for unblocking this bill of lading here. Its good to also enclose the B/L number.</small>
            </div>
        </div>

        <div className="flex justify-between items-center w-[50%] mt-16 gap-2">
          <label htmlFor="" className="block font-semibold text-base">Unblock Now: </label>
          <div className="flex justify-between gap-5 ">
              <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="choice"
                    id="yes"
                    value="yes"
                  />
                  <label htmlFor="yes">Yes</label>
              </div>
              <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="choice"
                    id="no"
                    value="no"
                  />
                  <label htmlFor="no">No</label>
              </div>
          </div>
        </div>
        <div className="unblockButton flex justify-center gap-2 mt-7">
          <button className='px-5 py-1 rounded bg-blue-800 text-white mt-3' onClick={(e) => e.preventDefault() || setUnblockConfirmMessage(true)}>Done</button>
        </div>
      </div>
    </div>}
    {blockConfirmMessage && 
      <AnimatePresence>
          <motion.div
          transition={spring} 
          animate={{ scale: 1.1 }}
          className='fixed w-full flex justify-center items-center h-[100%] bg-black bg-opacity-50 top-0 right-0'>
              <div className="p-10 rounded-lg flex justify-center items-center gap-2 flex-col z-10 bg-white">
                  <p className='font-semibold text-lg'>Cargo/BL Blocked Successfull</p>
                  <div className="flex gap-2">
                    <button className='px-5 py-1 rounded-lg bg-blue-800 text-white mt-3' onClick={() => setBlockConfirmMessage(false)}>Ok</button>
                    <button className='px-5 py-1 rounded-lg bg-black text-white mt-3' onClick={() => setBlockConfirmMessage(false)}>Edit</button>
                  </div>
              </div>
          </motion.div>
      </AnimatePresence>}

      {unblockConfirmMessage && 
      <AnimatePresence>
          <motion.div
          transition={spring} 
          animate={{ scale: 1.1 }}
          className='fixed w-full flex justify-center items-center h-[100%] bg-black bg-opacity-50 top-0 right-0'>
              <div className="p-10 rounded-lg flex justify-center items-center gap-2 flex-col z-10 bg-white">
                  <p className='font-semibold text-lg'>Cargo/BL Unblocked Successfull</p>
                  <div className="flex gap-2">
                    <button className='px-5 py-1 rounded-lg bg-blue-800 text-white mt-3' onClick={() => setUnblockConfirmMessage(false)}>Ok</button>
                    <button className='px-5 py-1 rounded-lg bg-black text-white mt-3' onClick={() => setUnblockConfirmMessage(false)}>Edit</button>
                  </div>
              </div>
          </motion.div>
      </AnimatePresence>}
    </div>
  )
}

export default CargoBlocking