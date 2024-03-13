import { faMagnifyingGlass, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadBox from '../ManifestComponents/UploadBox';


const AddAgent = () => {
  const [inputValue, setInputValue] = useState('');
  const [agentId, setAgentId] = useState("CFC-AG-0001-0000")
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const [showUpload, setShowUpload] = useState(false)
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a local URL for the selected image file
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

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
    AgentID: 'CFC-AG-0001-0000',
    AgentName: '',
    email: '',
    phoneNumber: '',
    contactPerson: '',
    notes: '',
    address: '',
    city: '',
    country: '',
    stateProvince: '',
    postalCode: '',
    billingAddress: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any form submission logic here

    // Show notification with pop-up animation
    toast.success('Agent added successfully', {
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
        <h3 className='text-2xl font-bold'>Create Agent</h3>
      </div>

      <form action="" onSubmit={handleSubmit} >
            <div className="flex justify-between">
                <div className='my-10 grid gap-5 grid-cols-2'>
                <div className="sideOne">
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>Agent ID:</label>
                    <div ref={inputRef}>
                        <div className="flex items-center justify-between pr-3 pl-2 py-2 rounded-md border-gray-500 border w-[350px]">
                        <input
                            type="text"
                            value={agentId}
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
                    <label htmlFor="name" className='text-base font-semibold'>Agent Name:</label>
                    <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="AgentName" name="AgentName" placeholder='Enter Agent name:' />
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>Email:</label>
                    <input required type="Email" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="email" name="email" placeholder='Enter email address:' />
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>Phone Number:</label>
                    <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="phoneNumber" name="phoneNumber" placeholder='Enter phone number:' />
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>Contact Person:</label>
                    <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="contactPerson" name="contactPerson" placeholder='Enter contact person' />
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>Note:</label>
                    {/* <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="contactPerson" name="contactPerson" placeholder='Enter contact person' /> */}
                    <textarea className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' placeholder='Enter Any additional notes or comments regarding the customer' name="" id="" cols="30" rows="3"></textarea>
                    </div>
                </div>

                <div className="sideTwo">
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>Address:</label>
                    <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="address" name="address" placeholder='Enter address:' />
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>City:</label>
                    <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="city" name="city" placeholder='Enter city:' />
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>Country:</label>
                    <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="country" name="country" placeholder='Enter country:' />
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>State/Province:</label>
                    <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="State/Province" name="State/Province" placeholder='Enter State/Province:' />
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>Postal Code:</label>
                    <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="postalCode" name="postalCode" placeholder='Enter Postal Code:' />
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                    <label htmlFor="name" className='text-base font-semibold'>Billing Address:</label>
                    <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[350px]' id="billingAddress" name="billingAddress" placeholder='Enter Billing Address:' />
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
            <div className="profileImage relative h-[170px] w-[170px] mt-24 border border-black rounded-xl flex flex-col text-center justify-center items-center cursor-pointer">
                {profileImage ? (
                <img src={profileImage} alt="Profile" className="h-full w-full object-cover rounded-xl" />
                ) : (
                <>
                    <p className="text-2xl font-semibold">Add Photo</p>
                    <p className="text-[#0095FF] text-sm">Upload image, JPG, PNG</p>
                </>
                )}
                {/* Hidden file input for uploading the image */}
                <input
                type="file"
                accept="image/*"
                id="uploadProfileImage"
                name="uploadProfileImage"
                style={{ display: "none" }}
                onChange={handleImageChange}
                />
                {/* Label for triggering file input click */}
                <label
                htmlFor="uploadProfileImage"
                className="absolute inset-0 w-full h-full cursor-pointer"
                ></label>
            </div>
        </div>
        <div className="flex justify-center items-center gap-5 text-lg">
          <p onClick={handleUpload} className='underline text-[#4000FF] font-semibold cursor-pointer'>Upload CSV/XLS</p>
          <button type="submit" className='bg-[#4000FF] hover:bg-[#3a0ec0] rounded-lg text-white px-10 py-2'>Add Agent</button>
          <button type="reset" className='bg-[#828282] rounded-lg text-white px-12 py-2'>Reset</button>
        </div>
      </form>
      { showUpload &&
        <UploadBox closeUploadBox={closeUploadBox}/>
        }
    </div>
  )
}

export default AddAgent