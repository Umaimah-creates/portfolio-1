import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium text-cyan-600 '>UMAIMAH</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink hover:underline '><a href='#hero'>Home</a></li>
                <li className='menuLink hover:underline'><a href='#about'>About</a></li>
                <li className='menuLink hover:underline'><a href='#projects'>Projects</a></li>
                <li className='menuLink hover:underline'><a href='#skills'>Skills</a></li>
                <li className='menuLink hover:underline'><a href='#contact'>Contact</a></li>

            </ul>
            <AiOutlineMenu className='text-cyan-800 ' size={30} />
        </div>
      
    </div>
  )
}

export default Navbar
