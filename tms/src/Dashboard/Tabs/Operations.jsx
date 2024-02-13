import React from 'react'
import QuickOverview from './OperationsComponents/QuickOverview'
import Intro from '../Components/Intro'
import Statistics from './OperationsComponents/Statistics'
import InputOutput from './OperationsComponents/InputOutput'
function Operations() {
  return (
    <div>
      <Intro/>
      <QuickOverview/>
      <Statistics/>
      <InputOutput/>
    </div>
  )
}

export default Operations