import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import { motion } from 'framer-motion';


const AddContainer = () => {
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

        <div className="my-10 mx-5">
            <div className="">
                <h4 className='text-lg font-semibold py-1 border-b-[1px] border-[#999999]'>Add Container to Manifest</h4>
            </div>

            <div className="body my-5 grid grid-cols-2 gap-20">
                <div className="col1 flex flex-col gap-4">
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Container ID:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' placeholder='Enter the unique identifier for the container.' />
                        </div>
                    </div>
                    <div className="containerSize flex flex-col gap-3 my-3">
                        <div className='font-semibold text-base'>Container Size:</div>
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
                    <div className="containerSize flex flex-col gap-3 my-3 ">
                        <div className='font-semibold text-base'>Container Type:</div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="10FT" id="10FT" />
                            <label htmlFor="name" className='text-base'>Regular</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="20FT" id="20FT" />
                            <label htmlFor="name" className='text-base'>OOG</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="40FT" id="40FT" />
                            <label htmlFor="name" className='text-base'>OTFR</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="45FT" id="45FT" />
                            <label htmlFor="name" className='text-base'>Reefer</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="45FT" id="45FT" />
                            <label htmlFor="name" className='text-base'>Hazardous</label>
                        </div>
                    </div>
                    <div className="containerSize flex flex-col gap-3 my-3 ">
                        <div className='font-semibold text-base'>Status:</div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="10FT" id="10FT" />
                            <label htmlFor="name" className='text-base'>In Transit</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="20FT" id="20FT" />
                            <label htmlFor="name" className='text-base'>Awaiting Delivery</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="40FT" id="40FT" />
                            <label htmlFor="name" className='text-base'>Discharge</label>
                        </div>
                    </div>
                    <div className="containerSize flex flex-col gap-3 my-3 ">
                        <div className='font-semibold text-base'>Import/Export:</div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="10FT" id="10FT" />
                            <label htmlFor="name" className='text-base'>Import Full</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="20FT" id="20FT" />
                            <label htmlFor="name" className='text-base'>Import Empty</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="40FT" id="40FT" />
                            <label htmlFor="name" className='text-base'>Export Full</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="45FT" id="45FT" />
                            <label htmlFor="name" className='text-base'>Export Empty</label>
                        </div>
                    </div>
                    <div className="containerSize flex flex-col gap-3 my-3 ">
                        <div className='font-semibold text-base'>Gate:</div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="10FT" id="10FT" />
                            <label htmlFor="name" className='text-base'>Gate-in</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="20FT" id="20FT" />
                            <label htmlFor="name" className='text-base'>Gate-out</label>
                        </div>
                    </div>
                    

                </div> 
                <div className="col2 flex flex-col gap-10">
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Cargo/BL ID:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#999999]' />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Customer Name:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' placeholder='Enter the name of the customer associated with the container' />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Arrival Date:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="date" className='outline-none w-full'/>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Depature Date:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="date" className='outline-none w-full' />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Temperature (for Reefer):</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' placeholder='Enter the temperature for Reefer containers in Celsius.' />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Location:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' placeholder='Location within the terminal where the container will be stored.' />
                        </div>
                    </div>
                    <div className="buttons flex gap-5 justify-end items-end my-20">
                        <button className='text-white bg-[#4000FF] px-10 py-1 rounded-lg' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>

        


        { uploadSuccess && 
            <SuccessBox handleModalOK={handleModalOK} />
        }
    </div>
  )
}

export default AddContainer