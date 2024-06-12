import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useRef } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Eirt from './Eirt';

const ProcessEquipmentInterchange = () => {
    const [confirmMessage, setConfirmMessage] = useState(false);
    const [showPrintTemplate, setShowPrintTemplate] = useState(false);
    const formRef = useRef(null);

    const options = [
        { value: '', label: 'Select options', isDisabled: true },
        { value: 'option 1', label: 'option 1' },
        { value: 'option 2', label: 'option 2' },
    ];

    const ExpoOptions = [
        { value: '', label: '-Select- Bent, Cut, etc.', isDisabled: true },
        { value: 'Bent', label: 'Bent' },
        { value: 'Cut', label: 'Cut' },
        { value: 'Bruised', label: 'Bruised' },
        { value: 'Open', label: 'Open' },
    ];

    const damageOptions = [
        { value: '', label: '-Select- (Full or Empty)', isDisabled: true },
        { value: 'Full', label: 'Full' },
        { value: 'Empty', label: 'Empty' },
    ];

    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 800
    };

    const [formData, setFormData] = useState({
        booking_number: '',
        delivery_date: '2024-06-10',
        container_list: '',
        container_part: '',
        damage_status: '',
        bellington_annexes: '',
        validate_truck: true,
        validate_booking: true,
        contact_number: '',
        shipping_line: '',
        vessel_name: '',
        vessel_departure_date: '2024-06-10',
        port_of_loading: '',
        truck_to_port: true,
        stuffing: true,
        weightbridge: true,
        cbm_weight: '',
        truck_driver_name: '',
        truck_id: '',
        delivery_status: '',
        description: '',
        exporter_id: 0,
        agent_id: 0
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSelectChange = (name, selectedOption) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: selectedOption.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/export-deliveries/', formData);
            if (response.status === 200 || response.status === 201) {
                toast.success('Export Delivery Processed Successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setConfirmMessage(true);
            } else {
                toast.error('Failed to process the export delivery.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            toast.error(`Failed to process the export delivery. Error: ${error.message}`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const isFormValid = Object.values(formData).every(value => value !== '');

    return (
        <>
            {!showPrintTemplate ? (
                <>
                    <div>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="m-10">
                                <h3 className='font-bold text-2xl'>
                                    Container Cycle Management
                                </h3>

                                <div className="my-20">
                                    <div className="grid grid-cols-2 gap-10">

                                        <div className="flex flex-col gap-4">
                                            <div className="flex justify-between items-center">
                                                <label htmlFor="container_list" className='font-semibold'>Select Container ID:</label>
                                                <Select
                                                    options={options}
                                                    isSearchable
                                                    className='w-[300px]'
                                                    required
                                                    onChange={(option) => handleSelectChange('container_list', option)}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center my-2 gap-2">
                                                <label htmlFor="container_part" className="block font-semibold text-base">Container Part: </label>
                                                <Select
                                                    options={options}
                                                    isSearchable
                                                    className='w-[300px]'
                                                    required
                                                    onChange={(option) => handleSelectChange('container_part', option)}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center my-2 gap-2">
                                                <label htmlFor="truck_id" className="block font-semibold text-base">Transport ID: </label>
                                                <Select
                                                    options={options}
                                                    isSearchable
                                                    className='w-[300px]'
                                                    required
                                                    onChange={(option) => handleSelectChange('truck_id', option)}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center my-2 gap-2">
                                                <label htmlFor="truck_driver_name" className="block font-semibold text-base">Driver ID: </label>
                                                <Select
                                                    options={options}
                                                    isSearchable
                                                    className='w-[300px]'
                                                    required
                                                    onChange={(option) => handleSelectChange('truck_driver_name', option)}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <div className="flex justify-between items-center my-1">
                                                <label htmlFor="exportType" className="block font-semibold text-base">Export Type: </label>
                                                <Select
                                                    options={ExpoOptions}
                                                    isSearchable
                                                    className='w-[300px]'
                                                    required
                                                    onChange={(option) => handleSelectChange('exportType', option)}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center my-1">
                                                <label htmlFor='damage_status' className="block font-semibold text-base">Damaged Status: </label>
                                                <Select
                                                    options={damageOptions}
                                                    isSearchable
                                                    className='w-[300px]'
                                                    required
                                                    onChange={(option) => handleSelectChange('damage_status', option)}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <label htmlFor='contact_number' className="block font-semibold text-base">Contact Number: </label>
                                                <input
                                                    type="text"
                                                    name="contact_number"
                                                    className='w-[300px]'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <label htmlFor='shipping_line' className="block font-semibold text-base">Shipping Line: </label>
                                                <input
                                                    type="text"
                                                    name="shipping_line"
                                                    className='w-[300px]'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <label htmlFor='vessel_name' className="block font-semibold text-base">Vessel Name: </label>
                                                <input
                                                    type="text"
                                                    name="vessel_name"
                                                    className='w-[300px]'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <label htmlFor='port_of_loading' className="block font-semibold text-base">Port of Loading: </label>
                                                <input
                                                    type="text"
                                                    name="port_of_loading"
                                                    className='w-[300px]'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <label htmlFor='cbm_weight' className="block font-semibold text-base">CBM Weight: </label>
                                                <input
                                                    type="text"
                                                    name="cbm_weight"
                                                    className='w-[300px]'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <label htmlFor='delivery_status' className="block font-semibold text-base">Delivery Status: </label>
                                                <input
                                                    type="text"
                                                    name="delivery_status"
                                                    className='w-[300px]'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <label htmlFor='description' className="block font-semibold text-base">Description: </label>
                                                <textarea
                                                    name="description"
                                                    className='w-[300px]'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <label htmlFor='bellington_annexes' className="block font-semibold text-base">Bellington Annexes: </label>
                                                <input
                                                    type="text"
                                                    name="bellington_annexes"
                                                    className='w-[300px]'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-2 mb-20">
                                    <button
                                        className='px-7 py-2 rounded-md bg-[#4e9352] text-white mt-3'
                                        type='submit'
                                    >
                                        Process Doc
                                    </button>
                                    <button className='px-7 py-2 rounded-md bg-gray-500 text-white mt-3' type='reset'>Reset</button>
                                </div>

                            </div>
                        </form>
                    </div>
                    {confirmMessage &&
                        <AnimatePresence>
                            <motion.div
                                transition={spring}
                                animate={{ scale: 1.1 }}
                                className='fixed w-full flex justify-center items-center h-[100%] bg-black bg-opacity-50 top-0 right-0'>
                                <div className="p-10 rounded-lg flex justify-center items-center gap-2 flex-col z-10 bg-white">
                                    <p className='font-semibold text-lg'>Equipment Interchange Receipt Processed</p>
                                    <div className="flex gap-2">
                                        <button className='px-7 py-2 rounded-md bg-[#4e9352] text-white mt-3' onClick={() => setConfirmMessage(false)}>Ok</button>
                                        <button className='px-5 py-1 rounded-lg bg-black text-white mt-3' onClick={() => setConfirmMessage(false) || setShowPrintTemplate(true)}>Print</button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>}
                </>
            ) : (
                <Eirt />
            )}
        </>
    );
}

export default ProcessEquipmentInterchange;
