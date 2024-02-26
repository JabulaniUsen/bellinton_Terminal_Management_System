import { useState } from "react";
import { motion } from 'framer-motion';


const ViewContainer = () => {
  const [showManifestData, setShowManifestData] = useState(true);
  const [containerId, setcontainerId] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [showUpload, setShowUpload] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false);


  const initialData = [
    { containerId: "CON123456", arrivalDate: '2/15/2024 10:30', depatureDate: '2/15/2024 10:30', type: 'Dry', vesselName: 'Ocean Voyager', customerName: 'ABC Shipping', status: 'In Transit', action: 'View Details',},
    { containerId: "CON752432", arrivalDate: '8/11/2024 10:30', depatureDate: '-', type: 'Refregirated', vesselName: 'Sea Explorer', customerName: 'XYZ Logistics', status: 'Awaiting Delivery', action: 'View Details',},
  ];
  
  const handleSearch = () => {
    const filteredData = initialData.filter(item =>
      item.containerId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Update the state with the filtered data
    setData(filteredData);
    setMoreInfo(true)
  };

  const resetSearch = () => {
    // Reset the search term and show all data
    setSearchTerm('');
    setData(initialData);
  };

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleModalOK = () => {
    setUploadSuccess(false);
  };

  return (
    <div className='py-10 roboto '>
      <div className="head flex justify-between mx-5">
        <h3 className='text-2xl font-bold'>View Container</h3>
      </div>

      <div >
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex gap-2 my-10 mx-7">
              <label htmlFor="" className='text-lg font-bold'>Select Container ID:</label>
              <div className="">
                <select
                  name="containerId"
                  id="containerId"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='border-[1px] border-[#8f8f8f] outline-none p-2 w-[300px] rounded '
                >
                  <option value="" className="text-[#999999]">Select Container ID</option>
                  {initialData.map((item, index) => (
                    <option key={index} value={item.containerId}>
                      {item.containerId}
                    </option>
                  ))}
                </select>
                {errorText && <p className="text-red-600">Please enter your cargo Id</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-10">
          <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleSearch} >View</button>
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


          {showManifestData && 
            <div className="table overflow-x-auto my-10">
            <table className="border border-collapse">
              <thead>
                <tr className="border-2 border-black">
                  <th className="border  bg-black text-white p-2">Container ID</th>
                  <th className="border  bg-black text-white p-2">Status</th>
                  <th className="border  bg-black text-white p-2">Arrival Date</th>
                  <th className="border  bg-black text-white p-2">Depature Date</th>
                  <th className="border  bg-black text-white p-2">Type</th>
                  <th className="border  bg-black text-white p-2">Vessel Name</th>
                  <th className="border  bg-black text-white p-2">Customer Name</th>
                  <th className="border  bg-black text-white p-2">Action</th>
                </tr>
              </thead>
              <tbody >
                {data.map((item, index) => (
                  <tr key={index} className="border-2 border-black">
                    <td className="border border-black p-2">{item.containerId}</td>
                    <td className="border border-black p-2">{item.status}</td>
                    <td className="border border-black p-2">{item.arrivalDate}</td>
                    <td className="border border-black p-2">{item.depatureDate}</td>
                    <td className="border border-black p-2">{item.type}</td>
                    <td className="border border-black p-2">{item.vesselName}</td>
                    <td className="border border-black p-2">{item.customerName}</td>
                    <td className="border border-black p-2">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col justify-end items-end my-10">
              <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={resetSearch} >Back</button>
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
    </div>
  );
};

export default ViewContainer;