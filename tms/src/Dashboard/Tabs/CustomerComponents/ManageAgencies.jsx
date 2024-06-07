import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import 'jspdf-autotable';

const ManageAgencies = () => {
    const itemsPerPage = 17;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAgency, setSelectedAgency] = useState(null);
    const [isEditBoxVisible, setEditBoxVisible] = useState(false);
    const [agencyData, setAgencyData] = useState([]);

    useEffect(() => {
        const fetchAgencyData = async () => {
            try {
                const response = await fetch('https://exprosys-backend.onrender.com/api/v1/agency-list/');
                const data = await response.json();
                if (Array.isArray(data.results)) {
                    setAgencyData(data.results);
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching agency data:', error);
            }
        };

        fetchAgencyData();
    }, []);

    const handleRowClick = (rowData) => {
        setSelectedAgency(rowData);
        setEditBoxVisible(true);
    };

    const handleUpdate = () => {
        const index = agencyData.findIndex((agency) => agency.agencyId === selectedAgency.agencyId);
    
        if (index !== -1) {
            const updatedAgencyData = [...agencyData];
            updatedAgencyData[index] = selectedAgency;
    
            setAgencyData(updatedAgencyData);
    
            setSelectedAgency(null);
            setEditBoxVisible(false);
        } else {
            console.error('Selected agency not found in agencyData array');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUpdate();
        }
    };

    const handleCancel = () => {
        setSelectedAgency(null);
        setEditBoxVisible(false);
    };
    
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const exportAsPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: [Object.keys(agencyData[0])],
            body: agencyData.map((row) => Object.values(row)),
        });
        doc.save('agency_report.pdf');
    };

    const exportAsCSV = () => {
        const csvContent =
            'data:text/csv;charset=utf-8,' +
            agencyData.map((row) => Object.values(row).join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'agency_report.csv');
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="">
            <div className="m-5" ref={componentRef}>
                <h3 className="text-2xl font-bold">Manage Agency</h3>
                <table className="border border-collapse my-10 text-sm">
                    <thead>
                        <tr className="border border-black">
                            <th className="border bg-yellow-100 border-black px-3 py-2">Agency ID</th>
                            <th className="border bg-yellow-100 border-black px-3 py-2">Agency Name</th>
                            <th className="border bg-yellow-100 border-black px-3 py-2">Contact Person</th>
                            <th className="border bg-yellow-100 border-black px-3 py-2">Email</th>
                            <th className="border bg-yellow-100 border-black px-3 py-2">Phone</th>
                            <th className="border bg-yellow-100 border-black px-3 py-2">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agencyData.map((rowData, index) => (
                            <tr
                                key={index}
                                className="hover:bg-[#d7c9ff] cursor-pointer"
                                onClick={() => handleRowClick(rowData)}
                            >
                                <td className="border border-black px-3 py-2">{rowData.agency_id}</td>
                                <td className="border border-black px-3 py-2">{rowData.agency_name}</td>
                                <td className="border border-black px-3 py-2">{rowData.contact_person}</td>
                                <td className="border border-black px-3 py-2">{rowData.email}</td>
                                <td className="border border-black w-[170px] px-3 py-2">{rowData.phone_number}</td>
                                <td className="border border-black px-3 py-2">{rowData.address}</td>
                            </tr>
                        ))}
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
                                <h3 className="text-2xl font-bold mb-7 text-center">Edit Agency Data</h3>
                                <div className="flex flex-col gap-2 justify-center">
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedAgency_name" className='font-semibold text-base'>Agency Name:</label>
                                        <input
                                            className='outline-none rounded-lg px-3 py-2 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgency_name"
                                            value={selectedAgency?.agency_name || ''}
                                            onChange={(e) =>
                                                setSelectedAgency({ ...selectedAgency, agency_name: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedContact_person" className='font-semibold text-base'>Contact Person:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedContact_person"
                                            value={selectedAgency?.contact_person || ''}
                                            onChange={(e) =>
                                                setSelectedAgency({ ...selectedAgency, contact_person: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedAgencyEmail" className='font-semibold text-base'>Email:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="email"
                                            id="editedAgencyEmail"
                                            value={selectedAgency?.email || ''}
                                            onChange={(e) =>
                                                setSelectedAgency({ ...selectedAgency, email: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedAgencyPhone" className='font-semibold text-base'>Phone:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgencyPhone"
                                            value={selectedAgency?.phone_number || ''}
                                            onChange={(e) =>
                                                setSelectedAgency({ ...selectedAgency, phone_number: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedAgencyAddress" className='font-semibold text-base'>Address:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgencyAddress"
                                            value={selectedAgency?.address || ''}
                                            onChange={(e) =>
                                                setSelectedAgency({ ...selectedAgency, address: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedAgencyCity" className='font-semibold text-base'>City:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgencyCity"
                                            value={selectedAgency?.city || ''}
                                            onChange={(e) =>
                                                setSelectedAgency({ ...selectedAgency, city: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedAgencyStateProvince" className='font-semibold text-base'>State/Province:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgencyStateProvince"
                                            value={selectedAgency?.state_province || ''}
                                            onChange={(e) =>
                                                setSelectedAgency({ ...selectedAgency, state_province: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedAgencyPostal_code" className='font-semibold text-base'>Postal Code:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgencyPostal_code"
                                            value={selectedAgency?.postal_code || ''}
                                            onChange={(e) =>
                                                setSelectedAgency({ ...selectedAgency, postal_code: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedAgencyCountry" className='font-semibold text-base'>Country:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedAgencyCountry"
                                            value={selectedAgency?.country || ''}
                                            onChange={(e) =>
                                                setSelectedAgency({ ...selectedAgency, country: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                </div>
                                <div className="flex mt-10 gap-10 justify-center items-center">
                                    <button
                                        className="bg-[#427a45] text-white py-1 px-10 rounded-xl"
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

export default ManageAgencies;
