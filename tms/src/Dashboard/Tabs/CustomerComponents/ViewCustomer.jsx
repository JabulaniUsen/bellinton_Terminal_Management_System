import { useState } from "react";
import { motion } from 'framer-motion';
import Select from 'react-select';



const ViewCustomer = () => {
  const [showManifestData, setShowManifestData] = useState(true);
  const [customerId, setcustomerId] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [showUpload, setShowUpload] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false);


  const initialData = [
    { customerId: '1001', customerName: 'ABC Shipping Co.', contactPerson: 'John Smith', email: 'john@abcshipping.com', phone: '+1 (555) 123-4567', address: '123 Main Street'},
    { customerId: '1002', customerName: 'XYZ Logistics', contactPerson: 'Emily Dao', email: 'john@abcshipping.com', phone: '+1 (555) 123-4567', address: '123 Main Street'},
  ];
  
  const handleSearch = () => {
    const filteredData = initialData.filter(item =>
      item.customerName.toLowerCase().includes(searchTerm.toLowerCase())
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

  const showVesselDetails = (customerId) => {
    const details = initialData.find(item => item.customerName === customerName);
    setSelectedVesselDetails(details);
  };

  const closeDetailsBox = () => {
    setSelectedVesselDetails(null);
  };

  return (
    <div className='py-10 roboto '>
      <div className="head flex justify-between mx-5">
        <h3 className='text-2xl font-bold'>View Customer</h3>
      </div>

      <div >
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex gap-2 my-10 mx-7 items-center">
              <label htmlFor="" className='text-lg font-bold'>Enter Customers Name:</label>
              <div className="">
                  <Select
                    options={initialData.map((item) => ({ value: item.customerName, label: item.customerName }))}
                    value={{ value: searchTerm, label: searchTerm }}
                    onChange={(selectedOption) => setSearchTerm(selectedOption.value)}
                    isSearchable
                    placeholder="Select Cargo ID"
                    className='outline-none p-2 w-[300px] rounded '
                  />
                  {errorText && <p className="text-red-600">Please enter customers name</p>}
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
            <p className="font-semibold">Cargo ID: <span className="font-normal">{rowData.customerId}</span></p>
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
              <tr className="grid grid-cols-6 border border-black">
                <th className=" border bg-black text-white py-2">Customer ID</th>
                <th className=" border bg-black text-white py-2">Customer Name</th>
                <th className=" border bg-black text-white py-2">Contact Person</th>
                <th className=" border bg-black text-white py-2">Email</th>
                <th className=" border bg-black text-white py-2">Phone</th>
                <th className=" border bg-black text-white py-2">Address</th>
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, index) => (
                <tr key={index} className="grid grid-cols-6">
                  <td className="border border-black px-4 py-2">{rowData.customerId}</td>
                  <td className="border border-black px-4 py-2">{rowData.customerName}</td>
                  <td className="border border-black px-4 py-2">{rowData.contactPerson}</td>       
                  <td className="border border-black px-2 text-sm py-2">{rowData.email}</td>
                  <td className="border border-black px-4 py-2">{rowData.phone}</td>
                  <td className="border border-black px-4 py-2">{rowData.address}</td>
                  {/* <td className="border border-black px-4 py-2" ><button onClick={() => showVesselDetails(rowData.customerId)} className="underline">[ {rowData.action} ]</button></td> */}
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
              <p className="font-semibold">• Next Port: <span className="font-normal">{selectedVesselDetails.contactPerson}</span></p>
              <p className="font-semibold">• Last Port: <span className="font-normal">{selectedVesselDetails.email}</span></p>
              <div className="flex gap-4">
                <p className="font-semibold">• Cargo Information: <span className="font-normal">{selectedVesselDetails.phone}</span></p>
                <p className="font-semibold">address: <span className="font-normal">{selectedVesselDetails.address}</span></p>
              </div>
              <p className="font-semibold">• Agent/Operator: <span className="font-normal">{selectedVesselDetails.Agent}</span></p>
             
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button onClick={closeDetailsBox} className="bg-[#4000FF] text-white px-6 py-1 rounded-full">Close</button>
            </div>
          </div>
        </motion.div>
      }
    </div>
  );
};

export default ViewCustomer;





