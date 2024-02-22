import { useState } from "react";
import UploadBox from "./UploadBox";
import { motion } from 'framer-motion';


const ViewManifest = () => {
  const [showManifestData, setShowManifestData] = useState(true);
  const [cargoId, setCargoId] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [showUpload, setShowUpload] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)


  const manifestData = [
    { cargoId: 1, description: 'Item 1', quantity: 10, weight: 50, destination: 'Destination 1', status: 'Pending', remarks: 'None', category: 'Electronics' },
    { cargoId: 2, description: 'Item 2', quantity: 5, weight: 30, destination: 'Destination 2', status: 'Shipped', remarks: 'Fragile', category: 'Clothing' },
  ];

  const getManifestData = () => {
    if (cargoId.trim() !== "") {
      setShowManifestData(false);
      setErrorText(false);
    } else {
      setErrorText(true);
      setShowManifestData(true);
    }
  };

  
  const handleInputChange = (e) => {
    setCargoId(e.target.value);
    setErrorText(false); 
  };
  
  const closeUploadBox = () => {
    setShowUpload(false);
    setUploadSuccess(true) 
  };
  const handleUpload = () => {
    setShowUpload(!showUpload);
  }
  const handleModalOK = () => {
    setUploadSuccess(false);
  };

  return (
    <div className='p-10 roboto '>
      <div className="head flex justify-between">
        <h3 className='text-2xl font-bold'>View Manifest</h3>
        <button className='text-[#0095FF] underline text-lg' onClick={handleUpload}>Upload Manifest</button>
      </div>

      <div className={`${!showManifestData ? 'hidden' : ''}`}>
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex gap-2 my-10 mx-5">
              <label htmlFor="" className='text-lg font-bold'>Select Cargo ID:</label>
              <div className="">
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={cargoId}
                  className='border-[1px] border-[#8f8f8f] outline-none p-2 w-[300px] rounded '
                  id="cargoid"
                  name="cargoid"
                />
                {errorText && <p className="text-red-600">Please enter your cargo Id</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-10">
          <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={getManifestData}>View</button>
        </div>
      </div>

      <div className={`my-10 mx-5 ${!showManifestData ? '' : 'hidden'}`}>
        <div className="manifestDetails">
          <p className="font-semibold">Manifest ID: <span className="font-normal">MAN-2024-001</span></p>
          <p className="font-semibold">Date: <span className="font-normal">February 17, 2024</span></p>
          <p className="font-semibold">Terminal: <span className="font-normal">Port of Lagos</span></p>
        </div>

        <div className="table overflow-x-auto my-10">
          <table className="border border-collapse">
            <thead>
              <tr>
                <th className="border border-black p-2">Cargo ID</th>
                <th className="border border-black p-2">Shipper Name</th>
                <th className="border border-black p-2">Shipper Address</th>
                <th className="border border-black p-2">Consignee Name</th>
                <th className="border border-black p-2">Consignee Address</th>
                <th className="border border-black p-2">Seal No.</th>
                <th className="border border-black p-2">Package Qty</th>
                <th className="border border-black p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {manifestData.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black p-2">{item.cargoId}</td>
                  <td className="border border-black p-2">{item.description}</td>
                  <td className="border border-black p-2">{item.quantity}</td>
                  <td className="border border-black p-2">{item.weight}</td>
                  <td className="border border-black p-2">{item.destination}</td>
                  <td className="border border-black p-2">{item.status}</td>
                  <td className="border border-black p-2">{item.remarks}</td>
                  <td className="border border-black p-2">{item.category}</td>
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
                <button onClick={handleModalOK} className="bg-[#4000FF] text-white px-6 py-1 rounded-full">OK</button>
              </div>
            </div>
          </motion.div>
        }
    </div>
  );
};

export default ViewManifest;
