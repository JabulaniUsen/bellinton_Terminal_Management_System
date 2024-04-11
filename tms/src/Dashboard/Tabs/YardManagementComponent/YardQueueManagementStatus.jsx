import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';

const YardQueueManagementStatus = () => {
  const componentRef = useRef();

  const data = [
    { containerNo: 'CON123', destination: 'Port A',  mergeDestination: 'Port A', assignedTruck: 'TRK782', assignedDriver: 'John Smith', priority: 'High', notes: 'Electronic'},
    { containerNo: 'CON235', destination: 'Port B',  mergeDestination: 'Port B', assignedTruck: 'TRK782', assignedDriver: 'Emily Johnson', priority: 'Medium', notes: 'Automotive Parts'},
    { containerNo: 'CON345', destination: 'Port C',  mergeDestination: 'Port C', assignedTruck: 'TRK782', assignedDriver: 'Sarah Lee', priority: 'Low', notes: 'Chemicals'},
  ];


  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Yard Queue Management Status', 10, 10);
    doc.save('yard_queue_management_status.pdf');
  };

  return (
    <div className='m-10 flex flex-col'>
      <div className="m-5" ref={componentRef}>
        <div className="header py-5 border-t-2">
            <h2 className='text-2xl font-bold'>Current Queue Status</h2>
        </div>
        <div className="reportDate py-5 border-t-2">
            <div className="flex justify-between items-center w-[65%] my-5">
                <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Report Date: </label>
                <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="" name="" />
            </div>
        </div>
        <div className="containerAssignment py-5 border-t-2">
            <div className='poppins'>
                <div className=''>
                <h2 className='font-semibold mb-2'>Container Assignments</h2>
                <table className='border-collapse border border-gray-800 '>
                <thead>
                    <tr className='bg-gray-200'>
                    <th className='border border-gray-800 px-2 py-1'>Container Number</th>
                    <th className='border border-gray-800 px-2 py-1'>Destination</th>
                    <th className='border border-gray-800 px-2 py-1'>Assigned Truck</th>
                    <th className='border border-gray-800 px-2 py-1'>Driver Name</th>
                    <th className='border border-gray-800 px-2 py-1'>Priority</th>
                    <th className='border border-gray-800 px-2 py-1'>Notes/Instructions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                    <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                        <td className='border border-gray-800 px-2 py-1'>{row.containerNo}</td>
                        <td className='border border-gray-800 px-2 py-1'>{row.destination}</td>
                        <td className='border border-gray-800 px-2 py-1'>{row.assignedTruck}</td>
                        <td className='border border-gray-800 px-2 py-1'>{row.assignedDriver}</td>
                        <td className='border border-gray-800 px-2 py-1'>{row.priority}</td>
                        <td className='border border-gray-800 px-2 py-1'>{row.notes}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className="mergeContainer py-5 border-t-2">
            <div className='poppins'>
                <div className=''>
                <h2 className='font-semibold mb-2'>Merge Containers</h2>
                <table className='border-collapse border border-gray-800 '>
                <thead>
                    <tr className='bg-gray-200'>
                    <th className='border border-gray-800 px-2 py-1'>mergeDestination</th>
                    <th className='border border-gray-800 px-2 py-1'>Assigned Truck</th>
                    <th className='border border-gray-800 px-2 py-1'>Driver Name</th>
                    <th className='border border-gray-800 px-2 py-1'>Notes/Instructions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                    <tr key={index} className='hover:bg-[#dbbfff] hover:text-[#351959] font-semibold'>
                        <td className='border border-gray-800 px-2 py-1'>{row.mergeDestination}</td>
                        <td className='border border-gray-800 px-2 py-1'>{row.assignedTruck}</td>
                        <td className='border border-gray-800 px-2 py-1'>{row.assignedDriver}</td>
                        <td className='border border-gray-800 px-2 py-1'>{row.notes}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className="queueStatus py-5 border-t-2">
            <div className='w-[60%]'>
                <h3 className='font-bold mb-2'>Queue Status</h3>
                <div className="">
                    <ul className='list-disc ml-3'>
                        <li className='flex items-center justify-between gap-10'> 
                            <p>•  Total Container in Queue:</p>
                            <p>89</p>
                        </li>
                        <li className='flex items-center justify-between gap-10'> 
                            <p>•  Average Queue Waiting Time:</p>
                            <p>05:07:00pm</p>
                        </li>
                        <li className='flex items-center justify-between gap-10'> 
                            <p>•  Average Container Processing Time: </p>
                            <p>05:45:00pm</p>
                        </li>
                        <li className='flex items-center justify-between gap-10'> 
                            <p>•  Estimated Time of Next Container Assignment: </p>
                            <p>06:15:00pm</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <div className="buttons flex w-[70%] gap-3 mx-[200px] mt-10">
        <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handlePrint}>Print</button>
        <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleExportPDF}>Export PDF</button>
        <CSVLink data={data} filename={"yard_queue_management.csv"}>
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10'>Export CSV</button>
        </CSVLink>
      </div>
    </div>
  );
}

export default YardQueueManagementStatus;
