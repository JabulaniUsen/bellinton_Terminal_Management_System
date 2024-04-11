import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import GateInsidentReporting from './GateInsidentReporting';

const GateInsidentList = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [editedData, setEditedData] = useState(null);
  const [showReport, setShowReport] = useState(false)
  const [selectedIncident, setSelectedIncident] = useState(null);

  const handleShowReport = () => {
    if (selectedRow !== null) {
      setSelectedIncident(data[selectedRow]); // Set the selected incident data
      setShowReport(true);
    } else {
      toast.error("Please select a row to view details.");
    }
  }

  const handleBack = () => {
    setShowReport(false);
  }

  const data = [
    { incidentId: 'INC172873', reportBy: 'John Smith', location: 'Gate 1', date: '2024-02-17', time: '09:45 AM', desc: 'Vehicle Collision' },
    { incidentId: 'INC127832', reportBy: 'John Smith', location: 'Gate 2', date: '2024-02-17', time: '09:45 AM', desc: 'Vehicle Collision' },
    { incidentId: 'INC127832', reportBy: 'John Smith', location: 'Gate 4', date: '2024-02-17', time: '09:45 AM', desc: 'Vehicle Collision' },
    { incidentId: 'INC172873', reportBy: 'John Smith', location: 'Gate 6', date: '2024-02-17', time: '09:45 AM', desc: 'Vehicle Collision' },
  ];

  const componentRef = useRef();

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
    doc.save('Gate_incident_list.pdf');
  };

  const handleEdit = () => {
    if (selectedRow !== null) {
      setEditedData({ ...data[selectedRow] });
      setIsEditing(true);
    } else {
      toast.error("Please select a row to edit.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedRow(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Implement your save logic here
    setIsEditing(false);
    setSelectedRow(null);
  };


  return (
    <div className="">
      {!showReport ? (
        <div className='m-10 poppins'>
        <div className=''>
          <div className="m-5" ref={componentRef}>
              <h2 className="text-2xl font-bold mb-4">Gate Incident List</h2>
              <div className="overflow-hidden">
                <table className="border-collapse border border-gray-800">
                  <thead>
                      <tr className="bg-gray-200">
                      <th className="border border-gray-800 px-2 py-2">Incident ID</th>
                      <th className="border border-gray-800 px-2 py-2">Date</th>
                      <th className="border border-gray-800 px-2 py-2">Time</th>
                      <th className="border border-gray-800 px-2 py-2">Location</th>
                      <th className="border border-gray-800 px-2 py-2">Description</th>
                      <th className="border border-gray-800 px-2 py-2">Report By</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data.map((rowData, index) => (
                      <tr key={index} className={selectedRow === index ? 'bg-yellow-200' : ''} onClick={() => setSelectedRow(index)}>
                          <td className="border border-gray-800 px-3 py-2">{rowData.incidentId}</td>
                          <td className="border border-gray-800 px-3 py-2">{rowData.date}</td>
                          <td className="border border-gray-800 px-3 py-2">{rowData.time}</td>
                          <td className="border border-gray-800 px-3 py-2">{rowData.location}</td>
                          <td className="border border-gray-800 px-3 py-2">{rowData.desc}</td>
                          <td className="border border-gray-800 px-3 py-2">{rowData.reportBy}</td>
                      </tr>
                      ))}
                  </tbody>
                </table>
              </div>
          </div>
          {isEditing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
            >
              <div className="bg-white p-8 rounded-md w-[500px]">
                <h2 className="text-lg font-semibold mb-4">Edit Incident</h2>
                <div className='flex items-center justify-between my-2'>
                  <label htmlFor="incidentId">Incident ID:</label>
                  <input
                    type="text"
                    id="incidentId"
                    name="incidentId"
                    value={editedData?.incidentId}
                    onChange={handleInputChange}
                    className='border-gray-400 border-[1px] rounded-lg p-2'
                  />
                </div>
                <div className='flex items-center justify-between my-2'>
                  <label htmlFor="date">Date:</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={editedData?.date}
                    onChange={handleInputChange}
                    className='border-gray-400 border-[1px] rounded-lg p-2'
                  />
                </div>
                <div className='flex items-center justify-between my-2'>
                  <label htmlFor="time">Time:</label>
                  <input
                    type="text"
                    id="time"
                    name="time"
                    value={editedData?.time}
                    onChange={handleInputChange}
                    className='border-gray-400 border-[1px] rounded-lg p-2'
                  />
                </div>
                <div className='flex items-center justify-between my-2'>
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={editedData?.location}
                    onChange={handleInputChange}
                    className='border-gray-400 border-[1px] rounded-lg p-2'
                  />
                </div>
                <div className='flex items-center justify-between my-2'>
                  <label htmlFor="desc">Description:</label>
                  <input
                    type="text"
                    id="desc"
                    name="desc"
                    value={editedData?.desc}
                    onChange={handleInputChange}
                    className='border-gray-400 border-[1px] rounded-lg p-2'
                  />
                </div>
                <div className='flex items-center justify-between my-2'>
                  <label htmlFor="reportBy">Report By:</label>
                  <input
                    type="text"
                    id="reportBy"
                    name="reportBy"
                    value={editedData?.reportBy}
                    onChange={handleInputChange}
                    className='border-gray-400 border-[1px] rounded-lg p-2'
                  />
                </div>
                <div className="flex items-center justify-center gap-3 mt-10">
                  <button onClick={handleSave} className='text-white bg-[#4000FF] rounded-md py-1 px-7'>Save</button>
                  <button onClick={handleCancel} className='text-black font-semibold bg-[#828282] rounded-md py-1 px-7'>Cancel</button>
                </div>
              </div>
            </motion.div>
          )}
          <div className="buttons flex justify-center items-center gap-10 my-20 text-white">
            <button className='bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-10 py-2 rounded-lg' onClick={handleShowReport}>View Details</button>
            <button onClick={handlePrint} className='bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-10 py-2 rounded-lg'>Print</button>
            <button onClick={handleEdit} className={`bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-10 py-2 rounded-lg ${selectedRow === null ? 'opacity-50 cursor-not-allowed' : ''}`}>Edit</button>
            <CSVLink data={handleExportCSV().data} headers={handleExportCSV().headers} filename={"incident_list.csv"}>
              <p className=' py-1 cursor-pointer rounded-full text-blue-700 underline font-semibold'>Export as CSV</p>
            </CSVLink>
            <button onClick={handleExportPDF} className=' py-1 cursor-pointer rounded-full text-blue-700 underline font-semibold'>Export as PDF</button>
          </div>
          <ToastContainer />
        </div>
      </div>
      ) : (
        <GateInsidentReporting incidentData={selectedIncident} handleBack={handleBack} />
      )}
    </div>
  );
}

export default GateInsidentList;
