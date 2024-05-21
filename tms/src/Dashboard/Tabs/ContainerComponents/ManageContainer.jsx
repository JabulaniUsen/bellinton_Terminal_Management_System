import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageBooking = () => {
  const [data, setData] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const [showManifestData, setShowManifestData] = useState(true);
  const [containerId, setContainerId] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedVesselDetails, setSelectedVesselDetails] = useState(null);

  // Function to fetch container data from the backend API
  const fetchContainerData = async () => {
    try {
      const response = await axios.get(`https://exprosys-backend.onrender.com/api/v1/containers`);
      setData(response.data);
      console.log("Container Data:", response.data); // Log data in console
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to update container data in the backend API
  const updateContainerData = async () => {
    try {
      const response = await axios.put(`https://exprosys-backend.onrender.com/api/v1/containers/${selectedVesselDetails.containerId}`, selectedVesselDetails);
      toast.success("Container data updated successfully!");
      console.log("Container data updated successfully!");
      fetchContainerData(); // Refresh the data
    } catch (error) {
      toast.error("Error updating container data!");
      console.error("Error updating data:", error);
    }
  };

  // Function to delete container data in the backend API
  const deleteContainerData = async () => {
    try {
      const response = await axios.delete(`https://exprosys-backend.onrender.com/api/v1/containers/${selectedVesselDetails.containerId}`);
      toast.success("Container data deleted successfully!");
      console.log("Container data deleted successfully!");
      fetchContainerData(); // Refresh the data
      closeDetailsBox(); // Close the details box
    } catch (error) {
      toast.error("Error deleting container data!");
      console.error("Error deleting data:", error);
    }
  };

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    fetchContainerData();
  }, []);

  // Function to handle changes in the editable details
  const handleDetailChange = (key, value) => {
    setSelectedVesselDetails(prevDetails => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  // Function to update the data in the table
  const handleUpdate = () => {
    updateContainerData();
  };

  // Function to show vessel details
  const showVesselDetails = (containerId) => {
    const details = data.find(item => item.containerId === containerId);
    setSelectedVesselDetails(details);
  };

  // Function to close details box
  const closeDetailsBox = () => {
    setSelectedVesselDetails(null);
  };

  return (
    <div className='py-10 roboto'>
      <div className="head flex justify-between mx-5">
        <h3 className='text-2xl font-bold text-[#045985]'>Manage Booking</h3>
      </div>

      <div className={`moreInfo my-10 mx-5 `}>
        <div className="table overflow-x-auto my-10">
          <table className="border border-collapse">
            <thead>
              <tr className="">
                <th className=" border border-black px-3 py-2">Container ID</th>
                <th className=" border border-black px-3 py-2">Status</th>
                <th className=" border border-black px-3 py-2">Type</th>
                <th className=" border border-black px-3 py-2">ETA</th>
                <th className=" border border-black px-3 py-2">ETD</th>
                <th className=" border border-black px-3 py-2">Vessel Name</th>
                <th className=" border border-black px-3 py-2">Customer Name</th>
                <th className=" border border-black px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, index) => (
                <tr key={index} className="">
                  <td className="border border-[#013a57] px-2 py-2">{rowData.containerId}</td>
                  <td className="border border-[#013a57] px-2 py-2">{rowData.status}</td>
                  <td className="border border-[#013a57] px-2 py-2">{rowData.type}</td>
                  <td className="border border-[#013a57] px-2 py-2">{rowData.eta}</td>       
                  <td className="border border-[#013a57] px-2 py-2">{rowData.etd}</td>
                  <td className="border border-[#013a57] px-2 py-2">{rowData.vesselName}</td>
                  <td className="border border-[#013a57] px-2 py-2">{rowData.customerName}</td>
                  <td className="border border-[#013a57] px-2 py-2">
                    <button onClick={() => showVesselDetails(rowData.containerId)} className="underline">[ See details ]</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showUpload && (
        <UploadBox closeUploadBox={closeUploadBox}/>
      )}

      {uploadSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#F2F2F2] bg-opacity-50"
        >
          <div className="bg-[#ffff] px-8 py-6 rounded-3xl text-center">
            <p className="text-2xl font-bold mb-4">Manifest Uploaded successfully!</p>
            <div className="flex justify-center space-x-4">
              <button onClick={handleModalOK} className="bg-[#4E9352] text-white px-6 py-1 rounded-full">OK</button>
            </div>
          </div>
        </motion.div>
      )}

      {selectedVesselDetails && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#F2F2F2] bg-opacity-50"
        >
          <div className="bg-[#ffff] px-10 py-10 rounded-xl shadow-2xl">
            <p className="text-xl font-bold mb-8">Container Details</p>
            <div className="text-left flex flex-col gap-1">
              <p className="font-semibold">Vessel Name:
                <input
                  type="text"
                  value={selectedVesselDetails.vesselName}
                  onChange={(e) => handleDetailChange("vesselName", e.target.value)}
                  className="px-2 border rounded ml-3"
                />
              </p>
              <p className="font-semibold">Arrival Time:
                <input
                  type="text"
                  value={selectedVesselDetails.eta}
                  onChange={(e) => handleDetailChange("eta", e.target.value)}
                  className="px-2 border rounded ml-3"
                />
              </p>
              <p className="font-semibold">Departure Time:
                <input
                  type="text"
                  value={selectedVesselDetails.etd}
                  onChange={(e) => handleDetailChange("etd", e.target.value)}
                  className="px-2 border rounded ml-3"
                />
              </p>
              <p className="font-semibold">Original Port:
                <input
                  type="text"
                  value={selectedVesselDetails.lastPort}
                  onChange={(e) => handleDetailChange("lastPort", e.target.value)}
                  className="px-2 border rounded ml-3"
                />
              </p>
              <p className="font-semibold">Destination:
                <input
                  type="text"
                  value={selectedVesselDetails.destination}
                  onChange={(e) => handleDetailChange("destination", e.target.value)}
                  className="px-2 border rounded ml-3"
                />
              </p>
              <p className="font-semibold">Status:
                <input
                  type="text"
                  value={selectedVesselDetails.status}
                  onChange={(e) => handleDetailChange("status", e.target.value)}
                  className="px-2 border rounded ml-3"
                />
              </p>
            </div>
            <div className="addInfo">
              <p className="text-xl font-bold my-4">Additional Information</p>
              <div className="text-left flex flex-col gap-1">
                <p className="font-semibold">• Vessel Assignment:
                  <input
                    type="text"
                    value={selectedVesselDetails.assignment}
                    onChange={(e) => handleDetailChange("assignment", e.target.value)}
                    className="px-2 border rounded ml-3"
                  />
                </p>
                <p className="font-semibold">• Cargo Type:
                  <input
                    type="text"
                    value={selectedVesselDetails.type}
                    onChange={(e) => handleDetailChange("type", e.target.value)}
                    className="px-2 border rounded ml-3"
                  />
                </p>
                <p className="font-semibold">• Last Update:
                  <input
                    type="text"
                    value={selectedVesselDetails.lastUpdate}
                    onChange={(e) => handleDetailChange("lastUpdate", e.target.value)}
                    className="px-2 border rounded ml-3"
                  />
                </p>
                <p className="font-semibold">• Estimated Time of Arrival (ETA):
                  <input
                    type="text"
                    value={selectedVesselDetails.eta}
                    onChange={(e) => handleDetailChange("eta", e.target.value)}
                    className="px-2 border rounded ml-3"
                  />
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button onClick={handleUpdate} className="bg-[#4E9352] text-white px-6 py-1 rounded-full">Update</button>
              <button onClick={closeDetailsBox} className="bg-[#4E9352] text-white px-6 py-1 rounded-full">Close</button>
              <button onClick={deleteContainerData} className="bg-[#4E9352] text-white px-6 py-1 rounded-full">Delete</button>
            </div>
          </div>
        </motion.div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ManageBooking;
