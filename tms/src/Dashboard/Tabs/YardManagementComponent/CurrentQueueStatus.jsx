import React, {useRef} from 'react'
import ThroughputMetrics from './YardReportTables/ThroughputMetrics'
import GateStatus from './YardReportTables/GateStatus'
import GateStatus2 from './YardReportTables/GateStatus2'
import html2pdf from 'html2pdf.js';

const CurrentQueueStatus = () => {
    const contentRef = useRef();

    const handleExportPDF = () => {
      const element = contentRef.current;
      const opt = {
        margin: 1,
        filename: 'queue-status.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().from(element).set(opt).save();
    };


  return (
    <div className='mx-5 my-10' ref={contentRef}>
        <div className="header mt-7 mb-5">
            <h2 className='font-bold text-2xl'>Truck Queue Management</h2>
        </div>
        <div className="border-t border-b py-4 flex items-center gap-20">
            <label htmlFor="Report Date" className='font-semibold'>Report Date:</label>
            <input type="date" className='border px-3 border-black rounded py-1' />
        </div>
      <div className="flex justify-between flex-wrap gap-10">
        <ThroughputMetrics/>
        <GateStatus/>
      </div>
      <div className="mt-10 flex justify-between flex-wrap gap-10">
        <GateStatus2/>
      </div>
      <div className="buttons flex items-center justify-center mt-10 gap-5">
        <button className='text-white bg-[#4e9352] rounded-md py-1 px-10' onClick={() => window.print()}>Print</button>
        <button className='text-[#4e9352] font-semibold underline' onClick={handleExportPDF}>Export file</button>
      </div>
    </div>
  )
}

export default CurrentQueueStatus