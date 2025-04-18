import { Link } from 'react-router-dom'
import React from 'react'
const Navbar = () => {
  return (
    <div className='w-full h-24 dark bg-blue-700 flex'>
        <div className='flex items-center justify-center w-[20%]'>
          {/* <img src="" alt="" className='w-4 h-4' /> */}
          <h2 className='text-2xl font-semibold'>Logo</h2>
        </div>
        {/* NavLinks */}
        <nav className='w-[60%] flex list-none items-center justify-center gap-7 font-medium text-white'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Services</li>
            <Link to="product" className='cursor-pointer'>Products</Link>
            <Link to="cart" className='cursor-pointer'>Cart</Link>
        </nav>

        {/* auth buttons */}
        <div className='flex items-center justify-center gap-5'>
          <button className='bg-red-600 py-2.5 px-4 rounded-md text-white cursor-pointer hover:bg-red-700'>Login</button>
          <button className='bg-blue-700 py-2.5 px-4 rounded-md text-white cursor-pointer hover:bg-blue-800'>SignUp</button>
        </div>
    </div>
  )
}

export default Navbar

