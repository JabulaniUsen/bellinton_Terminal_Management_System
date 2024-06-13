import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Select from 'react-select';
import AddCustomer from "./AddCustomer";
import axios from 'axios';

const ViewCustomer = () => {
  const [showManifestData, setShowManifestData] = useState(true);
  const [exporter_id, setExporterId] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [viewCustomer, setViewCustomer] = useState(true);
  const [addCustomer, setAddCustomer] = useState(false);
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVesselDetails, setSelectedVesselDetails] = useState(null);

  useEffect(() => {
    const fetchExportData = async () => {
      try {
        const response = await axios.get(`https://exprosys-backend.onrender.com/api/v1/exporters/`);
        if (Array.isArray(response.data.results)) {
          setInitialData(response.data.results);
          setData(response.data.results);
          console.log(response.data.results);
        } else if (response.data.results && typeof response.data.results === 'object') {
          setInitialData([response.data.results]);
          setData([response.data.results]);
          console.log(response.data.results);
        } else {
          console.error('Unexpected response data format:', response.data.results);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchExportData();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setErrorText(true);
      return;
    }
    setErrorText(false);
    const filteredData = initialData.filter(item =>
      item.exporter_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
    setMoreInfo(true);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setData(initialData);
    setMoreInfo(false);
  };

  const closeUploadBox = () => {
    setShowUpload(false);
  };

  const handleUpload = () => {
    setShowUpload(!showUpload);
  };

  const handleModalOK = () => {
    setUploadSuccess(false);
  };

  const showVesselDetails = (customer_name) => {
    const details = initialData.find(item => item.customer_name === customer_name);
    setSelectedVesselDetails(details);
  };

  const closeDetailsBox = () => {
    setSelectedVesselDetails(null);
  };

  const handleAddCustomer = () => {
    setViewCustomer(false);
    setAddCustomer(true);
  };

  return (
    <div>
      {viewCustomer && 
        <div className='py-10 roboto '>
          <div className="head flex justify-between mx-5">
            <h3 className='text-2xl font-bold'>View Export</h3>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="">
                <div className="flex gap-2 my-10 mx-7 items-center">
                  <label htmlFor="" className='text-lg font-bold'>Enter Exporter's Name:</label>
                  <div>
                    <Select
                      options={initialData.map((item) => ({ value: item.exporter_name, label: item.exporter_name }))}
                      value={{ value: searchTerm, label: searchTerm }}
                      onChange={(selectedOption) => setSearchTerm(selectedOption.value)}
                      isSearchable
                      placeholder="Select export name"
                      className='outline-none p-2 w-[300px] rounded '
                    />
                    {errorText && <p className="text-red-600">Please enter exports name</p>}
                  </div>
                  <div className="flex gap-3 justify-center items-center my-10">
                    <button className='text-white bg-[#4e9352] rounded-xl py-2 px-10' onClick={handleSearch} >View</button>
                    <button className='text-white bg-[#4e9352] rounded-xl py-2 px-10' onClick={handleAddCustomer} >Add Exporter</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`moreInfo my-10 mx-5`}>
            {showManifestData && 
              <div className="table my-10">
                <table className="border border-collapse">
                  <thead>
                    <tr className="border">
                      <th className="border border-black bg-yellow-100 px-4 py-2">Exporter ID</th>
                      <th className="border border-black bg-yellow-100 px-4 py-2">Exporter Name</th>
                      <th className="border border-black bg-yellow-100 px-4 py-2">Contact Person</th>
                      <th className="border border-black bg-yellow-100 px-4 py-2">Email</th>
                      <th className="border border-black bg-yellow-100 px-4 py-2">Phone</th>
                      <th className="border border-black bg-yellow-100 px-4 py-2">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((rowData, index) => (
                      <tr key={index} className="">
                        <td className="border border-black px-4 py-2">{rowData.exporter_id}</td>
                        <td className="border border-black px-4 py-2">{rowData.exporter_name}</td>
                        <td className="border border-black px-4 py-2">{rowData.contact_person}</td>
                        <td className="border border-black px-2 text-sm py-2">{rowData.email_address}</td>
                        <td className="border border-black px-4 py-2">{rowData.phone_number}</td>
                        <td className="border border-black px-4 py-2">{rowData.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex flex-col justify-end items-end my-10">
                  <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' onClick={resetSearch} >Back</button>
                </div>
              </div>
            }
          </div>
          {showUpload && <UploadBox closeUploadBox={closeUploadBox} />}
          {uploadSuccess && 
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#F2F2F2] bg-opacity-50"
            >
              <div className="bg-[#ffff] px-8 py-6 rounded-3xl text-center">
                <p className="text-2xl font-bold mb-4">Uploaded successfully!</p>
                <div className="flex justify-center space-x-4">
                  <button onClick={handleModalOK} className="bg-[#4e9352] text-white px-6 py-1 rounded-full">OK</button>
                </div>
              </div>
            </motion.div>
          }
          {selectedVesselDetails && 
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#F2F2F2] bg-opacity-50"
            >
              <div className="bg-[#ffff] px-20 py-10 rounded-xl text-center shadow-2xl">
                <p className="text-2xl font-bold mb-8">More Details</p>
                <div className="text-left flex flex-col gap-4">
                  <p className="font-semibold">• Vessel Name: <span className="font-normal">{selectedVesselDetails.vesselName}</span></p>
                  <p className="font-semibold">• IMO Number: <span className="font-normal">{selectedVesselDetails.imoNumber}</span></p>
                  <p className="font-semibold">• Status: <span className="font-normal">{selectedVesselDetails.status}</span></p>
                  <p className="font-semibold">• ETA (Estimated Time of Arrival): <span className="font-normal">{selectedVesselDetails.eta}</span></p>
                  <p className="font-semibold">• ETD (Estimated Time of Departure): <span className="font-normal">{selectedVesselDetails.etd}</span></p>
                  <p className="font-semibold">• Next Port: <span className="font-normal">{selectedVesselDetails.contact_person}</span></p>
                  <p className="font-semibold">• Last Port: <span className="font-normal">{selectedVesselDetails.email}</span></p>
                  <div className="flex gap-4">
                    <p className="font-semibold">• Cargo Information: <span className="font-normal">{selectedVesselDetails.phone}</span></p>
                    <p className="font-semibold">Address: <span className="font-normal">{selectedVesselDetails.address}</span></p>
                  </div>
                  <p className="font-semibold">• Agent/Operator: <span className="font-normal">{selectedVesselDetails.Agent}</span></p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <button onClick={closeDetailsBox} className="bg-[#4e9352] text-white px-6 py-1 rounded-full">Close</button>
                </div>
              </div>
            </motion.div>
          }
        </div>
      }
      {addCustomer && <AddCustomer />}
    </div>
  );
};

export default ViewCustomer;
