import { useState } from "react";
import Select from 'react-select';
import ContainerTrackingList from "./ContainerTrackingList";

const ContainerTracking = () => {
  const [errorText, setErrorText] = useState(false);
  const [data, setData] = useState([
    { containerNo: 'CN172873', status: 'In Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel123' },
    { containerNo: 'CN127832', status: 'In Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel1456' },
    { containerNo: 'CN127832', status: 'Not in Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel789' },
  ]);
  const [statusSearchTerm, setStatusSearchTerm] = useState('');
  const [containerNoSearchTerm, setContainerNoSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [viewContainerTrackingList, setViewContainerTrackingList] = useState(true)

  const handleViewContainerTrackingList = () => {
    setViewContainerTrackingList(false)
  }

  const handleSearch = () => {
    const filteredData = data.filter(item =>
      item.containerNo.toLowerCase().includes(containerNoSearchTerm.toLowerCase())
    );

    setSearchResults(filteredData);
    setErrorText(filteredData.length === 0); // Show error text if no search results found
  };

  const handleClearSearch = () => {
    setStatusSearchTerm('');
    setContainerNoSearchTerm('');
    setSearchResults([]);
    setErrorText(false);
  };

  return (
    <div className="">
      {viewContainerTrackingList ? (<div className='roboto poppins m-10'>
      <div className="head flex justify-between">
        <h3 className='font-bold text-2xl'>Container Tracking</h3>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex gap-4 mt-5 items-center">
              <label htmlFor="" className='text-lg font-bold'>Select Container ID:</label>
              <div className="">
                <Select
                  options={data.map((item) => ({ value: item.containerNo, label: item.containerNo }))}
                  value={containerNoSearchTerm ? { value: containerNoSearchTerm, label: containerNoSearchTerm } : null}
                  onChange={(selectedOption) => setContainerNoSearchTerm(selectedOption.value)}
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
        <div className="moreInfo my-10 mx-5">
          <div className="table overflow-x-auto my-10">
            <table className="border-collapse border border-gray-800">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-800 px-2 py-2">Container Number</th>
                  <th className="border border-gray-800 px-2 py-2">Status</th>
                  <th className="border border-gray-800 px-2 py-2">Location</th>
                  <th className="border border-gray-800 px-2 py-2">Last Updated</th>
                  <th className="border border-gray-800 px-2 py-2">Next Destination</th>
                  <th className="border border-gray-800 px-2 py-2">Assigned Vessel</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((rowData, index) => (
                  <tr key={index} className="">
                    <td className="border border-gray-800 px-3 py-2">{rowData.containerNo}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.status}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.location}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.lastUpdated}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.nextDestination}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.assignedVessel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <button className='text-white bg-[#4000FF] flex items-center justify-center rounded-md py-1 px-10 mx-[200px] m-16' onClick={handleViewContainerTrackingList}>View details</button>
    </div>) : (
      <ContainerTrackingList/>
    )}
    </div>
  );
};

export default ContainerTracking;
