import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import GateAccessControlList from './GateAccessControlList';

const GateAccessControl = () => { 
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [showList, setShowList] = useState(false);
    const [conlist, setConlist] = useState([]);
    const [formData, setFormData] = useState({
        access_date: '',
        access_time: '',
        gate_entry_point: '',
        security_officer_name: '',
        security_officer_id: '',
        truck_number: '',
        id_verification: '',
        access_type: '',
        authorized_exit_time: '',
        authorized_areas: '',
        signature_confirmation: '',
        purpose_of_visit: '',
        destination: '',
        checkpoint_vehicle: '',
        inspection_result: '',
        access_granted: '',
        access_denied_reason: '',
        attachment: null,
    });

    const access_type = [
        { value: '', label: "(driver's license, employee ID)", isDisabled: true },
        { value: "Driver's License", label: "Driver's License" },
        { value: 'Employee ID', label: 'Employee ID' },
    ];
    const authType = [
        { value: '', label: "driver's license, employee ID", isDisabled: true },
        { value: 'Entry', label: 'Entry' }, 
        { value: 'Exit', label: 'Exit' }
    ];
    const vehicle = [
        { value: '', label: "e.g., vehicle inspection", isDisabled: true },
        { value: 'SUV', label: 'SUV' }, 
        { value: 'Truck', label: 'Truck' }
    ];
    const inre = [
        { value: 'Good', label: 'Good' }, 
        { value: 'Bad', label: 'Bad' }
    ];
    const yn = [
        { value: 'Yes', label: 'Yes' }, 
        { value: 'No', label: 'No' }
    ];

    useEffect(() => {
        const fetchConlist = async () => {
            try {
                const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/gate-access-controls/');
                const options = response.data.map(item => ({ value: item.id, label: item.name }));
                setConlist(options);
            } catch (error) {
                toast.error('Failed to fetch container list. Please try again.');
            }
        };

        fetchConlist();
    }, []);

    const handleShowList = () => {
        setShowList(true);
    };

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setIsFileUploaded(true);
            setFormData({ ...formData, attachment: event.target.files[0] });
        } else {
            setIsFileUploaded(false);
            setFormData({ ...formData, attachment: null });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (selectedOption, action) => {
        const { name } = action;
        setFormData({ ...formData, [name]: selectedOption.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/gate-access-controls/', formData);
            if (response.status === 200 || response.status === 201) {
                toast.success('Form submitted successfully!');
            } else {
                toast.error('Failed to submit form. Please try again.');
            }
        } catch (error) {
            toast.error('Failed to submit form. Please try again.');
        }
    };

    return (
        <div className="">
          {!showList ? (
            <div className='m-10 poppins'>
            <h2 className='font-bold text-2xl'>Gate Access Control</h2>
            <form onSubmit={handleSubmit} >
              <div className="grid grid-cols-2 gap-12">
                <div className="mt-10">
                  <div>
                    <div className="my-10">
                      <h2 className='text-lg font-bold'>Access Control Details</h2>
                      <div className="flex justify-between items-center mt-7">
                          <label htmlFor="containerWidth" className="block font-semibold text-base">Date and Time of Access: </label>
                          <div className="w-[260px]">
                            <input type='date' name='access_date' value={formData.access_date} onChange={handleInputChange} className='border-gray-400 border-[1px] rounded-lg p-1' />
                            <input type='time' name='access_time' value={formData.access_time} onChange={handleInputChange} className='border-gray-400 border-[1px] rounded-lg p-1' />
                          </div>
                      </div>
                      <div className="flex justify-between items-center my-1">
                          <label htmlFor="gate_entry_point" className="block font-semibold text-base">Gate/Entry Point: </label>
                          <input type='text' name='gate_entry_point' value={formData.gate_entry_point} onChange={handleInputChange} className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                      </div>
                      <div className="flex justify-between items-center my-1">
                          <label htmlFor="security_officer_name" className="block font-semibold text-base">Security Officer Name: </label>
                          <input type='text' name='security_officer_name' value={formData.security_officer_name} onChange={handleInputChange} className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                      </div>
                      <div className="flex justify-between items-center my-1">
                          <label htmlFor="security_officer_id" className="block font-semibold text-base">Security Officer ID/Number: </label>
                          <input type='text' name='security_officer_id' value={formData.security_officer_id} onChange={handleInputChange} className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                      </div>
                    </div>
        
                    <div className="my-10">
                      <h2 className='text-lg font-bold'>Truck Information:</h2>
                      <div className="flex justify-between items-center mt-7">
                          <label htmlFor="truck_number" className="block font-semibold text-base">Truck Number/ID: </label>
                          <Select
                            options={conlist}
                            isSearchable
                            className='w-[260px]'
                            name='truck_number'
                            value={conlist.find(option => option.value === formData.truck_number)}
                            onChange={handleSelectChange}
                          />
                      </div>
                    </div>
        
                    <div className="my-10">
                      <h2 className='text-lg font-bold'>Company/Organization:</h2>
                      <div className="flex justify-between mt-7">
                        <label htmlFor="id_verification" className="block font-semibold text-base">ID Verification: </label>
                        <input type='text' name='id_verification' value={formData.id_verification} onChange={handleInputChange} className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                      </div>
                    </div>
        
                    <div className="my-10">
                      <h2 className='text-lg font-bold'>Access Permission</h2>
                      <div className="flex justify-between items-center mt-7">
                          <label htmlFor="access_type" className="block font-semibold text-base">Access Type: </label>
                          <Select
                            options={access_type}
                            isSearchable
                            className='w-[260px]'
                            name='access_type'
                            value={access_type.find(option => option.value === formData.access_type)}
                            onChange={handleSelectChange}
                          />
                      </div>
                      <div className="flex justify-between items-center my-1">
                          <label htmlFor="authorized_exit_time" className="block font-semibold text-base">Authorized Entry/Exit Time: </label>
                          <Select
                            options={authType}
                            isSearchable
                            className='w-[260px]'
                            name='authorized_exit_time'
                            value={authType.find(option => option.value === formData.authorized_exit_time)}
                            onChange={handleSelectChange}
                          />
                      </div>
                      <div className="flex justify-between items-center my-1">
                          <label htmlFor="authorized_areas" className="block font-semibold text-base">Authorized Areas/Sections: </label>
                          <input type='text' name='authorized_areas' value={formData.authorized_areas} onChange={handleInputChange} className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                      </div>
                    </div>
        
                    <div className="flex justify-between gap-4 items-center my-7">
                      <label htmlFor="signature_confirmation" className="text-lg font-bold">Signature/Confirmation: </label>
                      <input type='text' name='signature_confirmation' value={formData.signature_confirmation} onChange={handleInputChange} className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' placeholder='Enter security code' />
                    </div>
                  </div>
                </div>
        
                <div className="mt-10">
                  <div>
                    <div className="my-10">
                      <h2 className='text-lg font-bold'>Reason for Access:</h2>
                      <div className="flex justify-between items-center mt-7">
                        <label htmlFor="purpose_of_visit" className="block font-semibold text-base">Purpose of Visit: </label>
                        <input type='text' name='purpose_of_visit' value={formData.purpose_of_visit} onChange={handleInputChange} className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <label htmlFor="destination" className="block font-semibold text-base">Destination: </label>
                        <input type='text' name='destination' value={formData.destination} onChange={handleInputChange} className='border-gray-400 border-[1px] rounded-lg p-1 w-[260px]' />
                      </div>
                    </div>
        
                    <div className="my-10">
                      <h2 className='text-lg font-bold'>Security Checkpoints:</h2>
                      <div className="flex justify-between items-center mt-7">
                        <label htmlFor="checkpoint_vehicle" className="block font-semibold text-base">Security Checkpoint 1: </label>
                        <Select
                            options={vehicle}
                            isSearchable
                            className='w-[260px]'
                            name='checkpoint_vehicle'
                            value={vehicle.find(option => option.value === formData.checkpoint_vehicle)}
                            onChange={handleSelectChange}
                        />
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <label htmlFor="inspection_result" className="block font-semibold text-base">Inspection Result: </label>
                        <Select
                            options={inre}
                            isSearchable
                            className='w-[260px]'
                            name='inspection_result'
                            value={inre.find(option => option.value === formData.inspection_result)}
                            onChange={handleSelectChange}
                        />
                      </div>
                      
                      <div className="my-10">
                        <h2 className='text-lg font-bold'>Access Control Status:</h2>
                        <div className="flex justify-between items-center mt-2">
                          <label htmlFor="access_granted" className="block font-semibold text-base">Access Granted:</label>
                          <Select
                              options={yn}
                              isSearchable
                              className='w-[260px]'
                              name='access_granted'
                              value={yn.find(option => option.value === formData.access_granted)}
                              onChange={handleSelectChange}
                          />
                        </div>
                        <div className="flex justify-between my-7">
                            <div className="">
                                <label htmlFor="access_denied_reason" className="block font-semibold text-base">Access Denied Reason (if applicable): </label>
                                <small>
                                  <input type="file" name="attachment" id="attachment" className='hidden' onChange={handleFileChange} />
                                  {!isFileUploaded ? (
                                    <label htmlFor="attachment" className='text-blue-500 cursor-pointer'>Attachments(e.g., photos, documents)</label>
                                  ) : (
                                    <label className='text-green-600'>File uploaded successfully!</label>
                                  )}
                                </small>
                            </div>
                            <textarea className='border-gray-400 border-[1px] rounded-lg p-4 w-[65%]' name="access_denied_reason" id="access_denied_reason" value={formData.access_denied_reason} onChange={handleInputChange} rows="3"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons flex items-center gap-3 mx-[200px] mt-10">
                <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' type='submit'>Submit</button>
                <button className='text-white bg-[#828282] rounded-md py-1 px-10' type='reset'>Reset</button>
                <p className='text-white bg-[#4e9352] rounded-md py-1 px-10 cursor-pointer' onClick={handleShowList}>View Access Report</p>
              </div>
            </form>
            <ToastContainer />
          </div>
          ) : (
            <GateAccessControlList />
          )}
        </div>
      );
};

export default GateAccessControl;
