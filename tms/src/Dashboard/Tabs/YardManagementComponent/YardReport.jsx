import React from 'react'
import ThroughputMetrics from './YardReportTables/ThroughputMetrics'
import GateStatus from './YardReportTables/GateStatus'
import InboundGateEntry from './YardReportTables/InboundGateEntry'
import GateStatus2 from './YardReportTables/GateStatus2'

const YardReport = () => {
  return (
    <div className='mx-5 my-10'>
      <div className="flex justify-between flex-wrap gap-10">
        <ThroughputMetrics/>
        <GateStatus/>
      </div>
      <div className="mt-10 flex justify-between flex-wrap gap-10">
        <InboundGateEntry/>
        <GateStatus2/>
      </div>
    </div>
  )
}

export default YardReport