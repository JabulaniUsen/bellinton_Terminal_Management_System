import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faX } from "@fortawesome/free-solid-svg-icons";
import ReactToPrint from 'react-to-print';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios'; // Import axios for making HTTP requests

const ManageInvoice = () => {
  const [errorText, setErrorText] = useState(false);
  const [data, setData] = useState([]);
  const [contact_personSearchTerm, setcontact_personSearchTerm] = useState('');
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
        setSearchResults(fetchedData); 
        console.log(fetchedData);
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

  const handleSave = async () => {
    if (selectedRow !== null && searchResults[selectedRow]?.id !== undefined) {
      const id = searchResults[selectedRow].id;
  
      try {
        const response = await axios.put(`https://exprosys-backend.onrender.com/api/v1/inbound-pre-gate-entries/${id}`, formData);
        console.log("Data updated successfully!", response.data);
  
        const updatedData = [...searchResults];
        updatedData[selectedRow] = formData;
        setSearchResults(updatedData);
  
        // Close modal
        setModalOpen(false);
      } catch (error) {
        console.error("There was an error updating the data!", error);
      }
    } else {
      console.error("Selected row is invalid or has no ID");
    }
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
    e.stopPropagation(); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("tr") && !event.target.closest("button")) {
        setSelectedRow(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

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
      <Page phone_number="A4" style={styles.page}>
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
          <h3 className='font-bold text-2xl'>Manage Invoice</h3>
        </div>

        <div className="moreInfo my-10" ref={componentRef}>
          <div className="table overflow-x-auto my-10">
            <table className="border-collapse border border-gray-800">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="border border-gray-800 px-3 py-2">Container No </th>
                  <th className="border border-gray-800 px-3 py-2">Customer Name</th>
                  <th className="border border-gray-800 px-3 py-2">Contact Person</th>
                  <th className="border border-gray-800 px-3 py-2">Email</th>
                  <th className="border border-gray-800 px-3 py-2">Phone</th>
                  <th className="border border-gray-800 px-3 py-2">Address</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((rowData, index) => (
                  <tr key={index} className={`cursor-pointer ${selectedRow === index ? "bg-blue-200" : ""}`} onClick={() => handleRowClick(index)}>
                    <td className="border border-gray-800 px-3 py-2">{rowData.container_no}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.customer_name}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.contact_person}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.email}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.phone_number}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex gap-3 mx-[100px] m-16">
          {/* <button 
            className={`text-white bg-[#4e9352] flex items-center justify-center rounded-md py-1 px-10 ${selectedRow === null ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleViewDetails}
            disabled={selectedRow === null}
          >
            View Details
          </button> */}

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
              <h2 className="text-xl font-bold mb-4">Edit Invoice</h2>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Container No</label>
                    <input
                      type="text"
                      name="container_no"
                      value={formData.container_no}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">customer_name</label>
                    <input
                      type="text"
                      name="customer_name"
                      value={formData.customer_name}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Contact Person</label>
                    <input
                      type="text"
                      name="contact_person"
                      value={formData.contact_person}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Phone Number</label>
                    <input
                      type="text"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
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

export default ManageInvoice;
