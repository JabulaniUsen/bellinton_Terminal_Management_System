import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InboundGateReport from './InboundGateReport';

const InboundGate = () => {
  const [showReport, setShowReport] = useState(false);
  const [initialData, setInitialData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    container_id: '',
    eto_gate_pass_no: '',
    gate_in_date: '',
    license_plate_number: '',
    driver_name: '',
    driver_number: '',
    company_organization: '',
    hazardous_materials_check: false,
    security_clearance_check: false,
    temperature_sensitive_cargo: false,
  });

  useEffect(() => {
    axios.get('https://exprosys-backend.onrender.com/api/v1/containers/')
      .then(response => {
        if (Array.isArray(response.data)) {
          setInitialData(response.data);
        } else {
          console.error("Unexpected response data format:", response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData({
      ...formData,
      [name]: selectedOption.value,
    });
  };

  const handleSearchTermChange = (selectedOption) => {
    setSearchTerm(selectedOption.value);
    setFormData({
      ...formData,
      container_id: selectedOption.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://exprosys-backend.onrender.com/api/v1/inbound-pre-gate-entries/', formData);
      toast.success('Inbound Gate Entry successfully!');
      clearForm();
    } catch (error) {
      toast.error('Error submitting form');
      console.error('Error submitting form:', error);
    }
  };

  const clearForm = () => {
    setFormData({
      container_id: '',
      eto_gate_pass_no: '',
      gate_in_date: '',
      license_plate_number: '',
      driver_name: '',
      driver_number: '',
      company_organization: '',
      hazardous_materials_check: false,
      security_clearance_check: false,
      temperature_sensitive_cargo: false,
    });
    setSearchTerm('');
  };

  const handleShowReport = () => {
    setShowReport(true);
  };

  return (
    <div className="">
      {!showReport ? (
        <div className='m-10 poppins'>
          <h2 className='font-bold text-2xl'>Inbound Gate Entry</h2>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="my-10">
                <h2 className='text-lg font-bold'>Container Information:</h2>
                <div className="flex justify-between items-center w-[70%] mt-5">
                  <label htmlFor="container_id" className="block font-semibold text-base">Container ID: </label>
                  <div className="">
                    <Select
                      options={initialData.map((item) => ({ value: item.container_id, label: item.container_id }))}
                      value={searchTerm ? { value: searchTerm, label: searchTerm } : null}
                      onChange={handleSearchTermChange}
                      isSearchable
                      placeholder="Select Container ID"
                      className='outline-none p-2 w-[400px] rounded '
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="eto_gate_pass_no" className="block font-semibold text-base">ETO Gate Pass No: </label>
                  <input 
                    type="number"
                    name="eto_gate_pass_no"
                    value={formData.eto_gate_pass_no}
                    onChange={handleInputChange}
                    className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]'
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between items-center w-[70%] my-7">
                <label htmlFor="gate_in_date" className="text-lg font-bold">Gate-in Date: </label>
                <input
                  type='date'
                  name="gate_in_date"
                  className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]'
                  value={formData.gate_in_date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="my-10">
                <h2 className='text-lg font-bold'>Truck Information:</h2>
                <div className="flex justify-between w-[70%] mt-7">
                  <label htmlFor="license_plate_number" className="block font-semibold text-base">License Plate Number: </label>
                  <input
                    type='text'
                    name="license_plate_number"
                    className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]'
                    value={formData.license_plate_number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="driver_name" className="block font-semibold text-base">Driver's Name: </label>
                  <input
                    type='text'
                    name="driver_name"
                    className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]'
                    value={formData.driver_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="driver_number" className="block font-semibold text-base">Driver's Contact Number:</label>
                  <input
                    type='number'
                    name="driver_number"
                    className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]'
                    value={formData.driver_number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex justify-between items-center w-[70%] my-2">
                  <label htmlFor="company_organization" className="block font-semibold text-base">Company/Organization:</label>
                  <input
                    type='text'
                    name="company_organization"
                    className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]'
                    value={formData.company_organization}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="my-10">
                <h2 className='text-lg font-bold'>Security Check:</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <input
                      type='checkbox'
                      name="hazardous_materials_check"
                      checked={formData.hazardous_materials_check}
                      onChange={handleInputChange}
                      className='w-[20px] h-[20px] mr-2'
                    />
                    <label htmlFor="hazardous_materials_check" className="block font-semibold text-base">Hazardous Materials Check</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type='checkbox'
                      name="security_clearance_check"
                      checked={formData.security_clearance_check}
                      onChange={handleInputChange}
                      className='w-[20px] h-[20px] mr-2'
                    />
                    <label htmlFor="security_clearance_check" className="block font-semibold text-base">Security Clearance Check</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type='checkbox'
                      name="temperature_sensitive_cargo"
                      checked={formData.temperature_sensitive_cargo}
                      onChange={handleInputChange}
                      className='w-[20px] h-[20px] mr-2'
                    />
                    <label htmlFor="temperature_sensitive_cargo" className="block font-semibold text-base">Temperature-sensitive Cargo</label>
                  </div>
                </div>
              </div>

              <div className="buttons flex w-[70%] gap-3 mx-[200px] mt-10">
                <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' type='submit'>Submit</button>
                <button className='text-white bg-[#828282] rounded-md py-1 px-10' type='reset' onClick={clearForm}>Reset</button>
                <p className='text-white bg-[#4e9352] rounded-md py-1 px-10 cursor-pointer' onClick={handleShowReport}>View Entry Details</p>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <InboundGateReport />
      )}
    </div>
  );
};

export default InboundGate;
