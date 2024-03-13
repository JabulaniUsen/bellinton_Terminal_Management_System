import { useState } from "react";
import { motion } from 'framer-motion';
import Select from 'react-select';
import filter from '../../assets/filter.png'



const Vessel = () => {
  const [showManifestData, setShowManifestData] = useState(true);
  const [vesselId, setvesselId] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [showUpload, setShowUpload] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);


  const initialData = [
    { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
    { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
    { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
    { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
    { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
    { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
    { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
    { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
    { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
    { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
    { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
    { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
    { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
    { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
    { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
    { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
    { vesselId: 'VS72873', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
    { vesselId: 'VS27832', imoNumber: '123456789', nextPort: 'Port of Los Angeles', lastPort: 'Port of Singapore', cargoInfo: 'Containers, 500 TEU', Destination: 'Tokyo', Agent: 'Maersk Line', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
  ];
  
  const handleSearch = () => {
    const filteredData = initialData.filter(item =>
      item.vesselId.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    // Update the state with the filtered data
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

  const showVesselDetails = (vesselId) => {
    const details = initialData.find(item => item.vesselId === vesselId);
    setSelectedVesselDetails(details);
  };

  const closeDetailsBox = () => {
    setSelectedVesselDetails(null);
  };

  //  Handle next and previous buttons
  const totalPages = Math.ceil(initialData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);


  return (
    <div className='py-10 roboto '>
      <div className="head flex justify-between mx-5">
        <h3 className='text-2xl font-bold'>View Vessel</h3>
      </div>

      <div >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex gap-2 my-10 ml-7 items-center">
              <label htmlFor="" className='text-lg font-bold'>Select Vessel ID:</label>
              <div className="">
                <Select
                  options={initialData.map((item) => ({ value: item.vesselId, label: item.vesselId }))}
                  value={{ value: searchTerm, label: searchTerm }}
                  onChange={(selectedOption) => setSearchTerm(selectedOption.value)}
                  isSearchable
                  placeholder="Select Cargo ID"
                  className='outline-none p-2 w-[300px] rounded '
                />
                {errorText && <p className="text-red-600">Please enter your cargo Id</p>}
              </div>
            </div>
            {/* <img src={filter} alt="" /> */}
            <div className="flex justify-center items-center">
              <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleSearch} >View</button>
            </div>
          </div>
        </div>


      </div>

      <div className={`moreInfo my-10 mx-5 `}>
          {showManifestData && 
          <div className="table overflow-x-auto my-10">
          <table className="border border-collapse">
            <thead>
              <tr className="grid grid-cols-7 border border-black">
                <th className=" border bg-black text-white py-2">Vessel ID</th>
                <th className=" border bg-black text-white py-2">Shipper Name</th>
                <th className=" border bg-black text-white py-2">Shipper Address</th>
                <th className=" border bg-black text-white py-2">etd</th>
                <th className=" border bg-black text-white py-2">Status</th>
                <th className=" border bg-black text-white py-2">Total Containers</th>
                <th className=" border bg-black text-white py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(startIdx, endIdx).map((rowData, index) => (
                <tr key={index} className="grid grid-cols-7">
                  <td className="border border-black px-4 py-2">{rowData.vesselId}</td>
                  <td className="border border-black px-4 py-2">{rowData.vesselName}</td>
                  <td className="border border-black px-4 py-2">{rowData.eta}</td>       
                  <td className="border border-black px-4 py-2">{rowData.etd}</td>
                  <td className="border border-black px-4 py-2">{rowData.status}</td>
                  <td className="border border-black px-4 py-2">{rowData.totalContainers}</td>
                  <td className="border border-black px-4 py-2" ><button onClick={() => showVesselDetails(rowData.vesselId)} className="underline">[ {rowData.action} ]</button></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end gap-1 items-center my-4">
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

          <div className="flex flex-col justify-end items-end my-10">
            <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={resetSearch} >Reset</button>
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
                <button onClick={handleModalOK} className="bg-[#4000FF] text-white px-6 py-1 rounded-full">OK</button>
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
              <button onClick={closeDetailsBox} className="bg-[#4000FF] text-white px-6 py-1 rounded-full">Print</button>
            </div>
          </div>
        </motion.div>
      }
    </div>
  );
};

export default Vessel;
