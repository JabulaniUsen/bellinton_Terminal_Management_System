import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import UploadBox from "./UploadBox";
import { motion } from 'framer-motion';


const CreateManifest = () => {
  const [cargoId, setCargoId] = useState('');
  const [vesselId, setVesselId] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [status, setStatus] = useState('');
  const [shipperName, setShipperName] = useState('');
  const [consigneeName, setConsigneeName] = useState('');
  const [notifyName, setNotifyName] = useState('');
  const [sealNumber, setSealNumber] = useState('');
  const [packageQty, setPackageQty] = useState('');
  const [cargoWeight, setCargoWeight] = useState('');
  const [socStatus, setSocStatus] = useState('');
  const [containerClassification, setContainerClassification] = useState('');
  const [showUpload, setShowUpload] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)


  const closeUploadBox = () => {
    setShowUpload(false);
    setUploadSuccess(true);
  };
  const handleUpload = () => {
    setShowUpload(!showUpload);
  }

  // Function to handle form submission
  const handleSubmit = () => {
    // Access the state variables and perform any necessary actions
    console.log({
      cargoId,
      vesselId,
      origin,
      destination,
      status,
      shipperName,
      consigneeName,
      notifyName,
      sealNumber,
      packageQty,
      cargoWeight,
      socStatus,
      containerClassification,
    });
  };

  const handleModalOK = () => {
    setUploadSuccess(false);
  };

  return (
    <div className='m-10'>
        <div className="head flex justify-between">
            <h3 className='text-2xl font-bold'>Create Manifest</h3>
            <button className='text-[#0095FF] underline text-lg' onClick={handleUpload}>Upload Manifest</button>
        </div>

        <div className="my-10 mx-5">
            <div className="">
                <h4 className='text-lg font-semibold py-1 border-b-[1px] border-[#999999]'>Add Container to Manifest</h4>
            </div>

            <div className="body my-5 grid grid-cols-2 gap-20">
                <div className="col1 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Cargo/BL ID:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#999999]' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Vessel ID:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#999999]' />
                        </div>
                    </div>
                    <div className="containerSize flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="10FT" id="10FT" />
                            <label htmlFor="name" className='text-base'>10FT</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="20FT" id="20FT" />
                            <label htmlFor="name" className='text-base'>20FT</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="40FT" id="40FT" />
                            <label htmlFor="name" className='text-base'>40FT</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="45FT" id="45FT" />
                            <label htmlFor="name" className='text-base'>45FT</label>
                        </div>
                    </div>
                </div> 
                <div className="col2 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Origin:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Destination:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Status:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="my-10 mx-5">
            <div className="">
                <h4 className='text-lg font-semibold py-1 border-b-[1px] border-[#999999]'>BL Level Information</h4>
            </div>

            <div className="body my-5 grid grid-cols-2 gap-20">
                <div className="col1 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Shipper Name:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Consignee Name:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Notify Name:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    
                </div> 
                <div className="col2 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Shipper Address:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Consignee Address:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    {/* <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Status:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>


        <div className="my-10 mx-5">
            <div className="">
                <h4 className='text-lg font-semibold py-1 border-b-[1px] border-[#999999]'>Cargo Level Information</h4>
            </div>

            <div className="body my-5 grid grid-cols-2 gap-20">
                <div className="col1 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Seal Number:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Package Qty:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Cargo Weight:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    
                </div> 
                <div className="col2 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>SOC Status:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>Container Classification:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            {/* <input type="text" className='outline-none w-full' /> */}
                            <select name="" id="" className='outline-none w-[180px]'>
                                <option value="">Select</option>
                                <option value="Option3">Option1</option>
                                <option value="Option2">Option2</option>
                                <option value="Option3">Option3</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>


        </div>
        <div className="buttons flex gap-5 justify-center items-center my-20">
            <button className='text-white bg-[#000] px-10 py-1 rounded-lg'>Add another item</button>
            <button className='text-white bg-[#637381] px-10 py-1 rounded-lg'>Remove just added</button>
            <button className='text-white bg-[#4000FF] px-10 py-1 rounded-lg' onClick={handleSubmit}>Submit</button>
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
              <p className="text-2xl font-semibold mb-4">Manifest Uploaded successfully!</p>
              <div className="flex justify-center space-x-4">
                <button onClick={handleModalOK} className="bg-[#4000FF] text-white px-6 py-1 rounded-full">OK</button>
              </div>
            </div>
          </motion.div>
        }
    </div>
  )
}

export default CreateManifest