import { useState } from "react";
import { motion } from 'framer-motion';
import Select from 'react-select';



const ManageBooking = () => {
  const [showManifestData, setShowManifestData] = useState(true);
  const [containerId, setcontainerId] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [showUpload, setShowUpload] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false);


  const data = [
    { containerId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details', type: 'Dry', customerName: 'ABC Shipping', assignment: 'Not Assigned', lastUpdate: '2024-03-15 09:35 AM (UTC)'},
    { containerId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details', type: 'Refregirated', customerName: 'ABC Shipping', assignment: 'Not Assigned', lastUpdate: '2024-03-15 09:35 AM (UTC)'},
  ];
  

  const closeUploadBox = () => {
    setShowUpload(false);
  };
  const handleUpload = () => {
    setShowUpload(!showUpload);
  }
  const handleModalOK = () => {
    setUploadSuccess(false);
  };


  const [selectedVesselDetails, setSelectedVesselDetails] = useState(null);

  const showVesselDetails = (containerId) => {
    const details = data.find(item => item.containerId === containerId);
    setSelectedVesselDetails(details);
  };

  const closeDetailsBox = () => {
    setSelectedVesselDetails(null);
  };

  return (
    <div className='py-10 roboto '>
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
                <th className=" border border-black px-3 py-2">eta</th>
                <th className=" border border-black px-3 py-2">etd</th>
                <th className=" border border-black px-3 py-2">Type</th>
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
                  <td className="border border-[#013a57] px-2 py-2">{rowData.type}</td>
                  <td className="border border-[#013a57] px-2 py-2">{rowData.vesselName}</td>
                  <td className="border border-[#013a57] px-2 py-2">{rowData.customerName}</td>
                  <td className="border border-[#013a57] px-2 py-2" ><button onClick={() => showVesselDetails(rowData.containerId)} className="underline">[ {rowData.action} ]</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>

      </div>
      { showUpload &&
        <UploadBox closeUploadBox={closeUploadBox}/>
      }
          {uploadSuccess && 
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
        }

      {selectedVesselDetails && 
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
              <p className="font-semibold">Vessel Name: <span className="font-normal ">{selectedVesselDetails.vesselName}</span></p>
              <p className="font-semibold">Arrival Time: <span className="font-normal ">{selectedVesselDetails.eta}</span></p>
              <p className="font-semibold">Departure Time: <span className="font-normal ">{selectedVesselDetails.etd}</span></p>
              <p className="font-semibold">Original Port: <span className="font-normal ">{selectedVesselDetails.lastPort}</span></p>
              <p className="font-semibold">Destination: <span className="font-normal ">{selectedVesselDetails.Destination}</span></p>
              <p className="font-semibold">Status: <span className="font-normal ">{selectedVesselDetails.status}</span></p>
            </div>
            <div className="addInfo">
                <p className="text-xl font-bold my-4">Additional Information</p>

                <div className="text-left flex flex-col gap-1">
                    <p className="font-semibold">• Vessel Assignment: <span className="font-normal ">{selectedVesselDetails.assignment}</span></p>
                    <p className="font-semibold">• Cargo Type: <span className="font-normal ">{selectedVesselDetails.type}</span></p>
                    <p className="font-semibold">• Last Update: <span className="font-normal ">{selectedVesselDetails.lastUpdate}</span></p>
                    <p className="font-semibold">• Estimated Time of Arrival (ETA): <span className="font-normal ">{selectedVesselDetails.eta}</span></p>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button onClick={closeDetailsBox} className="bg-[#4E9352] text-white px-6 py-1 rounded-full">Update</button>
              <button onClick={closeDetailsBox} className="bg-[#4E9352] text-white px-6 py-1 rounded-full">Close</button>
            </div>
          </div>
        </motion.div>
      }
    </div>
  );
};

export default ManageBooking;
