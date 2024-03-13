import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddCustomer = () => {
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

  const initialFormData = {
    customerID: '',
    customerName: '',
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
    toast.success('Customer added successfully', {
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

  return (
    <div className='m-10'>
      <div className="head">
        <h3 className='text-2xl font-bold'>Add Customer</h3>
      </div>

      <form action="" onSubmit={handleSubmit} className='my-10 grid grid-cols-2'>
        <div className="sideOne">
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>Customer ID:</label>
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
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>Customer Name:</label>
            <input type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="customerName" name="customerName" placeholder='Enter customer name:' required />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>Email:</label>
            <input type="Email" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="email" name="email" placeholder='Enter email address:' required />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>Phone Number:</label>
            <input type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="phoneNumber" name="phoneNumber" placeholder='Enter phone number:' required />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>Contact Person:</label>
            <input type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="contactPerson" name="contactPerson" placeholder='Enter contact person' required />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>Notes:</label>
            {/* <input type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="customerID" name="customerID" required /> */}
            <textarea name="" id="" cols="30" rows="5" placeholder='Enter Any additional notes or comments regarding the customer' className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'></textarea>
          </div>
        </div>

        <div className="sideTwo">
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>Address:</label>
            <input type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="address" name="address" placeholder='Enter address:' required />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>City:</label>
            <input type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="city" name="city" placeholder='Enter city:' required />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>Country:</label>
            <input type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="country" name="country" placeholder='Enter country:' required />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>State/Province:</label>
            <input type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="State/Province" name="State/Province" placeholder='Enter State/Province:' required />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>Postal Code:</label>
            <input type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="postalCode" name="postalCode" placeholder='Enter Postal Code:' required />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label htmlFor="name" className='text-base font-semibold'>Billing Address:</label>
            <input type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="billingAddress" name="billingAddress" placeholder='Enter Billing Address:' required />
          </div>

          <button type="submit" className='bg-[#4000FF] hover:bg-[#3a0ec0] rounded-lg text-white px-12 py-2'>Add Customer</button>
        </div>
      </form>
    </div>
  )
}

export default AddCustomer