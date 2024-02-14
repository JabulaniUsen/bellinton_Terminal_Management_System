import { faMagnifyingGlass, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'

function AddVessel() {

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
        <h2 className='text-3xl font-bold'>Add Vessels</h2>
      </div>

      {/* { showViewVessels ? (
        <ViewVessels/> 
      ):( */}
        <form className='my-7 mx-5 flex gap-12 relative'>
        <div className="flex flex-col gap-12">
          <div className="viewinfo">
            <h3 className='text-lg font-semibold my-5'>View Information</h3>
            <div className="vesselInformation roboto flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Vessel ID:</label>
                <input type="number" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[400px]' name="id" id="" placeholder="Enter your vessel ID..." />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>ETA (Estimated Time of Arrival):</label>
                <input type="number" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[243px]' name="id" id="" placeholder="Enter the estimated time of arrival..." />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Company:</label>
                <input type="text" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[400px]' name="id" id="" placeholder="Enter the name if the shipping company..." />
              </div>
            </div>
          </div>

          {/* stops */}
          <div className="stops">
            <h3 className='text-lg font-semibold my-5'>Stops:</h3>
            <div className="vesselInformation roboto flex flex-col gap-10">
              <div className="stops flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Enter the name of the first stop:</label>
                <input type="number" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[250px]' name="id" id="" placeholder="Enter your vessel ID..." />
              </div>
              <div className="stops flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Enter the name of the second stop:</label>
                <input type="number" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[227px]' name="id" id="" placeholder="Enter the estimated time of arrival..." />
              </div>
              <div className="stops flex items-center gap-3">
                <label htmlFor="" className='text-[1em] '>Enter the name of the third stop:</label>
                <input type="text" className=' border-[#828282] border-[1px] rounded-lg p-3 flex items-center w-[250px]' name="id" id="" placeholder="Enter the name if the shipping company..." />
              </div>
            </div>
            <button className='addStops float-right mt-2 text-[#CCCCCC]'>
              Add more stops as needed
              <FontAwesomeIcon className='text-xl ml-2 text-black' icon={faPlusCircle} />
            </button>
          </div>
          {/* stops */}
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
                <div className=" border-[#828282] border-[1px] rounded-lg p-3 flex items-center">
                  <input type="number" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter your vessel name..." />
                </div>
              </div>
              <div>
                <label htmlFor="" className='text-[1em] '>ETD (Estimated Time of Departure):</label>
                <div className=" border-[#828282] border-[1px] my-2 rounded-lg p-3 flex items-center">
                  <input type="number" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter input..." />
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
      {/* ) } */}
    </div>
  )
}

export default AddVessel