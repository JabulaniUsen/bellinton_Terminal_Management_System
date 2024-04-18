import React from 'react'
import Select from 'react-select';
import filter from '../../../assets/funel.png'

const InvoiceManagement = () => {
    const options = [
        { value: '', label: 'Current status of the invoice', isDisabled: true },
        { value: 'In Transit', label: 'In Transit' },
        { value: 'In Yard', label: 'In Yard' },
        { value: 'Loaded', label: 'Loaded' },
      ];
  return (
    <div className='m-10'>
        <h2 className='font-bold text-2xl'>Invoice Management</h2>
        <div className="mt-10">
            <div>
                <div className="flex justify-between items-center w-[60%] my-5">
                    <label htmlFor="InvoiceNumber" className="block font-semibold text-base">Invoice Number:</label>
                    <input 
                        type='text' 
                        className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' 
                        required 
                        id="InvoiceNumber" 
                        name="InvoiceNumber" 
                        placeholder='Enter Invoice Number'
                        />
                </div>

                <div className="flex justify-between items-center w-[60%] my-5">
                    <label htmlFor="CustomerName" className="block font-semibold text-base">Customer Name:</label>
                    <input 
                        type='text' 
                        className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' 
                        required 
                        id="CustomerName" 
                        name="CustomerName" 
                        placeholder='Name of the customer associated with the invoice'
                        />
                </div>

                <div className="flex justify-between items-center w-[60%] my-5">
                    <label htmlFor="InvoiceDate" className="block font-semibold text-base">Invoice Date:</label>
                    <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="InvoiceDate" name="InvoiceDate" />
                </div>

                <div className="flex justify-between items-center w-[60%] my-5">
                    <label htmlFor="TotalAmount" className="block font-semibold text-base">Total Amount:</label>
                    <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="TotalAmount" name="TotalAmount" />
                </div>

                <div className="flex justify-between items-center w-[60%] mt-5">
                    <label htmlFor="containerWidth" className="block font-semibold text-base">Status: </label>
                    <Select
                        options={options}
                        isSearchable
                        className='w-[400px]'
                        required
                        placeholder="Current status of the invoice"
                    />
                </div>
                <button className='text-white px-7 py-2 rounded-full bg-blue-700 my-10'>View Invoice</button>
            </div>
            <div className="">
                <h3 className='text-xl font-bold '>Invoice Actions</h3>
                <div className="flex gap-5 items-center my-10">
                    <button className='text-white px-7 py-2 rounded-full bg-blue-700'>View/Edit</button>
                    <button className='text-white px-7 py-2 rounded-full bg-blue-700'>Send</button>
                    <button className='text-white px-7 py-2 rounded-full bg-blue-700'>Download</button>
                    <button className='text-white px-7 py-2 rounded-full bg-blue-700'>Record Payment</button>
                    <button className='text-white px-7 py-2 rounded-full bg-blue-700'>Delete</button>
                </div>
            </div>

            <div className="filter mt-20">
                <h3 className='text-xl font-bold mb-10'>Invoice Filters and Search</h3>
                <div className="border border-black rounded-full w-[1000px] px-5 flex items-center justify-between">
                    <input type="text" className='w-full outline-none' placeholder='Search for invoices by invoice number, customer name, or other relevant keywords.' />
                    <div className="flex items-center gap-3">
                        <img src={filter} alt="" className='cursor-pointer' />
                        <button className='text-white py-2 px-8 bg-[#000] rounded-full '>Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvoiceManagement