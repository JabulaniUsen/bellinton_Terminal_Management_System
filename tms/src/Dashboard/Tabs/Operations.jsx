import React from 'react'
import QuickOverview from './OperationsComponents/QuickOverview'
import Intro from '../Components/Intro'
import Statistics from './OperationsComponents/Statistics'
function Operations() {
  return (
    <div>
      <Intro/>
      <QuickOverview/>
      <Statistics/>
    </div>
  )
}

export default Operations