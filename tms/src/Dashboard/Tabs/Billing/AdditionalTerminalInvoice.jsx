import React, { useState } from 'react'
import Select from 'react-select';
import AdditionalTerminalInvoice2 from './AdditionalTerminalInvoice2';

const AdditionalTerminalInvoice = () => {
    const [showAddTermInvoice, setShowAddTermInvoice] = useState(false) 
    const options2 = [
        { value: '', label: 'Select Cargo/BL ID', isDisabled: true },
        { value: '0012345', label: 'CON12345' },
        { value: '0014534', label: 'CON14534' },
        { value: '0024565', label: 'CON24565' },
        { value: '0030923', label: 'CON30923' },
    ];

    const data = ["Victor Harrison", "Emmanuel Mike", "Odun Abeyemi"];
  return (
    <div className="">
        {!showAddTermInvoice ? (
        <div className='m-10'>
        <h3 className='font-bold text-2xl'>
            Additional Terminal Invoice
        </h3>

        <div className="">
            <form>
                <div className="flex justify-between items-center w-[60%] my-5">
                <label htmlFor="containerWidth" className="block font-semibold text-base">Container ID: </label>
                <Select
                    options={options2}
                    isSearchable
                    className='w-[400px]'
                    required
                />
                </div>
                <div className="flex justify-between items-center w-[60%] my-5">
                    <label htmlFor="invoiceNumber" className="block font-semibold text-base">Additional Invoice Number:</label>
                    <input type='text' readOnly className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="invoiceNumber" name="invoiceNumber" placeholder='CFCINV-000001' />
                </div>
                <div className="flex justify-between items-center w-[60%] my-5">
                    <label htmlFor="invoiceDate" className="block font-semibold text-base">Invoice Date:</label>
                    <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="invoiceDate" name="invoiceDate" />
                </div> 
                <div className="buttons flex w-[60%] gap-3 mx-[200px] mt-10">
                    <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit' onClick={() => setShowAddTermInvoice(true)}>Proceed</button>
                    <button className='text-white bg-[#828282] rounded-md py-1 px-10 cursor-pointer' type='reset'>Reset</button>
                </div>
            </form>   
        </div>
    </div>
    ) : (
        <AdditionalTerminalInvoice2/>
    )}
    </div>
  )
}

export default AdditionalTerminalInvoice