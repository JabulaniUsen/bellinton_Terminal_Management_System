import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Select from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faX } from "@fortawesome/free-solid-svg-icons";
import ReactToPrint from 'react-to-print';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';

const OutboundGateReport = () => {
    const [errorText, setErrorText] = useState(false);
    const [statusSearchTerm, setStatusSearchTerm] = useState('');
    const [container_idSearchTerm, setContainer_idSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [showFullDetails, setShowFullDetails] = useState(false);
    const [formData, setFormData] = useState({});
    const componentRef = useRef(null);

    useEffect(() => {
        // Fetch data from the backend API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/outbound-gate-exits');
                console.log(response.data); // Log data to console
                setSearchResults(response.data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        const filteredData = searchResults.filter(item =>
            item.container_id.toLowerCase().includes(container_idSearchTerm.toLowerCase())
        );

        setSearchResults(filteredData);
        setErrorText(filteredData.length === 0);
    };

    const handleClearSearch = () => {
        setStatusSearchTerm('');
        setContainer_idSearchTerm('');
        setSearchResults([]);
        setErrorText(false);
    };

    const handleRowClick = (index) => {
        setSelectedRow(index); // Set selected row index
    };

    const handleEdit = () => {
        if (selectedRow !== null) {
            setFormData(searchResults[selectedRow]); // Set form data to selected row data
            setModalOpen(true); // Open modal
        }
    };

    const handleSave = () => {
        const updatedData = [...searchResults];
        updatedData[selectedRow] = formData;
        setSearchResults(updatedData);
    
        axios.put(`https://exprosys-backend.onrender.com/api/v1/outbound-gate-exits/${id}`, formData) // Replace with your API endpoint
          .then(response => {
            console.log("Data updated successfully!", response.data);
          })
          .catch(error => {
            console.error("There was an error updating the data!", error);
          });
    
        // Close modal
        setModalOpen(false);
      };
    //   
    const handleClose = () => {
        setModalOpen(false)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleViewDetails = () => {
        setShowFullDetails(true)
    };

    const handleButtonClick = (e) => {
        e.stopPropagation(); // Prevent row click event when button is clicked
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click target is not within the table rows or buttons
            if (!event.target.closest("tr") && !event.target.closest("button")) {
                setSelectedRow(null); // Reset selected row
            }
        };

        // Add event listener to detect clicks outside
        document.addEventListener("click", handleClickOutside);

        // Remove event listener when component unmounts
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const generateCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + searchResults.map(row => Object.values(row).join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "table.csv");
        document.body.appendChild(link);
        link.click();
    };

    const MyDocument = () => (
        <Document>
            <Page size="A4">
                {searchResults.map((row, index) => (
                    <View key={index}>
                        {Object.values(row).map((cell, index) => (
                            <Text key={index}>{cell}</Text>
                        ))}
                    </View>
                ))}
            </Page>
        </Document>
    );

    return (
        <div className="">
            <div className='roboto poppins m-10'>
                <div className="head flex justify-between">
                    <h3 className='font-bold text-2xl'>Outbound Gate Exit</h3>
                </div>

                <div className="moreInfo my-10" ref={componentRef}>
                    <div className="table overflow-x-auto my-10">
                        <table className="border-collapse border border-gray-800">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-800 px-2 py-2">Container ID</th>
                                    <th className="border border-gray-800 px-2 py-2">Truck ID</th>
                                    <th className="border border-gray-800 px-2 py-2">Driver Name</th>
                                    <th className="border border-gray-800 px-2 py-2">License Plate</th>
                                    <th className="border border-gray-800 px-2 py-2">Company Name</th>
                                    {/* <th className="border border-gray-800 px-2 py-2">Cargo Description</th> */}
                                    <th className="border border-gray-800 px-2 py-2">Departure Time</th>
                                    <th className="border border-gray-800 px-2 py-2">Exit Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchResults.map((rowData, index) => (
                                    <tr key={index} onClick={() => handleRowClick(index)}>
                                        <td className="border border-gray-800 px-3 py-2">{rowData.container_id}</td>
                                        <td className="border border-gray-800 px-3 py-2">{rowData.truck_number}</td>
                                        <td className="border border-gray-800 px-3 py-2">{rowData.driver_name}</td>
                                        <td className="border border-gray-800 px-3 py-2">{rowData.license_plate}</td>
                                        <td className="border border-gray-800 px-3 py-2">{rowData.company_name}</td>
                                        {/* <td className="border border-gray-800 px-3 py-2">{rowData.cargoDesc}</td> */}
                                        <td className="border border-gray-800 px-3 py-2">{rowData.departure_time}</td>
                                        <td className="border border-gray-800 px-3 py-2">{rowData.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex gap-3 m-16">
                    <button
                        className={`text-white bg-[#4e9352] flex items-center justify-center rounded-md py-1 px-10 ${selectedRow === null ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={handleViewDetails}
                        disabled={selectedRow === null}
                    >
                        View Details
                    </button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        disabled={selectedRow === null} // Disable button if no row is selected
                        className={`text-white bg-[#4e9352] flex items-center justify-center rounded-md py-1 px-10 ${selectedRow === null ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={handleEdit}
                    >
                        Edit
                    </motion.button>
                    <button
                        className='text-white bg-[#4e9352] flex items-center justify-center rounded-md py-1 px-10'
                        onClick={() => generateCSV()}
                    >
                        Export CSV
                    </button>
                    <PDFDownloadLink
                        document={<MyDocument />}
                        fileName="table.pdf"
                    >
                        {({ blob, url, loading, error }) =>
                            <button
                                className='text-white bg-[#4e9352] flex items-center justify-center rounded-md py-1 px-10'
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Export PDF'}
                            </button>
                        }
                    </PDFDownloadLink>
                    <ReactToPrint
                        trigger={() => <button className='text-white bg-[#4e9352] flex items-center justify-center rounded-md py-1 px-10'>Print</button>}
                        content={() => componentRef.current}
                    />
                </div>

                {modalOpen && (
                    <AnimatePresence>
                        <motion.div
                            className="modal fixed inset-0 flex items-center justify-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal-content bg-white p-6 rounded-lg shadow-lg relative z-10"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                            >
                                <h3 className="text-xl font-semibold mb-4">Edit Outbound Gate Data</h3>
                                <form className="grid grid-cols-2 gap-x-4">
                                    <div className="mb-4">
                                        <label htmlFor="container_id" className="block text-sm font-medium text-gray-700">
                                            Container ID
                                        </label>
                                        <input
                                            type="text"
                                            id="container_id"
                                            name="container_id"
                                            value={formData.container_id || ''}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="truck_number" className="block text-sm font-medium text-gray-700">
                                            Truck ID
                                        </label>
                                        <input
                                            type="text"
                                            id="truck_number"
                                            name="truck_number"
                                            value={formData.truck_number || ''}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="driver_name" className="block text-sm font-medium text-gray-700">
                                            Driver Name
                                        </label>
                                        <input
                                            type="text"
                                            id="driver_name"
                                            name="driver_name"
                                            value={formData.driver_name || ''}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="license_plate" className="block text-sm font-medium text-gray-700">
                                            License Plate
                                        </label>
                                        <input
                                            type="text"
                                            id="license_plate"
                                            name="license_plate"
                                            value={formData.license_plate || ''}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company_name"
                                            name="company_name"
                                            value={formData.company_name || ''}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="cargoDesc" className="block text-sm font-medium text-gray-700">
                                            Cargo Description
                                        </label>
                                        <input
                                            type="text"
                                            id="cargoDesc"
                                            name="cargoDesc"
                                            value={formData.cargoDesc || ''}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="departure_time" className="block text-sm font-medium text-gray-700">
                                            Departure Time
                                        </label>
                                        <input
                                            type="text"
                                            id="departure_time"
                                            name="departure_time"
                                            value={formData.departure_time || ''}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                            Exit Status
                                        </label>
                                        <input
                                            type="text"
                                            id="status"
                                            name="status"
                                            value={formData.status || ''}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                </form>
                                <div className="flex justify-end">
                                    <button
                                        onClick={handleSave}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleClose}
                                        className="bg-gray-300 text-black px-4 py-2 rounded-md"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
}

export default OutboundGateReport;
