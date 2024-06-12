import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import UploadBox from '../ManifestComponents/UploadBox';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCustomer = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const [showUpload, setShowUpload] = useState(false);
  const [formData, setFormData] = useState({
    exporter_name: '',
    contact_person: '',
    email_address: '',
    phone_number: '',
    address: '',
    city: '',
    country: '',
    state_province: '',
    postal_code: '',
  });

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

  const data = [];

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://exprosys-backend.onrender.com/api/v1/exporters/', formData);
      toast.success('Exporter added successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      
    } catch (error) {
      toast.error('Failed to add exporter', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
    }
    console.log(formData);
  };

  const closeUploadBox = () => {
    setShowUpload(false);
  };

  const handleUpload = () => {
    setShowUpload(!showUpload);
  };

  return (
    <div className='m-10'>
      <div className="head">
        <h3 className='text-2xl font-bold'>Add Exporter</h3>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <div className='my-10 grid grid-cols-2'>
          <div className="sideOne">
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="exporter_name" className='text-base font-semibold'>Exporter Name:</label>
              <input
                // readOnly
                type="text"
                className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'
                id="exporter_name"
                name="exporter_name"
                value={formData.exporter_name}
                onChange={handleChange}
                placeholder='Enter exporter name:'
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="email_address" className='text-base font-semibold'>Email:</label>
              <input
                required
                type="email"
                className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'
                id="email_address"
                name="email_address"
                value={formData.email_address}
                onChange={handleChange}
                placeholder='Enter email address:'
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="phone_number" className='text-base font-semibold'>Phone Number:</label>
              <input
                required
                type="number"
                className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder='Enter phone number:'
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="contact_person" className='text-base font-semibold'>Contact Person:</label>
              <input
                required
                type="text"
                className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'
                id="contact_person"
                name="contact_person"
                value={formData.contact_person}
                onChange={handleChange}
                placeholder='Enter contact person'
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="address" className='text-base font-semibold'>Address:</label>
              <input
                required
                type="text"
                className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder='Enter address:'
              />
            </div>
          </div>

          <div className="sideTwo">
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="city" className='text-base font-semibold'>City:</label>
              <input
                required
                type="text"
                className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder='Enter city:'
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="country" className='text-base font-semibold'>Country:</label>
              <input
                required
                type="text"
                className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder='Enter country:'
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="state_province" className='text-base font-semibold'>State/Province:</label>
              <input
                required
                type="text"
                className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'
                id="state_province"
                name="state_province"
                value={formData.state_province}
                onChange={handleChange}
                placeholder='Enter State/Province:'
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
            <label htmlFor="postal_code" className='text-base font-semibold'>Postal Code:</label>
              <input
                required
                type="number"
                className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'
                id="postal_code"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                placeholder='Enter Postal Code:'
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 text-lg">
          <p onClick={handleUpload} className='underline text-[#4e9352] font-semibold cursor-pointer'>Upload CSV/XLS</p>
          <button type="submit" className='bg-[#4e9352] hover:bg-[#4e93518c] rounded-lg text-white px-10 py-2'>Add Exporter</button>
          <button type="reset" className='bg-[#828282] rounded-lg text-white px-12 py-2'>Reset</button>
        </div>
      </form>
      {showUpload &&
        <UploadBox closeUploadBox={closeUploadBox}/>
      }
      <ToastContainer />
    </div>
  )
}

export default AddCustomer;
