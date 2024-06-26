import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import 'jspdf-autotable';
import axios from 'axios';

const ManageCustomer = () => {
    const itemsPerPage = 17;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [isEditBoxVisible, setEditBoxVisible] = useState(false);
    const [customerData, setCustomerData] = useState([]);
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const exportAsPDF = () => {
        const doc = new jsPDF();
        if (customerData.length > 0) {
            doc.autoTable({
                head: [Object.keys(customerData[0])],
                body: customerData.map((row) => Object.values(row)),
            });
            doc.save('exporter_report.pdf');
        }
    };

    const exportAsCSV = () => {
        if (customerData.length > 0) {
            const csvContent =
                'data:text/csv;charset=utf-8,' +
                customerData.map((row) => Object.values(row).join(',')).join('\n');
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'exporter_report.csv');
            document.body.appendChild(link);
            link.click();
        }
    };

    useEffect(() => {
        axios.get('https://exprosys-backend.onrender.com/api/v1/exporters/')
            .then(response => {
                setCustomerData(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching customer data:', error);
                setCustomerData([]);
            });
    }, []);

    const handleRowClick = (rowData) => {
        setSelectedCustomer(rowData);
        setEditBoxVisible(true);
    };

    const handleUpdate = () => {
        const index = customerData.findIndex((customer) => customer.exporter_id === selectedCustomer.exporter_id);

        if (index !== -1) {
            const updatedCustomerData = [...customerData];
            updatedCustomerData[index] = selectedCustomer;
            setCustomerData(updatedCustomerData);

            axios.put(`https://exprosys-backend.onrender.com/api/v1/exporters/${selectedCustomer.exporter_id}/`, selectedCustomer)
                .then(response => {
                    setSelectedCustomer(null);
                    setEditBoxVisible(false);
                })
                .catch(error => console.error('Error updating customer data:', error));
        } else {
            console.error('Selected customer not found in customerData array');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUpdate();
        }
    };

    const handleCancel = () => {
        setSelectedCustomer(null);
        setEditBoxVisible(false);
    };

    return (
        <div className=""  ref={componentRef}>
            <div className="m-5">
                <h3 className="text-2xl font-bold">Manage Exporter</h3>

                <table className="border border-collapse my-10 text-sm">
                    <thead>
                        <tr className="border border-black">
                            <th className="border border-black bg-yellow-100 px-3 py-2">Exporter ID</th>
                            <th className="border border-black bg-yellow-100 px-3 py-2">Exporter Name</th>
                            <th className="border border-black bg-yellow-100 px-3 py-2">Contact Person</th>
                            <th className="border border-black bg-yellow-100 px-3 py-2">Email</th>
                            <th className="border border-black bg-yellow-100 px-3 py-2">Phone</th>
                            <th className="border border-black bg-yellow-100 px-3 py-2">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(customerData) && customerData.map((rowData, index) => (
                            <tr
                                key={index}
                                className="hover:bg-[#d7c9ff] cursor-pointer"
                                onClick={() => handleRowClick(rowData)}
                            >
                                <td className="border border-black px-3 py-2">{rowData.exporter_id}</td>
                                <td className="border border-black px-3 py-2">{rowData.exporter_name}</td>
                                <td className="border border-black px-3 py-2">{rowData.contact_person}</td>
                                <td className="border border-black px-3 py-2">{rowData.email_address}</td>
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
                                <h3 className="text-2xl font-bold mb-7 text-center">Edit Exporter Data</h3>
                                <div className="flex flex-col gap-2 justify-center">
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedexporter_name" className='font-semibold text-base'>Exporter Name:</label>
                                        <input
                                            className='outline-none rounded-lg px-3 py-2 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedexporter_name"
                                            value={selectedCustomer?.exporter_name || ''}
                                            onChange={(e) =>
                                                setSelectedCustomer({ ...selectedCustomer, exporter_name: e.target.value })
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
                                            value={selectedCustomer?.contact_person || ''}
                                            onChange={(e) =>
                                                setSelectedCustomer({ ...selectedCustomer, contact_person: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedCustomerEmail" className='font-semibold text-base'>Email:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="email"
                                            id="editedCustomerEmail"
                                            value={selectedCustomer?.email_address || ''}
                                            onChange={(e) =>
                                                setSelectedCustomer({ ...selectedCustomer, email: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedCustomerPhone" className='font-semibold text-base'>Phone:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="number"
                                            id="editedCustomerPhone"
                                            value={selectedCustomer?.phone_number || ''}
                                            onChange={(e) =>
                                                setSelectedCustomer({ ...selectedCustomer, phone: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedCustomerAddress" className='font-semibold text-base'>Address:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedCustomerAddress"
                                            value={selectedCustomer?.address || ''}
                                            onChange={(e) =>
                                                setSelectedCustomer({ ...selectedCustomer, address: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedCustomerCity" className='font-semibold text-base'>City:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedCustomerCity"
                                            value={selectedCustomer?.city || ''}
                                            onChange={(e) =>
                                                setSelectedCustomer({ ...selectedCustomer, city: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedCustomerState_province" className='font-semibold text-base'>State/Province:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedCustomerState_province"
                                            value={selectedCustomer?.state_province || ''}
                                            onChange={(e) =>
                                                setSelectedCustomer({ ...selectedCustomer, state_province: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedCustomerPostal_code" className='font-semibold text-base'>Postal Code:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="number"
                                            id="editedCustomerPostal_code"
                                            value={selectedCustomer?.postal_code || ''}
                                            onChange={(e) =>
                                                setSelectedCustomer({ ...selectedCustomer, postal_code: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex gap-10 items-center justify-between">
                                        <label htmlFor="editedCustomerCountry" className='font-semibold text-base'>Country:</label>
                                        <input
                                            className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                            type="text"
                                            id="editedCustomerCountry"
                                            value={selectedCustomer?.country || ''}
                                            onChange={(e) =>
                                                setSelectedCustomer({ ...selectedCustomer, country: e.target.value })
                                            }
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <div className="flex justify-end mt-5">
                                        <button className="bg-red-500 text-white py-2 px-4 rounded mr-2" onClick={handleCancel}>Cancel</button>
                                        <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleUpdate}>Save</button>
                                    </div>
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

export default ManageCustomer;
