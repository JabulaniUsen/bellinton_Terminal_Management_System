import { motion, AnimatePresence, spring } from 'framer-motion';
import React, { useState, useEffect,useRef } from 'react'
import Select from 'react-select';
import qr from '../../../assets/qr.png'
import errIcon from '../../../assets/error.png'
import InvoicePrintTemplate from './InvoicePrintTemplate';

const AdditionalTerminalInvoice2 = () => {
    const [confirmMessage, setConfirmMessage] = useState(false) 
    const [showPrintTemplate, setShowPrintTemplate] = useState(false)
    const inputRef = useRef(null)
    
    const cargoBl = [
        { value: '', label: 'Select Cargo/BL', isDisabled: true },
        { value: '12345', label: '12345' },
        { value: '23456', label: '23456' },
    ];

    const paidInv = [
        {issuedDate: '01/03/2024', invNo: 'CFCINV-00001', ratedUpTo: '18/07/2024', inAmount: 'NGN 720,350.00'},  //
    ]

    const storage = [
        {title: '(0-5days) Charge (40ft)', amount: 'NGN 0.00'},
        {title: '(6-10days) Charge (40ft)', amount: 'NGN 8,400.00'},
        {title: '(11-15days) Charge (40ft)', amount: 'NGN 42,000.00'},
        {title: '(16days above) Charge (40ft)', amount: 'NGN 60,000.00'},
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
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setSuggestions([]);
        }
    };
  return (
    <>
        {!showPrintTemplate ? (
            <div>
            <form>
                <div className="m-10">
                    <h3 className='font-bold text-2xl'>
                        Additional Terminal Invoice
                    </h3>
    
                    <div className="flex justify-between items-center my-5 w-[60%]">
                        <label htmlFor="containerWidth" className="block font-semibold text-base">Select Cargo/BL or Invoice Number: </label>
                            <Select
                            options={cargoBl}
                            isSearchable
                            className='w-[250px]'
                            required
                            />
                    </div>
    
                    <div className="paidInvoice">
                        <div className="pb-4 ">
                            <div className="pb-6 border-b-2 font-semibold border-gray-400">
                                <h4 className='text-lg text-gray-400'>Paid Invoice</h4>
                            </div>
                            <div className="titles flex pt-3 font-semibold text-gray-400 justify-between items-center">
                                <p>ISSUED DATE</p>
                                <p>INVOICE NUMBER</p>
                                <p>RATED UP TO</p>
                                <p>INVOICE AMOUNT</p>
                            </div>
                        </div>
                        {paidInv.map((item, index) => (
                            <div key={index} className="pt-4 flex justify-between items-center">
                            <p>{item.issuedDate}</p>
                            <p>{item.invNo}</p>
                            <p>{item.ratedUpTo}</p>
                            <p>{item.inAmount}</p>
                        </div>
                        ))}
                    </div>
    
                    <div className="unpaidInvoice mt-20">
                        <div className="pb-4 ">
                            <div className="pb-6 border-b-2 border-gray-400">
                                <h4 className='text-lg text-red-400 font-semibold'>Unpaid Invoice</h4>
                            </div>
                            <div className="titles flex pt-3 text-red-400 font-semibold justify-between items-center">
                                <p>ISSUED DATE</p>
                                <p>INVOICE NUMBER</p>
                                <p>RATED UP TO</p>
                                <p>INVOICE AMOUNT</p>
                            </div>
                        </div>
                        {paidInv.map((item, index) => (
                            <div key={index} className="pt-4 flex justify-between items-center">
                            <p>{item.issuedDate}</p>
                            <p>{item.invNo}</p>
                            <p>{item.ratedUpTo}</p>
                            <p>{item.inAmount}</p>
                        </div>
                        ))}
                    </div>
    
                    <div className="grid grid-cols-2 my-20 gap-16">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <p className='font-semibold'> Proceed to Raise Additional Invoice </p>
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
    
                            <div className="flex justify-between items-center">
                                <label htmlFor="containerWidth" className="block font-semibold text-base">Select Additional Charge: </label>
                                <input type='text' value='Storage' className='border-gray-400 border-[1px] rounded-lg p-2 w-[250px]' required id="ratedUpToDate" name="invoiceDate" />
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="containerWidth" className="block font-semibold text-base">New Rated Up to Date: </label>
                                <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[250px]' required id="ratedUpToDate" name="invoiceDate" />
                            </div>
    
                            <div className="flex justify-between items-center ">
                                <label htmlFor="containerWidth" className="block font-semibold text-base">Invoice Remarks: </label>
                                <input type='text' className='border-gray-400 border-[1px] rounded-lg p-2 w-[250px]' required id="ratedUpToDate" name="invoiceDate" />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className='font-semibold'> Proceed Invoice Now</p>
                                <div className="flex items-center gap-10">
                                    <div className="flex items-center gap-2">
                                        <input type="radio" name="choice2" id="Yes" />
                                        <label htmlFor="Yes">Yes</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="radio" name="choice2" id="No" />
                                        <label htmlFor="No">No</label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-3">
                            {storage.map((item, index) => (
                                <div key={index} className="flex justify-between items-center">
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
                        <p>Total Storage Rated From: 19/03/2024 - to - 23/03/2024</p>
                        <p>Total Storage Days = 5days</p>
                        <p>Total Invoice Cost = (NGN 300,000.00)</p>
                        <button className='px-3 py-1 rounded-md bg-blue-800 text-white mt-3' onClick={() => setConfirmMessage(false) || setShowPrintTemplate(true)}>Ok</button>
                    </div>
                </motion.div>
            </AnimatePresence>}
        </div>
        ) : (
            <InvoicePrintTemplate/>
        )}
    </>
  )
}

export default AdditionalTerminalInvoice2