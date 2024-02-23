import React from 'react'
import exp from '../../../assets/expences.png'
import income from '../../../assets/income.png'
import expLine from '../../../assets/expLine.png'
import recieveLine from '../../../assets/receiveLine.png'
import incomeLine from '../../../assets/incomeLine.png'
import upTrend from '../../../assets/upTrend.png'
import downTrend from '../../../assets/downTrend.png'

const Figures = () => {
  return (
    <div className=' m-10'>
        <h3 className='poppins text-xl font-bold my-5'>Quick Overview:</h3>
        <div className="flex gap-5 justify-between">
            <div className="bg-[#d2f1e5] poppins text-[#004B50] p-8 rounded-2xl w-[300.55px] h-[288px]">
                <div className="top flex font-semibold text-sm gap-6">
                    <p className='w-[200px] mb-6'>Received Today</p>
                </div>
                <p className="text-4xl font-bold ">N18,765,008</p>
                    <p className='font-normal flex gap-1 my-2'>
                        <img src={upTrend} alt="" />
                        <span className='font-semibold'>
                            +2.6%
                        </span>
                        than last month
                    </p>
                <img src={recieveLine} alt="" />
            </div>

            <div className="bg-[#fff2d4] poppins text-[#7A4100] p-8 rounded-2xl w-[300.55px] h-[288px]">
                <div className="top justify-between flex font-semibold text-sm gap-6">
                    <p className=''>Expenses</p>
                    <img src={exp} className='mt-[-8px]' alt="" />
                </div>
                <p className="text-4xl font-bold ">N8,938</p>
                    <p className='font-normal flex gap-1 my-2'>
                        <img src={downTrend} alt="" />
                        <span className='font-semibold'>
                            -0.5%
                        </span>
                        than last month
                    </p>
                <img src={expLine} alt="" />
            </div>

            <div className="bg-[#d2f2e5] poppins text-[#004B50] p-8 rounded-2xl w-[300.55px] h-[288px]">
                <div className="top justify-between flex font-semibold text-sm gap-6">
                    <p className=''>Income</p>
                    <img src={income} className='mt-[-8px]' alt="" />
                </div>
                <p className="text-4xl font-bold ">N18,765</p>
                    <p className='font-normal flex gap-1 my-2'>
                        <img src={upTrend} alt="" />
                        <span className='font-semibold'>
                            +2.6%
                        </span>
                        than last month
                    </p>
                <img src={incomeLine} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Figures