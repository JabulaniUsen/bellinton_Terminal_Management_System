import { useState } from "react";
import { motion } from 'framer-motion';
import Select from 'react-select';



const ViewContainer = () => {
  const [showManifestData, setShowManifestData] = useState(true);
  const [containerId, setcontainerId] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [showUpload, setShowUpload] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false);
  const [containerStatusData, setContainerStatusData] = useState(null);

  const fetchContainerStatus = async (containerId) => {
    try {
      const response = await axios.get(`https://exprosys-backend.onrender.com/api/v1/container-status/${containerId}/`);
      setContainerStatusData(response.data); // Assuming the API response is in JSON format
    } catch (error) {
      console.error('Error fetching container status:', error);
      // Handle error, e.g., set an error state
    }
  };

  const initialData = [
    { containerId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details', type: 'Dry', customerName: 'ABC Shipping'},
    { containerId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details', type: 'Refregirated', customerName: 'ABC Shipping'},
  ];
  
  const handleSearch = () => {
    const filteredData = initialData.filter(item =>
      item.containerId.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    setData(filteredData);
    setMoreInfo(true)
  };

  const resetSearch = () => {
    // Reset the search term and show all data
    setSearchTerm('');
    setData(initialData);
    setMoreInfo(false)
  };

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  
  const closeUploadBox = () => {
    setShowUpload(false);
    // setUploadSuccess(true) 
  };
  const handleUpload = () => {
    setShowUpload(!showUpload);
  }
  const handleModalOK = () => {
    setUploadSuccess(false);
  };

  // Show more details

  const [selectedVesselDetails, setSelectedVesselDetails] = useState(null);

  const showVesselDetails = (containerId) => {
    const details = initialData.find(item => item.containerId === containerId);
    setSelectedVesselDetails(details);
  };

  const closeDetailsBox = () => {
    setSelectedVesselDetails(null);
  };

  return (
    <div className='py-10 roboto '>
      <div className="head flex justify-between mx-5">
        <h3 className='text-2xl font-bold text-[#045985]'>View Container</h3>
      </div>

      <div >
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex gap-2 my-10 mx-7 items-center">
              <label htmlFor="" className='text-lg font-bold'>Select Container ID:</label>
              <div className="">
                  <Select
                    options={initialData.map((item) => ({ value: item.containerId, label: item.containerId }))}
                    value={{ value: searchTerm, label: searchTerm }}
                    onChange={(selectedOption) => setSearchTerm(selectedOption.value)}
                    isSearchable
                    placeholder="Select Cargo ID"
                    className='outline-none p-2 w-[300px] rounded '
                  />
                  {errorText && <p className="text-red-600">Please enter your cargo Id</p>}
                </div>

        <div className="flex flex-col justify-center items-center my-10">
          <button className=' text-white bg-[#4E9352] rounded py-2 px-12' onClick={() => fetchContainerStatus(containerId)} >View</button>
        </div>
            </div>
          </div>
        </div>

      </div>

      <div className={`moreInfo my-10 mx-5 `}>
        {/* {moreInfo &&         
        <div className="">
          {data.map((rowData, index) => (
            <div className="manifestDetails" key={index}>
            <p className="font-semibold">Cargo ID: <span className="font-normal">{rowData.containerId}</span></p>
            <p className="font-semibold">Date: <span className="font-normal">February 17, 2024</span></p>
            <p className="font-semibold">Terminal: <span className="font-normal">Port of Lagos</span></p>
          </div>
          ))}
        </div>
        } */}


          {containerStatusData && 
          <div className="table overflow-x-auto my-10">
          <table className="border border-collapse">
            <thead>
              <tr className="">
                <th className=" border border-black px-3 py-2">Container ID</th>
                <th className=" border border-black px-3 py-2">Status</th>
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
          <div className="flex flex-col justify-end items-end my-10">
            <button className=' text-white bg-[#4E9352] rounded py-2 px-12' onClick={resetSearch} >Back</button>
          </div>
        </div>
        }

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
          <div className="bg-[#ffff] px-20 py-10 rounded-xl text-center shadow-2xl">
            <p className="text-2xl font-bold mb-8">More Details</p>
            <div className="text-left flex flex-col gap-4">
              <p className="font-semibold">• Vessel Name: <span className="font-normal">{selectedVesselDetails.vesselName}</span></p>
              <p className="font-semibold">• IMO Number: <span className="font-normal">{selectedVesselDetails.imoNumber}</span></p>
              <p className="font-semibold">• Status: <span className="font-normal">{selectedVesselDetails.status}</span></p>
              <p className="font-semibold">• ETA (Estimated Time of Arrival): <span className="font-normal">{selectedVesselDetails.eta}</span></p>
              <p className="font-semibold">• ETD (Estimated Time of Departure): <span className="font-normal">{selectedVesselDetails.etd}</span></p>
              <p className="font-semibold">• Next Port: <span className="font-normal">{selectedVesselDetails.nextPort}</span></p>
              <p className="font-semibold">• Last Port: <span className="font-normal">{selectedVesselDetails.lastPort}</span></p>
              <div className="flex gap-4">
                <p className="font-semibold">• Cargo Information: <span className="font-normal">{selectedVesselDetails.cargoInfo}</span></p>
                <p className="font-semibold">Destination: <span className="font-normal">{selectedVesselDetails.Destination}</span></p>
              </div>
              <p className="font-semibold">• Agent/Operator: <span className="font-normal">{selectedVesselDetails.Agent}</span></p>
             
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button onClick={closeDetailsBox} className="bg-[#4E9352] text-white px-6 py-1 rounded-full">Close</button>
            </div>
          </div>
        </motion.div>
      }
    </div>
  );
};

export default ViewContainer;
