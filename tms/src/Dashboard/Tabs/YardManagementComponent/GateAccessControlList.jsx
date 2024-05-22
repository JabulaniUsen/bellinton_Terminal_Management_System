import React, { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

const GateAccessControlList = () => {
  const [data, setData] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/gate-access-controls/');
        setData(response.data);
      } catch (error) {
        toast.error('Failed to fetch data. Please try again.');
      }
    };

    fetchData();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleExportCSV = () => {
    if (data.length === 0) {
      // toast.error('No data available for export.');
      return { headers: [], data: [] };
    }
    const headers = Object.keys(data[0]);
    const csvData = data.map((row) => Object.values(row));
    return { headers: headers, data: csvData };
  };

  const handleExportPDF = () => {
    if (data.length === 0) {
      // toast.error('No data available for export.');
      return;
    }
    const doc = new jsPDF();
    doc.autoTable({
      head: [Object.keys(data[0])],
      body: data.map((row) => Object.values(row)),
    });
    doc.save('access_control_list.pdf');
  };

  return (
    <div className='my-10 poppins overflow-x-scroll'>
      <div>
        <div className="m-5" ref={componentRef}>
          <h2 className="text-2xl font-bold mb-4">Gate Access Control Report</h2>
          <div className="table-container overflow-x-scroll w-[220%]">
            <table className="border-collapse border border-gray-800">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-800 px-2 py-2">Date & Time of Access</th>
                  <th className="border border-gray-800 px-2 py-2">Gate/Entry Point</th>
                  <th className="border border-gray-800 px-2 py-2">Security Officer Name</th>
                  <th className="border border-gray-800 px-2 py-2">Security Officer ID/Number</th>
                  <th className="border border-gray-800 px-2 py-2">Vehicle Type</th>
                  <th className="border border-gray-800 px-2 py-2">Trailer Number</th>
                  <th className="border border-gray-800 px-2 py-2">Driver's Name</th>
                  <th className="border border-gray-800 px-2 py-2">Company/Organization</th>
                  <th className="border border-gray-800 px-2 py-2">ID Verification</th>
                  <th className="border border-gray-800 px-2 py-2">Access Type</th>
                  <th className="border border-gray-800 px-2 py-2">Authorized Entry/Exit Time</th>
                  <th className="border border-gray-800 px-2 py-2">Authorized Areas/Sections</th>
                  <th className="border border-gray-800 px-2 py-2">Reason for Access</th>
                  <th className="border border-gray-800 px-2 py-2">Purpose of Visit</th>
                  <th className="border border-gray-800 px-2 py-2">Destination</th>
                  <th className="border border-gray-800 px-2 py-2">Security Checkpoint 1</th>
                  <th className="border border-gray-800 px-2 py-2">Inspection Result</th>
                  <th className="border border-gray-800 px-2 py-2">Security Checkpoint 2</th>
                  <th className="border border-gray-800 px-2 py-2">Verification Result</th>
                  <th className="border border-gray-800 px-2 py-2">Access Granted</th>
                  <th className="border border-gray-800 px-2 py-2">Access Denied Reason</th>
                </tr>
              </thead>
              <tbody>
                {data.map((rowData, index) => (
                  <tr key={index}>
                    <td className="border border-gray-800 px-3 py-2">{rowData.access_date} {rowData.access_time}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.gate_entry_point}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.security_officer_name}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.security_officer_id}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.vehicle_type}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.truck_number}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.driver_name}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.company}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.id_verification}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.access_type}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.authorized_exit_time}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.authorized_areas}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.reason_for_access}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.purpose_of_visit}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.destination}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.checkpoint_vehicle}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.inspection_result}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.security_checkpoint2}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.verification_result}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.access_granted}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.access_denied_reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="buttons flex justify-start items-center gap-10 mx-5 my-20 text-white">
          <button onClick={handlePrint} className='bg-[#4e9352] hover:bg-[#307234] transition-all px-10 py-2 rounded-lg'>Print</button>
          <CSVLink data={handleExportCSV().data} headers={handleExportCSV().headers} filename={"access_control_list.csv"}>
            <p className=' py-1 cursor-pointer rounded-full text-green-700 underline font-semibold'>Export as CSV</p>
          </CSVLink>
          <button onClick={handleExportPDF} className=' py-1 cursor-pointer rounded-full text-green-700 underline font-semibold'>Export as PDF</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default GateAccessControlList;
