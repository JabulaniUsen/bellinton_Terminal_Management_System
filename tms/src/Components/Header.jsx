import React from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/Menu.png'

const Header = () => {
  return (
    <div className='flex justify-between py-10 px-20'>
        <div className="">
            <img src={logo} alt="" />
        </div>
        <div className="">
            <img src={menu} alt="" />
        </div>
    </div>
  )
}

export default Header