import { faAngleDown, faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useEffect, useRef} from 'react'
import UploadBox from "./UploadBox";
import { motion } from 'framer-motion';
import SuccessBox from './SuccessBox';
import Select from 'react-select';


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
  const [searchValue, setSearchValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSuggestions([]);
      setSuggestions2([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on the input value
    const filteredSuggestions = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleInputChange2 = (e) => {
    const value = e.target.value;
    setInputValue2(value);

    const filteredSuggestions2 = data2.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );
    setSuggestions2(filteredSuggestions2)
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };
  const handleSuggestionClick2 = (suggestion2) => {
    setInputValue2(suggestion2);
    setSuggestions2([]);
  };

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



  const data = ["CON237", "CON126", "CON132", "CON342", "CON372"];
  const data2 = ["CON237", "CON126", "CON132", "CON342", "CON372"];

  const dummyOptions = [
    { value: 'ABCD', label: 'ABCD' },
    { value: 'EFGH', label: 'EFGH' },
    { value: 'IJKL', label: 'IJKL' },
    { value: 'MNOP', label: 'MNOP' },
  ];
  const handleSearchChange = (selectedOption) => {
    if (selectedOption) {
        console.log('Selected Option:', selectedOption);
    } else {
        console.log('Search Value not found in the database:', searchValue);
    }
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
                    <div className="flex justify-between ">
                        <label htmlFor="name" className='mt-3 font-semibold text-base'>Cargo/BL ID:</label>
                        <div className="rounded w-[250px] flex items-center p-2">
                            {/* <Select
                                options={dummyOptions}
                                isSearchable
                                placeholder="Search Cargo ID"
                                className='w-full'
                            /> */}
                            <div ref={inputRef}>
                                <div className="flex items-center justify-between pr-3 pl-2 py-1 rounded border-[#999999] border w-[230px]">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        className='outline-none'
                                    />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#999999]' />
                                </div>
                                <ul className=''>
                                    {suggestions.map((suggestion, index) => (
                                    <li key={index} className='cursor-pointer hover:bg-slate-100 p-2' onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="name" className='mt-3 font-semibold text-base'>Vessel ID:</label>
                        <div className="rounded w-[250px] flex items-center p-2">
                        <div ref={inputRef}>
                                <div className="flex items-center justify-between pr-3 pl-2 py-1 rounded border-[#999999] border w-[230px]">
                                    <input
                                        type="text"
                                        value={inputValue2}
                                        onChange={handleInputChange2}
                                        className='outline-none'
                                    />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#999999]' />
                                </div>
                                <ul className=''>
                                    {suggestions2.map((suggestion, index) => (
                                    <li key={index} className='cursor-pointer hover:bg-slate-100 p-2' onClick={() => handleSuggestionClick2(suggestion)}>
                                        {suggestion}
                                    </li>
                                    ))}
                                </ul>
                            </div>
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
                        <label htmlFor="name" className='font-semibold text-base'>No of Containers:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="number" className='outline-none w-full' />
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
                        <div className=" w-[215px] flex items-center p-2">
                            {/* <input type="text" className='outline-none w-full' /> */}
                            <Select
                                options={dummyOptions}
                                isSearchable
                                placeholder="Search Cargo ID"
                                className='w-full'
                            />
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
    </div>
  )
}

export default CreateManifest