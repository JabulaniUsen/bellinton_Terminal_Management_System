import React from 'react'
import avatar1 from '../../../assets/avatar1.png'
import avatar2 from '../../../assets/avatar2.png'
import avatar3 from '../../../assets/avatar3.png'
import send from '../../../assets/send.svg'

const BillingOverview = () => {
    const customerData = [
        {
            avatar: avatar1,
            name: 'Melanie Noble',
            amount: 'NGN3,094,232'
        },
        {
            avatar: avatar2,
            name: 'Chase Day',
            amount: 'NGN4,234,029'
        },
        {
            avatar: avatar3,
            name: 'Shawn Manning',
            amount: 'NGN1,273,281'
        },
        {
            avatar: avatar1,
            name: 'Soren Durham',
            amount: 'NGN4,000,000'
        },
        {
            avatar: avatar1,
            name: 'Cortez Herring',
            amount: 'NGN5,234,212'
        },
      ]
  return (
    <div className='m-10'>
        <div className="header">
            <h2 className='text-2xl font-bold'>Billing Dashboard</h2>
        </div>

        <div className="figures flex gap-10 my-10">
            <div className="bg-[#9c2fff] rounded-2xl p-5 text-white h-[150px] w-[300px] flex flex-col justify-between">
                <p className='text-sm'>Total Revenue</p>
                <p className='font-semibold'>NGN <span className='text-3xl'>12,980,006</span></p>
            </div>
            <div className="bg-[#0095ff] rounded-2xl p-5 text-white h-[150px] w-[300px] flex flex-col justify-between">
                <p className='text-sm'>Outstanding Invoices</p>
                <p className='font-semibold'>NGN <span className='text-3xl'>12,980,006</span></p>
            </div>
            <div className="bg-[#ff5630] rounded-2xl p-5 text-white h-[150px] w-[300px] flex flex-col justify-between">
                <p className='text-sm'>Average Days Outstanding</p>
                <p className='font-semibold'>NGN <span className='text-3xl'>12,980,006</span></p>
            </div>
        </div>

        <div className="flex item gap-20 mt-20">
            <div className="billingCircle flex flex-col gap-8">
                <div className="flex justify-center flex-col">
                    <h4 className='font-semibold mb-3'>Total Payment Recieved</h4>
                    <div className="flex gap-4 items-center">
                        <div className="relative rounded-full w-[400px] h-[12px] shadow-inner bg-[#ffe0df]">
                            <span className='bg-[#ff7a52] h-full rounded-full absolute w-[70%]'></span>
                        </div>
                        <p>NGN2,000,450</p>
                    </div>
                </div>
                <div className="flex justify-center flex-col">
                    <h4 className='font-semibold mb-3'>Current Billing Cycle</h4>
                    <div className="flex gap-4 items-center">
                        <div className="relative rounded-full w-[400px] h-[12px] shadow-inner bg-[#ffe0df]">
                            <span className='bg-[#ff7a52] h-full rounded-full absolute w-[90%]'></span>
                        </div>
                        <p>NGN4,000,450</p>
                    </div>
                </div>
                <div className="flex justify-center flex-col">
                    <h4 className='font-semibold mb-3'>Total Payments Received</h4>
                    <div className="flex gap-4 items-center">
                        <div className="relative rounded-full w-[400px] h-[12px] shadow-inner bg-[#ffe0df]">
                            <span className='bg-[#ff7a52] h-full rounded-full absolute w-[80%]'></span>
                        </div>
                        <p>NGN3,000,450</p>
                    </div>
                </div>

                <div className="revenueTrends flex flex-col gap-4 mt-10">
                    <h4 className='text-lg font-bold'>
                        Revenue Trends
                    </h4>
                    <p>Total Invoice Issued: <span className='text-4xl ml-5 text-blue-700'>605</span></p>
                    <p>Payment Collection Rate: <span className='text-4xl ml-5 text-blue-700'>15%</span></p>
                </div>
            </div>
            <div className="">
                <div className="container-shadow rounded-3xl m-6 w-[400px] p-6 px-10">
                    <div className="flex justify-between py-4">
                        <p className='font-bold poppins'>Top Customers</p>
                    </div>
                    {customerData.map((item, index) => (
                        <div className="flex justify-between my-5"key={index}>
                            <div className="flex gap-5">
                                <img src={item.avatar} className='rounded-full' alt="" />
                                <div className="public-san">
                                    <p className='font-semibold'>{item.name}</p>
                                    <p className='text-[#637381] text-sm'>{item.amount}</p>
                                </div>
                            </div>
                            <img src={send} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
} 

export default BillingOverview