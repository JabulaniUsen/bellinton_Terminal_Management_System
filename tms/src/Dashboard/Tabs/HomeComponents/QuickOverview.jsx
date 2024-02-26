import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import circleAlert from '../../../assets/alert-circle.png'

const percentage = 66;

const QuickOverview = () => {
  return (
    <div className=''>
        <div className="flex justify-between items-center">
            <div className="container-shadow rounded-3xl p-7 mx-6">
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
            <div className="w-[400px] flex ">
                {/* <div className="">
                    <CircularBar
                        scale={2}
                        angleTransition={[180]}
                        colors={['#7459D9','#b9acec', '#FF974A']}
                        stroke={ {color:'', width:5}}
                    />
                </div> */}
                <div className="">
                    <div className="head flex items-center gap-1">
                        <h3 className='text-xl'>Key Activities</h3>
                        <img src={circleAlert} alt="" />
                    </div>

                    <div className="body poppins flex flex-col gap-8 my-10">
                        <div className="flex item gap-5 items-center">
                            <div className='bg-[#7459D9] h-[4.5px] w-9 rounded-full'></div>
                            <div className="">
                                <p>Overdue Payments</p>
                                <p className='font-semibold'>N3,124,213</p>
                            </div>
                        </div>

                        <div className="flex item gap-5 items-center">
                            <div className='bg-[#b9acec] h-[4.5px] w-9 rounded-full'></div>
                            <div className="">
                                <p>Uncollected Containers</p>
                                <p className='font-semibold'>1,523</p>
                            </div>
                        </div>

                        <div className="flex item gap-5 items-center">
                            <div className='bg-[#7459D9] h-[4.5px] w-9 rounded-full'></div>
                            <div className="">
                                <p>Vessels Arriving Soon</p>
                                <p className='font-semibold'>213</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickOverview