import React from 'react'
import ThroughputMetrics from './YardReportTables/ThroughputMetrics'
import GateStatus from './YardReportTables/GateStatus'
import InboundGateEntry from './YardReportTables/InboundGateEntry'
import GateStatus2 from './YardReportTables/GateStatus2'

const CurrentQueueStatus = () => {
  return (
    <div className='mx-5 my-10'>
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
    </div>
  )
}

export default CurrentQueueStatus