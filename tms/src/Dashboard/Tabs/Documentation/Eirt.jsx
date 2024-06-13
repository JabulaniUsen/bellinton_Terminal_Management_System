import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../assets/leftPics.svg';
import qr from '../../../assets/qr.svg';
import conLabel from '../../../assets/containerLabel.svg';

const Eirt = () => {
    const [deliveryData, setDeliveryData] = useState(null);
    const componentRef = useRef();

    useEffect(() => {
        const fetchDeliveryData = async () => {
            try {
                const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/export-deliveries/');
                setDeliveryData(response.data);
            } catch (error) {
                toast.error(`Error fetching delivery data: ${error.response ? error.response.data.message : error.message}`);
            }
        };

        fetchDeliveryData();
    }, []);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    if (!deliveryData) {
        return <div className='text-xl font-semibold flex justify-center items-center'>Loading...</div>;
    }

    return (
        <div className="">
            <ToastContainer />
            <div className='flex items-center flex-col justify-center mt-5'>
                <div className="mainForm p-[20px] mx-10 relative" ref={componentRef}>
                    <div className="flex items-center gap-20 mb-7">
                        <img src={logo} alt="" className=""/>
                        <h1 className='font-bold text-3xl text-[#20007f] underline'>EXPORT DELIVERY ORDER</h1>
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div className='p-5'>
                            <h2 className='text-lg font-bold mb-2'>CONSIGNEE INFORMATION:</h2>
                            <ul className='list-disc ml-6'>
                                <li className='font-semibold'>Consignee Name: <span className='font-thin'>{deliveryData.consignee_name || 'N/A'}</span></li>
                                <li className='font-semibold'>Consignee Address: <span className='font-thin'>{deliveryData.consignee_address || 'N/A'}</span></li>
                                <li className='font-semibold'>Contact Person: <span className='font-thin'>{deliveryData.contact_person || 'N/A'}</span></li>
                            </ul>
                        </div>

                        <div className='p-5 border border-black'>
                            <h2 className='text-lg font-bold mb-2'>ORDER INFORMATION:</h2>
                            <ul className='list-disc ml-6'>
                                <li className='font-semibold'>Order Number: <span className='font-thin'>{deliveryData.order_number || 'N/A'}</span></li>
                                <li className='font-semibold'>Date of Issue: <span className='font-thin'>{deliveryData.date_of_issue || 'N/A'}</span></li>
                                <li className='font-semibold'>Validity Date: <span className='font-thin'>{deliveryData.validity_date || 'N/A'}</span></li>
                            </ul>
                        </div>

                        <div className='p-5'>
                            <h2 className='text-lg font-bold mb-2'>VESSEL INFORMATION:</h2>
                            <ul className='list-disc ml-6'>
                                <li className='font-semibold'>Vessel Name: <span className='font-thin'>{deliveryData.vessel_name || 'N/A'}</span></li>
                                <li className='font-semibold'>Shipping Line: <span className='font-thin'>{deliveryData.shipping_line || 'N/A'}</span></li>
                                <li className='font-semibold'>Port of Loading: <span className='font-thin'>{deliveryData.port_of_loading || 'N/A'}</span></li>
                                <li className='font-semibold'>Estimated Arrival Date: <span className='font-thin'>{deliveryData.estimated_arrival_date || 'N/A'}</span></li>
                                <li className='font-semibold'>Estimated Departure Date: <span className='font-thin'>{deliveryData.estimated_departure_date || 'N/A'}</span></li>
                            </ul>
                        </div>

                        <div className='p-5'>
                            <div className="mb-3">
                                <h2 className='text-lg font-bold mb-2'>BOOKING INFORMATION:</h2>
                                <ul className='list-disc ml-6'>
                                    <li className='font-semibold'>Booking No: <span className='font-thin'>{deliveryData.booking_number || 'N/A'}</span></li>
                                    <li className='font-semibold'>Date of Issuance: <span className='font-thin'>{deliveryData.date_of_issuance || 'N/A'}</span></li>
                                </ul>
                            </div>
                            <div className="">
                                <h2 className='text-lg font-bold mb-2'>CONTAINER LIST INFORMATION:</h2>
                                <ul className='list-disc ml-6'>
                                    {(deliveryData.container_list || []).map((container, index) => (
                                        <li key={index} className='font-thin'>{container}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='p-5'>
                            <h2 className='text-lg font-bold mb-2'>CARGO DETAILS:</h2>
                            <ul className='list-disc ml-6'>
                                <li className='font-semibold'>Weightbridge: <span className='font-thin'>{deliveryData.weightbridge || 'N/A'}</span></li>
                                <li className='font-semibold'>CBM/Weight: <span className='font-thin'>{deliveryData.cbm_weight || 'N/A'}</span></li>
                                <li className='font-semibold'>Truck Driver: <span className='font-thin'>{deliveryData.truck_driver || 'N/A'}</span></li>
                                <li className='font-semibold'>Truck ID: <span className='font-thin'>{deliveryData.truck_id || 'N/A'}</span></li>
                                <li className='font-semibold'>Delivery Date: <span className='font-thin'>{deliveryData.delivery_date || 'N/A'}</span></li>
                            </ul>
                        </div>

                        <div className='p-5'>
                            <h2 className='text-lg font-bold mb-2'>ADDITIONAL INFORMATION:</h2>
                            <ul className='list-disc ml-6'>
                                <li className='font-semibold'>Please ensure proper handling of the cargo to avoid damages during transit.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="font-bold my-7">
                        <h2 className='text-lg'>DECLARATION:</h2>
                        <p>
                            I, the undersigned, certify that the above-described Export 
                            Delivery Order accurately reflects the details of the cargo 
                            to be delivered from the specified terminal to the designated 
                            consignee.
                        </p>
                    </div>

                    <p className='text-3xl font-bold text-center py-4'>THIS TDO IS VALID UP TO: <span>{deliveryData.validity_date || 'N/A'}</span></p>

                    <div className="flex flex-col items-end mt-5">
                        <p>_____________________________</p>
                        <p className='text-sm'>Checked by: Terminal Manager</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className='px-7 py-2 rounded-md bg-[#4e9352] text-white my-20' onClick={handlePrint}>Print</button>
                </div>
            </div>
        </div>
    );
}

export default Eirt;
