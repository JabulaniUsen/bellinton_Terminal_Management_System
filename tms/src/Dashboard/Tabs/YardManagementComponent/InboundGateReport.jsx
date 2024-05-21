import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faX } from "@fortawesome/free-solid-svg-icons";
import ReactToPrint from 'react-to-print';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios'; // Import axios for making HTTP requests

const InboundGateReport = () => {
  const [errorText, setErrorText] = useState(false);
  const [data, setData] = useState([]);
  const [containerNoSearchTerm, setContainerNoSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Initialize searchResults as an empty array
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [formData, setFormData] = useState({});
  const componentRef = useRef(null);

  // Fetch data from the backend API
  useEffect(() => {
    axios.get('https://exprosys-backend.onrender.com/api/v1/inbound-pre-gate-entries/') // Replace with your API endpoint
      .then(response => {
        const fetchedData = Array.isArray(response.data) ? response.data : [];
        setData(fetchedData);
        setSearchResults(fetchedData); // Initialize searchResults with fetched data
        console.log(fetchedData); // Log the data to the console
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

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

    // Send updated data to the backend
    axios.put(`https://exprosys-backend.onrender.com/api/v1/inbound-pre-gate-entries/${id}`, formData) // Replace with your API endpoint
      .then(response => {
        console.log("Data updated successfully!", response.data);
      })
      .catch(error => {
        console.error("There was an error updating the data!", error);
      });

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
          <ReactToPrint
            trigger={() => (
              <button className="text-white bg-[#4e9352] flex items-center justify-center rounded-md py-1 px-10">
                Export as PDF
              </button>
            )}
            content={() => componentRef.current}
          />
          <button className="text-white bg-[#4e9352] flex items-center justify-center rounded-md py-1 px-10" onClick={generateCSV}>
            Export as CSV
          </button>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg w-[800px] relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="absolute top-0 right-0 p-2">
                <FontAwesomeIcon
                  icon={faX}
                  className="cursor-pointer"
                  onClick={() => setModalOpen(false)}
                />
              </div>
              <h2 className="text-xl font-bold mb-4">Edit Entry</h2>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Entry Date and Time</label>
                    <input
                      type="text"
                      name="entryDateAndTime"
                      value={formData.entryDateAndTime}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Truck ID</label>
                    <input
                      type="text"
                      name="truckID"
                      value={formData.truckID}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Container ID</label>
                    <input
                      type="text"
                      name="containerNo"
                      value={formData.containerNo}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Size</label>
                    <input
                      type="text"
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Cargo Description</label>
                    <input
                      type="text"
                      name="cargoDesc"
                      value={formData.cargoDesc}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Arrival Time</label>
                    <input
                      type="text"
                      name="arrivalTime"
                      value={formData.arrivalTime}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Gate Pass Status</label>
                    <input
                      type="text"
                      name="gatePass"
                      value={formData.gatePass}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Special Instructions</label>
                    <input
                      type="text"
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                </div>
              </form>
              <div className="flex justify-end mt-6">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InboundGateReport;
