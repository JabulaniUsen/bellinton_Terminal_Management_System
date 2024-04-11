import React from 'react'

const ReportDate = () => {
  return (
    <div>
        <div className="flex justify-between items-center w-[65%] my-5">
            <label htmlFor="emptyGateOutDate" className="block font-semibold text-base">Report Date: </label>
          <input type='date' className='border-gray-400 border-[1px] rounded-lg p-2 w-[400px]' required id="" name="" />
        </div>
    </div>
  )
}

export default ReportDate