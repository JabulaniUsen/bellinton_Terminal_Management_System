import React, { useState } from 'react';
import Select from 'react-select';
import DiscountTerminalInvoice2 from './DiscountTerminalInvoice2';

const DiscountTerminalInvoice = () => {
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [errMsg, setErrMsg] = useState(false);
    const [showAddTermInvoice, setShowAddTermInvoice] = useState(false); 
    const options2 = [
        { value: '', label: 'Select Invoice Number', isDisabled: true },
        { value: '0012345', label: 'CON12345' },
        { value: '0014534', label: 'CON14534' },
        { value: '0024565', label: 'CON24565' },
        { value: '0030923', label: 'CON30923' },
    ];
    
    const handleProceed = () => {
        if (invoiceNumber === '') {
            setErrMsg(true);
        } else {
            setShowAddTermInvoice(true);
        }
    };

    const handleReset = () => {
        setInvoiceNumber('');
        setErrMsg(false);
    };

    return (
        <div className="">
            {!showAddTermInvoice ? (
                <div className='m-10'>
                    <h3 className='font-bold text-2xl'>
                        Discount Terminal Invoice
                    </h3>
                    <div className="">
                        <form>
                            <div className="flex justify-between items-center w-[60%] my-5">
                                <label htmlFor="containerWidth" className="block font-semibold text-base">Select Invoice Number: </label>
                                <Select
                                    options={options2}
                                    isSearchable
                                    className='w-[400px]'
                                    value={options2.find(option => option.value === invoiceNumber)}
                                    onChange={(selectedOption) => setInvoiceNumber(selectedOption.value)}
                                />
                            </div>
                            {errMsg && <p className='text-red-600'>Please select Invoice Number</p>}

                            <div className="buttons flex w-[60%] gap-3 mx-[200px] mt-10">
                                <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='button' onClick={handleProceed}>Proceed to Discount</button>
                                <button className='text-white bg-[#828282] rounded-md py-1 px-10 cursor-pointer' type='button' onClick={handleReset}>Reset</button>
                            </div>
                        </form>   
                    </div>
                </div>
            ) : (
                <DiscountTerminalInvoice2/>
            )}
        </div>
    );
};

export default DiscountTerminalInvoice;
