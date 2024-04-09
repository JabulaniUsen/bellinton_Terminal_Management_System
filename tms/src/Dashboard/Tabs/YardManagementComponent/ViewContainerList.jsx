import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
// import 'jspdf-autotable';
import 'jspdf-autotable'

const ViewContainerList = ({ }) => {
  const data = [
    { containerId: 'CN001', status: 'In Yard', location: 'Stacking Area 1', departureAndTime: '-', associatedTasks: 'Inspection, Unloadind, Loading', arrivalDateAndTime: '2024-03-15 08:30', customerName: 'ABC Shipping', destination: 'Warehouse A' },
    { containerId: 'CN002', status: 'In Yard', location: 'Stacking Area 1', departureAndTime: '-', associatedTasks: 'Loading, Inspection, Sealing', arrivalDateAndTime: '2024-03-16 18:30', customerName: 'XYZ Logistics', destination: 'Port Terminal' },
    { containerId: 'CN003', status: 'In Yard', location: 'Stacking Area 1', departureAndTime: '-', associatedTasks: 'Repositioning, Inspection', arrivalDateAndTime: '2024-03-18 14:30', customerName: 'XYZ Logistics', destination: 'Factory A' },
    { containerId: 'CN004', status: 'In Yard', location: 'Stacking Area 1', departureAndTime: '-', associatedTasks: 'Inspection, Unloadind, Loading', arrivalDateAndTime: '2024-03-15 08:30', customerName: 'ABC Shipping', destination: 'Warehouse A' },
    { containerId: 'CN005', status: 'In Yard', location: 'Stacking Area 1', departureAndTime: '-', associatedTasks: 'Loading, Inspection, Sealing', arrivalDateAndTime: '2024-03-16 18:30', customerName: 'XYZ Logistics', destination: 'Port Terminal' },
    { containerId: 'CN006', status: 'In Yard', location: 'Stacking Area 1', departureAndTime: '-', associatedTasks: 'Repositioning, Inspection', arrivalDateAndTime: '2024-03-18 14:30', customerName: 'XYZ Logistics', destination: 'Factory A' },
  ];
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleExportCSV = () => {
    const headers = Object.keys(data[0]);
    const csvData = data.map((row) => Object.values(row));
    const csvReport = {
      headers: headers,
      data: csvData,
    };
    return csvReport;
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [Object.keys(data[0])],
      body: data.map((row) => Object.values(row)),
    });
    doc.save('container_list.pdf');
  };

  return (
    <div className='m-10 poppins'>
      <h2 className="text-2xl font-bold mb-4">Container List</h2>
      <div className=''>
        <table className='border-collapse border border-gray-800 w-[100%]'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-800 px-2 py-2'>Container ID</th>
              <th className='border border-gray-800 px-2 py-2'>Status</th>
              <th className='border border-gray-800 px-2 py-2'>Location</th>
              <th className='border border-gray-800 px-2 py-2'>Arrival Date and Time</th>
              <th className='border border-gray-800 px-2 py-2'>Departure Date And Time</th>
              <th className='border border-gray-800 px-2 py-2'>Customer Name</th>
              <th className='border border-gray-800 px-2 py-2'>Destination</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                <td className='border border-gray-800 px-2 py-2 text-center'>{row.containerId}</td>
                <td className='border border-gray-800 px-2 py-2 text-center'>{row.status}</td>
                <td className='border border-gray-800 px-2 py-2 text-center'>{row.location}</td>
                <td className='border border-gray-800 px-2 py-2 text-center'>{row.arrivalDateAndTime}</td>
                <td className='border border-gray-800 px-2 py-2 text-center'>{row.departureAndTime}</td>
                <td className='border border-gray-800 px-2 py-2 text-center'>{row.customerName}</td>
                <td className='border border-gray-800 px-2 py-2 text-center'>{row.destination}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons flex justify-center items-center gap-10 my-20 text-white">
          <button onClick={handlePrint} className='bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-10 py-2 rounded-lg'>Print</button>
          <CSVLink data={handleExportCSV().data} headers={handleExportCSV().headers} filename={"container_list.csv"}>
            <p className=' py-1 cursor-pointer rounded-full text-blue-700 underline font-semibold'>Export as CSV</p>
          </CSVLink>
          <button onClick={handleExportPDF} className=' py-1 cursor-pointer rounded-full text-blue-700 underline font-semibold'>Export as PDF</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ViewContainerList;
