import { motion, AnimatePresence, spring } from 'framer-motion';
import React, { useState, useEffect,useRef } from 'react'
import Select from 'react-select';
import errIcon from '../../../assets/error.png'
import PaymentPrintTemplet from './PaymentPrintTemplet';

const PaymentConfirmation2 = () => {
    const [confirmMessage, setConfirmMessage] = useState(false) 
    const [showPrintTemplate, setShowPrintTemplate] = useState(false)
    const formRef = useRef(null);
    
    const invoiceNumber = [
        { value: '', label: 'Select Invoice Number', isDisabled: true },
        { value: '12345', label: '12345' },
        { value: '23456', label: '23456' },
    ];

    const bank = [
        { value: '', label: 'Select bank', isDisabled: true },
        { value: 'ZENITH BANK (2223583723)', label: 'ZENITH BANK (2223583723)' },
        { value: 'ACCESS BANK (0001112323)', label: 'ACCESS BANK (0001112323)' },
    ];

    const storage = [
        {title: 'Terminal Handling Charge (20ft)', amount: 16000000},
        {title: 'Custom Examination Charge (20ft)', amount: 6840000},
        {title: 'Documentation Charge (20ft)', amount: 1200000},
        {title: 'Storage (0-5days) Charge (20ft)', amount: 400000},
        {title: 'Storage (6-10days) Charge (20ft)', amount: 6000000},
        {title: 'Storage (11-15days) Charge (20ft)', amount: 1000000},
        {title: 'Storage (60days above) Charge (20ft)', amount: 3000000},
    ]

    const calculateTotal = () => {
        let totalAmount = 0;
        storage.forEach(item => {
            totalAmount += item.amount;
        });
        return totalAmount
    }

    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US');
    }; 

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
    
                    <div className="grid grid-cols-2 my-20 gap-12">
                        <div className="flex flex-col gap-4">
                        
                        <div className="flex justify-between items-center my-2 gap-2">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Select Invoice Number: </label>
                            <Select
                            options={invoiceNumber}
                            isSearchable
                            className='w-[250px]'
                            required
                            />
                        </div>
    
                        <div className="flex justify-between items-center my-2 gap-2">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Invoice Type: </label>
                            <input 
                                type='text' 
                                className='border-gray-400 border-[1px] rounded p-1 px-2 w-[250px]'
                                readOnly
                                placeholder='Invoice Type'/>
                        </div>

                        <div className="flex justify-between items-center my-1">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Type Amount Paid: </label>
                            <input type='text' className='border-gray-400 border-[1px] rounded p-1 px-2 w-[250px]' placeholder='720,350.00' />
                        </div>

                        <div className="flex justify-between items-center my-2 gap-2">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Select Bank: </label>
                            <Select
                            options={bank}
                            isSearchable
                            className='w-[250px]'
                            required
                            />
                        </div>

                        <div className="flex justify-between my-1">
                            <label htmlFor="containerWidth" className="block font-semibold text-base">Payment Confirmation Remarks: </label>
                            {/* <input type='text' className='border-gray-400 border-[1px] rounded-lg p-1 w-[250px]'/> */}
                            <textarea 
                                name="" 
                                id="" 
                                cols="30" 
                                rows="3"
                                className='border-gray-400 border-[1px] rounded-lg p-1 w-[250px]'></textarea>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className='font-semibold'> Proceed Invoice Now</p>
                            <div className="flex items-center gap-10">
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="choice" id="Yes" />
                                    <label htmlFor="Yes">Yes</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="choice" id="No" />
                                    <label htmlFor="No">No</label>
                                </div>
                            </div>
                        </div>
                            
                        </div>
                        <div className="flex flex-col gap-3">
                            {storage.map((item, index) => (
                                <div key={index} className="">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold">{item.title}</p>
                                        <p>NGN {formatAmount(item.amount)}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-between items-center mt-3">
                                <p className="font-bold text-lg">TOTAL INVOICE AMOUNT:</p>
                                <p className='totalInvoiceAmount font-bold text-lg'>NGN {formatAmount(calculateTotal())}</p>
                            </div>
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
                        <p>Payment Confirmation for Terminal Invoice (CFCINV-00001)</p>
                        <p>Total Paid Amount = NGN {formatAmount(calculateTotal())}</p>
                        <button className='px-3 py-1 rounded-md bg-blue-800 text-white mt-3' onClick={() => setConfirmMessage(false) || setShowPrintTemplate(true)}>Ok</button>
                    </div>
                </motion.div>
            </AnimatePresence>}
        </div>
        ) : (
            <PaymentPrintTemplet/>
        )}
    </>
  )
}

export default PaymentConfirmation2