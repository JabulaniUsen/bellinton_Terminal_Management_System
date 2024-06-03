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

  const [formData, setFormData] = useState({
    container_id: '',
    booking_number: '',
    customer: '',
    shipping_line: '',
    origin: '',
    temperature: '',
    vessel_name: '',
    arrival_date: '',
    departure_date: '',
    destination: '',
    current_location: '',
    container_size: '',
    container_type: '',
    status: '',
    container_import: '',
  });

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('containerFormData'));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('containerFormData', JSON.stringify(formData));
  }, [formData]);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'container_id') {
      setInputValue(value);
      const filteredSuggestions = suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData({
      ...formData,
      container_id: suggestion,
    });
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
      ...formData,
      container_id: parseInt(formData.container_id, 10),
    };

    if (isNaN(payload.container_id)) {
      toast.error('Container ID must be a valid integer');
      return;
    }

    try {
      const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/containers/', payload);
      console.log('Response:', response.data);
      toast.success('Container Added');
      localStorage.removeItem('containerFormData');
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error('Error submitting data');
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
              <label htmlFor="container_id" className='font-semibold text-base'>Container ID:</label>
              <div className="rounded flex items-center py-2">
                <div ref={inputRef}>
                  <div className="flex items-center justify-between pr-3 pl-2 py-2 rounded border-[#999999] border w-[440px]">
                    <input
                      type="text"
                      name="container_id"
                      value={formData.container_id}
                      onChange={handleInputChange}
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
              <label htmlFor="vessel_name" className='font-semibold text-base'>Vessel Name:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  name="vessel_name"
                  className='outline-none w-full' 
                  placeholder='Enter Name of vessel'
                  value={formData.vessel_name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="arrival_date" className='font-semibold text-base'>Estimated Time of Arrival:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="date" 
                  name="arrival_date"
                  className='outline-none w-full' 
                  value={formData.arrival_date}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="departure_date" className='font-semibold text-base'>Estimated Time of Depature:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="date" 
                  name="departure_date"
                  className='outline-none w-full' 
                  value={formData.departure_date}
                  onChange={handleInputChange}
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
                      checked={formData.container_size === size}
                      onChange={handleInputChange}
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
                      checked={formData.container_type === type}
                      onChange={handleInputChange}
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
                      checked={formData.status === statusOption}
                      onChange={handleInputChange}
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
                      checked={formData.container_import === impExp}
                      onChange={handleInputChange}
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
                  name="booking_number"
                  placeholder="Select Booking Number"
                  className='w-full outline-none'
                  value={formData.booking_number}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="customer" className='font-semibold text-base'>Customer Name:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input
                  name="customer"
                  placeholder="Customer name associated with container"
                  className='w-full outline-none'
                  value={formData.customer}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="shipping_line" className='font-semibold text-base'>Shipping Line:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  name="shipping_line"
                  className='outline-none w-full' 
                  value={formData.shipping_line}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="origin" className='font-semibold text-base'>Origin:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  name="origin"
                  className='outline-none w-full'
                  value={formData.origin}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="destination" className='font-semibold text-base'>Destination:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  name="destination"
                  className='outline-none w-full'
                  value={formData.destination}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="temperature" className='font-semibold text-base'>Temperature (for Reefer):</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  name="temperature"
                  className='outline-none w-full' 
                  placeholder='Enter the temperature for Reefer containers in Celsius.'
                  value={formData.temperature}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="current_location" className='font-semibold text-base'>Terminal annex:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input 
                  type="text" 
                  name="current_location"
                  className='outline-none w-full' 
                  placeholder='Location within the terminal where the container will be stored.'
                  value={formData.current_location}
                  onChange={handleInputChange}
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
