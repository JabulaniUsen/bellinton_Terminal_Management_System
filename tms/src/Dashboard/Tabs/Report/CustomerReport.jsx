import React, { useRef } from 'react'
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import 'jspdf-autotable';

const CustomerReport = () => {
    const data = [
        { customerId: '1001', customerName: 'ABC Shipping Co.', contactPerson: 'John Smith', email: 'john@abcshipping.com', phone: '+1 (555) 123-4567', address: '123 Main Street'},
    { customerId: '1002', customerName: 'XYZ Logistics', contactPerson: 'Emily Dao', email: 'john@abcshipping.com', phone: '+1 (555) 123-4567', address: '123 Main Street'},
      ];

      const componentRef = useRef();

      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    

  return (
    <>
    <div className={`moreInfo my-10 mx-5`} ref={componentRef}>
        <div className="head flex justify-between mx-5">
            <h3 className='text-2xl font-bold'>Customer Reports</h3>
        </div>
          <div className="table overflow-x-auto my-10">
          <table className="border border-collapse">
            <thead>
              <tr className="grid grid-cols-6 border border-black">
                <th className=" border bg-black text-white py-2">Customer ID</th>
                <th className=" border bg-black text-white py-2">Customer Name</th>
                <th className=" border bg-black text-white py-2">Contact Person</th>
                <th className=" border bg-black text-white py-2">Email</th>
                <th className=" border bg-black text-white py-2">Phone</th>
                <th className=" border bg-black text-white py-2">Address</th>
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, index) => (
                <tr key={index} className="grid grid-cols-6">
                  <td className="border border-black px-4 py-2">{rowData.customerId}</td>
                  <td className="border border-black px-4 py-2">{rowData.customerName}</td>
                  <td className="border border-black px-4 py-2">{rowData.contactPerson}</td>       
                  <td className="border border-black px-2 text-sm py-2">{rowData.email}</td>
                  <td className="border border-black px-4 py-2">{rowData.phone}</td>
                  <td className="border border-black px-4 py-2">{rowData.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    <div className="flex flex-col justify-center items-center my-10">
        <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handlePrint}>Print</button>
    </div>
    </>
  )
}

export default CustomerReport