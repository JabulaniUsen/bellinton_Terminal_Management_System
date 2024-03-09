import { faMagnifyingGlass, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';

function ManageVoyage() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

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

    const filteredSuggestions = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const formik = useFormik({
    initialValues: {
      vesselId: '',
      eta: '',
      company: '',
      originPort: '',
      destinationPort: '',
      stop: '',
      regular: '',
      oog: '',
      otfr: '',
      reefer: '',
      hazardous: '',
      vesselName: '',
      etd: '',
      inTransit: '',
      awaitingDelivery: '',
      discharged: '',
      voyageNumber: '',
    },
    onSubmit: (values) => {
      console.log(values);
      setShowSuccessModal(true);
    },
    validate: (values) => {
      const errors = {};

      if (!values.vesselId) {
        errors.vesselId = 'Vessel ID is required';
      }
      if (!values.vesselName) {
        errors.vesselName = 'Vessel Name is required';
      }
      if (!values.voyageNumber) {
        errors.voyageNumber = 'Voyage Number is required';
      }

      return errors;
    },
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleViewDetails = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  const handleModalOK = () => {
    setShowSuccessModal(false);

    // Navigate to the Home tab (replace this with your actual navigation logic)
    // Example: history.push('/home');
  };

  // Function to handle edit button (Close modal and allow editing)
  const handleModalEdit = () => {
    setShowSuccessModal(false);
    // Additional logic to reset or handle editing
  };



  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = formik;

  const [stops, setStops] = useState([
  { id: '', placeholder: 'Enter the name of the stop', type: 'number' },
  ]);
  const addStop = (e) => {
    e.preventDefault();
    setStops([...stops, { id: '', placeholder: 'Enter the name of the stop', type: 'text' }]);
  };

  const data = ["VSL237", "VSL126", "VSL132", "VSL342", "VSL372"];

  return (
    <div className='p-10 roboto'>
      <div className="header">
        <h2 className='text-3xl font-bold'>Manage Voyage</h2>
      </div>

      {/* { showViewVessels ? (
        <ViewVessels/> 
      ):( */}
        <form className='my-7 mx-5 flex gap-12 relative'>
        <div className="flex flex-col gap-12">
          <div className="viewinfo">
            <h3 className='text-lg font-semibold my-5'>View Information</h3>
            <div className="vesselInformation roboto flex flex-col gap-10">

              <div className="flex gap-3">
                <label htmlFor="" className='text-[1em] mt-[13px]'>Vessel ID:</label>
                {/* <input
                  type="text"
                  className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[400px]'
                  name="vesselId"
                  id=""
                  placeholder="Enter vessel ID..."
                  value={values.vesselId}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                /> */}
                <div ref={inputRef}>
                  <div className="flex items-center justify-between pr-3 pl-2 py-3 rounded-lg border-[#999999] border w-[400px]">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      className='outline-none'
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#999999]' />
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
                {errors.vesselId && touched.vesselId && (
                  <p className="text-red-500 my-[-2rem]">{errors.vesselId}</p>
                )}
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>ETA (Estimated Time of Arrival):</label>
                <input type="date" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[243px]' name="id" id="" placeholder="Enter the estimated time of arrival..." />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Total Containers on Board:</label>
                <input type="text" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[282px]' name="id" id="" placeholder="Enter the total number of containers on board" />
              </div>
            </div>
          </div>

          <div className="voyageDetails">
            <h3 className='text-lg font-semibold my-5'>Update ETA:</h3>
            <div className="vesselInformation roboto flex flex-col gap-10">

              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Update ETA:</label>
                <input type="date" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[383px]' name="id" id="" placeholder="Enter your vessel ID..." />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>ETA (Estimated Time of Arrival):</label>
                <input type="text" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[243px]' name="id" id="" placeholder=" Example: 2 hours" />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Update Status:</label>
                <input type="text" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[366px]' name="id" id="" placeholder="Enter the name if the shipping company..." />
              </div>
            </div>
          </div>

          {/* stops */}
          <div className="routingDetails">
            <h3 className='text-lg font-semibold my-5'>Route Details:</h3>
            <div className="vesselInformation roboto grid grid-cols-2 place-items-baseline gap-y-5">
                <div className="route flex items-center gap-3">
                  <label htmlFor="" className='text-[1em]'>Origin Port</label>
                  <input
                    type='text'
                    className='border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[150px]'
                    name='Origin Port'
                    placeholder='Port A, B or C'
                  />
                </div>
                <div className="route flex items-center gap-3">
                  <label htmlFor="" className='text-[1em]'>Destination Port</label>
                  <input
                    type='text'
                    className='border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[150px]'
                    name="Destination Port"
                    placeholder='Port A, B or C'
                  />
                </div>
              {stops.map((stop, index) => (
                <div className="route flex items-center gap-3" key={index}>
                  <label htmlFor="" className='text-[1em]'>Stop:</label>
                  <input
                    type={stop.type}
                    className='border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[150px]'
                    name={`stop-${index}`}
                    placeholder='Port A, B or C'
                  />
                </div>
              ))}
              <button className='addStops float-right mt-2 text-[#CCCCCC]' onClick={addStop}>
                Add more stops as needed
                <FontAwesomeIcon className='add text-xl ml-2 text-black' icon={faPlusCircle} />
              </button>
            </div>
          </div>
          {/* stops */}
        </div>

        <div className="">
          <h3 className='text-lg font-semibold my-5'>Container Details:</h3>
          <div className="containerType flex flex-col gap-8">
              <div>
                <label htmlFor="" className='text-[1em] '>Total Containers on Board:</label>
                <div className=" border-[#828282] border-[1px] rounded-lg p-3 flex items-center">
                  <input type="number" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter No. of container..." />
                </div>
              </div>

              <div>
                <label htmlFor="" className='text-[1em] '>Vessel Name:</label>
                <div className=" border-[#828282] border-[1px] rounded-lg p-3 flex items-center">
                <input
                  type="text"
                  className='bg-transparent outline-none w-full'
                  name="vesselName"
                  id=""
                  placeholder="Enter your vessel name..."
                  value={values.vesselName}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                />
                
                </div>
                {errors.vesselName && touched.vesselName && (
                  <p className="text-red-500">{errors.vesselName}</p>
                )}
              </div>

              <div>
                <label htmlFor="" className='text-[1em] '>Voyage Number:</label>
                <div className=" border-[#828282] border-[1px] rounded-lg p-3 flex items-center">
                  <input     
                    type="text"
                    className='bg-transparent outline-none w-full'
                    name="voyageNumber"
                    id=""
                    placeholder="Enter your voyage number..."
                    value={values.voyageNumber}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}/>
                </div>
                {errors.voyageNumber && touched.voyageNumber && (
                  <p className="text-red-500">{errors.voyageNumber}</p>
                )}
              </div> 
              
              <div>
                <label htmlFor="" className='text-[1em] '>ETD (Estimated Time of Departure):</label>
                <div className=" border-[#828282] border-[1px] my-2 rounded-lg p-3 flex items-center">
                  <input type="date" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter input..." />
                </div>
              </div>
          </div>

          <div className="status">
            <h3 className='text-lg font-semibold my-5 '>Status:</h3>
            <div className="inputs">
              <div className="">
                <input type="checkbox" className='w-[30px]' name="" id="" />
                <label htmlFor="">In Transit</label>
              </div>
              <div className="">
                <input type="checkbox" className='w-[30px]' name="" id="" />
                <label htmlFor="">Awaiting Delivery</label>
              </div>
              <div className="">
                <input type="checkbox" className='w-[30px]' name="" id="" />
                <label htmlFor="">Discharged</label>
              </div>
            </div>
          </div>

          <div className="inputs">
          <h3 className='text-lg font-semibold my-5'>Container Details:</h3>
                <div className="flex gap-3 justify-between my-2">
                  <label htmlFor="">Regular</label>
                  <input type="number" className='w-[150px] border-[1px] p-1 border-[#828282] rounded-lg' placeholder='Enter the quantity' name="" id="" />
                </div>
                <div className="flex gap-3 justify-between my-2">
                  <label htmlFor="">OOG</label>
                  <input type="number" className='w-[150px] border-[1px] p-1 border-[#828282] rounded-lg' placeholder='Enter the quantity' name="" id="" />
                </div>
                <div className="flex gap-3 justify-between my-2">
                  <label htmlFor="">OTFR</label>
                  <input type="text" className='w-[150px] border-[1px] p-1 border-[#828282] rounded-lg' placeholder='Enter the quantity' name="" id="" />
                </div>
                <div className="flex gap-3 justify-between my-2">
                  <label htmlFor="">Reefer</label>
                  <input type="text" className='w-[150px] border-[1px] p-1 border-[#828282] rounded-lg' placeholder='Enter the quantity' name="" id="" />
                </div>
                <div className="flex gap-3 justify-between my-2">
                  <label htmlFor="">Hazardous</label>
                  <input type="text" className='w-[150px] border-[1px] p-1 border-[#828282] rounded-lg' placeholder='Enter the quantity' name="" id="" />
                </div>
              </div>
        </div>
        <button 
        onClick={handleViewDetails} 
        type='submit'
        disabled={!formik.isValid}
        className='bg-[#4000FF] px-8 absolute bottom-[-4rem] right-0 py-1 rounded-lg text-white'>
          Update Voyage
        </button>

      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#F2F2F2] bg-opacity-50"
        >
          <div className="bg-[#9797978e] px-8 py-6 rounded-3xl text-center">
            <p className="text-2xl font-bold mb-4">Vessel created successfully!</p>
            <div className="flex justify-center space-x-4">
              <button onClick={handleModalOK} className="bg-[#4000FF] text-white px-6 py-1 rounded-full">OK</button>
              <button onClick={handleModalEdit} className="bg-black text-white px-6 py-2 rounded-full">Edit</button>
            </div>
          </div>
        </motion.div>
      )}

    </div>
  )
}

export default ManageVoyage