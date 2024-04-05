import { useState } from "react";
import Select from 'react-select';

const ContainerNotification = () => {
  const [errorText, setErrorText] = useState(false);
  const [data, setData] = useState([
    { containerNo: 'CN172873', status: 'In Yard', location: 'Stacking Area 1', associatedTasks: 'Inspection, Unloading' },
    { containerNo: 'CN127832', status: 'In Yard', location: 'Stacking Area 1', associatedTasks: 'Loading, Inspection' },
    { containerNo: 'CN127832', status: 'Not in Yard', location: 'Stacking Area 1', associatedTasks: 'Loading, Inspection' },
  ]);
  const [statusSearchTerm, setStatusSearchTerm] = useState('');
  const [containerNoSearchTerm, setContainerNoSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
    <div className='roboto poppins m-10'>
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

              <div className="flex flex-col justify-center items-center my-10">
                <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleSearch}>View</button>
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
                  <th className="border border-gray-800 px-3 py-2">Container Number</th>
                  <th className="border border-gray-800 px-3 py-2">Status</th>
                  <th className="border border-gray-800 px-3 py-2">Location</th>
                  <th className="border border-gray-800 px-3 py-2">Associated Tasks</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((rowData, index) => (
                  <tr key={index} className="">
                    <td className="border border-gray-800 px-3 py-2">{rowData.containerNo}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.status}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.location}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.associatedTasks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10 m-16 mx-[200px]' onClick={handleClearSearch}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContainerNotification;
