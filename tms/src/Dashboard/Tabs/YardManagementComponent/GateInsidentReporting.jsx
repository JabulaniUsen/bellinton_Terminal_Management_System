import React, {useState, useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const GateInsidentReporting = ({ incidentData, handleBack }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [Object.keys(incidentData)],
      body: [Object.values(incidentData)],
    });
    doc.save('Gate_incident_report.pdf');
  };

  return (
    <div className='m-10 poppins' ref={componentRef}>
      <h2 className="text-2xl font-bold mb-4">Gate Incident Reporting</h2>
      <div className='my-10'>
        <div className="">
            <h3 className='text-lg font-semibold my-3'>Incident Details:</h3>
            <ul className='list-disc ml-8'>
                <li>Incident Type</li>
                <li>Incident Date and Time: {incidentData.date} {incidentData.time}</li>
                <li>Incident Location: {incidentData.location}</li>
                <li>Incident Description: {incidentData.desc}</li>
            </ul>
        </div>
        <div className="">
            <h3 className='text-lg font-semibold my-3'>Involved Parties:</h3>
            <ul className='list-disc ml-8'>
                <li>Name(s) of Involved Party(s): {incidentData.reportBy}</li>
                <li>Affiliation/Company: </li>
                <li>Contact Information:</li>
            </ul>
        </div>
        <div className="">
            <h3 className='text-lg font-semibold my-3'>Witness Information</h3>
            <ul className='list-disc ml-8'>
                <li>Name(s) of Involved Party(s): {incidentData.reportBy}</li>
                <li>Contact Information (phone/email): </li>
            </ul>
        </div>
        <div className="">
            <h3 className='text-lg font-semibold my-3'>Vehicle/Equipment Detail</h3>
            <ul className='list-disc ml-8'>
                <li>Vehicle/Equipment Involved: </li>
                <li>License Plate/ID Number: </li>
                <li>Description of Vehicle/Equipment:</li>
            </ul>
        </div>

        <div className="">
            <h3 className='text-lg font-semibold my-3'>Injury/Damage Information:</h3>
            <ul className='list-disc ml-8'>
                <li>Description of Injuries/Damage: </li>
                <li>Severity of Injuries/Damages: </li>
                <li>Property Damage (Yes/No):</li>
            </ul>
        </div>

        <div className="">
            <h3 className='text-lg font-semibold my-3'>Security Information</h3>
            <ul className='list-disc ml-8'>
                <li>Security Response: </li>
                <li>Security Measures Implemented: </li>
            </ul>
        </div>

        <div className="">
            <h3 className='text-lg font-semibold my-3'>Investigation Details</h3>
            <ul className='list-disc ml-8'>
                <li>Investigating Officer/Team: </li>
                <li>Investigation Findings: </li>
            </ul>
        </div>

        <div className="">
            <h3 className='text-lg font-semibold my-3'>Additional Comments or Notes</h3>
            <ul className='list-disc ml-8'>
                <li>Security personnel responded promptly and prevented unauthorized access to the terminal premises.</li>
                <li>Additional security measures have been implemented to prevent similar incidents in the future.</li>
            </ul>
        </div>


      </div>
      <div className="buttons flex justify-center items-center gap-10 my-20 text-white">
        <button onClick={handlePrint} className='bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-10 py-2 rounded-lg'>Print</button>
        <button onClick={handleExportPDF} className=' py-1 cursor-pointer rounded-full text-blue-700 underline font-semibold'>Export as PDF</button>
        <button onClick={handleBack} className='bg-[#20007f] hover:bg-[#1b0b4e] transition-all px-10 py-2 rounded-lg'>Back</button>
      </div>
    </div>
  );
}

export default GateInsidentReporting;
