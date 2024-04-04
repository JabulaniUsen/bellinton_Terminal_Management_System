import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Select from 'react-select';
import ViewContainerList from './ViewContainerList';

const ContainerMgt = () => {
  const [showContainerMgtData, setShowContainerMgtData] = useState(true);
  const [showContainerList, setShowContainerList] = useState(false)

  const [data, setData] = useState([
    { containerNo: 'CN172873', status: 'In Yard', location: 'Stacking Area 1', associatedTasks: 'Inspection, Unloading' },
    { containerNo: 'CN127832', status: 'In Yard', location: 'Stacking Area 1', associatedTasks: 'Loading, Inspection' },
    { containerNo: 'CN127832', status: 'Not in Yard', location: 'Stacking Area 1', associatedTasks: 'Loading, Inspection' },
  ]);
  const [statusSearchTerm, setStatusSearchTerm] = useState('');
  const [containerNoSearchTerm, setContainerNoSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredData = data.filter(item =>
      item.containerNo.toLowerCase().includes(containerNoSearchTerm.toLowerCase()) &&
      item.status.toLowerCase().includes(statusSearchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  const handleClearSearch = () => {
    setStatusSearchTerm('');
    setContainerNoSearchTerm('');
    setData([
      { containerNo: 'CN172873', status: 'In Yard', location: 'Stacking Area 1', associatedTasks: 'Inspection, Unloading' },
      { containerNo: 'CN127832', status: 'In Yard', location: 'Stacking Area 1', associatedTasks: 'Loading, Inspection' },
      { containerNo: 'CN127832', status: 'Not in Yard', location: 'Stacking Area 1', associatedTasks: 'Loading, Inspection' },
    ]);
  };

  const handleView = () => {
    setShowContainerList(true)
  }

  return (
    <div className="">
      { showContainerList === !true ? (
        <div className='m-10 poppins'>
        <h2 className='font-bold text-2xl'>Container Management</h2>
        <div className="search flex gap-2 items-center">
          <Select
            options={Array.from(new Set(data.map((item) => item.status))).map(status => ({ value: status, label: status }))}
            value={statusSearchTerm ? { value: statusSearchTerm, label: statusSearchTerm } : null}
            onChange={(selectedOption) => setStatusSearchTerm(selectedOption.value)}
            isSearchable
            placeholder="Filter by Status"
            className='outline-none min-w-[300px] rounded'
          />
          <Select
            options={data.map((item) => ({ value: item.containerNo, label: item.containerNo }))}
            value={containerNoSearchTerm ? { value: containerNoSearchTerm, label: containerNoSearchTerm } : null}
            onChange={(selectedOption) => setContainerNoSearchTerm(selectedOption.value)}
            isSearchable
            placeholder="Search by Container No."
            className='outline-none min-w-[300px] rounded'
          />
          <div className="flex  justify-center  my-10">
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleSearch}>Search</button>
            <button className='text-white bg-[#FF0000] rounded-md  px-3 ml-2' onClick={handleClearSearch}><FontAwesomeIcon icon={faX} /></button>
          </div>
        </div>
  
        <div className="">
          {showContainerMgtData &&
            <div className="table overflow-x-auto my-10 ">
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
                  {data.map((rowData, index) => (
                    <tr key={index} className="">
                      <td className="border border-gray-800 px-3 py-2">{rowData.containerNo}</td>
                      <td className="border border-gray-800 px-3 py-2">{rowData.status}</td>
                      <td className="border border-gray-800 px-3 py-2">{rowData.location}</td>
                      <td className="border border-gray-800 px-3 py-2">{rowData.associatedTasks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
  
              <button className='text-white bg-[#4000FF] rounded-md py-1 px-10 m-16 mx-[200px]' onClick={handleView}>View Details</button>
            </div>
          }
        </div>
      </div>
      ) : (
        <ViewContainerList/>
      ) }
    </div>
  );
}

export default ContainerMgt;
