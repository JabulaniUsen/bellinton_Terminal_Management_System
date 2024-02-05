import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

const QuickOverview = () => {
  return (
    <div className=''>
        <div className="grid grid-cols-2">
            <div className="container-shadow rounded-3xl p-7 m-6">
                <h2 className='text-xl font-bold poppins'>Quick Overview</h2>
                <div className="flex flex-col">
                    <div className=" flex items-center gap-[4.9rem]">
                        <div className="my-4 ">
                            <p className='poppins font-semibold my-2 text-sm'>Containers Awaiting Delivery</p>
                            <div className="relative w-[245px] h-[7px] bg-[#c2eadd] rounded-full">
                                <span className='absolute w-[10.1%] rounded-full h-full bg-[#00A76F]'></span>
                            </div>
                        </div>
                        <div className="price">
                            <p className='font-semibold public-san'>$8,374 <span className='text-[#637381]'>(10.1%)</span></p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-[4.9rem]">
                        <div className="my-4 ">
                            <p className='poppins font-semibold my-2 text-sm'>Containers Awaiting Delivery</p>
                            <div className="relative w-[245px] h-[7px] bg-[#c2eef6] rounded-full">
                                <span className='absolute w-[13.6%] rounded-full h-full bg-[#00B8D9]'></span>
                            </div>
                        </div>
                        <div className="price">
                            <p className='font-semibold public-san'>$9,714 <span className='text-[#637381]'>(13.6%)</span></p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-[4.9rem]">
                        <div className="my-4 ">
                            <p className='poppins font-semibold my-2 text-sm'>Containers Awaiting Delivery</p>
                            <div className="relative w-[245px] h-[7px] bg-[#ffebc2] rounded-full">
                                <span className='absolute w-[28.2%] rounded-full h-full bg-[#FFAB00]'></span>
                            </div>
                        </div>
                        <div className="price">
                            <p className='font-semibold public-san'>$6,871 <span className='text-[#637381]'>(28.2%)</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="progressBar">
                    <div style={{ width: 300, height: 300 }}>
                        <CircularProgressbar 
                        value={66}
                        styles={buildStyles({
                            // Colors
                            pathColor: 'linear-gradient(90deg, #4000ff, #212b36)',
                            trailColor: '#edeff2',
                        })}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickOverview