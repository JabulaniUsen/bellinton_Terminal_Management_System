import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import { motion } from 'framer-motion';


const ContainerTransfer= () => {
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
                <h4 className='text-2xl font-semibold pb-8 '>Container Transfer</h4>
            </div>

            <div className="body my-5 grid grid-cols-2 gap-20">
                <div className="col2 flex flex-col gap-10">
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Container ID:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            {/* <input type="text" className='outline-none w-full' placeholder='Enter the Container ID' /> */}
                            <select className='outline-none w-full' name="" id="">
                                <option value="" className='text-[#a1a1a1]'>Enter the unique identifier for the container</option>
                                <option value="CON12345">CON12345</option>
                                <option value="CON14534">CON14534</option>
                                <option value="CON24565">CON24565</option>
                                <option value="CON30923">CON30923</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Transfer From:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <select className='outline-none w-full' name="" id="">
                                <option value="" className='text-[#a1a1a1]'>Select current location of the container</option>
                                <option value="CON12345">Lagos</option>
                                <option value="CON14534">Kaduna</option>
                                <option value="CON24565">Akwa Ibom</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Transfer Date:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="date" className='outline-none w-full'/>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Confirmation Code:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="text" className='outline-none w-full' placeholder='Enter the confirmation code for the transfer' />
                        </div>
                    </div>
                </div>
                <div className="col2 flex flex-col gap-10">
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Transfer To:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <select className='outline-none w-full' name="" id="">
                                <option value="" className='text-[#a1a1a1]'>Select the destined location of the container</option>
                                <option value="CON12345">Lagos</option>
                                <option value="CON14534">Kaduna</option>
                                <option value="CON24565">Akwa Ibom</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Reasons For Transfer:</label>
                        <div className="border-[#999999] rounded-lg border-[1px] flex items-center p-3">
                            {/* <input type="text" className='outline-none w-full' placeholder='Location within the terminal where the container will be stored.' /> */}
                            <textarea name="" id="" cols="20" rows="10" className='outline-none w-full h-[100px]'></textarea>
                        </div>
                    </div>
                    <div className="buttons flex gap-5 justify-end items-end my-10">
                        <button className='text-white bg-[#4000FF] px-10 py-2 rounded-full roboto' onClick={handleSubmit}>Initiate Transfer</button>
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

export default ContainerTransfer