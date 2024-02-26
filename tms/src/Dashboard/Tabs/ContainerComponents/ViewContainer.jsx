import { useState } from "react";
import { motion } from 'framer-motion';


const ViewContainer = () => {
  const [showContainerData, setShowContainerData] = useState(true);
  const [containerId, setcontainerId] = useState("");
  const [errorText, setErrorText] = useState(false);


  const initialData = [
    { containerId: "CON123456", arrivalDate: '2/15/2024 10:30', depatureDate: '2/15/2024 10:30', type: 'Dry', vesselName: 'Ocean Voyager', customerName: 'ABC Shipping', status: 'In Transit', action: 'View Details',},
    { containerId: "CON752432", arrivalDate: '8/11/2024 10:30', depatureDate: '-', type: 'Refregirated', vesselName: 'Sea Explorer', customerName: 'XYZ Logistics', status: 'Awaiting Delivery', action: 'View Details',},
  ];
  const handleSearch = () => {
    const filteredData = initialData.filter(item =>
      item.containerId.toString().includes(searchTerm.toLowerCase())
    );
    

    // Update the state with the filtered data
    setData(filteredData);
  };

  const resetSearch = () => {
    // Reset the search term and show all data
    setSearchTerm('');
    setData(initialData);
  };

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  


  return (
    <div className='p-10 roboto '>
      <div className="head flex justify-between">
        <h3 className='text-2xl font-bold'>View Container</h3>
      </div>

      <div >
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex gap-2 my-10 mx-5">
              <label htmlFor="" className='text-lg font-bold'>Select Cargo ID:</label>
              <div className="">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='border-[1px] border-[#8f8f8f] outline-none p-2 w-[300px] rounded '
                  id="containerId"
                  name="containerId"
                />
                {errorText && <p className="text-red-600">Please enter your cargo Id</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-10">
          <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleSearch} >View</button>
        </div>
      </div>

      <div className={`my-10 mx-5`}>
        {showContainerData && 
          <div className="table overflow-x-auto my-10">
          <table className="border border-collapse">
            <thead>
              <tr>
                <th className="border bg-black text-white p-2">Container ID</th>
                <th className="border bg-black text-white p-2">Status</th>
                <th className="border bg-black text-white p-2">Arrival Date</th>
                <th className="border bg-black text-white p-2">Depature Date</th>
                <th className="border bg-black text-white p-2">Type</th>
                <th className="border bg-black text-white p-2">Vessel Name</th>
                <th className="border bg-black text-white p-2">Customer Name</th>
                <th className="border bg-black text-white p-2">Action</th>
              </tr>
            </thead>
            <tbody >
              {data.map((rowData, index) => (
                <tr key={index}>
                  <td className="border border-b-black p-2">{rowData.containerId}</td>
                  <td className="border border-b-black p-2">{rowData.status}</td>
                  <td className="border border-b-black p-2">{rowData.arrivalDate}</td>
                  <td className="border border-b-black p-2">{rowData.depatureDate}</td>
                  <td className="border border-b-black p-2">{rowData.type}</td>
                  <td className="border border-b-black p-2">{rowData.vesselName}</td>
                  <td className="border border-b-black p-2">{rowData.customerName}</td>
                  <td className="border border-b-black p-2">{rowData.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col justify-end items-end my-10">
            <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={resetSearch} >Back</button>
          </div>
        </div>
        }

      </div>
    </div>
  );
};

export default ViewContainer;
