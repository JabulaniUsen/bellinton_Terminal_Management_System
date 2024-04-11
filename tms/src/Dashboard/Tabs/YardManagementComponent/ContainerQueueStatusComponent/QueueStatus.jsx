import React from 'react'

const QueueStatus = () => {
  return (
    <div className='w-[60%]'>
        <h3 className='font-bold mb-2'>Queue Status</h3>
        <div className="">
            <ul className='list-disc ml-3'>
                <li className='flex items-center justify-between gap-10'> 
                    <p>•  Total Container in Queue:</p>
                    <p>89</p>
                </li>
                <li className='flex items-center justify-between gap-10'> 
                    <p>•  Average Queue Waiting Time:</p>
                    <p>05:07:00pm</p>
                </li>
                <li className='flex items-center justify-between gap-10'> 
                    <p>•  Average Container Processing Time: </p>
                    <p>05:45:00pm</p>
                </li>
                <li className='flex items-center justify-between gap-10'> 
                    <p>•  Estimated Time of Next Container Assignment: </p>
                    <p>06:15:00pm</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default QueueStatus