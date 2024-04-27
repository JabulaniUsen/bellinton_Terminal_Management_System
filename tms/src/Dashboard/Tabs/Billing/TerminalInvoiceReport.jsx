import React, {useState} from 'react'
import { useReactToPrint } from 'react-to-print';
import InvoiceManagement from './InvoiceManagement'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const TerminalInvoiceReport = () => {
    const componentRef = React.useRef();
    const [showInvoiceManagement, setShowInvoiceManagement] = useState(false)

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

      const exportAsPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
          head: [Object.keys(tirData[0])],
          body: tirData.map((row) => Object.values(row)),
        });
        doc.save('terminal_invoice_report.pdf');
      };
    
      const exportAsCSV = () => {
        const csvContent =
          'data:text/csv;charset=utf-8,' +
          tirData.map((row) => Object.values(row).join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'terminal_invoice_report.csv');
        document.body.appendChild(link);
        link.click();
      };

  return (
    <div className="">
        {!showInvoiceManagement ? (<div className='m-10'>
        <div className="table mt-8 m-10" ref={componentRef}>
            <div className="head mb-10">
                <h2 className='font-bold text-2xl'>Terminal Invoice Report</h2>
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
        
        <div className="flex gap-3 ml-10">
            <button className='text-white py-1 px-10 rounded-md bg-[#4000FF]' onClick={() => {setShowInvoiceManagement(true)}}>Invoice Managment</button>
            <button className='text-white py-1 px-10 rounded-md bg-[#4000FF]' onClick={handlePrint}>Print</button>
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={exportAsCSV}>Export as CSV</button>
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={exportAsPDF}>Export as PDF</button>
        </div>
    </div>) : (
        <InvoiceManagement/>
    )}
    </div>
  )
}

export default TerminalInvoiceReport