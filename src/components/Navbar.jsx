import React from 'react'
import logo from "./../assets/logo.svg"
import { IoMdMenu } from "react-icons/io";

const Navbar = ({setMobileMenuDisplay}) => {
  return (
    <div className='w-full h-fit flex justify-between items-center max-[850px]:py-2'>
      <img src={logo}  alt='logo' className='max-[850px]:w-[2.5rem]'/>
      
      <div className='flex gap-x-14 text-sm text-greyd font-medium max-[850px]:hidden'>
        <a href='#' className='hover:text-orange'> <button> Home </button> </a>
        <a href='#' className='hover:text-orange'> <button> New </button> </a>
        <a href='#' className='hover:text-orange'> <button> Popular </button> </a>
        <a href='#' className='hover:text-orange'> <button> Trending </button> </a>
        <a href='#' className='hover:text-orange'> <button> Categories </button> </a>
      </div>

      <IoMdMenu  className='hidden max-[850px]:block text-3xl'  onClick={() => setMobileMenuDisplay(true)} />
      
    </div>
  )
}

export default Navbar
