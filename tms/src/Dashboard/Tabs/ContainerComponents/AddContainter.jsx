import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';
import axios from 'axios';
import SuccessBox from '../ManifestComponents/SuccessBox';
import UploadBox from '../ManifestComponents/UploadBox';

const AddContainer = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showUpload, setShowUpload] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [options2, setOptions2] = useState([]); // For Booking Number
  const [options3, setOptions3] = useState([]); // For Customer Name
  const inputRef = useRef(null);

  useEffect(() => {
    // Fetch data for the dropdowns when the component mounts
    fetchBookingNumbers();
    fetchCustomerNames();

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
    try {
      const payload = {
        containerId: inputValue,
        // Add other fields here
      };
      const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/containers/', payload);
      console.log('Response:', response.data);
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error, e.g., show an error message
    }
  };

  const handleModalOK = () => {
    setUploadSuccess(false);
  };

  const fetchBookingNumbers = async () => {
    try {
      const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/booking-numbers/');
      if (Array.isArray(response.data)) {
        const bookingNumbers = response.data.map(item => ({ value: item.id, label: item.bookingNumber }));
        setOptions2(bookingNumbers);
      } else {
        console.error('Unexpected response format for booking numbers:', response.data);
      }
    } catch (error) {
      console.error('Error fetching booking numbers:', error);
    }
  };

  const fetchCustomerNames = async () => {
    try {
      const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/customer-names/');
      if (Array.isArray(response.data)) {
        const customerNames = response.data.map(item => ({ value: item.id, label: item.customerName }));
        setOptions3(customerNames);
      } else {
        console.error('Unexpected response format for customer names:', response.data);
      }
    } catch (error) {
      console.error('Error fetching customer names:', error);
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
            {/* Additional form fields */}
            {/* ... */}
            <div className="flex justify-between">
              {/* Container Size */}
              <div className="containerSize flex flex-col gap-3 my-3">
                <div className='font-semibold text-base'>Container Size:</div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="10FT" id="10FT" />
                  <label htmlFor="10FT" className='text-base'>10FT</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="20FT" id="20FT" />
                  <label htmlFor="20FT" className='text-base'>20FT</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="40FT" id="40FT" />
                  <label htmlFor="40FT" className='text-base'>40FT</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="45FT" id="45FT" />
                  <label htmlFor="45FT" className='text-base'>45FT</label>
                </div>
              </div>
              {/* Container Type */}
              <div className="containerSize flex flex-col gap-3 my-3">
                <div className='font-semibold text-base'>Container Type:</div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="Regular" id="Regular" />
                  <label htmlFor="Regular" className='text-base'>Regular</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="OOG" id="OOG" />
                  <label htmlFor="OOG" className='text-base'>OOG</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="OTFR" id="OTFR" />
                  <label htmlFor="OTFR" className='text-base'>OTFR</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="Reefer" id="Reefer" />
                  <label htmlFor="Reefer" className='text-base'>Reefer</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="Hazardous" id="Hazardous" />
                  <label htmlFor="Hazardous" className='text-base'>Hazardous</label>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              {/* Status */}
              <div className="containerSize flex flex-col gap-3 my-3">
                <div className='font-semibold text-base'>Status:</div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="InTransit" id="InTransit" />
                  <label htmlFor="InTransit" className='text-base'>In Transit</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="AwaitingDelivery" id="AwaitingDelivery" />
                  <label htmlFor="AwaitingDelivery" className='text-base'>Awaiting Delivery</label>
                  </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="Discharge" id="Discharge" />
                  <label htmlFor="Discharge" className='text-base'>Discharge</label>
                </div>
              </div>
              {/* Import/Export */}
              <div className="containerSize flex flex-col gap-3 my-3">
                <div className='font-semibold text-base'>Import/Export:</div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="ImportFull" id="ImportFull" />
                  <label htmlFor="ImportFull" className='text-base'>Import Full</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="ImportEmpty" id="ImportEmpty" />
                  <label htmlFor="ImportEmpty" className='text-base'>Import Empty</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="ExportFull" id="ExportFull" />
                  <label htmlFor="ExportFull" className='text-base'>Export Full</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="ExportEmpty" id="ExportEmpty" />
                  <label htmlFor="ExportEmpty" className='text-base'>Export Empty</label>
                </div>
              </div>
            </div>
          </div> 
          <div className="col2 flex flex-col gap-10">
            <div className="flex flex-col">
              <label htmlFor="bookingNumber" className='font-semibold text-base'>Booking Number:</label>
              <div className="rounded flex items-center py-2">
                <Select
                  options={options2}
                  isSearchable
                  placeholder="Select Booking Number"
                  className='w-full'
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="customerName" className='font-semibold text-base'>Customer Name:</label>
              <div className="rounded flex items-center py-2">
                <Select
                  options={options3}
                  isSearchable
                  placeholder="Customer name associated with container"
                  className='w-full'
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="shippingLine" className='font-semibold text-base'>Shipping Line:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input type="text" className='outline-none w-full' />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="origin" className='font-semibold text-base'>Origin:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input type="text" className='outline-none w-full' />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="temperature" className='font-semibold text-base'>Temperature (for Reefer):</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input type="text" className='outline-none w-full' placeholder='Enter the temperature for Reefer containers in Celsius.' />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="location" className='font-semibold text-base'>Location:</label>
              <div className="border-[#999999] rounded border-[1px] flex items-center p-2">
                <input type="text" className='outline-none w-full' placeholder='Location within the terminal where the container will be stored.' />
              </div>
            </div>
            <div className="buttons flex gap-5 justify-end items-end my-20">
              <button className='text-white bg-[#4E9352] px-10 py-1 rounded-lg' onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      {showUpload && <UploadBox closeUploadBox={closeUploadBox} />}
    </div>
  );
};

export default AddContainer;
