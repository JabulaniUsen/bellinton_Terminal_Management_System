import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import 'jspdf-autotable';
import axios from 'axios';

const ManageAgent = () => {
    const itemsPerPage = 17;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [isEditBoxVisible, setEditBoxVisible] = useState(false);
    const [agentData, setAgentData] = useState([]);

    const handleRowClick = (rowData) => {
        setSelectedAgent(rowData);
        setEditBoxVisible(true);
    };

    useEffect(() => {
        axios.get('https://exprosys-backend.onrender.com/api/v1/agents')
            .then(response => {
                // Ensure the response data is an array
                if (Array.isArray(response.data.results)) {
                    setAgentData(response.data.results);
                } else {
                    console.error('Unexpected response data format:', response.data);
                    setAgentData([]);
                }
            })
            .catch(error => {
                console.error('Error fetching agent data:', error);
                setAgentData([]);
            });
    }, []);

    const handleUpdate = () => {
        const index = agentData.findIndex((agent) => agent.agentId === selectedAgent.agentId);
    
        if (index !== -1) {
            const updatedAgentData = [...agentData];
            updatedAgentData[index] = selectedAgent;
    
            axios.put(`https://exprosys-backend.onrender.com/api/v1/agents/${selectedAgent.agentId}/update`, selectedAgent)
                .then(response => {
                    setAgentData(updatedAgentData);
                    setSelectedAgent(null);
                    setEditBoxVisible(false);
                })
                .catch(error => console.error('Error updating agent data:', error));
        } else {
            console.error('Selected agent not found in agentData array');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUpdate();
        }
    };

    const handleCancel = () => {
        setSelectedAgent(null);
        setEditBoxVisible(false);
    };

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const exportAsPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: [Object.keys(agentData[0] || {})],
            body: agentData.map((row) => Object.values(row)),
        });
        doc.save('agent_report.pdf');
    };

    const exportAsCSV = () => {
        const csvContent =
            'data:text/csv;charset=utf-8,' +
            agentData.map((row) => Object.values(row).join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'agent_report.csv');
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="">
            <div className="m-5" ref={componentRef}>
                <h3 className="text-2xl font-bold">Manage Agent</h3>

                <table className="border border-collapse my-10 w-[100%]">
                    <thead>
                        <tr className="">
                            <th className="border border-black px-3 py-2 bg-yellow-100">Agent ID</th>
                            <th className="border border-black px-3 py-2 bg-yellow-100">Agent Name</th>
                            <th className="border border-black px-3 py-2 bg-yellow-100">Contact Person</th>
                            <th className="border border-black px-3 py-2 bg-yellow-100">Email</th>
                            <th className="border border-black px-3 py-2 bg-yellow-100">Phone</th>
                            <th className="border border-black px-3 py-2 bg-yellow-100">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agentData.length > 0 ? (
                            agentData.map((rowData, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-[#d7c9ff] cursor-pointer"
                                    onClick={() => handleRowClick(rowData)}
                                >
                                    <td className="border border-black px-3 py-2">{rowData.agentId}</td>
                                    <td className="border border-black px-3 py-2">{rowData.agentName}</td>
                                    <td className="border border-black px-3 py-2">{rowData.contactPerson}</td>
                                    <td className="border border-black px-3 py-2">{rowData.email}</td>
                                    <td className="border border-black w-[170px] px-3 py-2">{rowData.phone}</td>
                                    <td className="border border-black px-3 py-2">{rowData.address}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="border border-black px-3 py-2 text-center">No agent data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <AnimatePresence>
                {isEditBoxVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="modal-overlay"
                    >
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}>
                            <div className="modal-content bg-white p-10 rounded-xl">
                                <h3 className="text-2xl font-bold mb-7 text-center">Edit Agent Data</h3>
                                <div className="flex flex-col gap-2  justify-center">
                                    <div className="flex gap-10 items-center justify-between ">
                                        <label htmlFor="editedAgentName" className='font-semibold text-base'>Agent Name:</label>
                                        <input
                                            className='outline-none rounded-lg px-3 py-2 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgentName"
                                            value={selectedAgent?.agentName || ''}
                                            onChange={(e) =>
                                                setSelectedAgent({ ...selectedAgent, agentName: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between ">
                                        <label htmlFor="editedContactPerson" className='font-semibold text-base'>Contact Person:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedContactPerson"
                                            value={selectedAgent?.contactPerson || ''}
                                            onChange={(e) =>
                                                setSelectedAgent({ ...selectedAgent, contactPerson: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between ">
                                        <label htmlFor="editedAgentEmail" className='font-semibold text-base'>Email:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="email"
                                            id="editedAgentEmail"
                                            value={selectedAgent?.email || ''}
                                            onChange={(e) =>
                                                setSelectedAgent({ ...selectedAgent, email: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between ">
                                        <label htmlFor="editedAgentPhone" className='font-semibold text-base'>Phone:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgentPhone"
                                            value={selectedAgent?.phone || ''}
                                            onChange={(e) =>
                                                setSelectedAgent({ ...selectedAgent, phone: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between ">
                                        <label htmlFor="editedAgentAddress" className='font-semibold text-base'>Address:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgentAddress"
                                            value={selectedAgent?.address || ''}
                                            onChange={(e) =>
                                                setSelectedAgent({ ...selectedAgent, address: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between ">
                                        <label htmlFor="editedAgentCity" className='font-semibold text-base'>City:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgentCity"
                                            value={selectedAgent?.city || ''}
                                            onChange={(e) =>
                                                setSelectedAgent({ ...selectedAgent, city: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between ">
                                        <label htmlFor="editedAgentStateProvince" className='font-semibold text-base'>State/Province:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgentStateProvince"
                                            value={selectedAgent?.stateProvice || ''}
                                            onChange={(e) =>
                                                setSelectedAgent({ ...selectedAgent, stateProvice: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between ">
                                        <label htmlFor="editedAgentPostalCode" className='font-semibold text-base'>Postal Code:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgentPostalCode"
                                            value={selectedAgent?.postalCode || ''}
                                            onChange={(e) =>
                                                setSelectedAgent({ ...selectedAgent, postalCode: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between ">
                                        <label htmlFor="editedAgentCountry" className='font-semibold text-base'>Country:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgentCountry"
                                            value={selectedAgent?.country || ''}
                                            onChange={(e) =>
                                                setSelectedAgent({ ...selectedAgent, country: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                </div>
                                <div className="flex mt-10 gap-10 justify-center items-center">
                                    <button
                                        className="bg-[#357c39] text-white py-1 px-10 rounded-xl"
                                        onClick={handleUpdate}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="bg-gray-500 text-white py-1 px-10 rounded-xl"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex gap-5 justify-center items-center my-10">
                <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' onClick={handlePrint}>Print</button>
                <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' onClick={exportAsCSV}>Export as CSV</button>
                <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' onClick={exportAsPDF}>Export as PDF</button>
            </div>
        </div>
    );
};

export default ManageAgent;
