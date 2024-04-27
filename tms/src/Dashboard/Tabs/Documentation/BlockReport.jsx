import React, {useState, useRef} from 'react'
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const BlockReport = ({handleBack}) => {
    const data = [
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
        {date: '2020-12-15', cargoId: 'MRK898978', staff: 'Adekunle', reason: 'Custom Duty not fully paid'},
    ]

    const componentRef = useRef();

      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

      const exportAsPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
          head: [Object.keys(data[0])],
          body: data.map((row) => Object.values(row)),
        });
        doc.save('cargoblocking_report.pdf');
      };
    
      const exportAsCSV = () => {
        const csvContent =
          'data:text/csv;charset=utf-8,' +
          data.map((row) => Object.values(row).join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'cargoblocking_report.csv');
        document.body.appendChild(link);
        link.click();
      };


  return (
    <div className='m-5'>
        <div className="table text-sm m-5" ref={componentRef}>
            <h2 className="text-2xl font-bold mb-8 ">Cargo Blocking Report</h2>

            <table className='border-collapse border border-gray-800'>
                <thead>
                    <tr>
                        <th className='border border-gray-800 px-5 py-2'>Date</th>
                        <th className='border border-gray-800 px-5 py-2'>Cargo ID</th>
                        <th className='border border-gray-800 px-5 py-2'>Official/Staff</th>
                        <th className='border border-gray-800 px-5 py-2'>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map ((item, index) => (
                        <tr key={index}>
                            <td className='border border-gray-800 px-5 py-2'>{item.date}</td>
                            <td className='border border-gray-800 px-5 py-2'>{item.cargoId}</td>
                            <td className='border border-gray-800 px-5 py-2'>{item.staff}</td>
                            <td className='border border-gray-800 px-5 py-2'>{item.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="flex gap-3 items-center my-10 m-5 text-sm">
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handlePrint}>Print</button>
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={exportAsCSV}>Export as CSV</button>
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={exportAsPDF}>Export as PDF</button>
            <button className='text-white bg-[#4000FF] rounded-md py-1 px-10' onClick={handleBack}>Back</button>
        </div>
       
    </div>
  )
}

export default BlockReport