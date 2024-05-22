import React from 'react'
import gate from '../../../assets/gate.png'
import truck from '../../../assets/truck.png'
import clock from '../../../assets/clock.png'
import container from '../../../assets/container.png'

const QuickOverview = () => {
  return (
    <div className=' m-10'>
        <h3 className='poppins text-xl font-bold my-5'>Quick Overview:</h3>
        <div className="flex justify-between">
            <div className="bg-[#d6f4e7] poppins text-[#004B50] flex flex-col gap-2 justify-center items-center p-10 rounded-2xl text-center w-[220.17px] h-[222px]">
                <img src={gate} alt="" />
                <p className="text-5xl font-bold">0</p>
                <p>Gate Throughout Today</p>
            </div>

            <div className="bg-[#d6f7fa] poppins text-[#003768] flex flex-col gap-2 justify-center items-center p-10 rounded-2xl text-center w-[220.17px] h-[222px]">
                <img src={truck} alt="" />
                <p className="text-5xl font-bold">0</p>
                <p>Truck Turnaround Time</p>
            </div>

            <div className="bg-[#fff3d8] poppins text-[#7A4100] flex flex-col gap-2 justify-center items-center p-10 rounded-2xl text-center w-[220.17px] h-[222px]">
                <img src={clock} className='float-right' alt="" />
                <p className="text-5xl font-bold">0</p>
                <p>Late Arivals at Gate</p>
            </div>

            <div className="bg-[#ffe8df] poppins text-[#7A0916] flex flex-col gap-2 justify-center items-center p-10 rounded-2xl text-center w-[220.17px] h-[222px]">
                <img src={container} className='float-left' alt="" />
                <p className="text-5xl font-bold">0</p>
                <p>Long Dwelling Containers</p>
            </div>
        </div>
    </div>
  )
}

export default QuickOverview