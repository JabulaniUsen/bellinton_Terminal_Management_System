import { faMagnifyingGlass, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadBox from '../ManifestComponents/UploadBox';
import Select from 'react-select';
import axios from 'axios';

const AddAgent = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const [showUpload, setShowUpload] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [agencies, setAgencies] = useState([]);
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [letterFile, setLetterFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setProfileImageFile(file);
    }
  };

  const handleLetterChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLetterFile(file);
    }
  };

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/agency-list/');
        console.log('Agency Response:', response.data.results); // Log the response
        if (Array.isArray(response.data.results)) {
          const agencyOptions = response.data.results.map((agency) => ({
            value: agency.id,
            label: agency.agency_name,
          }));
          setAgencies(agencyOptions);
        } else {
          console.error('Fetched data is not an array:', response.data.results);
        }
      } catch (error) {
        console.error('Error fetching agencies:', error);
        toast.error(error.message);
      }
    };
    fetchAgencies();
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
    agent_name: '',
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
    const payload = new FormData();
    payload.append('agent_name', formData.agent_name);
    payload.append('email', formData.email);
    payload.append('phone_number', formData.phone_number);
    payload.append('contact_person', formData.contact_person);
    payload.append('notes', formData.notes);
    payload.append('address', formData.address);
    payload.append('city', formData.city);
    payload.append('country', formData.country);
    payload.append('state_province', formData.state_province);
    payload.append('postal_code', formData.postal_code);
    payload.append('billing_address', formData.billing_address);
    if (selectedAgency) {
      payload.append('agency', selectedAgency.value);
    }
    if (profileImageFile) {
      payload.append('profile_picture', profileImageFile);
    }
    if (letterFile) {
      payload.append('letter_of_authority', letterFile);
    }

    try {
      const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/agents/create/', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      toast.success('Agent added successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData(initialFormData);
      setProfileImage(null);
      setProfileImageFile(null);
      setSelectedAgency(null);
      setLetterFile(null);
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error('Error submitting data');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  const closeUploadBox = () => {
    setShowUpload(false);
  };

  const handleUpload = () => {
    setShowUpload(!showUpload);
  };

  return (
    <div className='m-10'>
      <div className="head">
        <h3 className='text-2xl font-bold'>Create Agent</h3>
      </div>

      <form action="/agent/" method="POST" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <div className='my-10 grid gap-10 grid-cols-2'>
            <div className="sideOne">
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="agency" className='text-base font-semibold'>Select Agency:</label>
                <Select
                  options={agencies}
                  isSearchable
                  className='w-[350px]'
                  value={selectedAgency}
                  onChange={setSelectedAgency}
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="agent_name" className='text-base font-semibold'>Agent Name:</label>
                <input
                  required
                  type="text"
                  className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]'
                  id="agent_name"
                  name="agent_name"
                  placeholder='Enter Agent name:'
                  value={formData.agent_name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="email" className='text-base font-semibold'>Email:</label>
                <input
                  required
                  type="Email"
                  className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]'
                  id="email"
                  name="email"
                  placeholder='Enter email address:'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="phone_number" className='text-base font-semibold'>Phone Number:</label>
                <input
                  required
                  type="number"
                  className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]'
                  id="phone_number"
                  name="phone_number"
                  placeholder='Enter phone number:'
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sideTwo">
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="address" className='text-base font-semibold'>Address:</label>
                <input
                  required
                  type="text"
                  className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]'
                  id="address"
                  name="address"
                  placeholder='Enter address:'
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="city" className='text-base font-semibold'>City:</label>
                <input
                  required
                  type="text"
                  className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]'
                  id="city"
                  name="city"
                  placeholder='Enter city:'
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="country" className='text-base font-semibold'>Country:</label>
                <input
                  required
                  type="text"
                  className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]'
                  id="country"
                  name="country"
                  placeholder='Enter country:'
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="state_province" className='text-base font-semibold'>State/Province:</label>
                <input
                  required
                  type="text"
                  className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]'
                  id="state_province"
                  name="state_province"
                  placeholder='Enter State/Province:'
                  value={formData.state_province}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="postal_code" className='text-base font-semibold'>Postal Code:</label>
                <input
                  required
                  type="number"
                  className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]'
                  id="postal_code"
                  name="postal_code"
                  placeholder='Enter Postal Code:'
                  value={formData.postal_code}
                  onChange={handleChange}
                />
              </div>

              <div className="upload">
                <label htmlFor="uploadLetter" className='text-[#0095FF] font-semibold flex items-center gap-2'>
                  Upload Letter of Authority
                  <FontAwesomeIcon icon={faUpload} />
                </label>
                <input type="file" name="uploadLetter" id="uploadLetter" style={{ display: 'none' }} onChange={handleLetterChange} />
              </div>
            </div>
          </div>
          <div className="profileImage relative h-[170px] w-[170px] mt-24 border border-black rounded-xl flex flex-col text-center justify-center items-center cursor-pointer">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="h-full w-full object-cover rounded-xl" />
            ) : (
              <>
                <p className="text-2xl font-semibold">Add Photo</p>
                <p className="text-[#0095FF] text-sm">Upload image, JPG, PNG</p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              id="uploadProfileImage"
              name="uploadProfileImage"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label
              htmlFor="uploadProfileImage"
              className="absolute inset-0 w-full h-full cursor-pointer"
            ></label>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 text-lg">
          <p onClick={handleUpload} className='underline text-[#4e9352] font-semibold cursor-pointer'>Upload CSV/XLS</p>
          <button type="submit" className='bg-[#4e9352] hover:bg-[#317035] rounded-lg text-white px-10 py-2'>Add Agent</button>
          <button type="reset" className='bg-[#828282] rounded-lg text-white px-12 py-2'>Reset</button>
        </div>
      </form>
      {showUpload &&
        <UploadBox closeUploadBox={closeUploadBox} />
      }
    </div>
  );
}

export default AddAgent;
