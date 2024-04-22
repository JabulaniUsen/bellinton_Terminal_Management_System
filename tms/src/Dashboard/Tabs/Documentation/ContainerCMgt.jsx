import React, { useState, useRef } from 'react';
import Select from 'react-select';
import ProcessEquipmentInterchange from './ProcessEquipmentInterchange';
import ProcessTerminalDeliveryOrder from './ProcessTerminalDeliveryOrder';

const ContainerCMgt = () => {
    const [confirmMessage, setConfirmMessage] = useState(false);
    const [showPrintTemplate, setShowPrintTemplate] = useState(false);
    const [viewProcessEqu, setViewProcessEqu] = useState(false);
    const [viewProcessOrder, setViewProcessOrder] = useState(false);
    const [cycleType, setCycleType] = useState(''); // State to track selected cycle type
    const formRef = useRef(null);

    const terminal = [
        { value: '', label: 'Select Terminal', isDisabled: true },
        { value: 'Terminal 1', label: 'Terminal 1' },
        { value: 'Terminal 2', label: 'Terminal 2' },
    ];
    const bl = [
        { value: '', label: 'Select BL', isDisabled: true },
        { value: 'CON39829', label: 'CON39829' },
        { value: 'CON37298', label: 'CON37298' },
    ];

    const handleCycleTypeChange = (e) => {
        setCycleType(e.target.value); 
    };

    const viewReture = () => {
        if (cycleType === 'return') {
            setViewProcessEqu(true)
        } else  {
            setViewProcessOrder(true)
        }
    }

    return (
        <>
            {!viewProcessEqu  && !viewProcessOrder ? (
                <div>
                    <form ref={formRef}>
                        <div className="m-10">
                            <h3 className='font-bold text-2xl'>
                                Container Cycle Management
                            </h3>

                            <div className="my-20">
                                <div className="flex flex-col gap-4">

                                    <div className="flex justify-between items-center w-[60%]">
                                        <p className='font-semibold'> Cycle Type</p>
                                        <div className="flex items-center gap-10">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="choice"
                                                    id="Delivery"
                                                    value="delivery" // Set value to identify the type
                                                    onChange={handleCycleTypeChange} // Handle change event
                                                />
                                                <label htmlFor="Delivery">Delivery</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="choice"
                                                    id="Return"
                                                    value="return" // Set value to identify the type
                                                    onChange={handleCycleTypeChange} // Handle change event
                                                />
                                                <label htmlFor="Return">Return</label>
                                            </div>
                                        </div>
                                    </div>

                                    {cycleType === 'return' && (
                                        <div className='return flex flex-col gap-3'>
                                            <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                                                <label htmlFor="" className="block font-semibold text-base">Terminal: </label>
                                                <Select
                                                options={terminal}
                                                isSearchable
                                                className='w-[300px]'
                                                required
                                                />
                                            </div>

                                            <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                                                <label htmlFor="" className="block font-semibold text-base">Select BL: </label>
                                                <Select
                                                options={bl}
                                                isSearchable
                                                className='w-[300px]'
                                                required
                                                />
                                            </div>
                        
                                            <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                                                <label htmlFor="" className="block font-semibold text-base">Return Date: </label>
                                                <input type='date' className='border-gray-400 border-[1px] rounded p-1 px-2 w-[300px]'/>
                                            </div>

                                            <div className="flex justify-between items-center w-[60%] my-1">
                                                <label htmlFor="" className="block font-semibold text-base">EIR NO.: </label>
                                                <input type='text' className='border-gray-400 border-[1px] rounded p-1 px-2 w-[300px]' />
                                            </div>

                                            <div className="flex justify-between items-center w-[60%] my-1">
                                                <p className="block font-semibold text-base">Container List: </p>
                                                <div className="flex gap-2 items-center">
                                                    <input type='checkbox' className='border-gray-400 border-[1px] rounded p-1 w-5 h-5' />
                                                    <label htmlFor="">BMOU5038886</label>
                                                </div>
                                            </div>


                                            <div className="flex justify-between items-center w-[60%]">
                                                <p className='font-semibold'>Update Cont. Cycle:</p>
                                                <div className="flex items-center gap-10">
                                                    <div className="flex items-center gap-2">
                                                        <input type="radio" name="choice" id="Yes" />
                                                        <label htmlFor="Yes">Yes</label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input type="radio" name="choice" id="No" />
                                                        <label htmlFor="No">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {cycleType === 'delivery' && (
                                        <div className='delivery flex flex-col gap-3'>
                                            <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                                                <label htmlFor="" className="block font-semibold text-base">Terminal: </label>
                                                <Select
                                                options={terminal}
                                                isSearchable
                                                className='w-[300px]'
                                                required
                                                />
                                            </div>

                                        <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                                            <label htmlFor="" className="block font-semibold text-base">Select BL: </label>
                                            <Select
                                            options={bl}
                                            isSearchable
                                            className='w-[300px]'
                                            required
                                            />
                                        </div>
                    
                                        <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                                            <label htmlFor="" className="block font-semibold text-base">Validity Date: </label>
                                            <input type='date' className='border-gray-400 border-[1px] rounded p-1 px-2 w-[300px]'/>
                                        </div>

                                        <div className="flex justify-between items-center w-[60%] my-1">
                                            <label htmlFor="" className="block font-semibold text-base">TDO NO.: </label>
                                            <input type='text' className='border-gray-400 border-[1px] rounded p-1 px-2 w-[300px]' />
                                        </div>

                                        <div className="flex justify-between items-center w-[60%] my-1">
                                            <p className="block font-semibold text-base">Container List: </p>
                                            <div className="flex gap-2 items-center">
                                                <input type='checkbox' className='border-gray-400 border-[1px] rounded p-1 w-5 h-5' />
                                                <label htmlFor="">BMOU5038886</label>
                                            </div>
                                        </div>


                                        <div className="flex justify-between items-center w-[60%]">
                                            <p className='font-semibold'>Update Cont. Cycle:</p>
                                            <div className="flex items-center gap-10">
                                                <div className="flex items-center gap-2">
                                                    <input type="radio" name="choice" id="Yes" />
                                                    <label htmlFor="Yes">Yes</label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input type="radio" name="choice" id="No" />
                                                    <label htmlFor="No">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-20">
                            <button className='px-7 py-2 rounded-md bg-blue-800 text-white mt-3' type='submit' onClick={viewReture}>Proceed to Process Doc</button>
                            <button className='px-7 py-2 rounded-md bg-gray-500 text-white mt-3' type='reset'>Reset</button>
                        </div>

                    </form>
                </div>
            ) : viewProcessEqu ? (
                <ProcessEquipmentInterchange />
            ) : (
                <ProcessTerminalDeliveryOrder />
            )}
        </>
    )
}

export default ContainerCMgt;