import React, { useState } from "react";
import Select from 'react-select';
import ContainerCMgt from "./ContainerCMgt";

const ContainerR = () => {
  const initialData = [
    {date: '2023-12-15', cargoId: 'MRKU87382', cycleType: 'Delivery', desc: 'Routine inspection conducted'},
    {date: '2023-12-15', cargoId: 'MRKU84242', cycleType: 'Delivery', desc: 'Routine inspection conducted'},
    {date: '2023-12-15', cargoId: 'MRKU87652', cycleType: 'Delivery', desc: 'Routine inspection conducted'},
    {date: '2023-12-15', cargoId: 'MRKU83432', cycleType: 'Delivery', desc: 'Routine inspection conducted'},
    {date: '2023-12-15', cargoId: 'MRKU50912', cycleType: 'Delivery', desc: 'Routine inspection conducted'},
    {date: '2023-12-15', cargoId: 'MRKU45920', cycleType: 'Delivery', desc: 'Routine inspection conducted'},
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [moreInfo, setMoreInfo] = useState(false);
  const [seeConMgt, steSeeConMgt] = useState(false)

  const handleSearch = () => {
    const filteredData = initialData.filter(item =>
      item.cargoId.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setData(filteredData);
    setMoreInfo(true);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setData(initialData);
    setMoreInfo(false);
  };

  return (
    <div>
      {!seeConMgt ? (<div className='p-10 roboto '>
        <div className="head flex justify-between">
          <h3 className='text-2xl font-bold'>View Customer</h3>
        </div>

        <div >
          <div className="flex justify-between items-center">
            <div className="">
              <div className="flex gap-2 my-10 items-center">
                <label htmlFor="" className='text-lg font-bold'>Enter Cargo ID:</label>
                <div className="">
                    <Select
                      options={initialData.map((item) => ({ value: item.cargoId, label: item.cargoId }))}
                      value={{ value: searchTerm, label: searchTerm }}
                      onChange={(selectedOption) => setSearchTerm(selectedOption.value)}
                      isSearchable
                      placeholder="Select Cargo ID"
                      className='outline-none p-2 w-[300px] rounded '
                    />
                </div>

                <div className="flex gap-3 justify-center items-center my-10">
                  <button className=' text-white bg-[#4000FF] rounded-xl py-2 px-10' onClick={handleSearch} >View</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <div className="my-5">
            <table className="border-collapse ">
              <thead>
                <tr className="border border-gray-400 font-semibold">
                  <th className=" border border-gray-400 p-2 px-5">Date</th>
                  <th className=" border border-gray-400 p-2 px-5">Cargo ID</th>
                  <th className=" border border-gray-400 p-2 px-5">Cycle Type</th>
                  <th className=" border border-gray-400 p-2 px-5">Description</th>
                </tr>
              </thead>
              <tbody>
                {data.map((rowData, index) => (
                  <tr key={index} className="">
                    <td className="border border-gray-400 p-2 px-5">{rowData.date}</td>
                    <td className="border border-gray-400 p-2 px-5">{rowData.cargoId}</td>
                    <td className="border border-gray-400 p-2 px-5">{rowData.cycleType}</td>       
                    <td className="border border-gray-400 p-2 px-5">{rowData.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-3 justify-center items-center">
            <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={resetSearch} >Back</button>
            <button className=' text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={() => steSeeConMgt(true)} >See Container Circle Mgt</button>
          </div>
        </div>
      </div>) : (
        <ContainerCMgt/>
      )}
    </div>
  );
};

export default ContainerR;
