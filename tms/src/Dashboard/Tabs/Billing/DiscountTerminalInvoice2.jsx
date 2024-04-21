import { motion, AnimatePresence, spring } from 'framer-motion';
import React, { useState, useEffect,useRef } from 'react'
import Select from 'react-select';
import errIcon from '../../../assets/error.png'
import DiscountPrintTemplate from './DiscountPrintTemplate';

const DiscountTerminalInvoice2 = () => {
    const [confirmMessage, setConfirmMessage] = useState(false) 
    const [showPrintTemplate, setShowPrintTemplate] = useState(false)
    const formRef = useRef(null);
    
    const invoiceNumber = [
        { value: '', label: 'Select Invoice Number', isDisabled: true },
        { value: '12345', label: '12345' },
        { value: '23456', label: '23456' },
    ];

    const charge = [
        { value: '', label: 'Select Charge', isDisabled: true },
        { value: 'Terminal Handlingn Charge', label: 'Terminal Handlingn Charge' },
        { value: 'Custom Examination Charge', label: 'Custom Examination Charge' },
        { value: 'Documentation Charge', label: 'Documentation Charge' },
        { value: 'Storage Charge', label: 'Storage Charge' },
        { value: 'All Invoice Charge', label: 'All Invoice Charge' },
    ]

    const type = [
        { value: '', label: 'Select Discount Type', isDisabled: true },
        { value: 'Discount by Value', label: 'Discount by Value' },
        { value: 'Discount by Percentage', label: 'Discount by Percentage' },
    ];

    const percentage = [
        { value: '', label: 'Input Discount Value/Percent', isDisabled: true },
        { value: '5%', label: '5%' },
        { value: '10%', label: '10%' },
        { value: '15%', label: '15%' },
        { value: '20%', label: '20%' },
        { value: '30%', label: '30%' },
        { value: '40%', label: '40%' },
    ];

    const storage = [
        {title: 'Original THC Charge', amount: 'NGN 160,000.00'},
        {title: 'Original CUS Charge', amount: 'NGN 68,400.00'},
        {title: 'Original DOC Charge', amount: 'NGN 12,000.00'},
        {title: 'Original STO Charge', amount: 'NGN 160,000.00'},
    ]

    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 800
      }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setConfirmMessage(false); 
        }
    }; 

  return (
    <>
        {!showPrintTemplate ? (
            <div>
            <form ref={formRef}>
                <div className="m-10">
                    <h3 className='font-bold text-2xl'>
                        Discount Terminal Invoice
                    </h3>
    
                    <div className="grid grid-cols-2 my-20 gap-16">
                        <div className="flex flex-col gap-4">
                        
                        <div className="flex justify-between items-center my-5 ">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Select Invoice Number: </label>
                            <Select
                            options={invoiceNumber}
                            isSearchable
                            className='w-[250px]'
                            required
                            />
                        </div>  
                        <div className="flex justify-between items-center my-5 ">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Select Charge: </label>
                            <Select
                            options={charge}
                            isSearchable
                            className='w-[250px]'
                            required
                            />
                        </div>
    
                        <div className="flex justify-between items-center my-5 ">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Select Discount Type:</label>
                            <Select
                            options={type}
                            isSearchable
                            className='w-[250px]'
                            required
                            />
                        </div>
                        <div className="flex justify-between items-center my-5 ">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Input Discount Value/Percent:</label>
                            <Select
                            options={percentage}
                            isSearchable
                            className='w-[250px]'
                            required
                            />
                        </div>
                            
                        </div>
                        <div className="flex flex-col gap-3">
                            {storage.map((item, index) => (
                                <div key={index} className="flex gap-20 items-center">
                                    <p className="font-semibold">{item.title}</p>
                                    <p>{item.amount}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    
                <div className="flex items-center justify-center gap-2 mb-20">
                    <button className='px-7 py-2 rounded-md bg-blue-800 text-white mt-3'type='submit' onClick={() => {setConfirmMessage(true)}}>Save and Print Invoice</button>
                    <button className='px-7 py-2 rounded-md bg-gray-500 text-white mt-3' type='reset'>Reset</button>
                </div>
    
            </form>
            {confirmMessage && 
                <AnimatePresence>
                <motion.div
                transition={spring} 
                animate={{ scale: 1.1 }}
                className='fixed w-full flex justify-center items-center h-[100%] bg-black bg-opacity-50 top-0 right-0'>
                    <div className="p-10 rounded-md flex justify-center items-center gap-2 flex-col z-10 bg-white">
                        <img src={errIcon} className='mb-5' alt="" />
                        <p>Discount Terminal Invoice Amount Rate From: 19/03/2024 - to - 23/03/2024</p>
                        <p>Total Storage Days = 5days</p>
                        <p>Total Invoice Cost = (NGN 300,000.00)</p>
                        <button className='px-3 py-1 rounded-md bg-blue-800 text-white mt-3' onClick={() => setConfirmMessage(false) || setShowPrintTemplate(true)}>Ok</button>
                    </div>
                </motion.div>
            </AnimatePresence>}
        </div>
        ) : (
            <DiscountPrintTemplate/>
        )}
    </>
  )
}

export default DiscountTerminalInvoice2