import React from 'react'
import DciChart from './DciChart'
import Yup from './Yup'

const ChartSection = () => {
  return (
    <div className='flex gap-5 py-10 m-10 items-center'>
      <DciChart/>
      <Yup/>
    </div>
  )
}

export default ChartSection