import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import MaintainanceScheduleList from './MaintainanceScheduleList';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import 'jspdf-autotable';


const EquipmentMgtList = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [rowDataToEdit, setRowDataToEdit] = useState(null);
    const [showSchedule, setShowSchedule] = useState(false)
    const [data, setData] = useState([
        { equipmentId: 'EQ001', equipmentType: 'Forkit', status: 'Available', lastMaintenanceDate: '2024-04-10', nextMaintenanceDate: '2024-14-12', assignedTask: '-', assignedTo: '-' },
        { equipmentId: 'EQ002', equipmentType: 'Crane', status: 'In use', lastMaintenanceDate: '2024-04-10', nextMaintenanceDate: '2024-14-12', assignedTask: 'Loading', assignedTo: 'operation A' },
        { equipmentId: 'EQ003', equipmentType: 'Reach', status: 'Available', lastMaintenanceDate: '2024-04-10', nextMaintenanceDate: '2024-14-12', assignedTask: '-', assignedTo: '-' },
    ]);
    const [editedData, setEditedData] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false); // State for showing the confirmation modal

    const handleEdit = (rowData) => {
        setRowDataToEdit(rowData);
        setEditedData({ ...rowData });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedRow(null);
    };
    
    const handleDelete = () => {
        setShowConfirmation(true); // Open confirmation modal
    };

    const confirmDelete = () => {
        const updatedData = data.filter((_, index) => index !== selectedRow);
        setData(updatedData);
        setShowConfirmation(false); // Close confirmation modal
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
        const updatedData = data.map((item, index) => {
            if (index === selectedRow) {
                return editedData;
            }
            return item;
        });
        setData(updatedData);
        setIsEditing(false);
        setSelectedRow(null);
    };

    const componentRef = useRef();

      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

      const exportAsPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
          head: [Object.keys(data[0])],
          body: data.map((row) => Object.values(row)),
        });
        doc.save('equipment_mgt_report.pdf');
      };
    
      const exportAsCSV = () => {
        const csvContent =
          'data:text/csv;charset=utf-8,' +
          data.map((row) => Object.values(row).join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'equipment_mgt_report.csv');
        document.body.appendChild(link);
        link.click();
      };

    return (
        <>
        {!showSchedule ? (
            <div>
            {showConfirmation && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <div className="bg-white p-8 rounded-md w-[400px] text-center">
                        <p>Are you sure you want to delete the maintenance task for {data[selectedRow]?.equipmentId}?</p>
                        <div className="flex justify-center mt-4">
                            <button onClick={confirmDelete} className="mr-4 text-white bg-red-500 px-4 py-2 rounded-md">Yes</button>
                            <button onClick={() => setShowConfirmation(false)} className="text-black bg-gray-300 px-4 py-2 rounded-md">No</button>
                        </div>
                    </div>
                </motion.div>
            )}
            {/* Main Content */}
            <div>
                <div className="">
                    <div className="table overflow-x-auto">
                        <div className="m-10" ref={componentRef}>
                            <h2 className='font-bold text-2xl'>Equipment Management</h2>
                            <table className="border-collapse border border-gray-800 mt-10 text-sm">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-800 px-3 py-2">Equipment ID</th>
                                        <th className="border border-gray-800 px-3 py-2">Maintenance Type</th>
                                        <th className="border border-gray-800 px-3 py-2">Status</th>
                                        <th className="border border-gray-800 px-3 py-2">Last Maintenance</th>
                                        <th className="border border-gray-800 px-3 py-2">Next Maintenance</th>
                                        <th className="border border-gray-800 px-3 py-2">Assigned Task</th>
                                        <th className="border border-gray-800 px-3 py-2">Assigned To</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((rowData, index) => (
                                        <tr key={index} className={selectedRow === index ? 'bg-yellow-200' : ''} onClick={() => setSelectedRow(index)}>
                                            <td className="border border-gray-800 px-3 py-2 cursor-pointer">{rowData.equipmentId}</td>
                                            <td className="border border-gray-800 px-3 py-2 cursor-pointer">{rowData.equipmentType}</td>
                                            <td className="border border-gray-800 px-3 py-2 cursor-pointer">{rowData.status}</td>
                                            <td className="border border-gray-800 px-3 py-2 cursor-pointer">{rowData.lastMaintenanceDate}</td>
                                            <td className="border border-gray-800 px-3 py-2 cursor-pointer">{rowData.nextMaintenanceDate}</td>
                                            <td className="border border-gray-800 px-3 py-2 cursor-pointer">{rowData.assignedTask}</td>                            
                                            <td className="border border-gray-800 px-3 py-2 cursor-pointer">{rowData.assignedTo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center justify-center gap-3 mt-16 ml-10 text-sm">
                            <button onClick={() => handleEdit(data[selectedRow])} disabled={selectedRow === null} className={`text-white bg-[#4000FF] rounded-md py-1 px-10 ${selectedRow === null ? 'opacity-50 cursor-not-allowed' : ''}`}>Edit</button>
                            <button onClick={handleDelete} disabled={selectedRow === null} className={`text-white bg-[#4000FF] rounded-md py-1 px-10 ${selectedRow === null ? 'opacity-50 cursor-not-allowed' : ''}`}>Delete</button>
                            <button className='text-white bg-[#000] rounded-md py-1 px-10' onClick={() => setShowSchedule(true)}>Schedule Maintenance</button>
                            <button className='text-white bg-[#000] rounded-md py-1 px-10' onClick={handlePrint}>Print</button>
                            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={exportAsCSV}>Export as CSV</button>
                            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={exportAsPDF}>Export as PDF</button>
                        </div>

                        {/* Edit Form */}
                        {isEditing && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex gap-4 items-center justify-center"
                            >
                                <div className="bg-white p-8 rounded-md w-[500px]">
                                    <h2 className="text-lg font-semibold mb-4">Edit Data</h2>
                                    <div className='flex items-center justify-between my-2'>
                                        <label htmlFor="equipmentId">Equipment ID:</label>
                                        <input
                                            type="text"
                                            id="equipmentId"
                                            name="equipmentId"
                                            value={editedData.equipmentId}
                                            onChange={handleInputChange}
                                            readOnly 
                                            className='border-gray-400 border-[1px] rounded-lg p-2'
                                        />
                                    </div>
                                    <div className='flex items-center justify-between my-2'>
                                        <label htmlFor="equipmentType">Maintenance Type:</label>
                                        <input
                                            type="text"
                                            id="equipmentType"
                                            name="equipmentType"
                                            value={editedData.equipmentType}
                                            onChange={handleInputChange}
                                            className='border-gray-400 border-[1px] rounded-lg p-2'
                                        />
                                    </div>
                                    <div className='flex items-center justify-between my-2'>
                                        <label htmlFor="lastMaintenanceDate">Maintenance Date:</label>
                                        <input
                                            type="text"
                                            id="lastMaintenanceDate"
                                            name="lastMaintenanceDate"
                                            value={editedData.lastMaintenanceDate}
                                            onChange={handleInputChange}
                                            className='border-gray-400 border-[1px] rounded-lg p-2'
                                        />
                                    </div>
                                    <div className='flex items-center justify-between my-2'>
                                        <label htmlFor="assignedTask">M Description:</label>
                                        <input
                                            type="text"
                                            id="assignedTask"
                                            name="assignedTask"
                                            value={editedData.assignedTask}
                                            onChange={handleInputChange}
                                            className='border-gray-400 border-[1px] rounded-lg p-2'
                                        />
                                    </div>
                                    <div className='flex items-center justify-between my-2'>
                                        <label htmlFor="assignedTo">assignedTo:</label>
                                        <input
                                            type="text"
                                            id="assignedTo"
                                            name="assignedTo"
                                            value={editedData.assignedTo}
                                            onChange={handleInputChange}
                                            className='border-gray-400 border-[1px] rounded-lg p-2'
                                        />
                                    </div>
                                    <div className="flex items-center justify-center gap-3 mt-10">
                                        <button className='text-white bg-[#4000FF] rounded-md py-1 px-7' onClick={handleSave}>Save</button>
                                        <button className='bg-black text-[#fdfdfd] rounded-md py-1 px-7' onClick={handleCancel}>Cancel</button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        ) : (
            <MaintainanceScheduleList/>
        )}
        </>
    );
}

export default EquipmentMgtList;
