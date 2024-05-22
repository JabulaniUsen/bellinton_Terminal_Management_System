import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import 'jspdf-autotable';

const ManageCustomer = () => {
    const itemsPerPage = 17;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [isEditBoxVisible, setEditBoxVisible] = useState(false);
    const [customerData, setCustomerData] = useState([
        
    ])

    const componentRef = useRef();

      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

      const exportAsPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
          head: [Object.keys(customerData[0])],
          body: customerData.map((row) => Object.values(row)),
        });
        doc.save('customer_report.pdf');
      };
      
    
      const exportAsCSV = () => {
        const csvContent =
          'data:text/csv;charset=utf-8,' +
          customerData.map((row) => Object.values(row).join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'customer_report.csv');
        document.body.appendChild(link);
        link.click();
      };
      
    

    const handleRowClick = (rowData) => {
        setSelectedCustomer(rowData);
        setEditBoxVisible(true);
    };

    const handleUpdate = () => {
        const index = customerData.findIndex((customer) => customer.customerId === selectedCustomer.customerId);
    
        if (index !== -1) {
            const updatedCustomerData = [...customerData];
            updatedCustomerData[index] = selectedCustomer;
            setCustomerData(updatedCustomerData);
    
            setSelectedCustomer(null);
            setEditBoxVisible(false);
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

    const totalPages = Math.ceil(customerData.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    
    
      return (
        <div className="">
          <div className="m-5" ref={componentRef}>
          <h3 className="text-2xl font-bold">Manage Customer</h3>
    
            <table className="border border-collapse my-10 text-sm">
            <thead>
                <tr className="border border-black">
                <th className="border border-black bg-yellow-100 px-3 py-2">Customer ID</th>
                <th className="border border-black bg-yellow-100 px-3 py-2">Customer Name</th>
                <th className="border border-black bg-yellow-100 px-3 py-2">Contact Person</th>
                <th className="border border-black bg-yellow-100 px-3 py-2">Email</th>
                <th className="border border-black bg-yellow-100 px-3 py-2">Phone</th>
                <th className="border border-black bg-yellow-100 px-3 py-2">Address</th>
                </tr>
            </thead>
            <tbody>
            {customerData.map((rowData, index) => (
                <tr
                    key={index}
                    className="hover:bg-[#d7c9ff] cursor-pointer"
                    onClick={() => handleRowClick(rowData)}
                >
                    <td className="border border-black px-3 py-2">{rowData.customerId}</td>
                    <td className="border border-black px-3 py-2">{rowData.customerName}</td>
                    <td className="border border-black px-3 py-2">{rowData.contactPerson}</td>
                    <td className="border border-black px-3 py-2">{rowData.email}</td>
                    <td className="border border-black w-[170px] px-3 py-2">{rowData.phone}</td>
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
                            <h3 className="text-2xl font-bold mb-7 text-center">Edit Customer Data</h3>
                            <div className=" flex flex-col gap-2 justify-center">
                                <div className="flex gap-10 items-center justify-between ">
                                    <label htmlFor="editedCustomerName" className='font-semibold text-base'>Customer Name:</label>
                                    <input
                                        className='outline-none rounded-lg px-3 py-2 border-[1px] border-gray-600'
                                        type="text"
                                        id="editedCustomerName"
                                        value={selectedCustomer?.customerName || ''}
                                        onChange={(e) =>
                                            setSelectedCustomer({ ...selectedCustomer, customerName: e.target.value })
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
                                        value={selectedCustomer?.contactPerson || ''}
                                        onChange={(e) =>
                                            setSelectedCustomer({ ...selectedCustomer, contactPerson: e.target.value })
                                        }
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                                <div className="flex gap-10 items-center justify-between ">
                                    <label htmlFor="editedCustomerEmail" className='font-semibold text-base'>Email:</label>
                                    <input
                                        className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                        type="email"
                                        id="editedCustomerEmail"
                                        value={selectedCustomer?.email || ''}
                                        onChange={(e) =>
                                            setSelectedCustomer({ ...selectedCustomer, email: e.target.value })
                                        }
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                                <div className="flex gap-10 items-center justify-between ">
                                    <label htmlFor="editedCustomerPhone" className='font-semibold text-base'>Phone:</label>
                                    <input
                                        className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                        type="text"
                                        id="editedCustomerPhone"
                                        value={selectedCustomer?.phone || ''}
                                        onChange={(e) =>
                                            setSelectedCustomer({ ...selectedCustomer, phone: e.target.value })
                                        }
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                                <div className="flex gap-10 items-center justify-between ">
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
                                <div className="flex gap-10 items-center justify-between ">
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
                                <div className="flex gap-10 items-center justify-between ">
                                    <label htmlFor="editedCustomerStateProvince" className='font-semibold text-base'>State/Province:</label>
                                    <input
                                        className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                        type="text"
                                        id="editedCustomerStateProvince"
                                        value={selectedCustomer?.stateProvice || ''}
                                        onChange={(e) =>
                                            setSelectedCustomer({ ...selectedCustomer, stateProvice: e.target.value })
                                        }
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                                <div className="flex gap-10 items-center justify-between ">
                                    <label htmlFor="editedCustomerPostalCode" className='font-semibold text-base'>Postal Code:</label>
                                    <input
                                        className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                        type="text"
                                        id="editedCustomerPostalCode"
                                        value={selectedCustomer?.postalCode || ''}
                                        onChange={(e) =>
                                            setSelectedCustomer({ ...selectedCustomer, postalCode: e.target.value })
                                        }
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                                <div className="flex gap-10 items-center justify-between ">
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
                            </div>
                            <div className="flex mt-10 gap-10 justify-center items-center">
                                <button
                                    className="bg-[#4e9352] text-white  py-1 px-10 rounded-xl"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>
                                <button
                                    className="bg-gray-500 text-white  py-1 px-10 rounded-xl"
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
    
    export default ManageCustomer;