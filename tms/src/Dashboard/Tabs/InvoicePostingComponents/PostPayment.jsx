import { faCircleCheck, faMagnifyingGlass, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import UploadBox from '../ManifestComponents/UploadBox';

const PostPayment = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue2, setInputValue2] = useState('');
  const [suggestions2, setSuggestions2] = useState([]);
  const inputRef = useRef(null);
  const [showUpload, setShowUpload] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setIsFileUploaded(true);
    } else {
      setIsFileUploaded(false);
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
      setSuggestions2([]);
    }
  };

  const initialFormData = {
    container_number: '',
    payment_date: '',
    invoice_number: '',
    total_amount_paid: '',
    services_type: '',
    confirmation_officer: '',
    payment_remarks: '',
    customer: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      customer: parseInt(formData.customer, 10),
    };

    try {
      const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/post-payment/', payload);
      if (response.status === 200 || response.status === 201) {
        toast.success('Payment Receipt Posted Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData(initialFormData);
      } else {
        toast.error('Failed to post the payment receipt.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error(`Failed to post the payment receipt. Error: ${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
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

  const data = ["1001", "1002", "1003", "1004", "1005"];
  const customerNameData = ["Michael", "Kate", "Williams", "Jabulani"];

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
    setFormData((prevData) => ({
      ...prevData,
      container_number: suggestion,
    }));
  };

  const handleInputChange2 = (e) => {
    const value = e.target.value;
    setInputValue2(value);

    const filteredSuggestions2 = customerNameData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions2(filteredSuggestions2);
  };

  const handleSuggestionClick2 = (suggestion2) => {
    setInputValue2(suggestion2);
    setSuggestions2([]);
    setFormData((prevData) => ({
      ...prevData,
      customer: suggestion2, // Adjust if the customer is an ID or other identifier
    }));
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
        <h3 className='text-2xl font-bold text-[#075b86]'>Post Payment</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <h3 className='mt-10 mb-2 font-bold'>Invoice Details</h3>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="payment_date" className='text-base font-semibold'>Payment Date:</label>
              <input required type="date" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="payment_date" name="payment_date" onChange={handleChange} value={formData.payment_date} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="customer" className='text-base font-semibold'>Customer Name:</label>
              <div ref={inputRef}>
                <div className="flex items-center justify-between pr-3 pl-2 py-2 rounded-md border-gray-500 border w-[400px]">
                  <input
                    type="text"
                    name="customer"
                    value={inputValue2}
                    onChange={handleInputChange2}
                    className='outline-none w-full'
                  />
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#999999]' />
                </div>
                <ul>
                  {suggestions2.map((suggestion2, index) => (
                    <li key={index} className='cursor-pointer hover:bg-slate-100 p-2' onClick={() => handleSuggestionClick2(suggestion2)}>
                      {suggestion2}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="container_number" className='text-base font-semibold'>Container No:</label>
              <div ref={inputRef}>
                <div className="flex items-center justify-between pr-3 pl-2 py-2 rounded-md border-gray-500 border w-[400px]">
                  <input
                    type="text"
                    name="container_number"
                    value={inputValue}
                    onChange={handleInputChange}
                    className='outline-none w-full'
                  />
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#999999]' />
                </div>
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className='cursor-pointer hover:bg-slate-100 p-2' onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="total_amount_paid" className='text-base font-semibold'>Total Amount Paid:</label>
              <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="total_amount_paid" name="total_amount_paid" placeholder='Enter total amount paid' onChange={handleChange} value={formData.total_amount_paid} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="invoice_number" className='text-base font-semibold'>Invoice Number:</label>
              <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="invoice_number" name="invoice_number" placeholder='Enter invoice number' onChange={handleChange} value={formData.invoice_number} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="services_type" className='text-base font-semibold'>Service Type:</label>
              <select name="services_type" id="services_type" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' onChange={handleChange} value={formData.services_type}>
                <option value="" className='text-[#0000002a]'>Select service type</option>
                <option value="type 1">type 1</option>
                <option value="type 2">type 2</option>
                <option value="type 3">type 3</option>
              </select>
            </div>
          </div>
          <h3 className='mt-10 mb-2 font-bold'>Other Details</h3>
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="confirmation_officer" className='text-base font-semibold'>Confirmation Officer:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="confirmation_officer" name="confirmation_officer" placeholder='Enter Confirmation Officer' onChange={handleChange} value={formData.confirmation_officer} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="payment_remarks" className='text-base font-semibold'>Payment Remarks:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="payment_remarks" name="payment_remarks" placeholder='Enter Payment Remarks' onChange={handleChange} value={formData.payment_remarks} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 text-lg my-10">
          <div className="">
            <small>
              <input type="file" id="attachment" className='hidden' onChange={handleFileChange} />
              {!isFileUploaded ? (
                <label htmlFor="attachment" className='text-blue-500 cursor-pointer'>
                  Upload Payment Receipt:
                  <FontAwesomeIcon icon={faUpload} className='mx-2' />
                  Attachments(e.g., photos, documents)
                </label>
              ) : (
                <label className='text-green-600'>
                  <FontAwesomeIcon icon={faCircleCheck} className='mr-1' />
                  File uploaded successfully!
                </label>
              )}
            </small>
          </div>
          <button type="submit" className='bg-[#4e9352] hover:bg-[#4e93518c] rounded-lg text-white px-10 py-2'>Post Payment</button>
        </div>
      </form>
      {showUpload && <UploadBox closeUploadBox={closeUploadBox} />}
    </div>
  );
};

export default PostPayment;
