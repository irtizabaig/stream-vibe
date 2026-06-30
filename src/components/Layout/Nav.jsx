import React, { useState } from 'react'
import { Bell, Play, Search } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import SearchPage from '../../pages/SearchPage'
import logo from '../../assets/images/Logo.png'

const Nav = () => {


  return (
    <nav className="absolute top-[22px] left-0 w-full z-10">

        {/* {exist && navigate('/search')} */}
    
              <div className="w-[min(1300px,calc(100%-40px))] mx-auto flex items-center justify-between">

                <a href="/" className="inline-flex items-center gap-[9px] text-white text-[16px] font-extrabold tracking-tight no-underline">
                  <img src={logo} className='lg:w-50 w-35' />
                </a>
    
                <div className="hidden md:inline-flex items-center gap-1 px-2 py-2 rounded-[10px] border-2 border-[#262626] bg-[rgba(15,15,15,0.86)] backdrop-blur-[10px]">

                  <NavLink 
                  to='/'
                  className={({ isActive }) =>
                    `text-[16px] leading-none px-[18px] py-[13px] rounded-lg no-underline transition-colors ${
                      isActive 
                      ? "text-white bg-[#1a1a1a]" 
                      : "text-[#bfbfbf] hover:text-white hover:bg-[#1a1a1a]" 
                    }`
                  } > Home </NavLink>

                  <NavLink 
                  to='/movies-shows'
                  className={({ isActive }) =>
                    `text-[16px] leading-none px-[18px] py-[13px] rounded-lg no-underline transition-colors ${
                      isActive 
                      ? "text-white bg-[#1a1a1a]" 
                      : "text-[#bfbfbf] hover:text-white hover:bg-[#1a1a1a]" 
                    }`
                  } > Movies Shows </NavLink>

                  <a href="#" className="text-[#bfbfbf] hover:text-white hover:bg-[#1a1a1a] text-[16px] leading-none px-[18px] py-[13px] rounded-lg no-underline transition-colors">Support</a>
                  <a href="#" className="text-[#bfbfbf] hover:text-white hover:bg-[#1a1a1a] text-[16px] leading-none px-[18px] py-[13px] rounded-lg no-underline transition-colors">Subscriptions</a>
                </div>
    
                <div className="justify-self-end flex gap-5">

                  <Link className='cursor-pointer' to='/search'><Search size={30} /></Link>
    
                  <button className='cursor-pointer' aria-label="Notifications"><Bell size={30} /></button>
                </div>

              </div>
              
            </nav>
  )
}

export default Nav