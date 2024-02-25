import { faLeaf, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import filter from '../../assets/filter.png'

function Vessel () {
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
  const [filterMode, setFilterMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');


  const handleCloseViewVessels = () => {
    setShowViewVessels(false);
  };
  const handleViewDetails = (e) => {
    e.preventDefault()
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
    setSearchQuery(e.target.value);
    setShowViewVessels(true);
  };

  const handleFilter = () => {
    setFilterMode(!filterMode);
  }
  const undoHandleFilter = () => {
    setFilterMode(false)
  }

  const vessselsData = [
    { vesselId: 'VSL001', name: 'Ocean Voyager', eta: '9/5/2023 8:00', etd: '9/10/2023 8:00', status: 'In Transit', totalContainer: '150', action: '[View Details]' },
    { vesselId: 'VSL002', name: 'Nautical Spirit', eta: '9/7/2023 14:00', etd: '-', status: 'At Port', totalContainer: '120', action: '[View Details]' },
    { vesselId: 'VSL003', name: 'Ocean Voyager', eta: '9/5/2023 8:00', etd: '9/10/2023 8:00', status: 'In Transit', totalContainer: '150', action: '[View Details]' },
    { vesselId: 'VSL004', name: 'Nautical Spirit', eta: '9/7/2023 14:00', etd: '-', status: 'At Port', totalContainer: '120', action: '[View Details]' },
    { vesselId: 'VSL005', name: 'Ocean Voyager', eta: '9/5/2023 8:00', etd: '9/10/2023 8:00', status: 'In Transit', totalContainer: '150', action: '[View Details]' },
    { vesselId: 'VSL006', name: 'Nautical Spirit', eta: '9/7/2023 14:00', etd: '-', status: 'At Port', totalContainer: '120', action: '[View Details]' },
  ];

  const filteredData = vessselsData.filter (
    (rowData) => 
    rowData.vesselId.toLowerCase().includes(searchQuery.toLowerCase())
    // rowData.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // rowData.eta.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // rowData.etd.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // rowData.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // rowData.totalContainer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // rowData.action.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='p-10 roboto'>
      <div className="header">
        <h2 className='text-3xl font-bold'>View Vessels</h2>
      </div>



      {!filterMode && (
        <form className='flex flex-col  '>
          <div className="my-7 mx-2 flex gap-10 relative flex-col">
            <div className="flex flex-col gap-12">
              <div className="viewinfo">
                <h3 className='text-lg font-semibold my-5'>View Information</h3>

                <div className="vesselInformation roboto flex flex-col gap-10">
                  <div className="flex items-center gap-3 ">
                    <label htmlFor="" className='text-[1em] '>Vessel ID:</label>
                    <div className=" border-[#828282] border-[1px] rounded-lg p-3 w-[347px] flex items-center">
                      <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter your vessel ID..." />
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <img src={filter} className='cursor-pointer' onClick={handleFilter} alt="" />
                  </div>
                </div>
              </div>
            </div>
          {/* <button onClick={handleViewDetails} className='bg-[#4000FF] px-8  py-1 rounded-lg text-white w-[200px] flex-1 m-auto'>View Details</button> */}
          </div>
        </form>
      )}


        {filterMode && (
          <form className='flex flex-col justify-end items-end'>
          <div className="my-7 mx-2 flex gap-10 relative">
            <div className="flex flex-col gap-12">
              <div className="viewinfo">
                <h3 className='text-lg font-semibold my-5'>View Information</h3>

                <div className="vesselInformation roboto flex flex-col gap-10">
                    <div className="flex items-center gap-3 ">
                      <label htmlFor="" className='text-[1em] '>Vessel ID:</label>
                      <div className=" border-[#828282] border-[1px] rounded-lg p-3 w-[347px] flex items-center">
                        <input value={searchQuery} type="text" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter your vessel ID..." />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </div>
                      <img src={filter} className='cursor-pointer' onClick={undoHandleFilter} alt="" />
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="">
                        <label htmlFor="" className='text-[1em]'>ETA (Estimated Time of Arrival):</label>
                        <div className="flex gap-2">
                          <div className=" my-2 border-[#828282] border-[1px] rounded-lg p-3 w-[320px] flex items-center">
                            <input value={searchQuery} type="date" className='bg-transparent outline-none w-full' name="id" id="" />
                          </div>
                          <div className=" my-2 border-[#828282] border-[1px] rounded-lg p-3  flex items-center">
                            <input value={searchQuery} type="time" className='bg-transparent outline-none w-full' name="id" id="" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <label htmlFor="" className='text-[1em] '>Company:</label>
                        <div className=" border-[#828282] border-[1px] rounded-lg p-3 w-[347px] flex items-center">
                          <input value={searchQuery} type="number" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter shipping line..." />
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
                      <input value={searchQuery} type="checkbox" className='w-[30px]' name="" id="" />
                      <label htmlFor="">Regular</label>
                    </div>
                    <div className="">
                      <input value={searchQuery} type="checkbox" className='w-[30px]' name="" id="" />
                      <label htmlFor="">OOG</label>
                    </div>
                    <div className="">
                      <input value={searchQuery} type="checkbox" className='w-[30px]' name="" id="" />
                      <label htmlFor="">OTFR</label>
                    </div>
                    <div className="">
                      <input value={searchQuery} type="checkbox" className='w-[30px]' name="" id="" />
                      <label htmlFor="">Reefer</label>
                    </div>
                    <div className="">
                      <input value={searchQuery} type="checkbox" className='w-[30px]' name="" id="" />
                      <label htmlFor="">Hazardous</label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className='text-[1em] '>Vessel Name:</label>
                    <div className=" border-[#828282] border-[1px] rounded-lg p-3 w-[347px] flex items-center">
                      <input value={searchQuery} type="number" className='bg-transparent outline-none w-full' name="id" id="" placeholder="Enter your vessel name..." />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className='text-[1em] '>ETD (Estimated Time of Departure):</label>
                    <div className="flex gap-2">
                        <div className=" my-2 border-[#828282] border-[1px] rounded-lg p-3 w-[240px] flex items-center">
                          <input value={searchQuery} type="date" className='bg-transparent outline-none w-full' name="id" id="" />
                        </div>
                        <div className=" my-2 border-[#828282] border-[1px] rounded-lg p-3  flex items-center">
                          <input value={searchQuery} type="time" className='bg-transparent outline-none w-full' name="id" id="" />
                        </div>
                      </div>
                  </div>
              </div>

              <div className="status">
                <h3 className='text-[#808080] text-xl mt-5 mb-3'>Status:</h3>
                <div className="inputs">
                  <div className="">
                    <input value={searchQuery} type="checkbox" className='w-[30px]' name="" id="" />
                    <label htmlFor="">In Transit</label>
                  </div>
                  <div className="">
                    <input value={searchQuery} type="checkbox" className='w-[30px]' name="" id="" />
                    <label htmlFor="">Awaiting Delivery</label>
                  </div>
                  <div className="">
                    <input value={searchQuery} type="checkbox" className='w-[30px]' name="" id="" />
                    <label htmlFor="">Discharged</label>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <button onClick={handleViewDetails} className='bg-[#4000FF] px-8  py-1 rounded-lg text-white'>View Details</button>
        </form>
        )}


        <div className=" flex items-center justify-center">
          <table className='border border-bl bg-black text-white w-full mt-[4rem]'>
            <thead>
              <tr>
                <th className='py-3'>Vessel ID</th>
                <th className='py-3'>Vessel Name</th>
                <th className='py-3'>ETA</th>
                <th className='py-3'>ETD</th>
                <th className='py-3'>Status</th>
                <th className='py-3'>Total Containers</th>
                <th className='py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map ((rowData, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : 'black', color: index % 2 === 0 ? 'black' : 'white' }}>
                  <td className='p-4'>{rowData.vesselId}</td>
                  <td className='p-4'>{rowData.name}</td>
                  <td className='p-4'>{rowData.eta}</td>
                  <td className='p-4'>{rowData.etd}</td>
                  <td className='p-4'>{rowData.status}</td>
                  <td className='p-4'>{rowData.totalContainer}</td>
                  <td className='p-4 cursor-pointer'>{rowData.action}</td>
                </tr>
            ))}  
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Vessel