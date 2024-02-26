import { useState } from "react";
import { motion } from 'framer-motion';


const Vessel = () => {
  const [showManifestData, setShowManifestData] = useState(true);
  const [vesselId, setvesselId] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [showUpload, setShowUpload] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false);


  const initialData = [
    { vesselId: '001', vesselName: 'Ocean Voyage', eta: '9/5/2024 8:00', etd: '9/5/2024 8:00', totalContainers: 100, status: 'At Port', action: 'View Details'},
    { vesselId: '002', vesselName: 'Nautical Spirit', eta: '3/6/2024 14:30', etd: '9/5/2024 8:00', totalContainers: 140, status: 'In transit', action: 'View Details'},
  ];
  
  const handleSearch = () => {
    const filteredData = initialData.filter(item =>
      item.vesselId.toString().includes(searchTerm.toLowerCase())
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

  return (
    <div className='py-10 roboto '>
      <div className="head flex justify-between mx-5">
        <h3 className='text-2xl font-bold'>View Vessel</h3>
      </div>

      <div >
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex gap-2 my-10 mx-7">
              <label htmlFor="" className='text-lg font-bold'>Select Cargo ID:</label>
              <div className="">
                <select
                  name="vesselId"
                  id="vesselId"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='border-[1px] border-[#8f8f8f] outline-none p-2 w-[300px] rounded '
                >
                  <option value="">Select Cargo ID</option>
                  {initialData.map((item) => (
                    <option key={item.vesselId} value={item.vesselId}>
                      {item.vesselId}
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
            <p className="font-semibold">Cargo ID: <span className="font-normal">{rowData.vesselId}</span></p>
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
              {data.map((rowData, index) => (
                <tr key={index} className="grid grid-cols-7">
                  <td className="border border-black px-4 py-2">{rowData.vesselId}</td>
                  <td className="border border-black px-4 py-2">{rowData.vesselName}</td>
                  <td className="border border-black px-4 py-2">{rowData.eta}</td>       
                  <td className="border border-black px-4 py-2">{rowData.etd}</td>
                  <td className="border border-black px-4 py-2">{rowData.status}</td>
                  <td className="border border-black px-4 py-2">{rowData.totalContainers}</td>
                  <td className="border border-black px-4 py-2 underline cursor-pointer">[ {rowData.action} ]</td>
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

export default Vessel;
