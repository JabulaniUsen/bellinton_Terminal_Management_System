import React, { useState } from 'react';
import Select from 'react-select';
import { AnimatePresence, motion } from 'framer-motion';

const StorageFreeDays = () => {
    const [confirmMessage, setConfirmMessage] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const cargoId = [
        { value: '', label: 'Select Cargo/BL ID', isDisabled: true },
        { value: 'CON13873', label: 'CON13873' },
        { value: 'CON23873', label: 'CON23873' },
    ];
    const vessel = [
        { value: '', label: 'Select Vessel & Voyage', isDisabled: true },
        { value: 'Vessel 1', label: 'Vessel 1' },
        { value: 'Vessel 2', label: 'Vessel 2' },
    ];
    const vesselId = [
        { value: '', label: 'Select Vessel ID', isDisabled: true },
        { value: 'VLS13873', label: 'VLS13873' },
        { value: 'VLS23873', label: 'VLS23873' },
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
                Storage Free Days
            </h3>

            <form className='return flex flex-col gap-3 mt-10'>
                <div className="flex justify-between w-[60%] my-2 gap-2">
                    <label htmlFor="" className="block font-semibold text-base">Select Vessel & Voyage: </label>
                    <Select
                        options={vessel}
                        isSearchable
                        className='w-[400px]'
                        required
                    />
                </div>

                <div className="flex justify-between items-center w-[52%] my-2 gap-2">
                    <label htmlFor="" className="block font-semibold text-base">Apply: </label>
                    <div className="flex flex-col gap-5 ">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="choice"
                                id="vessel"
                                value="vessel"
                                checked={selectedOption === 'vessel'}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="vessel">Storage Free Days to Whole Vessel</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="choice"
                                id="cargo"
                                value="cargo"
                                checked={selectedOption === 'cargo'}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="cargo">Storage Free Days Per Cargo/BL</label>
                        </div>
                    </div>
                </div>

                {selectedOption === 'vessel' && (
                    <div className="vessel">
                         {/* <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                            <label htmlFor="" className="block font-semibold text-base">Select Vessel:</label>
                            <Select
                                options={vesselId}
                                isSearchable
                                className='w-[400px]'
                                required
                            />
                        </div> */}
                        <div className="flex justify-between items-center my-8 w-[60%]">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">No of Free Days:</label>
                            <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[400px]' />
                        </div> 
                    </div>
                )}

                {selectedOption === 'cargo' && (
                    <div className="cargo">
                        <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                            <label htmlFor="" className="block font-semibold text-base">Select Cargo/BL: </label>
                            <Select
                                options={cargoId}
                                isSearchable
                                className='w-[400px]'
                                required
                            />
                        </div>
                        <div className="flex justify-between items-center my-8 w-[60%]">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">No of Free Days:</label>
                            <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[400px]' />
                        </div>
                    </div>
                )}

                <div className="flex justify-center gap-2 mt-7">
                    <button className='px-5 py-1 rounded bg-blue-800 text-white mt-3' onClick={(e) => e.preventDefault() || setConfirmMessage(true)}>Save Both Cargo/BL ID</button>
                    <button className='px-5 py-1 rounded bg-black text-white mt-3' type='button'>Reset</button>
                </div>

                {confirmMessage && 
                <AnimatePresence>
                    <motion.div
                    transition={spring} 
                    animate={{ scale: 1.1 }}
                    className='fixed w-full flex justify-center items-center h-[100%] bg-black bg-opacity-50 top-0 right-0'>
                        <div className="p-10 rounded-lg flex justify-center items-center gap-2 flex-col z-10 bg-white">
                            <p className='font-semibold text-lg'>Storage Free Days Done</p>
                            <div className="flex gap-2">
                                <button className='px-5 py-1 rounded-lg bg-blue-800 text-white mt-3' onClick={() => setConfirmMessage(false)}>Ok</button>
                                <button className='px-5 py-1 rounded-lg bg-black text-white mt-3' onClick={() => setConfirmMessage(false)}>Edit</button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>}
            </form>
        </div>
    );
}

export default StorageFreeDays;
