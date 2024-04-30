import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useRef, useEffect} from 'react'
import { motion } from 'framer-motion';
import Select from 'react-select';
import SuccessBox from '../ManifestComponents/SuccessBox';
import UploadBox from '../ManifestComponents/UploadBox';



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
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
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
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const closeUploadBox = () => {
    setShowUpload(false);
    setUploadSuccess(true);
  };

  const handleUpload = () => {
    setShowUpload(true);
  };

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

  const dummyOptions = [
    { value: '', label: 'Enter the unique identifier for the container', isDisabled: true },
    { value: 'CON12345', label: 'CON12345' },
    { value: 'CON14534', label: 'CON14534' },
    { value: 'CON24565', label: 'CON24565' },
    { value: 'CON30923', label: 'CON30923' },
  ];
  const data = ["CON237", "CON126", "CON132", "CON342", "CON372"]
  const options2 = [
    { value: '', label: 'Select Cargo/BL ID', isDisabled: true },
    { value: '0012345', label: 'CON12345' },
    { value: '0014534', label: 'CON14534' },
    { value: '0024565', label: 'CON24565' },
    { value: '0030923', label: 'CON30923' },
  ];
  const options3 = [
    { value: '', label: 'Select name of customer associated with container', isDisabled: true },
    { value: 'CON12345', label: 'Adeyemi Olu' },
    { value: 'CON14534', label: 'Michael Adebayo' },
    { value: 'CON24565', label: 'Williams Odunayo' },
    { value: 'CON30923', label: 'Jabulani Usen' },
  ];

  return (
    <div className='m-10'>

        <div className="my-10 mx-5">
            <div className="flex justify-between items-center py-1 border-b-[1px] border-[#999999]">
                <h4 className='text-lg font-semibold'>Add Container to Manifest</h4>
                <button className='text-[#0095FF] text-lg' onClick={handleUpload}>Upload</button>
            </div>

            <div className="body my-5 grid grid-cols-2 gap-20">
                <div className="col1 flex flex-col gap-4">
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Container ID:</label>
                        <div className="rounded flex items-center py-2">
                        <div ref={inputRef}>
                            <div className="flex items-center justify-between pr-3 pl-2 py-1 rounded border-[#999999] border w-[400px]">
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
                </div>
                    <div className="flex justify-between">
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
                    </div>
                    {/* <div className="containerSize flex flex-col gap-3 my-3 ">
                            <div className='font-semibold text-base'>Gate:</div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="gate-in" id="gate-in" />
                                <label htmlFor="name" className='text-base'>Gate-in</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="gate-out" id="gate-out" />
                                <label htmlFor="name" className='text-base'>Gate-out</label>
                            </div>
                    </div> */}
                    </div> 
                <div className="col2 flex flex-col gap-10">
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Cargo/BL ID:</label>
                        <div className="rounded flex items-center py-2">
                            <Select
                                options={options2}
                                isSearchable
                                placeholder="Select Cargo/BL ID"
                                className='w-full'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Customer Name:</label>
                        <div className=" roundedflex items-center py-2">
                            <Select
                                options={options3}
                                isSearchable
                                placeholder="Select name of the customer associated with the container"
                                className='w-full'
                            />
                        </div>
                    </div>

                    {/* <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Arrival Date:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="date" className='outline-none w-full' />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="name" className='font-semibold text-base'>Departure Date:</label>
                        <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                            <input type="date" className='outline-none w-full' />
                        </div>
                    </div> */}
                    
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

        {showUpload && <UploadBox closeUploadBox={closeUploadBox} />}
    </div>
  )
}

export default AddContainer