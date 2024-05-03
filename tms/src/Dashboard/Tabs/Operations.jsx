import React from 'react'
import QuickOverview from './OperationsComponents/QuickOverview'
import Intro from '../Components/Intro'
import Statistics from './OperationsComponents/Statistics'
import ChartSection from './OperationsComponents/Charts'
function Operations() {
  return (
    <div>
      <Intro/>
      <QuickOverview/>
      <Statistics/>
      {/* <ChartSection/> */}
    </div>
  )
}

export default Operations