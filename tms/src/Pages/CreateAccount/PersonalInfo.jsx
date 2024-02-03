import React from 'react'

function PersonalInfo() {
  return (
    <div>
      <form action="" className='lg:mx-[320px]'>
        <div className="grid grid-cols-2 place-items-center roboto gap-y-7 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className='font-semibold'>First Name</label>
            <input type="text" className='border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px]' placeholder='Enter your first name' />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className='font-semibold'>Last Name</label>
            <input type="text" className='border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px]' placeholder='Enter your lirst name' />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className='font-semibold'>Email Address</label>
            <input type="email" className='border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px]' placeholder='Enter your Email Address' />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className='font-semibold'>Phone Number</label>
            <input type="number" className='border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px]' placeholder='Enter your phone number' />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className='font-semibold'>Job Title</label>
            <input type="text" className='border-[1px] outline-none rounded p-1 px-3 border-[#828282] w-[347px] h-[44px]' placeholder='Enter your designation' />
          </div>
        </div>

        <button className='bg-[#20007F] py-3 px-5 rounded-lg text-white roboto font-semibold float-right mr-10'>Next</button>
      </form>
    </div>
  )
}

export default PersonalInfo