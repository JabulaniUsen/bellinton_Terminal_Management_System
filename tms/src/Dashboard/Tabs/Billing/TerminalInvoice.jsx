import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useRef, useEffect} from 'react'
import Select from 'react-select';

const TerminalInvoice = () => {
    const customerName = [
        { value: '', label: 'Select Customer Name', isDisabled: true },
        { value: 'Victor Akpan', label: 'Victor Akpan' },
        { value: 'Theo Michael', label: 'Theo Michael' },
    ];
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const data = ["Victor Harrison", "Emmanuel Mike", "Odun Abeyemi"];
    const inputRef = useRef(null)

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

    return (
        <div className='m-10'>
            <h3 className='font-bold text-2xl'>
                Terminal Invoice
            </h3>

            <div className="">
                <form>
                    <div className="flex justify-between items-center w-[60%] my-5">
                        <label htmlFor="containerWidth" className="block font-semibold text-base">Customer Name: </label>
                        <Select
                            options={customerName}
                            isSearchable
                            className='w-[400px]'
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center w-[60%] my-5">
                        <label htmlFor="" className='text-[1em] mt-3'>Agent Name & ID:</label>
                        <div ref={inputRef}>
                            <div className="flex items-center justify-between pr-3 pl-2 py-2 border-gray-400 border-[1px] rounded-lg p-2 w-[400px]">
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
                    <div className="flex justify-between items-center w-[60%] my-5">
                        <label htmlFor="ratedUpToDate" className="block font-semibold text-base">Rated Up To Date:</label>
                        <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="ratedUpToDate" name="invoiceDate" />
                    </div> 
                    <div className="flex justify-between items-center w-[60%] my-5">
                        <label className="block font-semibold text-base">Original BL/Telex:</label>
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
                    </div> 
                    <div className="buttons flex w-[60%] gap-3 mx-[200px] mt-10">
                        <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' type='submit'>Proceed</button>
                        <button className='text-white bg-[#828282] rounded-md py-1 px-10 cursor-pointer' type='reset'>Reset</button>
                    </div>
                </form>   
            </div>
        </div>
    )
}

export default TerminalInvoice;
