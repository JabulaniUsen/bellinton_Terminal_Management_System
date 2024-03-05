import React, {useState} from 'react'
import { motion } from 'framer-motion';
import Select from 'react-select';


const UpdateManifest = () => {
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
  const [updateSuccess, setUpdateSuccess] = useState(false)



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
    
    setUpdateSuccess(true)
  };

    const handleModalOK = () => {
      setUpdateSuccess(false);
    };
    const initialData = [
        { cargoId: 'CON73872', shipperName: 'ABC Shipping', shipperAddress: '123 Main St.', weight: 50, consigneeName: 'XYZ Company', status: 'Pending', consigneeAddress: '456 Elm St', sealNo: '20', packageQty: '20' },
        { cargoId: 'CON16273', shipperName: 'DEF Logistics', shipperAddress: '789 Oak St.', weight: 30, consigneeName: 'LMN Corporation', status: 'In transit', consigneeAddress: '101 Pine St.', sealNo: '14', packageQty: '20' },
    ];
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearch = () => {
        const filteredData = initialData.filter(item =>
          item.cargoId.toString().includes(searchTerm.toLowerCase())
        );
        
    
        // Update the state with the filtered data
        setData(filteredData);
      };

  return (
    <div className='m-10'>
        <div className="head flex justify-between">
            <h3 className='text-2xl font-bold'>Update Manifest</h3>
        </div>

        <div className="mb-10 mx-5">

            <div className="flex justify-between items-center w-[550px] my-7">
                <label htmlFor="name" className='font-semibold text-lg'>Select Cargo ID to update:</label>
                <div className="">
                <Select
                  options={initialData.map((item) => ({ value: item.cargoId, label: item.cargoId }))}
                  value={{ value: searchTerm, label: searchTerm }}
                  onChange={(selectedOption) => setSearchTerm(selectedOption.value)}
                  isSearchable
                  placeholder="Select Cargo ID"
                  className='outline-none p-2 w-[300px] rounded'
                />
                </div>
            </div>

            <div className="">
                <h4 className='text-lg font-semibold py-1 border-b-[1px] border-[#999999]'>Update BL Level Information</h4>
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
                </div>
            </div>
        </div>

        <div className="my-10 mx-5">
            <div className="">
                <h4 className='text-lg font-semibold py-1 border-b-[1px] border-[#999999]'>Update Cargo Level Information</h4>
            </div>

            <div className="body my-5 grid grid-cols-2 gap-20">
                <div className="col1 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className='font-semibold text-base'>No of Container:</label>
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
                            <select name="" id="" className='outline-none w-[180px]'>
                                <option value="Option 1"></option>
                                <option value="Option3">Option1</option>
                                <option value="Option2">Option2</option>
                                <option value="Option3">Option3</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="flex items-center gap-2 justify-center mt-10">
            <input type="checkbox" name="" id="" />
            <p>I agree to commit all the changes to this manifest.</p>
        </div>
        <div className="buttons flex gap-5 justify-center items-center my-10">
            <button className='text-white bg-[#4000FF] px-10 py-1 rounded-lg' onClick={handleSubmit}>Complete Manifest Amendment</button>
            <button className='text-white bg-[#637381] px-10 py-1 rounded-lg'>Reset</button>
        </div>

        { updateSuccess && 
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

export default UpdateManifest