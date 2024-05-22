import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadBox from '../ManifestComponents/UploadBox';
import axios from 'axios';

const AddAgencies = () => {
  const [inputValue, setInputValue] = useState('');
  const [agency_id, setAgency_id] = useState("CFC-AG-0001-0000")
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

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

  const initialFormData = {
    agency_id: '',
    agency_name: '',
    email: '',
    phone_number: '',
    contact_person: '',
    notes: '',
    address: '',
    city: '',
    country: '',
    state_province: '',
    postal_code: '',
    billing_address: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://exprosys-backend.onrender.com/api/v1/agency/', formData);
      // Show notification with pop-up animation
      toast.success('Agency added successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Reset the form data to its initial state
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error adding agency:', error);
      toast.error('Error adding agency. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const data = ["1001", "1002", "1003", "1004", "1005"]

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

  // Upload 

  const closeUploadBox = () => {
    setShowUpload(false);
    setUploadSuccess(true);
  };

  const handleUpload = () => {
    setShowUpload(!showUpload);
  }

  return (
    <div className='m-10'>
      <div className="head">
        <h3 className='text-2xl font-bold'>Create Agency</h3>
      </div>

      <form action="" onSubmit={handleSubmit} >
        <div className='my-10 grid grid-cols-2'>
          <div className="sideOne">
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>Agency ID:</label>
              <div ref={inputRef}>
                <div className="flex items-center justify-between pr-3 pl-2 py-2 rounded-md border-gray-500 border w-[400px]">
                  <input
                    type="text"
                    value={agency_id}
                    onChange={handleInputChange}
                    className='outline-none w-full'
                />
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
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>Agency Name:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="agency_name" name="agency_name" placeholder='Enter Agency name:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>Email:</label>
              <input required type="Email" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="email" name="email" placeholder='Enter email address:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>Phone Number:</label>
              <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="phone_number" name="phone_number" placeholder='Enter phone number:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>Contact Person:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="contact_person" name="contact_person" placeholder='Enter contact person' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>Note:</label>
              {/* <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="contact_person" name="contact_person" placeholder='Enter contact person' /> */}
              <textarea className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' placeholder='Enter Any additional notes or comments regarding the customer' name="" id="" cols="30" rows="3"></textarea>
            </div>
          </div>

          <div className="sideTwo">
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>Address:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="address" name="address" placeholder='Enter address:' />
            </div>
            <
            div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>City:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="city" name="city" placeholder='Enter city:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>Country:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="country" name="country" placeholder='Enter country:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>State/Province:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="State/Province" name="State/Province" placeholder='Enter State/Province:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>Postal Code:</label>
              <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="postal_code" name="postal_code" placeholder='Enter Postal Code:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="name" className='text-base font-semibold'>Billing Address:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="billing_address" name="billing_address" placeholder='Enter Billing Address:' />
            </div>

            <div className="upload">
                <label htmlFor="uploadLetter" className='text-[#0095FF] font-semibold flex items-center gap-2'>
                    Upload Letter of Authority 
                    <FontAwesomeIcon icon={faUpload}/>
                </label>
                <input type="file" name="uploadLetter" id="uploadLetter" style={{display: 'none'}} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 text-lg">
          <p onClick={handleUpload} className='underline text-[#4e9352] font-semibold cursor-pointer'>Upload CSV/XLS</p>
          <button type="submit" className='bg-[#4e9352] hover:bg-[#357c39] rounded-lg text-white px-10 py-2'>Add Agency</button>
          <button type="reset" className='bg-[#828282] rounded-lg text-white px-12 py-2'>Reset</button>
        </div>
      </form>
      { showUpload &&
        <UploadBox closeUploadBox={closeUploadBox}/>
        }
    </div>
  )
}

export default AddAgencies;
