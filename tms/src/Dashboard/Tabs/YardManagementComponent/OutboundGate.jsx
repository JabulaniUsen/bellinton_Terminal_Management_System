import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import OutboundGateReport from './OutboundGateReport';

const OutboundGate = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [initialData, setInitialData] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [formData, setFormData] = useState({
    container_id: '',
    truck_number: '',
    driver_name: '',
    driver_contact: '',
    documentation_verification: false,
    cargo_inspection: false,
    driver_verification: false,
    security_code: '',
    destination: '',
    journey_code: '',
    last_payment_amount: '',
    validity_date: '',
    gate_out_officer: '',
    seal_information: '',
    seal_condition: '',
    security_check: '',
    security_check_note: '',
    date_time: '',
  });
  const [containerIdOptions, setContainerIdOptions] = useState([]);

  useEffect(() => {
    axios.get('https://exprosys-backend.onrender.com/api/v1/manage-containers/')
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

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('https://exprosys-backend.onrender.com/api/v1/outbound-gate-exits/', formData)
      .then(response => {
        toast.success('Form submitted successfully!');
        // Clear all form fields after successful submission
        setFormData({
          container_id: '',
          truck_number: '',
          driver_name: '',
          driver_contact: '',
          documentation_verification: false,
          cargo_inspection: false,
          driver_verification: false,
          security_code: '',
          destination: '',
          journey_code: '',
          last_payment_amount: '',
          validity_date: '',
          gate_out_officer: '',
          seal_information: '',
          seal_condition: '',
          security_check: '',
          security_check_note: '',
          date_time: '',
        });
      })
      .catch(error => {
        toast.error(error.response.data.message || 'Error submitting form!');
        console.error('There was an error submitting the form!', error);
      });
  };
  
  const handleSearchTermChange = (selectedOption) => {
    setSearchTerm(selectedOption.value);
    setFormData({
      ...formData,
      container_id: selectedOption.value,
    });
  };

  const handleShowReport = () => {
    setShowReport(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="">
      {!showReport ? (
        <div className='m-10 poppins'>
          <h2 className='font-bold text-2xl'>Outbound Gate Exit</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-12">
              <div className="mt-10">
                <div>
                  <div className="my-10">
                    <h2 className='text-lg font-bold'>Loading Information:</h2>
                    <div className="flex justify-between items-center mt-7">
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
                  </div>

                  <div className="my-10">
                    <h2 className='text-lg font-bold'>Truck Information:</h2>
                    <div className="flex justify-between items-center mt-7">
                      <label htmlFor="truck_number" className="block font-semibold text-base">Truck Number/ID: </label>
                      <input
                        type='text'
                        name='truck_number'
                        value={formData.truck_number}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                        required
                      />
                    </div>
                  </div>

                  <div className="my-10">
                    <h2 className='text-lg font-bold'>Driver Information:</h2>
                    <div className="flex justify-between mt-7">
                      <label htmlFor="driver_name" className="block font-semibold text-base">Driver's Name: </label>
                      <input
                        type='text'
                        name='driver_name'
                        value={formData.driver_name}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                        required
                      />
                    </div>
                    <div className="flex justify-between items-center my-2">
                      <label htmlFor="driver_contact" className="block font-semibold text-base">Driver's Contact Number:</label>
                      <input
                        type='text'
                        name='driver_contact'
                        value={formData.driver_contact}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                        required
                      />
                    </div>
                  </div>

                  <div className="my-10">
                    <h2 className='text-lg font-bold'>Security Check:</h2>
                    <div className="flex justify-between items-center mt-7">
                      <label htmlFor="documentation_verification" className="block font-semibold text-base">Documentation Verification:</label>
                      <input
                        type='checkbox'
                        name='documentation_verification'
                        checked={formData.documentation_verification}
                        onChange={handleInputChange}
                        className='w-[20px] h-[20px]'
                      />
                    </div>
                    <div className="flex justify-between items-center my-4">
                      <label htmlFor="cargo_inspection" className="block font-semibold text-base">Cargo Inspection:</label>
                      <input
                        type='checkbox'
                        name='cargo_inspection'
                        checked={formData.cargo_inspection}
                        onChange={handleInputChange}
                        className='w-[20px] h-[20px]'
                      />
                    </div>
                    <div className="flex justify-between items-center my-4">
                      <label htmlFor="driver_verification" className="block font-semibold text-base">Driver Verification:</label>
                      <input
                        type='checkbox'
                        name='driver_verification'
                        checked={formData.driver_verification}
                        onChange={handleInputChange}
                        className='w-[20px] h-[20px]'
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center my-7">
                    <label htmlFor="security_code" className="text-lg font-bold">Signature/Confirmation: </label>
                    <input
                      type='text'
                      name='security_code'
                      value={formData.security_code}
                      onChange={handleInputChange}
                      className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                      placeholder='Enter security code'
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div>
                  <div className="my-10">
                    <h2 className='text-lg font-bold'>Destination and Delivery:</h2>
                    <div className="flex justify-between items-center mt-7">
                      <label htmlFor="destination" className="block font-semibold text-base">Destination: </label>
                      <input
                        type='text'
                        name='destination'
                        value={formData.destination}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                        required
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label htmlFor="journey_code" className="block font-semibold text-base">Journey Code: </label>
                      <input
                        type='text'
                        name='journey_code'
                        value={formData.journey_code}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                        required
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label htmlFor="last_payment_amount" className="block font-semibold text-base">Last Payment Amount: </label>
                      <input
                        type='number'
                        name='last_payment_amount'
                        value={formData.last_payment_amount}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                        required
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label htmlFor="validity_date" className="block font-semibold text-base">TDO Validity Date: </label>
                      <input
                        type='date'
                        name='validity_date'
                        value={formData.validity_date}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                        required
                      />
                    </div>
                  </div>

                  <div className="my-10">
                    <h2 className='text-lg font-bold'>Gate Out Information:</h2>
                    <div className="flex justify-between items-center mt-7">
                      <label htmlFor="gate_out_officer" className="block font-semibold text-base">Gate Out Operation: </label>
                      <input
                        type='text'
                        name='gate_out_officer'
                        value={formData.gate_out_officer}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                        required
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label htmlFor="seal_information" className="block font-semibold text-base">Seal Information: </label>
                      <input
                        type='text'
                        name='seal_information'
                        value={formData.seal_information}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                        required
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label htmlFor="seal_condition" className="block font-semibold text-base">Seal Condition: </label>
                      <select
                        name='seal_condition'
                        value={formData.seal_condition}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                        required
                      >
                        <option value="">Select Seal Condition</option>
                        <option value="ok">Okay</option>
                        <option value="damaged">Damaged</option>
                      </select>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <label className="block font-semibold text-base">Security Check:</label>
                      <div className="flex items-center border-gray-400 border-[1px] rounded-lg p-1 w-[300px]">
                        <input
                          type="radio"
                          id="trueOption"
                          name="security_check"
                          value="true"
                          checked={formData.security_check === 'true'}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="trueOption" className="ml-1 mr-3">True</label>
                        <input
                          type="radio"
                          id="falseOption"
                          name="security_check"
                          value="false"
                          checked={formData.security_check === 'false'}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="falseOption" className="ml-1">False</label>
                      </div>
                    </div>
                    <div className="flex justify-between my-7">
                      <label htmlFor="security_check_note" className="block font-semibold text-base">Security Check Notes: </label>
                      <textarea
                        name="security_check_note"
                        value={formData.security_check_note}
                        onChange={handleInputChange}
                        className='border-gray-400 border-[1px] rounded-lg p-4 w-[300px]'
                        required
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-between items-center my-7">
                    <label htmlFor="date_time" className="text-lg font-bold">Gate-in Date: </label>
                    <input
                      type='date'
                      name='date_time'
                      value={formData.date_time}
                      onChange={handleInputChange}
                      className='border-gray-400 border-[1px] rounded-lg p-1 w-[300px]'
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons flex gap-3 mx-[200px] mt-10">
              <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' type='submit'>Submit</button>
              <button className='text-white bg-[#828282] rounded-md py-1 px-10' type='reset'>Reset</button>
              <p className='text-white bg-[#4e9352] rounded-md py-1 px-10 cursor-pointer' onClick={handleShowReport}>View Entry Details</p>
            </div>
          </form>
          <ToastContainer />
        </div>
      ) : (
        <OutboundGateReport />
      )}
    </div>
  );
};

export default OutboundGate;
