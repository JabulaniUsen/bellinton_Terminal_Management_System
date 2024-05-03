import React from 'react'
import logo from '../../assets/leftPics.svg'
import bell from '../../assets/bell.png'
import users from '../../assets/users.png'
import settings from '../../assets/settings.png'
import avatar from '../../assets/avatar.png'

const Header = () => {
  return (
    <div className='bg-[#f2f2f2] p-5 shadow-md flex justify-between items-center roboto'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="icons grid grid-cols-4 items-center">
            <div className="relative">
              <span className='absolute right-6 top-[-3px] bg-[#ff5630] rounded-full p-[0.1] px-[0.3rem] text-[10px] font-bold text-white'>4</span>
              <img src={bell} alt="" />
            </div>
            <img src={users} alt="" className='ml-3' />
            <img src={settings} alt="" />
            <img src={avatar} alt="" />
        </div>
    </div>
  )
}

export default Header