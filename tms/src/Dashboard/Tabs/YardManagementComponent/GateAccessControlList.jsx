import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable'

const GateAccessControlList = ({ }) => { 
  const data = [
    {
      dateAndTime: '2024-03-15', gateEntryPoint: 'Gate A', securityOfficerName: 'John Doe', securityOfficerId: '12345', trailerNumber: 'TR123', vehicleType: 'Truck', 
      driverName: 'Jane Smith', company: 'ABC Logistics', idVerfication: 'Verfied', accessType: 'Entry', 
      exitTime: '09:00 - 18:00', sections: 'Loading Area', reasonForAccess: 'Delivery', purposeOfVisit: 'Supplier Visit',
      destination: 'warehouse 1', securityCheckpoint1: 'Checkpoint 1', inspectionResult: 'passed', securityCheckpoint2: 'Checkpoint 2',
      verificationResult: 'Passed', accessGrant: 'Yes', AccessDeniedReason: '-'
    },
    {
      dateAndTime: '2024-03-15', gateEntryPoint: 'Gate A', securityOfficerName: 'John Doe', securityOfficerId: '12345', trailerNumber: 'TR123', vehicleType: 'Truck', 
      driverName: 'Jane Smith', company: 'ABC Logistics', idVerfication: 'Verfied', accessType: 'Entry', 
      exitTime: '09:00 - 18:00', sections: 'Loading Area', reasonForAccess: 'Delivery', purposeOfVisit: 'Supplier Visit',
      destination: 'warehouse 1', securityCheckpoint1: 'Checkpoint 1', inspectionResult: 'passed', securityCheckpoint2: 'Checkpoint 2',
      verificationResult: 'Passed', accessGrant: 'Yes', AccessDeniedReason: '-'
    },
    {
      dateAndTime: '2024-03-15', gateEntryPoint: 'Gate A', securityOfficerName: 'John Doe', securityOfficerId: '12345', trailerNumber: 'TR123', vehicleType: 'Truck', 
      driverName: 'Jane Smith', company: 'ABC Logistics', idVerfication: 'Verfied', accessType: 'Entry', 
      exitTime: '09:00 - 18:00', sections: 'Loading Area', reasonForAccess: 'Delivery', purposeOfVisit: 'Supplier Visit',
      destination: 'warehouse 1', securityCheckpoint1: 'Checkpoint 1', inspectionResult: 'passed', securityCheckpoint2: 'Checkpoint 2',
      verificationResult: 'Passed', accessGrant: 'Yes', AccessDeniedReason: '-'
    },
    {
      dateAndTime: '2024-03-15', gateEntryPoint: 'Gate A', securityOfficerName: 'John Doe', securityOfficerId: '12345', trailerNumber: 'TR123', vehicleType: 'Truck', 
      driverName: 'Jane Smith', company: 'ABC Logistics', idVerfication: 'Verfied', accessType: 'Entry', 
      exitTime: '09:00 - 18:00', sections: 'Loading Area', reasonForAccess: 'Delivery', purposeOfVisit: 'Supplier Visit',
      destination: 'warehouse 1', securityCheckpoint1: 'Checkpoint 1', inspectionResult: 'passed', securityCheckpoint2: 'Checkpoint 2',
      verificationResult: 'Passed', accessGrant: 'Yes', AccessDeniedReason: '-'
    },
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
    doc.save('access_control_list.pdf');
  };

  return (
    <div className='my-10 poppins overflow-x-scroll' >
      <div className=''>
        <div className="m-5 " ref={componentRef}>
        <h2 className="text-2xl font-bold mb-4" >Gate Access Control Report</h2>
          <div className="table-container overflow-x-scroll w-[220%]">
            <table className="border-collapse border border-gray-800 ">
              <thead className=''>
                <tr className="bg-gray-200">
                  <th className="border border-gray-800 px-2 py-2">Date & Time of Access</th>
                  <th className="border border-gray-800 px-2 py-2">Gate/Entry Point</th>
                  <th className="border border-gray-800 px-2 py-2">Security Officer Name</th>
                  <th className="border border-gray-800 px-2 py-2">Security Officer ID/Number</th>
                  <th className="border border-gray-800 px-2 py-2">Vehicle Type</th>
                  <th className="border border-gray-800 px-2 py-2">Trailer Number</th>
                  <th className="border border-gray-800 px-2 py-2">Driver's Name</th>
                  <th className="border border-gray-800 px-2 py-2">Company/Organization</th>
                  <th className="border border-gray-800 px-2 py-2">ID Verification</th>
                  <th className="border border-gray-800 px-2 py-2">Access Type</th>
                  <th className="border border-gray-800 px-2 py-2">Authorized Entry/Exit Time</th>
                  <th className="border border-gray-800 px-2 py-2">Authorized Areas/Sections</th>
                  <th className="border border-gray-800 px-2 py-2">Reason for Access</th>
                  <th className="border border-gray-800 px-2 py-2">Purpose of Visit</th>
                  <th className="border border-gray-800 px-2 py-2">Destination</th>
                  <th className="border border-gray-800 px-2 py-2">Security Checkpoint 1</th>
                  <th className="border border-gray-800 px-2 py-2">Inspection Result</th>
                  <th className="border border-gray-800 px-2 py-2">Security Checkpoint 2</th>
                  <th className="border border-gray-800 px-2 py-2">Verification Result</th>
                  <th className="border border-gray-800 px-2 py-2">Access Granted</th>
                  <th className="border border-gray-800 px-2 py-2">Access Denied Reason</th>
                </tr>
              </thead>
              <tbody>
                {data.map((rowData, index) => (
                  <tr key={index} className="">
                    <td className="border border-gray-800 px-3 py-2">{rowData.dateAndTime}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.gateEntryPoint}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.securityOfficerName}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.securityOfficerId}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.vehicleType}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.trailerNumber}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.driverName}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.company}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.idVerfication}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.accessType}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.exitTime}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.sections}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.reasonForAccess}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.purposeOfVisit}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.destination}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.securityCheckpoint1}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.inspectionResult}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.securityCheckpoint2}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.verificationResult}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.accessGrant}</td>
                    <td className="border border-gray-800 px-3 py-2">{rowData.AccessDeniedReason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="buttons flex justify-start items-center gap-10 mx-5 my-20 text-white">
          <button onClick={handlePrint} className='bg-[#4e9352] hover:bg-[#307234] transition-all px-10 py-2 rounded-lg'>Print</button>
          <CSVLink data={handleExportCSV().data} headers={handleExportCSV().headers} filename={"container_list.csv"}>
            <p className=' py-1 cursor-pointer rounded-full text-green-700 underline font-semibold'>Export as CSV</p>
          </CSVLink>
          <button onClick={handleExportPDF} className=' py-1 cursor-pointer rounded-full text-green-700 underline font-semibold'>Export as PDF</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default GateAccessControlList;
