import React from 'react'

const Figures = () => {
  return (
    <div className=' m-10'>
        <h3 className='poppins text-xl font-bold my-5'>Quick Overview:</h3>
        <div className="flex gap-5 justify-between">
            <div className="bg-[#d2f1e5] poppins text-[#004B50] p-8 rounded-2xl w-[300.55px] h-[268px]">
                <div className="top flex font-semibold text-sm gap-6">
                    <p className='w-[200px]'>Received Today</p>
                    <p className='font-normal'><span className='font-semibold'>+2.6%</span> than last month</p>
                </div>
                {/* <img src={gate} alt="" /> */}
                <p className="text-4xl font-bold ">N18,765,008</p>
            </div>

            <div className="bg-[#fff2d4] poppins text-[#003768] p-8 rounded-2xl w-[300.55px] h-[268px]">
                <div className="top flex font-semibold text-sm gap-6">
                    <p className='w-[200px]'>Received Today</p>
                    <p className='font-normal'><span className='font-semibold'>+2.6%</span> than last month</p>
                </div>
                {/* <img src={gate} alt="" /> */}
                <p className="text-4xl font-bold ">N18,765,008</p>
            </div>

            <div className="bg-[#d2f2e5] poppins text-[#7A4100] p-8 rounded-2xl w-[300.55px] h-[268px]">
                <div className="top flex font-semibold text-sm gap-6">
                    <p className='w-[200px]'>Received Today</p>
                    <p className='font-normal'><span className='font-semibold'>+2.6%</span> than last month</p>
                </div>
                {/* <img src={gate} alt="" /> */}
                <p className="text-4xl font-bold ">N18,765,008</p>
            </div>
        </div>
    </div>
  )
}

export default Figures