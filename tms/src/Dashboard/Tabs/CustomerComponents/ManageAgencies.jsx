import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import 'jspdf-autotable';

const ManageAgencies = () => {
    const itemsPerPage = 17;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAgency, setSelectedAgency] = useState(null);
    const [isEditBoxVisible, setEditBoxVisible] = useState(false);
    const [agencyData, setAgencyData] = useState([
        { agencyId: '1001', agencyName: 'ABC Shipping Co.', contactPerson: 'John Smith', email: 'john@abcshipping.com', phone: '+1 (555) 123-4567', address: '123 Main Street', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA'},
        { agencyId: '1002', agencyName: 'XYZ Logistics', contactPerson: 'Emily Dao', email: 'john@abcshipping.com', phone: '+1 (555) 123-4567', address: '123 Main Street', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA'},
        { agencyId: '1003', agencyName: 'Swift Transport', contactPerson: 'Michael Johnson', email: 'michael@swifttransport.com', phone: '+1 (555) 987-6543', address: '456 Oak Avenue', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1004', agencyName: 'Dynamic Shipping', contactPerson: 'Sophia Rodriguez', email: 'sophia@dynamicshipping.com', phone: '+1 (555) 789-0123', address: '789 Elm Street', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1005', agencyName: 'Global Express', contactPerson: 'David Kim', email: 'david@globalexpress.com', phone: '+1 (555) 234-5678', address: '567 Pine Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1006', agencyName: 'Transcontinental Logistics', contactPerson: 'Olivia Baker', email: 'olivia@transcontinental.com', phone: '+1 (555) 345-6789', address: '890 Maple Drive', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1007', agencyName: 'Rapid Cargo Services', contactPerson: 'Daniel Chen', email: 'daniel@rapidcargo.com', phone: '+1 (555) 876-5432', address: '234 Birch Street', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1008', agencyName: 'Pacific Freight Solutions', contactPerson: 'Isabella Lee', email: 'isabella@pacificfreight.com', phone: '+1 (555) 654-3210', address: '678 Cedar Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1009', agencyName: 'Velocity Shipping', contactPerson: 'Ethan Williams', email: 'ethan@velocityshipping.com', phone: '+1 (555) 321-0987', address: '901 Fir Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1010', agencyName: 'Prime Logistics', contactPerson: 'Ava Martinez', email: 'ava@primelogistics.com', phone: '+1 (555) 890-1234', address: '123 Willow Avenue', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1011', agencyName: 'Starline Transport', contactPerson: 'Noah Taylor', email: 'noah@starlinetransport.com', phone: '+1 (555) 432-1098', address: '345 Pine Street' , postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA'},
        { agencyId: '1012', agencyName: 'Sunrise Freight Services', contactPerson: 'Emma Davis', email: 'emma@sunrisefreight.com', phone: '+1 (555) 567-8901', address: '567 Cedar Lane' },
        { agencyId: '1013', agencyName: 'Transglobal Express', contactPerson: 'William Wilson', email: 'william@transglobalexpress.com', phone: '+1 (555) 789-0123', address: '789 Birch Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1014', agencyName: 'Atlantic Shipping', contactPerson: 'Sophie Garcia', email: 'sophie@atlanticshipping.com', phone: '+1 (555) 123-4567', address: '123 Oak Drive', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA'},
        { agencyId: '1015', agencyName: 'Metro Logistics', contactPerson: 'Jackson Smith', email: 'jackson@metrologistics.com', phone: '+1 (555) 234-5678', address: '234 Pine Avenue', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1016', agencyName: 'Eagle Cargo', contactPerson: 'Madison Jones', email: 'madison@eaglecargo.com', phone: '+1 (555) 345-6789', address: '345 Cedar Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1017', agencyName: 'Swiftline Express', contactPerson: 'Logan Brown', email: 'logan@swiftlineexpress.com', phone: '+1 (555) 876-5432', address: '456 Maple Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1018', agencyName: 'Horizon Transport Solutions', contactPerson: 'Avery White', email: 'avery@horizontransport.com', phone: '+1 (555) 654-3210', address: '567 Birch Avenue', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1019', agencyName: 'Golden Bridge Logistics', contactPerson: 'Ella Miller', email: 'ella@goldenbridge.com', phone: '+1 (555) 321-0987', address: '678 Oak Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA'},
        { agencyId: '1020', agencyName: 'Phoenix Freight', contactPerson: 'Liam Johnson', email: 'liam@phoenixfreight.com', phone: '+1 (555) 890-1234', address: '789 Pine Street', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1021', agencyName: 'Silver Arrow Shipping', contactPerson: 'Grace Taylor', email: 'grace@silverarrowshipping.com', phone: '+1 (555) 432-1098', address: '901 Cedar Drive', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1022', agencyName: 'Express Cargo Co.', contactPerson: 'Mason Davis', email: 'mason@expresscargo.com', phone: '+1 (555) 567-8901', address: '123 Birch Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1023', agencyName: 'Northstar Logistics', contactPerson: 'Scarlett Wilson', email: 'scarlett@northstarlogistics.com', phone: '+1 (555) 789-0123', address: '234 Oak Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1024', agencyName: 'Dynamic Express', contactPerson: 'Christopher Martinez', email: 'christopher@dynamicexpress.com', phone: '+1 (555) 123-4567', address: '345 Cedar Drive', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1025', agencyName: 'Blue Horizon Shipping', contactPerson: 'Aria Johnson', email: 'aria@bluehorizonshipping.com', phone: '+1 (555) 234-5678', address: '456 Pine Avenue', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1026', agencyName: 'Majestic Freight Services', contactPerson: 'Caleb Brown', email: 'caleb@majesticfreight.com', phone: '+1 (555) 345-6789', address: '567 Cedar Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1027', agencyName: 'Summit Transport Solutions', contactPerson: 'Hannah Miller', email: 'hannah@summittransport.com', phone: '+1 (555) 876-5432', address: '678 Oak Drive', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1028', agencyName: 'Sapphire Logistics', contactPerson: 'Nathan Taylor', email: 'nathan@sapphirelogistics.com', phone: '+1 (555) 654-3210', address: '789 Birch Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1029', agencyName: 'Aurora Express', contactPerson: 'Leah White', email: 'leah@auroraexpress.com', phone: '+1 (555) 321-0987', address: '901 Maple Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agencyId: '1030', agencyName: 'Pinnacle Freight', contactPerson: 'Brandon Davis', email: 'brandon@pinnaclefreight.com', phone: '+1 (555) 890-1234', address: '123 Cedar Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
    ])

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
                <tr className="border border-black ">
                <th className="border bg-black text-white p-2">Agency ID</th>
                <th className="border bg-black text-white p-2">Agency Name</th>
                <th className="border bg-black text-white p-2">Contact Person</th>
                <th className="border bg-black text-white p-2">Email</th>
                <th className="border bg-black text-white p-2">Phone</th>
                <th className="border bg-black text-white p-2">Address</th>
                </tr>
            </thead>
            <tbody>
            {agencyData.map((rowData, index) => (
                <tr
                    key={index}
                    className="hover:bg-[#d7c9ff] cursor-pointer"
                    onClick={() => handleRowClick(rowData)} // Attach the click event here
                >
                    <td className="border border-black px-3 py-2">{rowData.agencyId}</td>
                    <td className="border border-black px-3 py-2">{rowData.agencyName}</td>
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
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black overlay
                        }}>
                        <div className="modal-content bg-white p-10 rounded-xl">
                            <h3 className="text-2xl font-bold mb-7 text-center">Edit Agency Data</h3>
                            <div className=" flex flex-col gap-2  justify-center">
                                <div className="flex gap-10 items-center justify-between ">
                                    <label htmlFor="editedAgencyName" className='font-semibold text-base'>Agency Name:</label>
                                    <input
                                        className='outline-none rounded-lg px-3 py-2 border-[1px] border-gray-600'
                                        type="text"
                                        id="editedAgencyName"
                                        value={selectedAgency?.agencyName || ''}
                                        onChange={(e) =>
                                            setSelectedAgency({ ...selectedAgency, agencyName: e.target.value })
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
                                        value={selectedAgency?.contactPerson || ''}
                                        onChange={(e) =>
                                            setSelectedAgency({ ...selectedAgency, contactPerson: e.target.value })
                                        }
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                                <div className="flex gap-10 items-center justify-between ">
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
                                <div className="flex gap-10 items-center justify-between ">
                                    <label htmlFor="editedAgencyPhone" className='font-semibold text-base'>Phone:</label>
                                    <input
                                        className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                        type="text"
                                        id="editedAgencyPhone"
                                        value={selectedAgency?.phone || ''}
                                        onChange={(e) =>
                                            setSelectedAgency({ ...selectedAgency, phone: e.target.value })
                                        }
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                                <div className="flex gap-10 items-center justify-between ">
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
                                <div className="flex gap-10 items-center justify-between ">
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
                                <div className="flex gap-10 items-center justify-between ">
                                    <label htmlFor="editedAgencyStateProvince" className='font-semibold text-base'>State/Province:</label>
                                    <input
                                        className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                        type="text"
                                        id="editedAgencyStateProvince"
                                        value={selectedAgency?.stateProvice || ''}
                                        onChange={(e) =>
                                            setSelectedAgency({ ...selectedAgency, stateProvice: e.target.value })
                                        }
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                                <div className="flex gap-10 items-center justify-between ">
                                    <label htmlFor="editedAgencyPostalCode" className='font-semibold text-base'>Postal Code:</label>
                                    <input
                                        className='outline-none rounded-lg px-2 py-1 border-[1px] border-gray-600'
                                        type="text"
                                        id="editedAgencyPostalCode"
                                        value={selectedAgency?.postalCode || ''}
                                        onChange={(e) =>
                                            setSelectedAgency({ ...selectedAgency, postalCode: e.target.value })
                                        }
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                                <div className="flex gap-10 items-center justify-between ">
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
                                    className="bg-[#20007F] text-white  py-1 px-10 rounded-xl"
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
                    <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handlePrint}>Print</button>
                    <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={exportAsCSV}>Export as CSV</button>
                    <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={exportAsPDF}>Export as PDF</button>
                </div>

        </div>
      );
    };
    
    export default ManageAgencies;