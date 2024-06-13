import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadBox from '../ManifestComponents/UploadBox';
import axios from 'axios';

const AddAgencies = () => {
  const [inputValue, setInputValue] = useState('');
  const [agency_id, setagency_id] = useState('')
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [letterOfAuthority, setLetterOfAuthority] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(''); // To manage upload status message

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

    // Check if letter of authority is uploaded
    if (!letterOfAuthority) {
      toast.error('Please upload the Letter of Authority.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setLoading(true);
    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key]);
    });
    if (letterOfAuthority) {
      formPayload.append('letter_of_authority', letterOfAuthority);
    }

    try {
      await axios.post('https://exprosys-backend.onrender.com/api/v1/agency/', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Agency added successfully');
      console.log(formData);
      setFormData(initialFormData);
      setLetterOfAuthority(null);
      setUploadStatus(''); 
    } catch (error) {
      console.error('Error adding agency:', error);
      toast.error('Error adding agency. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setLetterOfAuthority(e.target.files[0]);
    setUploadStatus('File uploaded successfully');
  };


  const closeUploadBox = () => {
    setShowUpload(false);
    setUploadSuccess(true);
  };

  const handleUpload = () => {
    setShowUpload(!showUpload);
  };

  return (
    <div className='m-10'>
      <div className="head">
        <h3 className='text-2xl font-bold'>Create Agency</h3>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <div className='my-10 grid grid-cols-2'>
          <div className="sideOne">
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="agency_name" className='text-base font-semibold'>Agency Name:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="agency_name" name="agency_name" value={formData.agency_name} onChange={handleChange} placeholder='Enter Agency name:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="email" className='text-base font-semibold'>Email Address:</label>
              <input required type="email" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter email address:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="phone_number" className='text-base font-semibold'>Phone Number:</label>
              <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="phone_number" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder='Enter phone number:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="contact_person" className='text-base font-semibold'>Contact Person:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="contact_person" name="contact_person" value={formData.contact_person} onChange={handleChange} placeholder='Enter contact person' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="notes" className='text-base font-semibold'>Notes:</label>
              <textarea className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="notes" name="notes" value={formData.notes} onChange={handleChange} placeholder='Enter any additional notes or comments regarding the customer' cols="30" rows="3"></textarea>
            </div>
          </div>

          <div className="sideTwo">
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="address" className='text-base font-semibold'>Address:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="address" name="address" value={formData.address} onChange={handleChange} placeholder='Enter address:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="city" className='text-base font-semibold'>City:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="city" name="city" value={formData.city} onChange={handleChange} placeholder='Enter city:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="country" className='text-base font-semibold'>Country:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="country" name="country" value={formData.country} onChange={handleChange} placeholder='Enter country:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="state_province" className='text-base font-semibold'>State/Province:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="state_province" name="state_province" value={formData.state_province} onChange={handleChange} placeholder='Enter State/Province:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="postal_code" className='text-base font-semibold'>Postal Code:</label>
              <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="postal_code" name="postal_code" value={formData.postal_code} onChange={handleChange} placeholder='Enter Postal Code:' />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="billing_address" className='text-base font-semibold'>Billing Address:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="billing_address" name="billing_address" value={formData.billing_address} onChange={handleChange} placeholder='Enter Billing Address:' />
            </div>

            <div className="upload">
              <label htmlFor="uploadLetter" className='text-[#0095FF] font-semibold flex items-center gap-2'>
                Upload Letter of Authority 
                <FontAwesomeIcon icon={faUpload} />
              </label>
              <input type="file" name="uploadLetter" id="uploadLetter" style={{ display: 'none' }} onChange={handleFileChange} />
              {uploadStatus && <p className='text-green-600'>{uploadStatus}</p>}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 text-lg">
          <p onClick={handleUpload} className='underline text-[#4e9352] font-semibold cursor-pointer'>Upload CSV/XLS</p>
          <button type="submit" className='bg-[#4e9352] hover:bg-[#357c39] rounded-lg text-white px-10 py-2' disabled={loading}>
            {loading ? 'Adding... Please wait' : 'Add Agency'}
          </button>
          <button type="reset" className='bg-[#828282] rounded-lg text-white px-12 py-2' onClick={() => { setFormData(initialFormData); setLetterOfAuthority(null); setUploadStatus(''); }}>Reset</button>
        </div>
      </form>
      {showUpload && <UploadBox closeUploadBox={closeUploadBox} />}
    </div>
  );
}

export default AddAgencies;
