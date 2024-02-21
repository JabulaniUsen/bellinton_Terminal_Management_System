import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ViewVessels from './VesselComponents/ViewVessels';

function Vessel() {
  const [vesselId, setVesselId] = useState('');
  const [eta, setEta] = useState('');
  const [company, setCompany] = useState('');
  const [originPort, setOriginPort] = useState('');
  const [destinationPort, setDestinationPort] = useState('');
  const [stop, setStop] = useState('');
  const [regular, setRegular] = useState(false);
  const [oog, setOog] = useState(false);
  const [otfr, setOtfr] = useState(false);
  const [reefer, setReefer] = useState(false);
  const [hazardous, setHazardous] = useState(false);
  const [vesselName, setVesselName] = useState('');
  const [etd, setEtd] = useState('');
  const [inTransit, setInTransit] = useState(false);
  const [awaitingDelivery, setAwaitingDelivery] = useState(false);
  const [discharged, setDischarged] = useState(false);

  const [showViewVessels, setShowViewVessels] = useState(false);


  const handleCloseViewVessels = () => {
    setShowViewVessels(false);
  };
  const handleViewDetails = () => {
    // Handle the button click and access the form field values here
    console.log({
      vesselId,
      eta,
      company,
      originPort,
      destinationPort,
      stop,
      regular,
      oog,
      otfr,
      reefer,
      hazardous,
      vesselName,
      etd,
      inTransit,
      awaitingDelivery,
      discharged,
    });

    setShowViewVessels(true);
  };

  return (
    <div className='p-10 roboto'>
      <div className="header">
        <h2 className='text-3xl font-bold'>View Vessels</h2>
      </div>

      {showViewVessels && (
        <div className=" flex items-center justify-center">
          <ViewVessels onClose={handleCloseViewVessels} />
        </div>
      )}
      {!showViewVessels && (
        <form className='my-7 mx-2 flex justify-evenly gap-10 relative'>
        <div className="flex flex-col gap-12">
          <div className="viewinfo">
            <h3 className='text-lg font-semibold my-5'>View Information</h3>
            <div className="vesselInformation roboto flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Vessel ID:</label>
                <div className=" border-[#828282] border-[1px] rounded-lg p-3 w-[347px] flex items-center">
                  <input type="number" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter your vessel ID..." />
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>

            <div className="flex flex-col gap-5">
              <div className="">
                <label htmlFor="" className='text-[1em]'>ETA (Estimated Time of Arrival):</label>
                  <div className="flex gap-2">
                    <div className=" my-2 border-[#828282] border-[1px] rounded-lg p-3 w-[320px] flex items-center">
                      <input type="date" className='bg-transparent outline-none w-full' name="id" id="" />
                    </div>
                    <div className=" my-2 border-[#828282] border-[1px] rounded-lg p-3  flex items-center">
                      <input type="time" className='bg-transparent outline-none w-full' name="id" id="" />
                    </div>
                  </div>
              </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="" className='text-[1em] '>Company:</label>
                  <div className=" border-[#828282] border-[1px] rounded-lg p-3 w-[347px] flex items-center">
                    <input type="number" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter shipping line..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vesselRoute w-[600px]">
            <h3 className='text-lg font-semibold my-5'>Vessel Route</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="" className=''>Origin Port:</label>
                <select className=" my-2 border-[#828282] border-[1px] rounded-lg p-3 w-[150px] flex items-center">
                  <option value=""></option>
                  <option value="volvo">Volvo</option>
                  <option value="volvo">Volvo</option>
                  <option value="volvo">Volvo</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="" className=''>Destination Port:</label>
                <select className=" my-2 border-[#828282] border-[1px] rounded-lg p-3 w-[150px] flex items-center">
                  <option value=""></option>
                  <option value="volvo">Volvo</option>
                  <option value="volvo">Volvo</option>
                  <option value="volvo">Volvo</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="" className=''> Stop</label>
                <select className=" my-2 border-[#828282] border-[1px] rounded-lg p-3 w-[150px] flex items-center">
                  <option value=""></option>
                  <option value="volvo">Volvo</option>
                  <option value="volvo">Volvo</option>
                  <option value="volvo">Volvo</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className='text-lg font-semibold my-5'>Container Type:</h3>
          <div className="containerType flex flex-col gap-8">
              <div className="inputs">
                <div className="">
                  <input type="checkbox" className='w-[30px]' name="" id="" />
                  <label htmlFor="">Regular</label>
                </div>
                <div className="">
                  <input type="checkbox" className='w-[30px]' name="" id="" />
                  <label htmlFor="">OOG</label>
                </div>
                <div className="">
                  <input type="checkbox" className='w-[30px]' name="" id="" />
                  <label htmlFor="">OTFR</label>
                </div>
                <div className="">
                  <input type="checkbox" className='w-[30px]' name="" id="" />
                  <label htmlFor="">Reefer</label>
                </div>
                <div className="">
                  <input type="checkbox" className='w-[30px]' name="" id="" />
                  <label htmlFor="">Hazardous</label>
                </div>
              </div>

              <div>
                <label htmlFor="" className='text-[1em] '>Vessel Name:</label>
                <div className=" border-[#828282] border-[1px] rounded-lg p-3 w-[347px] flex items-center">
                  <input type="number" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter your vessel name..." />
                </div>
              </div>
              <div>
                <label htmlFor="" className='text-[1em] '>ETD (Estimated Time of Departure):</label>
                <div className="flex gap-2">
                    <div className=" my-2 border-[#828282] border-[1px] rounded-lg p-3 w-[240px] flex items-center">
                      <input type="date" className='bg-transparent outline-none w-full' name="id" id="" />
                    </div>
                    <div className=" my-2 border-[#828282] border-[1px] rounded-lg p-3  flex items-center">
                      <input type="time" className='bg-transparent outline-none w-full' name="id" id="" />
                    </div>
                  </div>
              </div>
          </div>

          <div className="status">
            <h3 className='text-[#808080] text-xl mt-5 mb-3'>Status:</h3>
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
        </div>
        <button onClick={handleViewDetails} className='bg-[#4000FF] px-8 absolute bottom-[-7rem] right-0 py-1 rounded-lg text-white'>View Details</button>
      </form>
      ) }
    </div>
  )
}

export default Vessel