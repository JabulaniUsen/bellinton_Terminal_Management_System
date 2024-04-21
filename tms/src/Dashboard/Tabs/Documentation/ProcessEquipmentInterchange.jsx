import { motion, AnimatePresence, spring } from 'framer-motion';
import React, { useState, useEffect,useRef } from 'react'
import Select from 'react-select';
import Eirt from './Eirt';

const ProcessEquipmentInterchange = () => {
    const [confirmMessage, setConfirmMessage] = useState(false) 
    const [showPrintTemplate, setShowPrintTemplate] = useState(false)
    const formRef = useRef(null);
    
    const options = [
        { value: '', label: 'Select options', isDisabled: true },
        { value: 'options 1', label: 'options 1' },
        { value: 'options 2', label: 'options 2' },
    ];

    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 800
      }
  return (
    <>
        {!showPrintTemplate ? (
            <>
            <div>
                <form ref={formRef}>
                    <div className="m-10">
                        <h3 className='font-bold text-2xl'>
                            Container Cycle Management
                        </h3>
        
                        <div className="my-20">
                            <div className="grid grid-cols-2 gap-10">
    
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center ">
                                        <label htmlFor="" className='font-semibold'>Select Container ID:</label>
                                        <Select
                                        options={options}
                                        isSearchable
                                        className='w-[300px]'
                                        required
                                        />
                                    </div>
                                    
                                    <div className="flex justify-between items-center  my-2 gap-2">
                                        <label htmlFor="" className="block font-semibold text-base">Container Part: </label>
                                        <Select
                                        options={options}
                                        isSearchable
                                        className='w-[300px]'
                                        required
                                        />
                                    </div>
    
                                    <div className="flex justify-between items-center  my-2 gap-2">
                                        <label htmlFor="" className="block font-semibold text-base">Transport ID: </label>
                                        <Select
                                        options={options}
                                        isSearchable
                                        className='w-[300px]'
                                        required
                                        />
                                    </div>
                
                                    <div className="flex justify-between items-center  my-2 gap-2">
                                        <label htmlFor="" className="block font-semibold text-base">Driver ID: </label>
                                        <Select
                                        options={options}
                                        isSearchable
                                        className='w-[300px]'
                                        required
                                        />
                                    </div>
                                </div>
    
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center  my-1">
                                        <label htmlFor="" className="block font-semibold text-base">Customer ID: </label>
                                        <Select
                                        options={options}
                                        isSearchable
                                        className='w-[300px]'
                                        required
                                        />
                                    </div>
    
                                    <div className="flex justify-between items-center  my-1">
                                        <label htmlFor='' className="block font-semibold text-base">Damaged Status: </label>
                                        <Select
                                        options={options}
                                        isSearchable
                                        className='w-[300px]'
                                        required
                                        />
                                    </div>
    
    
                                    <div className="flex justify-between items-center ">
                                        <label htmlFor='' className="block font-semibold text-base">Agent ID: </label>
                                        <Select
                                        options={options}
                                        isSearchable
                                        className='w-[300px]'
                                        required
                                        />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
        
                    <div className="flex items-center justify-center gap-2 mb-20">
                        <button className='px-7 py-2 rounded-md bg-blue-800 text-white mt-3'type='submit' onClick={() => {setConfirmMessage(true)}}>Procees Doc</button>
                        <button className='px-7 py-2 rounded-md bg-gray-500 text-white mt-3' type='reset'>Reset</button>
                    </div>
        
                </form>
            </div>
            {confirmMessage && 
            <AnimatePresence>
                <motion.div
                transition={spring} 
                animate={{ scale: 1.1 }}
                className='fixed w-full flex justify-center items-center h-[100%] bg-black bg-opacity-50 top-0 right-0'>
                    <div className="p-10 rounded-lg flex justify-center items-center gap-2 flex-col z-10 bg-white">
                        <p className='font-semibold text-lg'>Equipment Interchange Receipt Processed</p>
                        <div className="flex gap-2">
                            <button className='px-5 py-1 rounded-lg bg-blue-800 text-white mt-3' onClick={() => setConfirmMessage(false)}>Ok</button>
                            <button className='px-5 py-1 rounded-lg bg-black text-white mt-3' onClick={() => setConfirmMessage(false) || setShowPrintTemplate(true)}>Print</button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>}
            </>
        ) : (
            <Eirt/>
        )}
    </>
  )
}

export default ProcessEquipmentInterchange