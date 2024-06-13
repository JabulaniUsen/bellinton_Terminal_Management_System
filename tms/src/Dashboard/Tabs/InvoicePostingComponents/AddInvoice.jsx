import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faMagnifyingGlass, faUpload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import UploadBox from '../ManifestComponents/UploadBox';

const AddInvoice = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue2, setInputValue2] = useState('');
  const [suggestions2, setSuggestions2] = useState([]);
  const inputRef = useRef(null);
  const [showUpload, setShowUpload] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [exporterIds, setExporterIds] = useState([]);
  const [container_numbers, setContainer_numbers] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState('');

  useEffect(() => {
    axios.get('https://exprosys-backend.onrender.com/api/v1/exporters/')
      .then(response => {
        console.log('API response:', response.data.results);
        if (Array.isArray(response.data.results)) {
          setExporterIds(response.data.results.map(exporter => exporter.exporter_id));
        } else {
          console.error('Unexpected response data:', response.data.results);
        }
      })
      .catch(error => {
        console.error('Error fetching exporters:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('https://exprosys-backend.onrender.com/api/v1/containers/')
      .then(response => {
        console.log('API response:', response.data);
        if (Array.isArray(response.data)) {
          setContainer_numbers(response.data.map(container => container.container_id));
        } else {
          console.error('Unexpected response data:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching container number:', error);
      });
  }, []);


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
    invoice_date: '',
    export_handling_fees: '',
    storage_charges: '',
    haulage: '',
    invoice_number: '',
    total_amount_due: '',
    services_type: '',
    discounts_or_adjustments: '',
    rated_upto_date: '',
    exporter: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/post-export-invoice/', formData);
      if (response.status === 200 || response.status === 201) {
        console.log(response);
        toast.success('Export Invoice Posted Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData(initialFormData);
      } else {
        toast.error('Failed to post the invoice.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      
      console.log(error.response);
      toast.error('Failed to post the invoice. Error: ' + error.message, {
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

  const handleCustomerChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCustomer(selectedValue);
    setFormData((prevData) => ({
      ...prevData,
      customer: selectedValue,
    }));
  };

  return (
    <div className='m-10'>
      <div className="head">
        <h3 className='text-2xl font-bold text-[#075b86]'>Post Export Invoice</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <h3 className='mt-10 mb-2 font-bold'>Invoice Details</h3>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="customer" className='text-base font-semibold'>Select Export ID:</label>
              <select 
                name="exporter" 
                id="exporter" 
                className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]'
                value={formData.exporter}
                onChange={handleChange}
                required
              >
                <option value="" className='text-[#0000002a]'>Select Exporter ID</option>
                {exporterIds.map((exporterId, index) => (
                  <option key={index} value={exporterId}>{exporterId}</option>
                ))}
              </select>

            </div>

            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="container_number" className='text-base font-semibold'>Container Number:</label>
              <select required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="container_number" name="container_number" onChange={handleChange} value={formData.container_number}>
                <option value="">Select conatiner number</option>
                {container_numbers.map((container, index) => (
                  <option key={index} value={container}>{container}</option>
                ))}
              </select>
            </div>
            
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="invoice_date" className='text-base font-semibold'>Invoice Date:</label>
              <input required type="date" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="invoice_date" name="invoice_date" onChange={handleChange} value={formData.invoice_date} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="invoice_number" className='text-base font-semibold'>Invoice Number:</label>
              <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="invoice_number" name="invoice_number" placeholder='Enter invoice number' onChange={handleChange} value={formData.invoice_number} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="total_amount_due" className='text-base font-semibold'>Total Amount Due:</label>
              <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="total_amount_due" name="total_amount_due" placeholder='Enter total amount due' onChange={handleChange} value={formData.total_amount_due} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="services_type" className='text-base font-semibold'>Service Type:</label>
              <input required type='text' name="services_type" id="services_type" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' onChange={handleChange} value={formData.services_type} />
            </div>
          </div>
          
          <h3 className='mt-10 mb-2 font-bold'>Service Details</h3>

          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="export_handling_fees" className='text-base font-semibold'>Export Handling Fees:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="export_handling_fees" name="export_handling_fees" placeholder='Enter Export Handling Fees' onChange={handleChange} value={formData.export_handling_fees} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="storage_charges" className='text-base font-semibold'>Storage Charge:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="storage_charges" name="storage_charges" placeholder='Enter Storage Charge' onChange={handleChange} value={formData.storage_charges} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="haulage" className='text-base font-semibold'>Haulage (Truck):</label>
              <input required type="number" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="haulage" name="haulage" placeholder='Enter Haulage' onChange={handleChange} value={formData.haulage} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="discounts_or_adjustments" className='text-base font-semibold'>Discounts or Adjustments:</label>
              <input required type="text" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="discounts_or_adjustments" name="discounts_or_adjustments" placeholder='Enter Discounts or Adjustments' onChange={handleChange} value={formData.discounts_or_adjustments} />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label htmlFor="rated_upto_date" className='text-base font-semibold'>Rated upto Date:</label>
              <input required type="date" className='rounded-lg p-2 border border-gray-500 outline-none w-[400px]' id="rated_upto_date" name="rated_upto_date" onChange={handleChange} value={formData.rated_upto_date} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 text-lg my-10">
          <div>
            <small>
              <input type="file" id="attachment" className='hidden' onChange={handleFileChange} />
              {!isFileUploaded ? (
                <label htmlFor="attachment" className='text-blue-500 cursor-pointer'>
                  Upload Customer Invoice
                  <FontAwesomeIcon icon={faUpload} className='mx-2'/>
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
          <button type="submit" className='bg-[#4e9352] hover:bg-[#4e93518c] rounded-lg text-white px-10 py-2'>Post Export Invoice</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default AddInvoice;
