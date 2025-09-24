import React, { useContext } from 'react'

import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { ShopContext } from '../components/Context';

const Navbar = () => {
    const {isSidebar, setIsSidebar}= useContext(ShopContext)
  return (
    <nav className='w-full h-20 fixed flex flex-row items-center justify-between bg-gray-100 p-4'>
        <a href="/" className='text-2xl font-semibold text-orange-500'>Flavor-Admin</a>
        <div>

        </div>
        <div className='w-auto h-full flex flex-row items-center justify-center gap-3 '>
            <p className='bg-orange-500 text-white px-4 p-1 font-semibold rounded-lg cursor-pointer'>Check Orders</p>
            <p className='text-2xl text-orange-500 px-4 cursor-pointer' onClick={()=> setIsSidebar(!isSidebar)}><HiOutlineBars3CenterLeft/></p>
        </div>
    </nav>
  )
}

export default Navbar
