import { useState } from "react";
import UploadBox from "./UploadBox";
import { motion } from 'framer-motion';
import Select from 'react-select';



const ViewManifest = () => {
  const [showManifestData, setShowManifestData] = useState(true);
  const [cargoId, setCargoId] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [showUpload, setShowUpload] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false);


  const initialData = [
    { cargoId: 'CON73872', shipperName: 'ABC Shipping', shipperAddress: '123 Main St.', weight: 50, consigneeName: 'XYZ Company', status: 'Pending', consigneeAddress: '456 Elm St', sealNo: '20', packageQty: '20' },
    { cargoId: 'CON16273', shipperName: 'DEF Logistics', shipperAddress: '789 Oak St.', weight: 30, consigneeName: 'LMN Corporation', status: 'In transit', consigneeAddress: '101 Pine St.', sealNo: '14', packageQty: '20' },
  ];
  
  const handleSearch = () => {
    const filteredData = initialData.filter(item =>
      item.cargoId.toString().includes(searchTerm.toLowerCase())
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
        <h3 className='text-2xl font-bold'>View Manifest</h3>
        <button className='text-[#0095FF] underline text-lg' onClick={handleUpload}>Upload Manifest</button>
      </div>

      <div >
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex gap-2 my-10 mx-7 items-center">
              <label htmlFor="" className='text-lg font-bold'>Select Cargo ID:</label>
              <div className="">
                <Select
                  options={initialData.map((item) => ({ value: item.cargoId, label: item.cargoId }))}
                  value={{ value: searchTerm, label: searchTerm }}
                  onChange={(selectedOption) => setSearchTerm(selectedOption.value)}
                  isSearchable
                  placeholder="Select Cargo ID"
                  className='outline-none p-2 w-[300px] rounded'
                />
                {errorText && <p className="text-red-600">Please enter your Cargo ID</p>}
              </div>
              <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleSearch} >View</button>

            </div>
          </div>
        </div>

      </div>

      <div className={`moreInfo my-10 mx-5 `}>
        {moreInfo &&         
        <div className="">
          {data.map((rowData, index) => (
            <div className="manifestDetails" key={index}>
            <p className="font-semibold">Cargo ID: <span className="font-normal">{rowData.cargoId}</span></p>
            <p className="font-semibold">Date: <span className="font-normal">February 17, 2024</span></p>
            <p className="font-semibold">Terminal: <span className="font-normal">Port of Lagos</span></p>
          </div>
          ))}
        </div>
        }


          {showManifestData && 
          <div className="table overflow-x-auto my-10">
          <table className="border border-collapse">
            <thead>
              <tr className="grid grid-cols-9 border border-black">
                <th className=" border bg-black text-white py-2">Cargo ID</th>
                <th className=" border bg-black text-white py-2">Shipper Name</th>
                <th className=" border bg-black text-white py-2">Shipper Address</th>
                <th className=" border bg-black text-white py-2">Weight</th>
                <th className=" border bg-black text-white py-2">Consignee Name</th>
                <th className=" border bg-black text-white py-2">Consignee Address</th>
                <th className=" border bg-black text-white py-2">Seal No.</th>
                <th className=" border bg-black text-white py-2">Package Qty</th>
                <th className=" border bg-black text-white py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, index) => (
                <tr key={index} className="grid grid-cols-9 text-center">
                  <td className="border border-black px-4 py-2">{rowData.cargoId}</td>
                  <td className="border border-black px-4 py-2">{rowData.shipperName}</td>
                  <td className="border border-black px-4 py-2">{rowData.shipperAddress}</td>
                  <td className="border border-black px-4 py-2">{rowData.weight}</td>
                  <td className="border border-black px-4 py-2">{rowData.consigneeName}</td>
                  <td className="border border-black px-4 py-2">{rowData.consigneeAddress}</td>
                  <td className="border border-black px-4 py-2">{rowData.packageQty}</td>
                  <td className="border border-black px-4 py-2">{rowData.sealNo}</td>
                  <td className="border border-black px-4 py-2">{rowData.status}</td>
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

export default ViewManifest;
