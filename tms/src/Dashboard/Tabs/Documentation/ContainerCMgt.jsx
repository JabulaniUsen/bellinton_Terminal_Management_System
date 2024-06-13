import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProcessEquipmentInterchange from './ProcessEquipmentInterchange';

const ContainerCMgt = () => {
    const [viewProcessEqu, setViewProcessEqu] = useState(false);
    const [viewProcessOrder, setViewProcessOrder] = useState(false);
    const [booking_options, setBooking_options] = useState([]);
    const [selected_booking, setSelected_booking] = useState(null);
    const [delivery_date, setDelivery_date] = useState('');
    const [eir_no, setEir_no] = useState('');
    const [container_list, setContainer_list] = useState([]);
    const [container_part, setContainer_part] = useState('');
    const [damage_status, setDamage_status] = useState('');
    const [validation_choice, setValidation_choice] = useState('');
    const formRef = useRef(null);

    useEffect(() => {
        const fetchBookingNumbers = async () => {
            try {
                const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/manage-containers/');
                const options = response.data.map(booking => ({
                    value: booking.booking_number,
                    label: booking.booking_number
                }));
                setBooking_options(options);
            } catch (error) {
                toast.error(`Error fetching booking numbers: ${error.response ? error.response.data.message : error.message}`);
            }
        };

        fetchBookingNumbers();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                booking_number: selected_booking.value,
                delivery_date: delivery_date,
                eir_no: eir_no,
                container_list: container_list.join(', '),
                container_part: container_part,
                damage_status: damage_status,
                validation_choice: validation_choice
            };

            const response = await axios.post('https://exprosys-backend.onrender.com/api/v1/export-deliveries/', payload);
            toast.success(`Export delivery created successfully`);
            setViewProcessEqu(true)
            const bookingResponse = await axios.get('https://exprosys-backend.onrender.com/api/v1/manage-containers/', {
                params: {  }
            });
            const booking_number = bookingResponse.data.booking_number; 
        } catch (error) {
            toast.error(`Error: ${error.response ? error.response.data.message : error.message}`);
            console.log(error);
        }
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setContainer_list((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    return (
        <>
            <ToastContainer />
            {!viewProcessEqu  && !viewProcessOrder ? (
                <div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="m-10">
                            <h3 className='font-bold text-2xl text-[#045985]'>
                                Export Delivery Management
                            </h3>

                            <div className="my-20">
                                <div className="flex flex-col gap-4">
                                    <div className='return flex flex-col gap-3'>
                                        <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                                            <label htmlFor="" className="block font-semibold text-base">Select Booking Number: </label>
                                            <Select
                                                options={booking_options}
                                                isSearchable
                                                className='w-[300px]'
                                                onChange={setSelected_booking}
                                                required
                                            />
                                        </div>
                        
                                        <div className="flex justify-between items-center w-[60%] my-2 gap-2">
                                            <label htmlFor="" className="block font-semibold text-base">Delivery Date: </label>
                                            <input 
                                                type='date' 
                                                className='border-gray-400 border-[1px] rounded p-1 px-2 w-[300px]'
                                                value={delivery_date}
                                                onChange={(e) => setDelivery_date(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="flex justify-between items-center w-[60%] my-1">
                                            <label htmlFor="" className="block font-semibold text-base">EIR NO.: </label>
                                            <input 
                                                type='text' 
                                                className='border-gray-400 border-[1px] rounded p-1 px-2 w-[300px]' 
                                                value={eir_no}
                                                onChange={(e) => setEir_no(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="flex justify-between items-center w-[60%] my-1">
                                            <p className="block font-semibold text-base">Container List: </p>
                                            <div className="flex gap-3">
                                                <div className="flex gap-2 items-center">
                                                    <input 
                                                        type='checkbox' 
                                                        className='border-gray-400 border-[1px] rounded p-1 w-5 h-5' 
                                                        value="MEDU5038886"
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <label htmlFor="">MEDU5038886</label>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <input 
                                                        type='checkbox' 
                                                        className='border-gray-400 border-[1px] rounded p-1 w-5 h-5' 
                                                        value="MEDU5038887"
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <label htmlFor="">MEDU5038887</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center w-[60%] my-1">
                                            <label htmlFor="" className="block font-semibold text-base">Container Part: </label>
                                            <select 
                                                name="" 
                                                id="" 
                                                className='border-gray-400 border-[1px] rounded p-1 px-2 w-[300px]'
                                                value={container_part}
                                                onChange={(e) => setContainer_part(e.target.value)}
                                                required
                                            >
                                                <option value="All over">All over</option>
                                                <option value="Top">Top</option>
                                                <option value="Side">Side</option>
                                            </select>
                                        </div>

                                        <div className="flex justify-between items-center w-[60%] my-1">
                                            <label htmlFor="" className="block font-semibold text-base">Damage Status: </label>
                                            <select 
                                                name="" 
                                                id="" 
                                                className='border-gray-400 border-[1px] rounded p-1 px-2 w-[300px]'
                                                value={damage_status}
                                                onChange={(e) => setDamage_status(e.target.value)}
                                                required
                                            >
                                                <option value="Ok">Ok</option>
                                                <option value="Bent">Bent</option>
                                                <option value="Cut">Cut</option>
                                            </select>
                                        </div>

                                        <div className="flex justify-between items-center w-[60%]">
                                            <p className='font-semibold'>Proceed to Validation:</p>
                                            <div className="flex items-center gap-10">
                                                <div className="flex items-center gap-2">
                                                    <input 
                                                        type="radio" 
                                                        name="choice" 
                                                        id="Yes" 
                                                        value="Yes"
                                                        onChange={(e) => setValidation_choice(e.target.value)}
                                                    />
                                                    <label htmlFor="Yes">Yes</label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input 
                                                        type="radio" 
                                                        name="choice" 
                                                        id="No" 
                                                        value="No"
                                                        onChange={(e) => setValidation_choice(e.target.value)}
                                                    />
                                                    <label htmlFor="No">No</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-20">
                            <button className='px-7 py-2 rounded-md bg-[#4e9352] text-white mt-3' type='submit' >Proceed to Process Doc</button>
                            <button className='px-7 py-2 rounded-md bg-gray-500 text-white mt-3' type='reset'>Reset</button>
                        </div>

                    </form>
                </div>
            ) : (
                <ProcessEquipmentInterchange />
            )}
        </>
    )
}

export default ContainerCMgt;
