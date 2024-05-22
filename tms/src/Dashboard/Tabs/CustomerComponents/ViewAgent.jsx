import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Select from 'react-select';
import AddAgent from "./AddAgent";
import axios from 'axios';

const ViewAgent = () => {
  const [agentData, setAgentData] = useState([]);
  const [errorText, setErrorText] = useState(false);
  const [viewAgent, setViewAgent] = useState(true);
  const [addAgent, setAddAgent] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/agents/');
      if (Array.isArray(response.data)) {
        setAgentData(response.data);
      } else {
        setData([]);
        console.error('Fetched data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching agent data:', error);
    }
  };

  const handleSearch = () => {
    const filteredData = agentData.filter(item =>
      item.agent_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setData(agentData);
  };

  const [data, setData] = useState(agentData);

  const handleAddAgent = () => {
    setViewAgent(false);
    setAddAgent(true);
  };

  return (
    <div>
      { viewAgent && 
      <div className='py-10 roboto '>
      <div className="head flex justify-between mx-5">
        <h3 className='text-2xl font-bold'>View Agent</h3>
      </div>

      <div >
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex gap-2 my-10 mx-7 items-center">
              <label htmlFor="" className='text-lg font-bold'>Enter Agent Name:</label>
              <div className="">
                  <Select
                    options={agentData.map((item) => ({ value: item.agent_name, label: item.agent_name }))}
                    value={{ value: searchTerm, label: searchTerm }}
                    onChange={(selectedOption) => setSearchTerm(selectedOption.value)}
                    isSearchable
                    placeholder="Select Agent name"
                    className='outline-none p-2 w-[300px] rounded '
                  />
                  {errorText && <p className="text-red-600">Please enter agent name</p>}
                </div>

              <div className="flex gap-3 justify-center items-center my-10">
                <button className=' text-white bg-[#4e9352] rounded-xl py-2 px-10' onClick={handleSearch} >View</button>
                <button className=' text-white bg-[#4e9352] rounded-xl py-2 px-10' onClick={handleAddAgent} >Add Agent</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={`moreInfo my-10 mx-5 `}>
          <div className="table overflow-x-auto my-10">
          <table className="border border-collapse">
            <thead>
              <tr className="grid grid-cols-6 border">
                <th className=" border border-black bg-yellow-100 py-2 px-4">Agent ID</th>
                <th className=" border border-black bg-yellow-100 py-2 px-4">Agent Name</th>
                <th className=" border border-black bg-yellow-100 py-2 px-4">Contact Person</th>
                <th className=" border border-black bg-yellow-100 py-2 px-4">Email</th>
                <th className=" border border-black bg-yellow-100 py-2 px-4">Phone</th>
                <th className=" border border-black bg-yellow-100 py-2 px-4">Address</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.map((rowData, index) => (
                <tr key={index} className="grid grid-cols-6">
                  <td className="border border-black px-4 py-2">{rowData.agent_id}</td>
                  <td className="border border-black px-4 py-2">{rowData.agent_name}</td>
                  <td className="border border-black px-4 py-2">{rowData.contact_person}</td>       
                  <td className="border border-black px-2 text-sm py-2">{rowData.email}</td>
                  <td className="border border-black px-4 py-2">{rowData.phone}</td>
                  <td className="border border-black px-4 py-2">{rowData.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col justify-end items-end my-10">
            <button className=' text-white bg-[#4e9352] rounded-md py-1 px-10' onClick={resetSearch} >Back</button>
          </div>
        </div>
      </div>
    </div> }
    { addAgent && <AddAgent/> }
    </div>
  );
};

export default ViewAgent;
