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

    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 800
    };

    const [formData, setFormData] = useState({});

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
            const edoNumber = formData.edo_number; // Assuming edo_number is part of the formData
            const response = await axios.patch(`https://exprosys-backend.onrender.com/api/v1/export-deliveries/${edoNumber}/`, formData);
            if (response.status === 200 || response.status === 201) {
                toast.success('Export Delivery Updated Successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setConfirmMessage(true);
            } else {
                toast.error('Failed to update the export delivery.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            toast.error(`Failed to update the export delivery. Error: ${error.message}`, {
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

                                <div className="my-12">
                                    <div className="grid grid-cols-2 ">

                                        <div className="flex flex-col gap-4">
                                            <div className="flex justify-between flex-col">
                                                <label htmlFor="container_list" className='font-semibold'>Date:</label>
                                                <input 
                                                    type="text"
                                                    className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'  
                                                />
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='damage_status' className="block font-semibold text-base">Bellington Annexes: </label>
                                                <select className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'>
                                                    <option value="Okoko">Okoko</option>    
                                                    <option value="Amuwo">Amuwo</option>    
                                                    <option value="Apapa">Apapa</option>    
                                                </select> 
                                            </div>
                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='contact_number' className="block font-semibold text-base">Validate Truck: </label>
                                                <select name="" id="" className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='contact_number' className="block font-semibold text-base">Validate Booking: </label>
                                                <select name="" id="" className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='cbm_weight' className="block font-semibold text-base">Contact Number: </label>
                                                <input
                                                    type="number"
                                                    name="contact_number"
                                                    className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='shipping_line' className="block font-semibold text-base">Shipping Line: </label>
                                                <input
                                                    type="text"
                                                    name="shipping_line"
                                                    className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='vessel_name' className="block font-semibold text-base">Vessel Name: </label>
                                                <input
                                                    type='text'
                                                    name="vessel_name"
                                                    className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='vessel_departure_date' className="block font-semibold text-base">Vessel Departure Date: </label>
                                                <input
                                                    type="date"
                                                    name="vessel_departure_date"
                                                    className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                        </div>

                                        <div className="flex flex-col gap-4">

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='port_of_loading' className="block font-semibold text-base">Port of Loading: </label>
                                                <select name="" id="" className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'>
                                                    <option value="APMT">APMT</option>
                                                    <option value="TICT">TICT</option>
                                                    <option value="PCHS">PCHS</option>
                                                    <option value="PTML">PTML</option>
                                                    <option value="FIVE">FIVE</option>
                                                    <option value="JOSEPDAM">JOSEPDAM</option>
                                                    <option value="PORTS & TERMINAL">PORTS & TERMINAL</option>
                                                    <option value="ABTL">ABTL</option>
                                                    <option value="ENL">ENL</option>
                                                    <option value="GDL">GDL</option>
                                                    <option value="EKO SUPPORT">EKO SUPPORT</option>
                                                    <option value="NIGERDOCK">NIGERDOCK</option>
                                                    <option value="OTHER">OTHER</option>
                                                </select>
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='truck_to_port' className="block font-semibold text-base">Truck to Port: </label>
                                                <select name="" id="" className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='stuffing' className="block font-semibold text-base">Stuffing: </label>
                                                <select name="" id="" className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='weightbridge' className="block font-semibold text-base">Weightbridge: </label>
                                                <select name="" id="" className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='cbm/weight' className="block font-semibold text-base">CBM/Weight: </label>
                                                <input
                                                    type="number"
                                                    name="cbm_weight"
                                                    className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='container_number' className="block font-semibold text-base">Container Number: </label>
                                                <input
                                                    type="text"
                                                    name="container_number"
                                                    className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="flex justify-between flex-col">
                                                <label htmlFor='truck_driver_details' className="block font-semibold text-base">Truck Driver Details: </label>
                                                <input
                                                    type='text'
                                                    name="truck_driver_details"
                                                    className='w-[300px] rounded-lg p-2 border border-gray-500 outline-none'
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-5 mb-20">
                                    <button
                                        className='px-10 py-3 rounded-md bg-[#4e9352] text-white mt-3'
                                        type='submit'
                                    >
                                        Submit/Print EDO
                                    </button>
                                    <button className='px-10 py-3 rounded-md text-[#4e9352] mt-3' type='reset'>Reset</button>
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
                                <div className="p-10 rounded-lg flex justify-center items-center  flex-col z-10 bg-white">
                                    <p className='font-semibold text-lg'>Equipment Interchange Receipt Processed</p>
                                    <div className="flex ">
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
