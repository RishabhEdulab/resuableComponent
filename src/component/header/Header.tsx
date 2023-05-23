import React from 'react'
import {Link } from 'react-router-dom';

const Header = () => {
  return (
   <>
   <header className='bg-blue-500 w-full'>
    <nav className='flex justify-start'>
        <ul className='mt-5 flex flex-col lg:flex-row mx-4'>
            <li className='mb-6 lg:mb-6 lg:pr-3'>
                <Link  to="/" className='block transition duration-150 ease-in-out hover:text-neutral-700 rounded p-3 capitalize text-slate-50 bg-black'>Home</Link>
            </li>
            <li className='mb-6 lg:mb-6 lg:pr-3'>
            <Link  to="/about" className='block transition duration-150 ease-in-out hover:text-neutral-700 rounded p-3 capitalize text-slate-50 bg-black'>About</Link>
            </li>
            <li className='mb-6 lg:mb-6 lg:pr-3'>
            <Link  to="/contact" className='block transition duration-150 ease-in-out hover:text-neutral-700 rounded p-3 capitalize text-slate-50 bg-black'>Contact-Us</Link>
            </li>
           
        </ul>
    </nav>
   </header>
   </>
  )
}

export default Header
