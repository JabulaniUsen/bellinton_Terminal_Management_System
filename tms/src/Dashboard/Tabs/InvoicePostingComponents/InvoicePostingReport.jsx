import { useEffect, useState } from "react";
import Select from 'react-select';
import axios from 'axios';

const InvoicePostingReport = () => {
  const [showManifestData, setShowManifestData] = useState(true);
  const [container_id, setContainer_id] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [viewCustomer, setViewCustomer] = useState(true);
  const [addCustomer, setAddCustomer] = useState(false);
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVesselDetails, setSelectedVesselDetails] = useState(null);

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await axios.get(`https://exprosys-backend.onrender.com/api/v1/invoice-posting-report/${container_id}/`);
        if (Array.isArray(response.data.results)) {
            setInitialData(response.data.results);
            setData(response.data.results);
            console.log(response.data.results);
          } else if (response.data.results && typeof response.data.results === 'object') {
            setInitialData([response.data.results]);
            setData([response.data.results]);
            console.log(response.data.results);
          } else {
            console.error('Unexpected response data format:', response.data.results);
          }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchInvoiceData();
  }, [container_id]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setErrorText(true);
      return;
    }
    setErrorText(false);
    const filteredData = initialData.filter(item =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
    setMoreInfo(true);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setData(initialData);
    setMoreInfo(false);
  };

  const closeUploadBox = () => {
    setShowUpload(false);
  };

  const handleUpload = () => {
    setShowUpload(!showUpload);
  };

  const handleModalOK = () => {
    setUploadSuccess(false);
  };

  const closeDetailsBox = () => {
    setSelectedVesselDetails(null);
  };

  const handleAddCustomer = () => {
    setViewCustomer(false);
    setAddCustomer(true);
  };

  return (
    <div>
      <div className='py-10 roboto'>
        <div className="head flex justify-between mx-5">
          <h3 className='text-2xl font-bold'>View Invoice Posting Report</h3>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 my-10 mx-7 items-center">
              <label htmlFor="" className='text-lg font-bold'>Container No:</label>
              <Select
                options={initialData.map((item) => ({ value: item.container_id, label: item.container_id }))}
                value={searchTerm ? { value: searchTerm, label: searchTerm } : null}
                onChange={(selectedOption) => setSearchTerm(selectedOption.value)}
                isSearchable
                placeholder="Select Container No"
                className='outline-none p-2 w-[300px] rounded'
              />
              {errorText && <p className="text-red-600">Please enter container number</p>}
              <div className="flex gap-3 justify-center items-center my-10">
                <button className='text-white bg-[#4e9352] rounded py-2 px-10' onClick={handleSearch}>View Details</button>
                <button className='text-white bg-[#4e9352] rounded py-2 px-10' onClick={handleAddCustomer}>Post Export Invoice</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`moreInfo my-10 mx-5`}>
          {showManifestData && (
            <div className="table my-10">
              <table className="border border-collapse">
                <thead>
                  <tr className="border">
                    <th className="border border-black bg-yellow-100 px-4 py-2">Customer ID</th>
                    <th className="border border-black bg-yellow-100 px-4 py-2">Container Number</th>
                    <th className="border border-black bg-yellow-100 px-4 py-2">Contact Person</th>
                    <th className="border border-black bg-yellow-100 px-4 py-2">Email</th>
                    <th className="border border-black bg-yellow-100 px-4 py-2">Payment Status</th>
                    <th className="border border-black bg-yellow-100 px-4 py-2">Exporter</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((rowData, index) => (
                    <tr key={index}>
                      <td className="border border-black px-4 py-2">{rowData.id}</td>
                      <td className="border border-black px-4 py-2">{rowData.container_number}</td>
                      <td className="border border-black px-4 py-2">{rowData.contact_person}</td>
                      <td className="border border-black px-2 text-sm py-2">{rowData.email}</td>
                      <td className="border border-black px-4 py-2">{rowData.amount_payment_status}</td>
                      <td className="border border-black px-4 py-2">{rowData.exporter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-col justify-end items-end my-10">
                <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' onClick={resetSearch}>Back</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoicePostingReport;
