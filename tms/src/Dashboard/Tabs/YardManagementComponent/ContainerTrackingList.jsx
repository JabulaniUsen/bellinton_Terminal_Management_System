import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
// import 'jspdf-autotable';
import 'jspdf-autotable'

const ContainerTrackingList = ({ }) => {
  const data = [
    { containerNo: 'CN172873', status: 'In Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel123' },
    { containerNo: 'CN127832', status: 'In Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel1456' },
    { containerNo: 'CN127832', status: 'Not in Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel789' },
    { containerNo: 'CN172873', status: 'In Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel123' },
    { containerNo: 'CN127832', status: 'In Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel1456' },
    { containerNo: 'CN127832', status: 'Not in Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel789' },
    { containerNo: 'CN172873', status: 'In Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel123' },
    { containerNo: 'CN127832', status: 'In Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel1456' },
    { containerNo: 'CN127832', status: 'Not in Yard', location: 'Stacking Area 1', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Angeles', assignedVessel: 'Vessel789' },
  ];
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleExportCSV = () => {
    const headers = Object.keys(data[0]);
    const csvData = data.map((row) => Object.values(row));
    const csvReport = {
      headers: headers,
      data: csvData,
    };
    return csvReport;
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [Object.keys(data[0])],
      body: data.map((row) => Object.values(row)),
    });
    doc.save('container_list.pdf');
  };

  return (
    <div className='m-10 poppins'>
      <h2 className="text-2xl font-bold mb-4">Container Tracking</h2>
      <div className=''>
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
                {data.map((rowData, index) => (
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
        <div className="buttons flex justify-center items-center gap-10 my-20 text-white">
          <button onClick={handlePrint} className='bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-10 py-2 rounded-lg'>Print</button>
          <CSVLink data={handleExportCSV().data} headers={handleExportCSV().headers} filename={"container_list.csv"}>
            <p className=' py-1 cursor-pointer rounded-full text-blue-700 underline font-semibold'>Export as CSV</p>
          </CSVLink>
          <button onClick={handleExportPDF} className=' py-1 cursor-pointer rounded-full text-blue-700 underline font-semibold'>Export as PDF</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ContainerTrackingList;
