import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useRef, useEffect} from 'react'
import Select from 'react-select';
import qr from '../../../assets/qr.png'
import errIcon from '../../../assets/error.png'
import { motion, AnimatePresence, spring } from 'framer-motion';
import PrintTemplate from './PrintTemplate';

const TerminalInvoice = () => {
    const [confirmMessage, setConfirmMessage] = useState(false) 
    const [showPrintTemplate, setShowPrintTemplate] = useState(false)

    const customerName = [
        { value: '', label: 'Select Customer Name', isDisabled: true },
        { value: 'Victor Akpan', label: 'Victor Akpan' },
        { value: 'Theo Michael', label: 'Theo Michael' },
    ];
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const data = ["Victor Harrison", "Emmanuel Mike", "Odun Abeyemi"];
    const inputRef = useRef(null)

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

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Filter suggestions based on the input value
        const filteredSuggestions = data.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setSuggestions([]);
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);

    return (
        <div className="">
        {!showPrintTemplate ? (
            <div className='m-10'>
            <h3 className='font-bold text-2xl'>
                Terminal Invoice
            </h3>

            <div className="">
                <form>
                    <div className="flex gap-16">
                        <div className="">
                            <div className="flex justify-between items-center gap-16 my-5">
                                <label htmlFor="containerWidth" className="block font-semibold text-base">Customer Name: </label>
                                <Select
                                    options={customerName}
                                    isSearchable
                                    className='w-[250px]'
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center gap-16 my-5">
                                <label htmlFor="" className='text-[1em] mt-3'>Agent Name & ID:</label>
                                <div ref={inputRef}>
                                    <div className="flex items-center justify-between pr-3 pl-2 py-2 border-gray-400 border-[1px] rounded-lg p-2 w-[250px]">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            className='outline-none'
                                        />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='' />
                                    </div>
                                    <ul className=''>
                                        {suggestions.map((suggestion, index) => (
                                            <li key={index} className='cursor-pointer hover:bg-slate-100 p-2' onClick={() => handleSuggestionClick(suggestion)}>
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-16 my-5">
                                <label htmlFor="ratedUpToDate" className="block font-semibold text-base">Rated Up To Date:</label>
                                <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[250px]' required id="ratedUpToDate" name="invoiceDate" />
                            </div> 
                            <div className="flex justify-between items-center gap-16 my-5">
                                <label className="block font-semibold text-base">Original BL/Telex:</label>
                                <div className="">
                                    <div className="flex items-center gap-10">
                                        <div className="flex items-center gap-4">
                                            <input type="radio" id="OriginalBL" name="blType" checked={selectedOption === 'OriginalBL'} onChange={() => setSelectedOption('OriginalBL')} />
                                            <label htmlFor="OriginalBL">Original BL</label>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <input type="radio" id="Telex" name="blType" checked={selectedOption === 'Telex'} onChange={() => setSelectedOption('Telex')} />
                                            <label htmlFor="Telex">TELEX</label>
                                        </div>
                                    </div>
                                    <small>How was this shipment Released?</small>
                                </div>
                            </div> 
                                

                            <div className="flex justify-between items-center gap-16 mt-5">
                                <label className="block font-semibold text-base">Apply Transire & Transfer Charges:</label>
                                <div className="flex items-center gap-10">
                                    <div className="flex items-center gap-4">
                                        <input type="radio" id="Yes" name="Yes" checked={selectedOption2 === 'No'} onChange={() => setSelectedOption2('No')} />
                                        <label htmlFor="Yes">Yes</label>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <input type="radio" id="No" name="No" checked={selectedOption2 === 'Yes'} onChange={() => setSelectedOption2('Yes')} />
                                        <label htmlFor="No">No</label>
                                    </div>
                                </div>
                            </div>    
                        </div> 

                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between items-center gap-16">
                                <p className='font-semibold'>Terminal Handling Charge (40ft):</p>
                                <span>NGN 160,000.00</span>
                            </div>
                            <div className="flex justify-between items-center gap-16">
                                <p className='font-semibold'>Custom Examination Charge (20ft):</p>
                                <span>NGN 160,000.00</span>
                            </div>
                            <div className="flex justify-between items-center gap-16">
                                <p className='font-semibold'>Documentation Charge (20ft):</p>
                                <span>NGN 160,000.00</span>
                            </div>
                            <div className="flex justify-between items-center gap-16">
                                <p className='font-semibold'>Storage (0-5days) Charge (20ft):</p>
                                <span>NGN 160,000.00</span>
                            </div>
                            <div className="flex justify-between items-center gap-16">
                                <p className='font-semibold'>Storage (6-10days) Charge (20ft):</p>
                                <span>NGN 160,000.00</span>
                            </div>
                            <div className="flex justify-between items-center gap-16">
                                <p className='font-semibold'>Storage (11-15days) Charge (20ft):</p>
                                <span>NGN 160,000.00</span>
                            </div>
                            <div className="flex justify-between items-center gap-16">
                                <p className='font-semibold'>Storage (16days above) Charge (20ft):</p>
                                <span>NGN 160,000.00</span>
                            </div>
                        </div>
                    </div>


                    <div className="invoiceRemark">
                        <div className="flex justify-between items-center gap-16 my-5">
                            <label htmlFor="invoiceNumber" className="block font-semibold w-[190px] ">Add Invoice Remarks:</label>
                            <div>
                                <textarea className='border-gray-400 border-[1px] rounded-lg p-2 w-full' name="" id="" cols="40" rows="1"></textarea>
                                <small>Enter remarks which would appear on the invoice including free days granted.</small>
                            </div>
                        </div>
                    </div>

                    <div className="qr my-10">
                        <img src={qr} alt="" />
                        <p className='mt-2'>QR Code for Invoice Analysis</p>
                    </div>


                    <div className="flex justify-center items-center gap-2">
                        <input type="radio" name="ProcessInvoice" id="ProcessInvoice" />
                        <label htmlFor="ProcessInvoice">Process Invoice</label>
                    </div>
                    <div className="buttons flex items-center justify-center gap-3 mt-10">
                        <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit' onClick={() => {setConfirmMessage(true)}}>Save & Print Invoice</button>
                        <button className='text-white bg-[#828282] rounded-md py-1 px-10 cursor-pointer' type='reset'>Reset</button>
                    </div>
                    
                </form>   
            </div>
            {confirmMessage && 
            <AnimatePresence>
                <motion.div
                transition={spring} 
                animate={{ scale: 1.1 }}
                className='fixed w-full flex justify-center items-center h-[100%] bg-black bg-opacity-50 top-0 right-0'>
                    <div className="p-10 rounded-md flex justify-center items-center gap-2 flex-col z-10 bg-white">
                        <img src={errIcon} className='mb-5' alt="" />
                        <p>Total Terminal Invoice Amount Rated From: 01/03/2024 - to - 18/03/2024</p>
                        <p>Total Storage Days = 18days</p>
                        <p>Total Invoice Cost = (NGN 720,350.00)</p>
                        <button className='px-3 py-1 rounded-md bg-blue-800 text-white mt-3' onClick={() => setConfirmMessage(false) || setShowPrintTemplate(true)}>Ok</button>
                    </div>
                </motion.div>
            </AnimatePresence>}
        </div>
        ) : (
            <PrintTemplate/>
        ) }
        </div>
    )
}

export default TerminalInvoice;
