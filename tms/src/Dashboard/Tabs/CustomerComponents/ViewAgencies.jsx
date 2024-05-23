import { useState, useEffect } from "react";
import Select from 'react-select';
import axios from 'axios';
import AddAgencies from "./AddAgencies";

const ViewAgencies = () => {
  const [errorText, setErrorText] = useState(false);
  const [viewAgencies, setViewAgencies] = useState(true);
  const [addAgencies, setAddAgencies] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAgencies();
  }, []);

  const fetchAgencies = async () => {
    try {
      const response = await axios.get('https://exprosys-backend.onrender.com/api/v1/agency-list/');
      console.log('Response data:', response.data); // Log the response data for debugging
      if (response.data && Array.isArray(response.data.results)) {
        setData(response.data.results);
      } else {
        setData([]);
        console.error('Fetched data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching agencies:', error);
      setData([]);
    }
  };

  const handleSearch = () => {
    const filteredData = data.filter(item =>
      item.agency_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  const resetSearch = () => {
    setSearchTerm('');
    fetchAgencies(); // Re-fetch agencies to reset the data
  };

  const handleAddAgencies = () => {
    setViewAgencies(false);
    setAddAgencies(true);
  };

  return (
    <div>
      {viewAgencies && (
        <div className="py-10 roboto">
          <div className="head flex justify-between mx-5">
            <h3 className="text-2xl font-bold">View Agency</h3>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex gap-2 my-10 mx-7 items-center">
                  <label htmlFor="" className="text-lg font-bold">Enter Agency Name:</label>
                  <div>
                    <Select
                      options={data.map((item) => ({ value: item.agency_name, label: item.agency_name }))}
                      value={searchTerm ? { value: searchTerm, label: searchTerm } : null}
                      onChange={(selectedOption) => setSearchTerm(selectedOption ? selectedOption.value : '')}
                      isSearchable
                      placeholder="Select Agency name"
                      className="outline-none p-2 w-[300px] rounded"
                    />
                    {errorText && <p className="text-red-600">Please enter agency name</p>}
                  </div>

                  <div className="flex gap-3 justify-center items-center my-10">
                    <button className="text-white bg-[#4e9352] rounded-xl py-2 px-10" onClick={handleSearch}>View</button>
                    <button className="text-white bg-[#4e9352] rounded-xl py-2 px-10" onClick={handleAddAgencies}>Add Agency</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="moreInfo my-10 mx-5">
            <div className="table overflow-x-auto my-10">
              <table className="border border-collapse">
                <thead>
                  <tr className="border border-black">
                    <th className="border border-black bg-yellow-100 py-2 px-4">Agency ID</th>
                    <th className="border border-black bg-yellow-100 py-2 px-4">Agency Name</th>
                    <th className="border border-black bg-yellow-100 py-2 px-4">Contact Person</th>
                    <th className="border border-black bg-yellow-100 py-2 px-4">Email</th>
                    <th className="border border-black bg-yellow-100 py-2 px-4">Phone</th>
                    <th className="border border-black bg-yellow-100 py-2 px-4">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(data) && data.map((rowData, index) => (
                    <tr key={index}>
                      <td className="border border-black px-4 py-2">{rowData.agency_id}</td>
                      <td className="border border-black px-4 py-2">{rowData.agency_name}</td>
                      <td className="border border-black px-4 py-2">{rowData.contact_person}</td>
                      <td className="border border-black px-2 text-sm py-2">{rowData.email}</td>
                      <td className="border border-black px-4 py-2">{rowData.phone_number}</td>
                      <td className="border border-black px-4 py-2">{rowData.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-col justify-end items-end my-10">
                <button className="text-white bg-[#4e9352] rounded-md py-1 px-10" onClick={resetSearch}>Back</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {addAgencies && <AddAgencies />}
    </div>
  );
};

export default ViewAgencies;
