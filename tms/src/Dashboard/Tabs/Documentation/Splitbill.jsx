import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Select from 'react-select';

const Splitbill = () => {
    const [selectedCargoId, setSelectedCargoId] = useState('');
    const [selectedContainers, setSelectedContainers] = useState([]);
    const [selectedChoice, setSelectedChoice] = useState('');
    const [confirmMessage, setConfirmMessage] = useState(false);

    const handleChoiceChange = (event) => {
        setSelectedChoice(event.target.value);
    };

    const cargoId = [
        { value: '', label: 'Select Cargo/BL ID', isDisabled: true },
        { value: 'CON13873', label: 'CON13873' },
        { value: 'CON23873', label: 'CON23873' },
    ];

    const handleCargoIdChange = (selectedOption) => {
        setSelectedCargoId(selectedOption.value);
    };

    const handleContainerChange = (containerId) => {
        if (selectedContainers.includes(containerId)) {
            setSelectedContainers(selectedContainers.filter(id => id !== containerId));
        } else {
            setSelectedContainers([...selectedContainers, containerId]);
        }
    };

    const handleReset = () => {
        setSelectedContainers([]);
        setSelectedCargoId(''); 
        setSelectedChoice('');
    };

    const handleConfirm = () => {
        setConfirmMessage(false)
        setSelectedContainers([]);
        setSelectedCargoId(''); 
        setSelectedChoice('');
    }

    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 800
    }

    return (
        <div className="m-10">
            <h3 className='font-bold text-2xl'>
                Split Bill Landing
            </h3>

            <form className='return flex flex-col gap-3 mt-10'>
                <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                    <label htmlFor="" className="block font-semibold text-base">Terminal: </label>
                    <Select
                        options={cargoId}
                        isSearchable
                        className='w-[400px]'
                        required
                        onChange={handleCargoIdChange}
                    />
                </div>

                <div className="flex justify-between w-[61%] my-2 ">
                    <p className="block font-semibold text-base">Containers</p>
                    <div className="containersInputs grid grid-cols-3 gap-6 ">
                        {[1, 2, 3, 4].map(containerId => (
                            <div key={containerId} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className='w-5 h-5'
                                    id={`container-${containerId}`}
                                    onChange={() => handleContainerChange(containerId)}
                                    checked={selectedContainers.includes(containerId)}
                                />
                                <label htmlFor={`container-${containerId}`}>Container {containerId}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='font-semibold ml-48'>Selected containers will be moved to a new bill lading number marked with “N”</p>
                <div className="fullInfo mt-10">
                    <p className='font-semibold'>New BL Number: <span className='font-normal ml-3'>{selectedCargoId}</span></p>
                    <p className='font-semibold'>Selected Containers: <span className='font-normal ml-3'>{selectedContainers.map(containerId => `Container ${containerId}`).join(', ')}</span></p>
                </div>
                <div className="flex items-center gap-12 ml-[190px] mt-10">
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="choice"
                            id="split"
                            value="split"
                            checked={selectedChoice === 'split'}
                            onChange={handleChoiceChange}
                        />
                        <label htmlFor="split">Split into a new Bill of lading</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="choice"
                            id="cancel"
                            value="cancel"
                            checked={selectedChoice === 'cancel'}
                            onChange={handleChoiceChange}
                        />
                        <label htmlFor="cancel">Cancel</label>
                    </div>
                </div>
                <div className="flex justify-center gap-2 mt-7">
                    <div className="flex justify-center gap-2 mt-7">
                        <button className='px-5 py-1 rounded bg-blue-800 text-white mt-3' onClick={(e) => e.preventDefault() || setConfirmMessage(true)}>Save Both Cargo/BL ID</button>
                        <button className='px-5 py-1 rounded bg-black text-white mt-3' type='button' onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </form>
            {confirmMessage && 
            <AnimatePresence>
                <motion.div
                transition={spring} 
                animate={{ scale: 1.1 }}
                className='fixed w-full flex justify-center items-center h-[100%] bg-black bg-opacity-50 top-0 right-0'>
                    <div className="p-10 rounded-lg flex justify-center items-center gap-2 flex-col z-10 bg-white">
                        <p className='font-semibold text-lg'>Split Cargo/BL Done</p>
                        <div className="flex gap-2">
                            <button className='px-5 py-1 rounded-lg bg-blue-800 text-white mt-3' onClick={handleConfirm}>Ok</button>
                            <button className='px-5 py-1 rounded-lg bg-black text-white mt-3' onClick={() => setConfirmMessage(false)}>Edit</button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>}
        </div>
    );
}

export default Splitbill;
