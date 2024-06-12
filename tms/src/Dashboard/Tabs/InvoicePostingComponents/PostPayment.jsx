import { faCircleCheck, faMagnifyingGlass, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import UploadBox from '../ManifestComponents/UploadBox';

const PostPayment = () => {
  const [inputValue2, setInputValue2] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [containers, setContainers] = useState([]);
  const inputRef = useRef(null);
  const [showUpload, setShowUpload] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setIsFileUploaded(true);
      setFile(event.target.files[0]);
    } else {
      setIsFileUploaded(false);
      setFile(null);
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
    container_number: '',
    payment_date: '',
    invoice_number: '',
    total_amount_paid: '',
    services_type: '',
    confirmation_officer: '',
    payment_remarks: '',
    export: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    // Fetch export names
    axios.get('https://exprosys-backend.onrender.com/api/v1/exporters/')
      .then(response => {
        setSuggestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching export names:', error);
      });

    // Fetch container numbers
    axios.get('https://exprosys-backend.onrender.com/api/v1/containers/')
      .then(response => {
        setContainers(response.data);
      })
      .catch(error => {
        console.error('Error fetching containers:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.export) {
      toast.error('Please select an export name.');
      return;
    }
    if (!file) {
      toast.error('Please upload a payment receipt.');
      return;
    }
    
    const payload = new FormData();
    payload.append('container_number', formData.container_number);
    payload.append('payment_date', formData.payment_date);
    payload.append('invoice_number', formData.invoice_number);
    payload.append('total_amount_paid', formData.total_amount_paid);
    payload.append('services_type', formData.services_type);
    payload.append('confirmation_officer', formData.confirmation_officer);
    payload.append('payment_remarks', formData.payment_remarks);
    payload.append('export', formData.export);
    payload.append('payment_receipt', file);

    try {
      const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/post-payment/', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success('Payment Receipt Posted Successfully!');
        setFormData(initialFormData);
        setFile(null);
        setIsFileUploaded(false);
      } else {
        toast.error('Failed to post the payment receipt.');
      }
    } catch (error) {
      console.log(error);
      toast.error(`Failed to post the payment receipt. Error: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange2 = (e) => {
    const value = e.target.value;
    setInputValue2(value);
  
    if (Array.isArray(suggestions)) {
      const filteredSuggestions = suggestions.filter((item) =>
        item.export_name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      console.warn('suggestions is not an array, cannot filter');
    }
  };
  
  
  

  const handleSuggestionClick2 = (suggestion2) => {
    setInputValue2(suggestion2.export_name);
    setSuggestions([]);
    setFormData((prevData) => ({
      ...prevData,
      export: suggestion2.id, 
    }));
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
              <label htmlFor="export" className='text-base font-semibold'>Export Name:</label>
              <div ref={inputRef}>
                <div className="flex items-center justify-between pr-3 pl-2 py-2 rounded-md border-gray-500 border w-[400px]">
                  <input
                    type="text"
                    name="export"
                    value={inputValue2}
                    onChange={handleInputChange2}
                    className='outline-none w-full'
                  />
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#999999]' />
                </div>
                <ul>
                  {Array.isArray(suggestions) && suggestions.map((suggestion2, index) => (
                    <li key={index} className='cursor-pointer hover:bg-slate-100 p-2' onClick={() => handleSuggestionClick2(suggestion2)}>
                      {suggestion2.export_name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="container_number" className='text-base font-semibold'>Container No:</label>
              <select name="container_number" id="container_number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' onChange={handleChange} value={formData.container_number}>
                <option value="" className='text-[#0000002a]'>Select container number</option>
                {containers.map((container) => (
                  <option key={container.id} value={container.container_id}>{container.container_id}</option>
                ))}
              </select>
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
