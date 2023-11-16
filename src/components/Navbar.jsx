import React from 'react'
import logo from "./../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='w-full h-fit flex justify-between items-center'>
      <img src={logo}  alt='logo'/>
      
      <div className='flex gap-x-14 text-sm text-greyd font-medium '>
        <a href='#' className='hover:text-orange'> <button> Home </button> </a>
        <a href='#' className='hover:text-orange'> <button> New </button> </a>
        <a href='#' className='hover:text-orange'> <button> Popular </button> </a>
        <a href='#' className='hover:text-orange'> <button> Trending </button> </a>
        <a href='#' className='hover:text-orange'> <button> Categories </button> </a>
      </div>
      
      
    </div>
  )
}

export default Navbar
