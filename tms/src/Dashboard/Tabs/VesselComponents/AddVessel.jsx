import { faCaretDown, faMagnifyingGlass, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Select } from '@mui/material';
import UploadBox from '../ManifestComponents/UploadBox';

function AddVessel() {

  const [vesselId, setVesselId] = useState('');
  const [eta, setEta] = useState('');
  const [company, setCompany] = useState('');
  const [originPort, setOriginPort] = useState('');
  const [destinationPort, setDestinationPort] = useState('');
  const [stop, setStop] = useState('');
  const [regular, setRegular] = useState(false);
  const [oog, setOog] = useState(false);
  const [otfr, setOtfr] = useState(false);
  const [reefer, setReefer] = useState(false);
  const [hazardous, setHazardous] = useState(false);
  const [vesselName, setVesselName] = useState('');
  const [etd, setEtd] = useState('');
  const [inTransit, setInTransit] = useState(false);
  const [awaitingDelivery, setAwaitingDelivery] = useState(false);
  const [discharged, setDischarged] = useState(false);
  const [showViewVessels, setShowViewVessels] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showUpload, setShowUpload] = useState(false)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        const formattedCountries = data.map(country => ({
          value: country.alpha2Code,
          label: country.name,
        }));
        setCountries(formattedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error.message);
      }
    };

    fetchCountries();
  }, []);
  

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

    const filteredSuggestions = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const data = ["VSL237", "VSL126", "VSL132", "VSL342", "VSL372"];

  const handleViewDetails = (e) => {
    e.preventDefault();
    console.log({
      vesselId,
      eta,
      company,
      originPort,
      destinationPort,
      stop,
      regular,
      oog,
      otfr,
      reefer,
      hazardous,
      vesselName,
      etd,
      inTransit,
      awaitingDelivery,
      discharged,
    });

    setShowSuccessModal(true);

  };

    const [stops, setStops] = useState([
    { id: '', placeholder: 'Enter the name of the stop', type: 'text' },
    { id: '', placeholder: 'Enter the name of the stop', type: 'text' },
    { id: '', placeholder: 'Enter the name of the stop', type: 'text' },
  ]);

  const handleModalOK = () => {
    setShowSuccessModal(false);
  };

  const handleModalEdit = () => {
    setShowSuccessModal(false);
  };

  const addStop = (e) => {
    e.preventDefault();
    setStops([...stops, { id: '', placeholder: 'Enter the name of the stop', type: 'text' }]);
  };

  // Upload Vessel 

  const handleUpload = () => {
    setShowUpload(!showUpload);
  }
  const closeUploadBox = () => {
    setShowUpload(false);
  };

  return (
    <div className='p-10 roboto'>
      <div className="header">
        <h2 className='text-3xl font-bold'>Add Vessels</h2>
      </div>

        <form className='my-7 mx-5 flex gap-12 relative'>
        <div className="flex flex-col gap-12">
          <div className="viewinfo">
            <h3 className='text-lg font-semibold my-5'>Vessel Information</h3>
            <div className="vesselInformation roboto flex flex-col items-start justify-stretch gap-3">

              <div className="flex gap-3">
                <label htmlFor="" className='text-[1em] mt-3'>Vessel ID:</label>
                <div ref={inputRef}>
                  <div className="flex items-center justify-between pr-3 pl-2 py-3 rounded border-[#828282] border-2 w-[340px]">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      className='outline-none'
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='' />
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
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Voyage Number:</label>
                <input required type="text" 
                  className=' flex items-center justify-between pr-3 pl-2 py-3 rounded border-[#828282] border-2 w-[293px]' 
                  name="id" 
                  id="" 
                  placeholder="Enter the voyage number" 
                />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Vessel Name:</label>
                <div ref={inputRef}>
                  <Select
                    options={countries}
                    value={selectedCountry}
                    onChange={(selectedOption) => setSelectedCountry(selectedOption.value)}
                    placeholder='Select a country'
                    className='w-[312px]  border-[#828282] border '
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Vessel Nationality:</label>
                <div ref={inputRef}>
                  <Select
                    options={countries}
                    value={selectedCountry}
                    onChange={(selectedOption) => setSelectedCountry(selectedOption.value)}
                    placeholder='Select a country'
                    className='w-[279px] border border-[#828282]'
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Vessel Destination:</label>
                <div ref={inputRef}>
                <Select
                  options={countries}
                  value={selectedCountry}
                  onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                  placeholder="Select a country"
                  className="w-[274px]  border-[#828282] border "
                />

                </div>
              </div>
            </div>
          </div>

          {/* stops */}
          <div className="stops">
            <h3 className='text-lg font-semibold my-5'>Stops:</h3>
            <div className="vesselInformation roboto flex flex-col gap-2">
              {stops.map((stop, index) => (
                <div className="stops flex items-center gap-2" key={index}>
                  <label htmlFor="" className='text-[1em]'>{`Enter name of stop #${index + 1}:`}</label>
                  <input
                    type={stop.type}
                    className='border-[#828282] border-[1px] py-3 rounded px-3 flex items-center w-[251px]'
                    name={`stop-${index}`}
                    placeholder={stop.placeholder}
                  />
                </div>
              ))}
              <button className='addStops float-right mt-2 text-[#CCCCCC]' onClick={addStop}>
                Add more stops as needed
                <FontAwesomeIcon className='add text-xl ml-2 text-black' icon={faPlusCircle} />
              </button>
            </div>
          </div>
          {/* stops */}
        </div>

        <div className="">
            <div className="containerType flex flex-col gap-2 mt-12">
              <div className='flex items-center justify-between'>
                <label htmlFor="" className='text-[1em] '>AIS Type:</label>
        
                 <Select
                    options={countries}
                    value={selectedCountry}
                    onChange={(selectedOption) => setSelectedCountry(selectedOption.value)}
                    placeholder='Select a country'
                    className='w-[310px] border border-[#828282]'
                  />
              </div>

              <div className='flex items-center justify-between'>
                <label htmlFor="" className='text-[1em]'>Ship Type:</label>
        
                  <Select
                    options={countries}
                    value={selectedCountry}
                    onChange={(selectedOption) => setSelectedCountry(selectedOption.value)}
                    placeholder='Select a country'
                    className='w-[310px] border border-[#828282]'
                  />
              </div>

              <div className='flex items-center justify-between'>
                <label htmlFor="" className='text-[1em]'>IMO Number:</label>
                <div className=" border-[#828282] border-[1px] rounded px-3 py-4 flex items-center">
                  <input required type="text" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter IMO number" />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <label htmlFor="" className='text-[1em] '>Ships Draft:</label>
                <div className=" border-[#828282] border-[1px] my-2 rounded px-3 py-4 flex items-center">
                  <input required type="number" className='bg-transparent outline-none w-full' name="id" id="" placeholder="0.00" />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <label htmlFor="" className='text-[1em] '>Call Sign:</label>
                <div className=" border-[#828282] border-[1px] my-2 rounded px-3 py-4 flex items-center">
                  <input required type="text" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter the call sign number" />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <label htmlFor="" className='text-[1em] '>Ships LOA:</label>
                <div className=" border-[#828282] border-[1px] my-2 rounded px-3 py-4 flex items-center">
                  <input required type="text" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter the LOA number" />
                </div>
              </div>
          </div>

          

          <h3 className='text-lg font-semibold my-5'>Container Type:</h3>
          <div className="flex justify-evenly gap-5">
            <div className="inputs">
              <div className="flex gap-3 justify-between my-2">
                <label htmlFor="">Regular</label>
                <input required type="number" className=' border-[1px] p-1 border-[#828282] rounded-lg' placeholder='Enter the quantity' name="" id="" />
              </div>
              <div className="flex gap-3 justify-between my-2">
                <label htmlFor="">OOG</label>
                <input required type="number" className=' border-[1px] p-1 border-[#828282] rounded-lg' placeholder='Enter the quantity' name="" id="" />
              </div>
              <div className="flex gap-3 justify-between my-2">
                <label htmlFor="">OTFR</label>
                <input required type="number" className=' border-[1px] p-1 border-[#828282] rounded-lg' placeholder='Enter the quantity' name="" id="" />
              </div>
              <div className="flex gap-3 justify-between my-2">
                <label htmlFor="">Reefer</label>
                <input required type="number" className=' border-[1px] p-1 border-[#828282] rounded-lg' placeholder='Enter the quantity' name="" id="" />
              </div>
              <div className="flex gap-3 justify-between my-2">
                <label htmlFor="">Hazardous</label>
                <input required type="number" className=' border-[1px] p-1 border-[#828282] rounded-lg' placeholder='Enter the quantity' name="" id="" />
              </div>
            </div>
            <div className="status">
              <div className="inputs">
              <h3 className='text-base my-5'>Status:</h3>
                <div className="flex items-center gap-1 my-3">
                  <input required type="checkbox" className='check' name="" id="" />
                  <label htmlFor="">In Transit</label>
                </div>
                <div className="flex items-center gap-1 my-3">
                  <input required type="checkbox" className='check' name="" id="" />
                  <label htmlFor="">Awaiting Delivery</label>
                </div>
                <div className="flex items-center gap-1 my-3">
                  <input required type="checkbox" className='check' name="" id="" />
                  <label htmlFor="">Discharged</label>
                </div>
            </div>
          </div>
          </div>
          <div className='flex items-center justify-between my-5'>
            <label htmlFor="" className='text-[1em]'>Total Containers on Board:</label>
            <div className=" border-[#828282] border-[1px] rounded p-3  flex items-center w-[250px]">
              <input required type="text" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter the total number of containers on board" />
            </div>
          </div>
          <div className="flex justify-center mt-10 gap-5">
            <p onClick={handleUpload} className='bg-[#20007f] px-8 py-2 rounded-xl text-white text-lg cursor-pointer'>Upload Vessel</p>
            <button type='submit' onSubmit={handleViewDetails} className='bg-[#4000FF] px-8 py-2 rounded-xl text-white text-lg'>Create Vessel</button>
          </div>
        </div>
      </form>

      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#F2F2F2] bg-opacity-50"
        >
          <div className="bg-[#9797978e] px-8 py-6 rounded-3xl text-center">
            <p className="text-2xl font-bold mb-4">Vessel created successfully!</p>
            <div className="flex justify-center space-x-4">
              <button onClick={handleModalOK} className="bg-[#4000FF] text-white px-6 py-1 rounded-full">OK</button>
              <button onClick={handleModalEdit} className="bg-black text-white px-6 py-2 rounded-full">Edit</button>
            </div>
          </div>
        </motion.div>
      )}
      { showUpload &&
        <UploadBox closeUploadBox={closeUploadBox}/>
      }
    </div>
  )
}

export default AddVessel