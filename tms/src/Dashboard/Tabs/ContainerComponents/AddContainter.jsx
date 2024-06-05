import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import UploadBox from '../ManifestComponents/UploadBox';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddContainer = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showUpload, setShowUpload] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [booking_number, setBookingNumber] = useState('');
  const [customer, setCustomerName] = useState('');
  const [shipping_line, setShippingLine] = useState('');
  const [origin, setOrigin] = useState('');
  const [temperature, setTemperature] = useState('');
  const [vessel_name, setVesselName] = useState('');
  const [arrival_date, setArrivalDate] = useState('');
  const [departure_date, setDepartureDate] = useState('');
  const [destination, setDestination] = useState('');
  const [current_location, setCurrentLocation] = useState('');

  // State for radio inputs
  const [container_size, setContainerSize] = useState('');
  const [container_type, setContainerType] = useState('');
  const [status, setStatus] = useState('');
  const [container_import, setContainerImport] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Load data from localStorage when component mounts
    const storedData = JSON.parse(localStorage.getItem('containerFormData'));
    if (storedData) {
      setBookingNumber(storedData.booking_number || '');
      setCustomerName(storedData.customer || '');
      setShippingLine(storedData.shipping_line || '');
      setOrigin(storedData.origin || '');
      setTemperature(storedData.temperature || '');
      setVesselName(storedData.vessel_name || '');
      setArrivalDate(storedData.arrival_date || '');
      setDepartureDate(storedData.departure_date || '');
      setDestination(storedData.destination || '');
      setCurrentLocation(storedData.current_location || '');
      setContainerSize(storedData.container_size || '');
      setContainerType(storedData.container_type || '');
      setStatus(storedData.status || '');
      setContainerImport(storedData.container_import || '');
    }
  }, []);

  useEffect(() => {
    const formData = {
      booking_number,
      customer,
      shipping_line,
      origin,
      temperature,
      vessel_name,
      arrival_date,
      departure_date,
      destination,
      current_location,
      container_size,
      container_type,
      status,
      container_import,
    };
    localStorage.setItem('containerFormData', JSON.stringify(formData));
  }, [
    container_id,
    booking_number,
    customer,
    shipping_line,
    origin,
    temperature,
    vessel_name,
    arrival_date,
    departure_date,
    destination,
    current_location,
    container_size,
    container_type,
    status,
    container_import,
  ]);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on the input value
    const filteredSuggestions = suggestions.filter((item) =>
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

  const handleSubmit = async () => {
    const payload = {
      container_id,
      booking_number,
      customer,
      shipping_line,
      origin,
      temperature,
      current_location,
      container_size,
      container_type,
      status,
      container_import,
      vessel_name,
      arrival_date,
      departure_date,
      destination,
    };

    try {
      const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/containers/', payload);
      console.log('Response:', response.data);
      toast.success('Container Added');
      localStorage.removeItem('containerFormData'); // Clear form data from localStorage on successful submission
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className='m-10'>
      <div className="my-10 mx-5">
        <div className="flex justify-between items-center py-1 border-b-[1px] border-[#999999]">
          <h4 className='text-xl font-semibold text-[#045985]'>Add Booking Container</h4>
        </div>

        <div className="body my-5 grid grid-cols-2 gap-20">
          <div className="col1 flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className='font-semibold text-base'>Container ID:</label>
              <div className="rounded flex items-center py-2">
                <div ref={inputRef}>
                  <div className="flex items-center justify-between pr-3 pl-2 py-2 rounded border-[#999999] border w-[440px]">
                    <input
                      type="text"
                      value={container_id}
                      onChange={(e) => setContainerId(e.target.value)}
                      className='outline-none w-full'
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
            <div>
              <label htmlFor="temperature" className='font-semibold text-base'>Vessel Name:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  className='outline-none w-full' 
                  placeholder='Enter Name of vessel'
                  value={vessel_name}
                  onChange={(e) => setVesselName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="temperature" className='font-semibold text-base'>Estimated Time of Arrival:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="date" 
                  className='outline-none w-full' 
                  value={arrival_date}
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="temperature" className='font-semibold text-base'>Estimated Time of Depature:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="date" 
                  className='outline-none w-full' 
                  value={departure_date}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between">
              {/* Container Size */}
              <div className="containerSize flex flex-col gap-3 my-3">
                <div className='font-semibold text-base'>Container Size:</div>
                {['10FT', '20FT', '40FT', '45FT'].map((size) => (
                  <div key={size} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="container_size"
                      id={size}
                      value={size}
                      checked={container_size === size}
                      onChange={(e) => setContainerSize(e.target.value)}
                    />
                    <label htmlFor={size} className='text-base'>{size}</label>
                  </div>
                ))}
              </div>
              {/* Container Type */}
              <div className="containerType flex flex-col gap-3 my-3">
                <div className='font-semibold text-base'>Container Type:</div>
                {['Standard', 'High cube', 'Reefer', 'Open top', 'Flat Rack'].map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="container_type"
                      id={type}
                      value={type}
                      checked={container_type === type}
                      onChange={(e) => setContainerType(e.target.value)}
                    />
                    <label htmlFor={type} className='text-base'>{type}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              {/* Status */}
              <div className="status flex flex-col gap-3 my-3">
                <div className='font-semibold text-base'>Status:</div>
                {['In transit', 'Awaiting delivery', 'Hijacked'].map((statusOption) => (
                  <div key={statusOption} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="status"
                      id={statusOption}
                      value={statusOption}
                      checked={status === statusOption}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label htmlFor={statusOption} className='text-base'>{statusOption}</label>
                  </div>
                ))}
              </div>
              {/* Import/Export */}
              <div className="container_import flex flex-col gap-3 my-3">
                <div className='font-semibold text-base'>Import/Export:</div>
                {['Import', 'Export'].map((impExp) => (
                  <div key={impExp} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="container_import"
                      id={impExp}
                      value={impExp}
                      checked={container_import === impExp}
                      onChange={(e) => setContainerImport(e.target.value)}
                    />
                    <label htmlFor={impExp} className='text-base'>{impExp}</label>
                  </div>
                ))}
              </div>
            </div>
          </div> 
          <div className="col2 flex flex-col gap-10">
            <div className="flex flex-col">
              <label htmlFor="booking_number" className='font-semibold text-base'>Booking Number:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input
                  placeholder="Select Booking Number"
                  className='w-full outline-none'
                  value={booking_number}
                  onChange={(e) => setBookingNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="customer" className='font-semibold text-base'>Customer Name:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input
                  placeholder="Customer name associated with container"
                  className='w-full outline-none'
                  value={customer}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="shipping_line" className='font-semibold text-base'>Shipping Line:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  className='outline-none w-full' 
                  value={shipping_line}
                  onChange={(e) => setShippingLine(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="origin" className='font-semibold text-base'>Origin:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  className='outline-none w-full'
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="destination" className='font-semibold text-base'>Destination:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  className='outline-none w-full'
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="temperature" className='font-semibold text-base'>Temperature (for Reefer):</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  className='outline-none w-full' 
                  placeholder='Enter the temperature for Reefer containers in Celsius.'
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="current_location" className='font-semibold text-base'>Terminal annex:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  className='outline-none w-full' 
                  placeholder='Location within the terminal where the container will be stored.'
                  value={current_location}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="buttons flex gap-5 justify-end items-end my-20">
              <button className='text-white bg-[#4E9352] px-10 py-1 rounded-lg' onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      {showUpload && <UploadBox closeUploadBox={closeUploadBox} />}
      <ToastContainer />
    </div>
  );
};

export default AddContainer;
