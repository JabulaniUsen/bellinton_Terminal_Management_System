import { useState } from "react";
import Select from 'react-select';
import ContainerTrackingList from "./ContainerTrackingList";
import ContainerMovementUpdate from "./ContainerMovementUpdate";

const ContainerMovementHistory = () => {
  const [errorText, setErrorText] = useState(false);
  const [data, setData] = useState([
    { containerID: 'CN172873', date: '2024-02-17', event: 'Departure from Port of Lagos', location: 'Ware house 5', origin: 'Port of Lagos', lastUpdated: 'February 17, 2024', destination: 'Port of Los Angeles', vessel: 'M/V Blue Marlin', desc: 'Container en route to warehouse for  storage' },
    { containerID: 'CN127832', date: '2024-02-17', event: 'Arrived from Port of Los Angelos', location: 'Port of Lagos', origin: 'Port of Lagos', lastUpdated: 'February 17, 2024', destination: 'Port of Los Angeles', vessel: 'M/V Blue Marlin', desc: 'Container loaded onto vessel for  shipment' },
    { containerID: 'CN127822', date: '2024-02-17', event: 'Departure from Port of Lagos', location: 'Warehouse 3', origin: 'Port of Lagos', lastUpdated: 'February 17, 2024', destination: 'Port of Los Angeles', vessel: 'M/V Blue Marlin', desc: 'Container en route to warehouse for  storage' },
  ]);
  const [statusSearchTerm, setStatusSearchTerm] = useState('');
  const [containerIDSearchTerm, setContainerIDSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [viewUpdatePage, setViewUpdatePage] = useState(true)

  const handleViewUpdatePage = () => {
    setViewUpdatePage(false)
  }

  const handleSearch = () => {
    const filteredData = data.filter(item =>
      item.containerID.toLowerCase().includes(containerIDSearchTerm.toLowerCase())
    );

    setSearchResults(filteredData);
    setErrorText(filteredData.length === 0); // Show error text if no search results found
  };

  const handleClearSearch = () => {
    setStatusSearchTerm('');
    setContainerIDSearchTerm('');
    setSearchResults([]);
    setErrorText(false);
  };

  return (
    <div className="">
      {viewUpdatePage ? (<div className='roboto poppins m-10'>
      <div className="head flex justify-between">
        <h3 className='font-bold text-2xl'>Container Movement Report </h3>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex gap-4 mt-5 items-center">
              <label htmlFor="" className='text-lg font-bold'>Select Container ID:</label>
              <div className="">
                <Select
                  options={data.map((item) => ({ value: item.containerID, label: item.containerID }))}
                  value={containerIDSearchTerm ? { value: containerIDSearchTerm, label: containerIDSearchTerm } : null}
                  onChange={(selectedOption) => setContainerIDSearchTerm(selectedOption.value)}
                  isSearchable
                  placeholder="Search by Container No."
                  className='outline-none min-w-[300px] rounded'
                />
                {errorText && <p className="text-red-600">No results found</p>}
              </div>

              <div className="flex gap-2 justify-center items-center my-10">
                <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleSearch}>View</button>
                <button className='text-black font-semibold bg-[#a0a0a0] rounded-md py-1 px-9' onClick={handleClearSearch}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className="moreInfo my-10">
            {searchResults.map((item, index) => (
                <div className="moreInfo flex flex-col gap-2" key={index}>
                    <h3 className="font-bold">Container ID: {item.containerID}</h3>
                    <h3 className="font-bold">Container ID: {item.location}</h3>
                    <h3 className="font-bold">Container ID: {item.lastUpdated}</h3>
                </div>
            ))}
          <div className="table overflow-x-auto my-10">
            <table className="border-collapse border border-gray-800">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-800 px-2 py-2">Date</th>
                  <th className="border border-gray-800 px-2 py-2">Event</th>
                  <th className="border border-gray-800 px-2 py-2">Origin</th>
                  <th className="border border-gray-800 px-2 py-2">Destination</th>
                  <th className="border border-gray-800 px-2 py-2">Vessel</th>
                  <th className="border border-gray-800 px-2 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((rowData, index) => (
                  <tr key={index} className="">
                    <td className="border border-gray-800 px-3 py-2">{rowData.date}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.event}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.origin}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.destination}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.vessel}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <button className='text-white bg-[#4000FF] flex items-center justify-center rounded-md py-1 px-10 mx-[200px] m-16' onClick={handleViewUpdatePage}>Update</button>
    </div>) : (
      <ContainerMovementUpdate/>
    )}
    </div>
  );
};

export default ContainerMovementHistory;
