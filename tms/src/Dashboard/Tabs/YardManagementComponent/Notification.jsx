import React from 'react'
import box from '../../../assets/box.svg'

const Notification = () => {

    const Notifications = [
        { name: 'CN001', date: '15/03/2024', size: '40ft', type: 'Dry', name2: 'Shanghai', icon: box },
        { name: 'CN001', date: '15/03/2024', size: '40ft', type: 'Dry', name2: 'Shanghai', icon: box },
        { name: 'CN001', date: '15/03/2024', size: '40ft', type: 'Dry', name2: 'Shanghai', icon: box },
        { name: 'CN001', date: '15/03/2024', size: '40ft', type: 'Dry', name2: 'Shanghai', icon: box }
    ]

  return (
    <div>
        <div className="flex justify-between items-center w-[500px]">
            <div className="flex items-center gap-2">
                <h1 className="text-center text-danger poppins text-lg font-bold">Container Notification</h1>
                <span className='text-white px-3 py-2 rounded-full bg-[#ff6666] poppins'>16</span>
            </div>
            <p className='text-[#0095FF] underline poppins font-semibold cursor-pointer'>View all</p>
        </div>

        <div className="flex gap-7 my-3">
            {Notifications.map((item, index) => (
                <div className=" flex items-center gap-1 border-[1px] poppins p-5 pr-10 border-[#bfbfbf] rounded-2xl" key={index}>
                    <img src={item.icon} alt="" />
                    <div className="flex flex-col gap-1">
                        <p className='text-[#20007F] text-3xl font-bold'>{item.name}</p>
                        <div className="ml-2 flex gap-2">
                            <p>{item.size}</p>
                            <p>{item.type}</p>
                            <p>{item.name2}</p>
                        </div>
                        <p className='ml-2'>{item.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Notification