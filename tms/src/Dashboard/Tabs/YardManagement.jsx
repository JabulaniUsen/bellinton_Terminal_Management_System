import React from 'react'
import eye from '../../assets/eye.svg'
import file from '../../assets/file.svg'
import tracker from '../../assets/tracker.svg'
import gate from '../../assets/gate.svg'
import gateCueue from '../../assets/gateCueue.svg'
import chat from '../../assets/chat.svg'
import status from '../../assets/status.svg'
import assign from '../../assets/assign.svg'
import clock from '../../assets/clock.svg'
import empty from '../../assets/empty.svg'
import loaded from '../../assets/loaded.svg'
import locked from '../../assets/locked.svg'
import damaged from '../../assets/damaged.svg'
import Notification from './YardManagementComponent/Notification'


const YardManagement = ({onTabSwitch}) => {

  return (
    <div className='p-10'>
        <div className="header">
          <h2 className='text-3xl font-bold'>Yard Overview</h2>
        </div>

        <div className="my-10 grid grid-cols-2 gap-6 roboto">

          <div className="">
            <h3 className='font-semibold'>Container Management</h3>
            
            <div className="flex gap-5">
              <div 
              onClick={() => onTabSwitch(18)}
              className="flex justify-center items-center text-center flex-col gap-3 w-[210px] h-[140px] cursor-pointer bg-[#4000FF] rounded-md p-5">
                <img src={eye} className='w-[35px]' alt="" />
                <h2 className='text-white '>View Container List</h2>
              </div>

              <div 
              // onClick={() => onTabSwitch(18)}
              className="flex justify-center items-center text-center flex-col gap-3 w-[210px] h-[140px] cursor-pointer bg-[#4000FF] rounded-md p-5">
                <img src={file} className='w-[30px]' alt="" />
                <h2 className='text-white '>Assign Position</h2>
              </div>

              <div 
              onClick={() => onTabSwitch(19)}
              className="flex justify-center items-center text-center flex-col gap-3 w-[210px] h-[140px] cursor-pointer bg-[#4000FF] rounded-md p-5">
                <img src={tracker} className='w-[30px]' alt="" />
                <h2 className='text-white '>Track Container Movement</h2>
              </div>
            </div>
          </div>

          <div className="">

            <h3 className='font-semibold'>Gates Operations Integration</h3>

            <div className="flex gap-5">
              <div className="flex justify-center items-center text-center flex-col gap-3 w-[210px] h-[140px] cursor-pointer bg-[#4000FF] rounded-md p-5">
              <img src={gate} className='w-[35px]' alt="" />
              <h2 className='text-white '>Gate Access Logs</h2>
            </div>

            <div className="flex justify-center items-center text-center flex-col gap-3 w-[210px] h-[140px] cursor-pointer bg-[#4000FF] rounded-md p-5">
              <img src={gateCueue} className='w-[35px]' alt="" />
              <h2 className='text-white '>Gate Queue Management</h2>
            </div>

            <div className="flex justify-center items-center text-center flex-col gap-3 w-[210px] h-[140px] cursor-pointer bg-[#4000FF] rounded-md p-5">
              <img src={chat} className='w-[35px]' alt="" />
              <h2 className='text-white '>Communication</h2>
            </div>
            </div>

          </div>

          <div className="">

            <h3 className='font-semibold'>Equipment Management</h3>

            <div className="flex gap-5">
              <div className="flex justify-center items-center text-center flex-col gap-3 w-[210px] h-[140px] cursor-pointer bg-[#4000FF] rounded-md p-5">
                <img src={status} className='w-[35px]' alt="" />
                <h2 className='text-white '>Equipment Status</h2>
              </div>

              <div className="flex justify-center items-center text-center flex-col gap-3 w-[210px] h-[140px] cursor-pointer bg-[#4000FF] rounded-md p-5">
                <img src={assign} className='w-[35px]' alt="" />
                <h2 className='text-white '>Assign Equipment</h2>
              </div>

              <div 
              onClick={() => onTabSwitch(38)}
              className="flex justify-center items-center text-center flex-col gap-3 w-[210px] h-[140px] cursor-pointer bg-[#4000FF] rounded-md p-5">
                <img src={clock} className='w-[35px]' alt="" />
                <h2 className='text-white '>Schedule Maintenance</h2>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h3 className='font-semibold'>Container Stacked</h3>

            <div className="flex justify-between gap-3">
              <div className="flex flex-col justify-center text-white  items-center gap-4 cursor-pointer bg-[#828282] p-5 rounded-2xl">
                <p className='text-5xl'>45</p>
                <div className="flex gap-3 items-center">
                  <p>Empty</p>
                  <img src={empty} alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-center text-white  items-center gap-4 cursor-pointer bg-[#00A76F] p-5 rounded-2xl">
                <p className='text-5xl'>69</p>
                <div className="flex gap-3 items-center">
                  <p>Loaded</p>
                  <img src={loaded} alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-center text-white  items-center gap-4 cursor-pointer bg-[#FF5630] p-5 rounded-2xl">
                <p className='text-5xl'>29</p>
                <div className="flex gap-3 items-center">
                  <p>Locked</p>
                  <img src={locked} alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-center text-white  items-center gap-4 cursor-pointer bg-[#FF0000] p-5 rounded-2xl">
                <p className='text-5xl'>16</p>
                <div className="flex gap-3 items-center">
                  <p>Damaged</p>
                  <img src={damaged} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Notification/>
    </div>
  )
}

export default YardManagement