import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Select from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faX } from "@fortawesome/free-solid-svg-icons";
import ReactToPrint from 'react-to-print';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const OutboundGateReport = () => {
    const [errorText, setErrorText] = useState(false);
    const [data, setData] = useState([
      { departureTime: '2024-03-15 09:00', truckID: 'TRK123', containerID: 'CN172873', companyName: 'ABC Shipping Co.', driverName: 'John Smith', cargoDesc: 'Electronics', licensePlate: 'ABC938', status: 'Approved', },
      { departureTime: '2024-03-15 09:00', truckID: 'TRK123', containerID: 'CN127832', companyName: 'ABC Shipping Co.', driverName: 'John Smith', cargoDesc: 'Electronics', licensePlate: 'ABC938', status: 'Approved', },
      { departureTime: '2024-03-15 09:00', truckID: 'TRK123', containerID: 'CN127832', companyName: 'ABC Shipping Co.', driverName: 'John Smith', cargoDesc: 'Electronics', licensePlate: 'ABC938', status: 'Approved', },
    ]);
  
    const [statusSearchTerm, setStatusSearchTerm] = useState('');
    const [containerIDSearchTerm, setContainerIDSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([...data]); // Initialize searchResults with data
    const [selectedRow, setSelectedRow] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [showFullDetails, setShowFullDetails] = useState(false);
    const [formData, setFormData] = useState({});
    const componentRef = useRef(null);
  
  const handleSearch = () => {
    const filteredData = data.filter(item =>
      item.containerID.toLowerCase().includes(containerIDSearchTerm.toLowerCase())
    );

    setSearchResults(filteredData);
    setErrorText(filteredData.length === 0);
  };

  const handleClearSearch = () => {
    setStatusSearchTerm('');
    setContainerIDSearchTerm('');
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
    // Update the data in the table with the form data
    const updatedData = [...searchResults]; // Copy searchResults state
    updatedData[selectedRow] = formData; // Update the selected row with formData
    setSearchResults(updatedData); // Update searchResults state with edited data
  
    // Close modal
    setModalOpen(false);
  };
  
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
  }
  
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
          + data.map(row => Object.values(row).join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "table.csv");
        document.body.appendChild(link);
        link.click();
      };
    
      // Component to render for PDF
      const MyDocument = () => (
        <Document>
          <Page size="A4" style={styles.page}>
            {data.map((row, index) => (
              <View key={index} style={styles.row}>
                {Object.values(row).map((cell, index) => (
                  <Text key={index} style={styles.cell}>{cell}</Text>
                ))}
              </View>
            ))}
          </Page>
        </Document>
      );
    
      // Styles for PDF
      const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
        },
        row: {
          flexDirection: 'row',
          borderBottomColor: '#000',
          borderBottomWidth: 1,
        },
        cell: {
          flexGrow: 1,
          padding: 4,
        },
      });

  return (
    <div className="">
      <div className='roboto poppins m-10'>
        <div className="head flex justify-between">
          <h3 className='font-bold text-2xl'>Outbound Gate Exit</h3>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <div className="">
              <div className="flex gap-4 mt-5 items-center">
                    <label htmlFor="" className='text-lg font-bold'>Container ID:</label>
                    <div className="">
                  <Select
                    options={data.map((item) => ({ value: item.containerID, label: item.containerID }))}
                    value={containerIDSearchTerm ? { value: containerIDSearchTerm, label: containerIDSearchTerm } : null}
                    onChange={(selectedOption) => setContainerIDSearchTerm(selectedOption.value)}
                    isSearchable
                    placeholder="Search by Container No."
                    className='outline-none min-w-[300px] rounded'
                  />
                  {errorText && <p className="text-red-600">No results found</p>}
                </div>

                <div className="flex gap-2 justify-center items-center my-10">
                  <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleSearch}>View</button>
                  <button className='text-black font-semibold bg-[#a0a0a0] rounded-md py-1 px-9' onClick={handleClearSearch}>Reset</button>
                </div>
              </div>
            </div>
          </div>
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
                  <th className="border border-gray-800 px-2 py-2">Cargo Description</th>
                  <th className="border border-gray-800 px-2 py-2">Departure Time</th>
                  <th className="border border-gray-800 px-2 py-2">Exit Status</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((rowData, index) => (
                  <tr key={index} className={selectedRow === index ? "bg-blue-200" : ""} onClick={() => handleRowClick(index)}>
                    <td className="border border-gray-800 px-3 py-2">{rowData.containerID}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.truckID}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.driverName}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.licensePlate}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.companyName}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.cargoDesc}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.departureTime}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex gap-3 m-16">
            <button 
                className={`text-white bg-[#4000FF] flex items-center justify-center rounded-md py-1 px-10 ${selectedRow === null ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handleViewDetails}
                disabled={selectedRow === null}
                >
                View Details
            </button>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={selectedRow === null} // Disable button if no row is selected
                className={`text-white bg-[#4000FF] flex items-center justify-center rounded-md py-1 px-10 ${selectedRow === null ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handleEdit}
            >
                Edit
            </motion.button>
            <button 
            className='text-white bg-[#4000FF] flex items-center justify-center rounded-md py-1 px-10' 
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
                className='text-white bg-[#4000FF] flex items-center justify-center rounded-md py-1 px-10' 
                disabled={loading}
                >
                {loading ? 'Loading...' : 'Export PDF'}
                </button>
            }
            </PDFDownloadLink>
            <ReactToPrint
            trigger={() => 
            <button className='text-white bg-[#4000FF] flex items-center justify-center rounded-md py-1 px-10'>
                Print
            </button>
            }
            content={() => componentRef.current} // Use componentRef.current
        />
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Edit Data</h2>
              <form className="">
                <div className="grid grid-cols-2 gap-x-3">
                    <div className="mb-4">
                        <label htmlFor="containerID" className="block text-sm font-medium text-gray-700">Truck ID</label>
                        <input type="text" name="containerID" id="containerID" value={formData.containerID} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="truckID" className="block text-sm font-medium text-gray-700">Truck ID</label>
                        <input type="text" name="truckID" id="truckID" value={formData.truckID} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="driverName" className="block text-sm font-medium text-gray-700">Driver Name</label>
                        <input type="text" name="driverName" id="driverName" value={formData.driverName} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700">License Plate</label>
                        <input type="text" name="licensePlate" id="licensePlate" value={formData.licensePlate} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cargoDesc" className="block text-sm font-medium text-gray-700">Cargo Description</label>
                        <input type="text" name="cargoDesc" id="cargoDesc" value={formData.cargoDesc} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="departureTime" className="block text-sm font-medium text-gray-700">Entry Date and Time</label>
                        <input type="text" name="departureTime" id="departureTime" value={formData.departureTime} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Gate Pass Status</label>
                        <input type="text" name="status" id="status" value={formData.status} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm rounded-md text-black font-semibold bg-[#797979] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3200cc]" onClick={handleClose}>
                    Cancel
                  </button>
                  <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#4000FF] hover:bg-[#3200cc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3200cc]" onClick={handleSave}>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showFullDetails && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-white p-8 rounded-lg relative"
            >
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <div className="absolute top-2 right-2">
                <button onClick={() => setShowFullDetails(false)}>
                  <FontAwesomeIcon icon={faX} className="h-3 w-3 m-5 text-gray-500"/>
                </button>
              </div>
              <div>
                <p><span className="font-bold">Entry Date and Time:</span> {searchResults[selectedRow]?.departureTime}</p>
                <p><span className="font-bold">Truck ID:</span> {searchResults[selectedRow]?.truckID}</p>
                <p><span className="font-bold">Container No.:</span> {searchResults[selectedRow]?.containerID}</p>
                <p><span className="font-bold">Company Name:</span> {searchResults[selectedRow]?.companyName}</p>
                <p><span className="font-bold">Size:</span> {searchResults[selectedRow]?.size}</p>
                <p><span className="font-bold">Cargo Description:</span> {searchResults[selectedRow]?.cargoDesc}</p>
                <p><span className="font-bold">Arrival Time:</span> {searchResults[selectedRow]?.arrivalTime}</p>
                <p><span className="font-bold">Gate Pass Status:</span> {searchResults[selectedRow]?.status}</p>
                <p><span className="font-bold">Special Instructions:</span> {searchResults[selectedRow]?.specialInstructions}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OutboundGateReport;
