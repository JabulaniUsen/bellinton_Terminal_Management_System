import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Select from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faX } from "@fortawesome/free-solid-svg-icons";
import ReactToPrint from 'react-to-print';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const InboundGateReport = () => {
    const [errorText, setErrorText] = useState(false);
    const data = [
      { entryDateAndTime: '2024-03-15 09:00', truckID: 'TRK123', containerNo: 'CN172873', companyName: 'ABC Shipping Co.', size: '40ft', cargoDesc: 'Electronics', arrivalTime: '2024-02-17 09:45 AM', gatePass: 'Approved', specialInstructions: 'Fragile cargo' },
      { entryDateAndTime: '2024-03-15 09:00', truckID: 'TRK123', containerNo: 'CN127832', companyName: 'ABC Shipping Co.', size: '40ft', cargoDesc: 'Electronics', arrivalTime: '2024-02-17 09:45 AM', gatePass: 'Approved', specialInstructions: 'Fragile cargo' },
      { entryDateAndTime: '2024-03-15 09:00', truckID: 'TRK123', containerNo: 'CN127832', companyName: 'ABC Shipping Co.', size: '40ft', cargoDesc: 'Electronics', arrivalTime: '2024-02-17 09:45 AM', gatePass: 'Approved', specialInstructions: 'Fragile cargo' },
    ];
  
    const [containerNoSearchTerm, setContainerNoSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([...data]); // Initialize searchResults with data
    const [selectedRow, setSelectedRow] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [showFullDetails, setShowFullDetails] = useState(false);
    const [formData, setFormData] = useState({});
    const componentRef = useRef(null);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  const handleEdit = () => {
    if (selectedRow !== null) {
      setFormData(searchResults[selectedRow]); 
      setModalOpen(true);
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
          <h3 className='font-bold text-2xl'>Inbound Gate Entry</h3>
        </div>

        <div className="moreInfo my-10" ref={componentRef}>
          <div className="table overflow-x-auto my-10">
            <table className="border-collapse border border-gray-800">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="border border-gray-800 px-3 py-2">Entry Time and Date</th>
                  <th className="border border-gray-800 px-3 py-2">Truck ID</th>
                  <th className="border border-gray-800 px-3 py-2">Container ID</th>
                  <th className="border border-gray-800 px-3 py-2">Company Name</th>
                  <th className="border border-gray-800 px-3 py-2">Size</th>
                  <th className="border border-gray-800 px-3 py-2">Cargo Description</th>
                  <th className="border border-gray-800 px-3 py-2">Arrival Time</th>
                  <th className="border border-gray-800 px-3 py-2">Gate Pass Status</th>
                  <th className="border border-gray-800 px-3 py-2">Special Instructions</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((rowData, index) => (
                  <tr key={index} className={selectedRow === index ? "bg-blue-200" : ""} onClick={() => handleRowClick(index)}>
                    <td className="border border-gray-800 px-3 py-2">{rowData.entryDateAndTime}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.truckID}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.containerNo}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.companyName}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.size}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.cargoDesc}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.arrivalTime}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.gatePass}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.specialInstructions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex gap-3 mx-[100px] m-16">
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
            disabled={selectedRow === null}
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
        trigger={() => 
          <button className='text-white bg-[#4e9352] flex items-center justify-center rounded-md py-1 px-10'>
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
                    <label htmlFor="entryDateAndTime" className="block text-sm font-medium text-gray-700">Entry Date and Time</label>
                    <input type="text" name="entryDateAndTime" id="entryDateAndTime" value={formData.entryDateAndTime} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="truckID" className="block text-sm font-medium text-gray-700">Truck ID</label>
                    <input type="text" name="truckID" id="truckID" value={formData.truckID} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="containerNo" className="block text-sm font-medium text-gray-700">Container No.</label>
                    <input type="text" name="containerNo" id="containerNo" value={formData.containerNo} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
                    <input type="text" name="size" id="size" value={formData.size} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="cargoDesc" className="block text-sm font-medium text-gray-700">Cargo Description</label>
                    <input type="text" name="cargoDesc" id="cargoDesc" value={formData.cargoDesc} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="arrivalTime" className="block text-sm font-medium text-gray-700">Arrival Time</label>
                    <input type="text" name="arrivalTime" id="arrivalTime" value={formData.arrivalTime} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="gatePass" className="block text-sm font-medium text-gray-700">Gate Pass Status</label>
                    <input type="text" name="gatePass" id="gatePass" value={formData.gatePass} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">Special Instructions</label>
                    <input type="text" name="specialInstructions" id="specialInstructions" value={formData.specialInstructions} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm rounded-md text-black font-semibold bg-[#797979] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3200cc]" onClick={handleClose}>
                    Cancel
                  </button>
                  <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#4e9352] hover:bg-[#2e6e32] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3200cc]" onClick={handleSave}>
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
                <p><span className="font-bold">Entry Date and Time:</span> {searchResults[selectedRow]?.entryDateAndTime}</p>
                <p><span className="font-bold">Truck ID:</span> {searchResults[selectedRow]?.truckID}</p>
                <p><span className="font-bold">Container No.:</span> {searchResults[selectedRow]?.containerNo}</p>
                <p><span className="font-bold">Company Name:</span> {searchResults[selectedRow]?.companyName}</p>
                <p><span className="font-bold">Size:</span> {searchResults[selectedRow]?.size}</p>
                <p><span className="font-bold">Cargo Description:</span> {searchResults[selectedRow]?.cargoDesc}</p>
                <p><span className="font-bold">Arrival Time:</span> {searchResults[selectedRow]?.arrivalTime}</p>
                <p><span className="font-bold">Gate Pass Status:</span> {searchResults[selectedRow]?.gatePass}</p>
                <p><span className="font-bold">Special Instructions:</span> {searchResults[selectedRow]?.specialInstructions}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InboundGateReport;
