"use client"
import React from 'react'
import { useState } from 'react'

function Navbar() {
        const [isOpen, setisOpen] = useState(false)
  
  function hamburgerMenu(){
    setisOpen(!isOpen)
  }


  return (
    <div className='w-full bg-[#1565C0] fon-bold text-xl '>
        <div className='w-[80%] max-w-[1600px] h-full mx-auto  '>
          <div className='flex justify-between  items-center py-5 font-bold'>
            <div className='flex justify-center items-center'>
                <img src="/logo.png" alt="" className='z-50 w-8' />
                <a href="" className='underline-hover hover:cursor-pointer text-xl ml-1 text-white '>Demics</a>
            </div>
                  <div className={`absolute h-full  tracking-widest md:tracking-normal ${isOpen?"flex":"hidden"}  pt-50 md:pt-0 md:flex md:justify-end pl-10 md:pr-0 md:items-center uppercase md:capitalize gap-6 top-0 w-full left-0 md:h-0 md:static md:w-auto flex-col md:flex-row text-white font-bold`}>
                    <a href="" className='underline-hover hover:cursor-pointer '>Home</a>
                    <a href="" className='underline-hover hover:cursor-pointer '>About Us</a>
                    <a href="" className='underline-hover hover:cursor-pointer '>Our Work</a>
                    <a href="" className='underline-hover hover:cursor-pointer '>Our Research</a>
                    <a href="" className='underline-hover hover:cursor-pointer '>Contact Us</a>
                  </div>
                  <img src={isOpen? "/close.png": "/hamburger.png"} alt="hamburger" className=' w-10 z-50 md:hidden' onClick={hamburgerMenu}/>
          </div>
                
                
        </div>
        </div>
  )
}

export default Navbar