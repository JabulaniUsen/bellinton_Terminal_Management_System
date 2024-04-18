import React, { useState } from 'react'
import Select from 'react-select';

const BillingHistory = () => {
    const [tableData, setTableData] = useState([
        {invoiceNo: '12345', action: 'Creation', date: '2024/03/15 10:00 AM', details: 'Created by Odunayo Williams Onasanya'},
        {invoiceNo: '65345', action: 'Sending', date: '2024/03/15 10:00 AM', details: 'Partial payment of $500 recieved'},
        {invoiceNo: '12435', action: 'Payment Recieved', date: '2024/03/16 10:15 AM', details: 'Sent to Client A'},
        {invoiceNo: '19305', action: 'Creation', date: '2024/03/15 10:00 AM', details: 'Created by Odunayo Williams Onasanya'},
      ]);
    
      const [invoiceNoSearchTerm, setInvoiceNoSearchTerm] = useState('');
    
      const handleSearch = () => {
        const filteredData = tableData.filter(item =>
          item.invoiceNo.toLowerCase().includes(invoiceNoSearchTerm.toLowerCase())
        );
        setTableData(filteredData);
      };
        
        const options = [
            { value: '', label: 'Current status of the invoice', isDisabled: true },
            { value: 'In Transit', label: 'In Transit' },
            { value: 'In Yard', label: 'In Yard' },
            { value: 'Loaded', label: 'Loaded' },
          ];
  return (
    <div className='m-10'>
        <h2 className='font-bold text-2xl'>Billing History</h2>

        <div className="">
            <h3 className='text-lg font-semibold my-8'>Invoice List</h3>
            <div className="flex justify-between items-center w-[80%] my-5">
                <label htmlFor="InvoiceNumber" className="block font-semibold text-base">• Invoice Number:</label>
                <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="InvoiceNumber" name="InvoiceNumber" />
            </div>
            <div className="flex justify-between items-center w-[80%] my-5">
                <label htmlFor="customerName" className="block font-semibold text-base">• Customer Name:</label>
                <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="customerName" name="customerName" />
            </div>
            <div className="flex justify-between items-center w-[80%] my-5">
                <label htmlFor="InvoiceDate" className="block font-semibold text-base">• Invoice Date:</label>
                <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="InvoiceDate" name="InvoiceDate" />
            </div>
            <div className="flex justify-between items-center w-[80%] my-5">
                <label htmlFor="DueDate" className="block font-semibold text-base">• Due Date:</label>
                <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="DueDate" name="DueDate" />
            </div>
            <div className="flex justify-between items-center w-[80%] my-5">
                <label htmlFor="TotalAmount" className="block font-semibold text-base">• Total Amount:</label>
                <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="TotalAmount" name="TotalAmount" />
            </div>
            <div className="flex justify-between items-center w-[80%] mt-5">
                <label htmlFor="containerWidth" className="block font-semibold text-base">Status: </label>
                <Select
                    options={options}
                    isSearchable
                    className='w-[400px]'
                    required
                    placeholder="Current status of the invoice payment"
                />
            </div>
            <button className='text-white py-2 px-8 bg-blue-700 my-5 rounded-full'>View Invoice</button>
        </div>

        <div className="">
            <h3 className='text-lg font-semibold my-8'>Invoice Search and Filters:</h3>
            <div className="flex justify-between items-center w-[80%] mt-5">
                <label htmlFor="InvoiceNumber" className="block font-semibold text-base">• Search by Invoice Number:</label>
                <div className="flex flex-col gap-1">
                    {/* <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 ' required id="InvoiceNumber" name="InvoiceNumber" placeholder='Current status of the invoice payment (e.g., paid, pending, overdue).' /> */}
                    <div className="flex">
                        {/* <input type="date" className='border-gray-400 border-[1px] rounded-lg p-2' /> */}
                        <input 
                            type='text' 
                            className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' 
                            required 
                            id="InvoiceNumber" 
                            name="InvoiceNumber" 
                            placeholder='Enter Invoice Number' 
                            value={invoiceNoSearchTerm}
                            onChange={(e) => setInvoiceNoSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button className='text-white py-2 px-8 bg-blue-700 my-5 rounded-full' onClick={handleSearch}>Search</button>
        </div>

        <div className="">
            <h3 className='text-lg font-semibold my-8'>Invoice Details:</h3>

            <div className="table">
                <table className='border border-gray-400'>
                    <thead>
                        <tr>
                            <th className='border-r border-gray-400 p-3'>Invoice #</th>
                            <th className='border-r border-gray-400 p-3'>Action</th>
                            <th className='border-r border-gray-400 p-3'>Date</th>
                            <th className='border-r border-gray-400 p-3'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((rowData, index) => (
                            <tr key={index}>
                                <td className='border-r border-gray-400 p-3'>{rowData.invoiceNo}</td>
                                <td className='border-r border-gray-400 p-3'>{rowData.action}</td>
                                <td className='border-r border-gray-400 p-3'>{rowData.date}</td>
                                <td className='border-r border-gray-400 p-3'>{rowData.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default BillingHistory