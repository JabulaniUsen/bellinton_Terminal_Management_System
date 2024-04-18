import React, {useState} from 'react'
import { useReactToPrint } from 'react-to-print';
import InvoiceManagement from './InvoiceManagement'

const PaymentReport = () => {
    const componentRef = React.useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    const tirData = [
        {containerId: 'CON123456', status: 'In Transit', location: 'Dock 3', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Andeles', assignedVessel: 'Vessel 123'},
        {containerId: 'CON234567', status: 'In Yard', location: 'Store area 5', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Andeles', assignedVessel: 'Vessel 456'},
        {containerId: 'CON345678', status: 'Loaded', location: 'Vessel 123', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Andeles', assignedVessel: 'Vessel 789'},
        {containerId: 'CON456789', status: 'In Transit', location: 'En Route', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Andeles', assignedVessel: 'Vessel 458'},
        {containerId: 'CON567890', status: 'In Transit', location: 'Dock 2', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Andeles', assignedVessel: 'Vessel 789'},
        {containerId: 'CON678901', status: 'In Transit', location: 'Dock 3', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Andeles', assignedVessel: 'Vessel 637'},
        {containerId: 'CON789012', status: 'In Transit', location: 'Dock 3', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Andeles', assignedVessel: 'Vessel 243'},
        {containerId: 'CON8901234', status: 'In Transit', location: 'Dock 3', lastUpdated: '2024-02-17 09:45 AM', nextDestination: 'Port of Los Andeles', assignedVessel: 'Vessel 243'},
    ]
  return (
    <div className="">
       <div className='m-10'>
        <div className="table mt-8 m-10" ref={componentRef}>
            <div className="head mb-10">
                <h2 className='font-bold text-2xl'>Terminal Payment Report</h2>
            </div>
            <table className="border-collapse ">
                <thead>
                    <tr className='border border-gray-400 font-semibold'>
                        <th className="border border-gray-400 p-2 px-3 text-center">Container ID</th>
                        <th className="border border-gray-400 p-2 px-3">Status</th>
                        <th className="border border-gray-400 p-2 px-3">Location</th>
                        <th className="border border-gray-400 p-2 px-3">Last Updated</th>
                        <th className="border border-gray-400 p-2 px-3">Next Destination</th>
                        <th className="border border-gray-400 p-2 px-3">Assigned Vessel</th>
                    </tr>
                </thead>
                <tbody>
                    {tirData.map((row, index) => (
                        <tr key={index}>
                             <td className="border border-gray-400 p-2">{row.containerId}</td>
                            <td className="border border-gray-400 p-2 px-3">{row.status}</td>
                            <td className="border border-gray-400 p-2 px-3">{row.location}.00</td>
                            <td className="border border-gray-400 p-2 px-3">{row.lastUpdated}</td>
                            <td className="border border-gray-400 p-2 px-3">{row.nextDestination}</td>
                            <td className="border border-gray-400 p-2 px-3">{row.assignedVessel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        <div className="flex gap-3 justify-center">
            <button className='text-white px-7 py-2 rounded-md bg-blue-700 my-20' onClick={handlePrint}>Print</button>
        </div>
    </div>
    </div>
  )
}

export default PaymentReport