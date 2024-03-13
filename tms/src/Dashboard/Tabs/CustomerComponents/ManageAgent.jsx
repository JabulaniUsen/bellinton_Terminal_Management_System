import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ManageAgent = () => {
    const itemsPerPage = 17;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [isEditBoxVisible, setEditBoxVisible] = useState(false);
    const [agentData, setAgentData] = useState([
        { agentId: '1001', agentName: 'ABC Shipping Co.', contactPerson: 'John Smith', email: 'john@abcshipping.com', phone: '+1 (555) 123-4567', address: '123 Main Street', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA'},
        { agentId: '1002', agentName: 'XYZ Logistics', contactPerson: 'Emily Dao', email: 'john@abcshipping.com', phone: '+1 (555) 123-4567', address: '123 Main Street', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA'},
        { agentId: '1003', agentName: 'Swift Transport', contactPerson: 'Michael Johnson', email: 'michael@swifttransport.com', phone: '+1 (555) 987-6543', address: '456 Oak Avenue', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1004', agentName: 'Dynamic Shipping', contactPerson: 'Sophia Rodriguez', email: 'sophia@dynamicshipping.com', phone: '+1 (555) 789-0123', address: '789 Elm Street', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1005', agentName: 'Global Express', contactPerson: 'David Kim', email: 'david@globalexpress.com', phone: '+1 (555) 234-5678', address: '567 Pine Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1006', agentName: 'Transcontinental Logistics', contactPerson: 'Olivia Baker', email: 'olivia@transcontinental.com', phone: '+1 (555) 345-6789', address: '890 Maple Drive', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1007', agentName: 'Rapid Cargo Services', contactPerson: 'Daniel Chen', email: 'daniel@rapidcargo.com', phone: '+1 (555) 876-5432', address: '234 Birch Street', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1008', agentName: 'Pacific Freight Solutions', contactPerson: 'Isabella Lee', email: 'isabella@pacificfreight.com', phone: '+1 (555) 654-3210', address: '678 Cedar Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1009', agentName: 'Velocity Shipping', contactPerson: 'Ethan Williams', email: 'ethan@velocityshipping.com', phone: '+1 (555) 321-0987', address: '901 Fir Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1010', agentName: 'Prime Logistics', contactPerson: 'Ava Martinez', email: 'ava@primelogistics.com', phone: '+1 (555) 890-1234', address: '123 Willow Avenue', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1011', agentName: 'Starline Transport', contactPerson: 'Noah Taylor', email: 'noah@starlinetransport.com', phone: '+1 (555) 432-1098', address: '345 Pine Street' , postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA'},
        { agentId: '1012', agentName: 'Sunrise Freight Services', contactPerson: 'Emma Davis', email: 'emma@sunrisefreight.com', phone: '+1 (555) 567-8901', address: '567 Cedar Lane' },
        { agentId: '1013', agentName: 'Transglobal Express', contactPerson: 'William Wilson', email: 'william@transglobalexpress.com', phone: '+1 (555) 789-0123', address: '789 Birch Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1014', agentName: 'Atlantic Shipping', contactPerson: 'Sophie Garcia', email: 'sophie@atlanticshipping.com', phone: '+1 (555) 123-4567', address: '123 Oak Drive', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA'},
        { agentId: '1015', agentName: 'Metro Logistics', contactPerson: 'Jackson Smith', email: 'jackson@metrologistics.com', phone: '+1 (555) 234-5678', address: '234 Pine Avenue', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1016', agentName: 'Eagle Cargo', contactPerson: 'Madison Jones', email: 'madison@eaglecargo.com', phone: '+1 (555) 345-6789', address: '345 Cedar Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1017', agentName: 'Swiftline Express', contactPerson: 'Logan Brown', email: 'logan@swiftlineexpress.com', phone: '+1 (555) 876-5432', address: '456 Maple Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1018', agentName: 'Horizon Transport Solutions', contactPerson: 'Avery White', email: 'avery@horizontransport.com', phone: '+1 (555) 654-3210', address: '567 Birch Avenue', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1019', agentName: 'Golden Bridge Logistics', contactPerson: 'Ella Miller', email: 'ella@goldenbridge.com', phone: '+1 (555) 321-0987', address: '678 Oak Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA'},
        { agentId: '1020', agentName: 'Phoenix Freight', contactPerson: 'Liam Johnson', email: 'liam@phoenixfreight.com', phone: '+1 (555) 890-1234', address: '789 Pine Street', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1021', agentName: 'Silver Arrow Shipping', contactPerson: 'Grace Taylor', email: 'grace@silverarrowshipping.com', phone: '+1 (555) 432-1098', address: '901 Cedar Drive', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1022', agentName: 'Express Cargo Co.', contactPerson: 'Mason Davis', email: 'mason@expresscargo.com', phone: '+1 (555) 567-8901', address: '123 Birch Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1023', agentName: 'Northstar Logistics', contactPerson: 'Scarlett Wilson', email: 'scarlett@northstarlogistics.com', phone: '+1 (555) 789-0123', address: '234 Oak Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1024', agentName: 'Dynamic Express', contactPerson: 'Christopher Martinez', email: 'christopher@dynamicexpress.com', phone: '+1 (555) 123-4567', address: '345 Cedar Drive', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1025', agentName: 'Blue Horizon Shipping', contactPerson: 'Aria Johnson', email: 'aria@bluehorizonshipping.com', phone: '+1 (555) 234-5678', address: '456 Pine Avenue', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1026', agentName: 'Majestic Freight Services', contactPerson: 'Caleb Brown', email: 'caleb@majesticfreight.com', phone: '+1 (555) 345-6789', address: '567 Cedar Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1027', agentName: 'Summit Transport Solutions', contactPerson: 'Hannah Miller', email: 'hannah@summittransport.com', phone: '+1 (555) 876-5432', address: '678 Oak Drive', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1028', agentName: 'Sapphire Logistics', contactPerson: 'Nathan Taylor', email: 'nathan@sapphirelogistics.com', phone: '+1 (555) 654-3210', address: '789 Birch Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1029', agentName: 'Aurora Express', contactPerson: 'Leah White', email: 'leah@auroraexpress.com', phone: '+1 (555) 321-0987', address: '901 Maple Road', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
        { agentId: '1030', agentName: 'Pinnacle Freight', contactPerson: 'Brandon Davis', email: 'brandon@pinnaclefreight.com', phone: '+1 (555) 890-1234', address: '123 Cedar Lane', postalCode:'679828', city: 'Chicago', stateProvice: 'Chicago', country: 'USA' },
    ])

    const handleRowClick = (rowData) => {
        setSelectedAgent(rowData);
        setEditBoxVisible(true);
    };

    const handleUpdate = () => {
        const index = agentData.findIndex((agent) => agent.agentId === selectedAgent.agentId);
    
        if (index !== -1) {
            const updatedAgentData = [...agentData];
            updatedAgentData[index] = selectedAgent;
    
            setAgentData(updatedAgentData);
    
            setSelectedAgent(null);
            setEditBoxVisible(false);
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

    const totalPages = Math.ceil(agentData.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    
    
      return (
        <div className="m-5">
          <h3 className="text-2xl font-bold">Manage Agent</h3>
    
          <table className="border border-collapse my-10 w-[100%]">
            <thead>
              <tr className="border border-black ">
                <th className="border bg-black text-white">Agent ID</th>
                <th className="border bg-black text-white">Agent Name</th>
                <th className="border bg-black text-white">Contact Person</th>
                <th className="border bg-black text-white">Email</th>
                <th className="border bg-black text-white">Phone</th>
                <th className="border bg-black text-white">Address</th>
              </tr>
            </thead>
            <tbody>
            {agentData.slice(startIdx, endIdx).map((rowData, index) => (
                <tr
                    key={index}
                    className="hover:bg-[#d7c9ff] cursor-pointer"
                    onClick={() => handleRowClick(rowData)} // Attach the click event here
                >
                    <td className="border border-black px-3 py-2">{rowData.agentId}</td>
                    <td className="border border-black px-3 py-2">{rowData.agentName}</td>
                    <td className="border border-black px-3 py-2">{rowData.contactPerson}</td>
                    <td className="border border-black px-3 py-2">{rowData.email}</td>
                    <td className="border border-black w-[170px] px-3 py-2">{rowData.phone}</td>
                    <td className="border border-black px-3 py-2">{rowData.address}</td>
                </tr>
            ))}

            </tbody>
          </table>

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
                            <h3 className="text-2xl font-bold mb-7 text-center">Edit Agent Data</h3>
                            <div className="form flex flex-col gap-2  justify-center">
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
    
                <div className="flex justify-end gap-1 items-center">
                    <button
                    className="text-[#4000FF] font-semibold text-lg"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    >
                    [Previous Page]
                    </button>
                    <button
                    className="text-[#4000FF] font-semibold text-lg"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    >
                    [Next Page]
                    </button>
                </div>

        </div>
      );
    };
    
    export default ManageAgent;