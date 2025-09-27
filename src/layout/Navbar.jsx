import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { ShopContext } from '../components/Context';

const Navbar = () => {
    const {isSidebar, setIsSidebar}= useContext(ShopContext)
  return (
    <nav className='w-full h-20 fixed flex flex-row items-center justify-between bg-gray-100 px-4'>
        <a href="/" className='text-2xl font-bold text-orange-500'>Flavor-Admin</a>
        <div className={`w-auto h-full md:flex hidden flex-row items-center justify-center gap-3 `} >
            <Link to='/addproduct' className='px-2 lg:px-3 h-full flex items-center justify-center border-orange-500 p-1 hover:border-b-2 font-semibold'>Add Product</Link>
            <Link to='/updateproduct' className='px-2 lg:px-3 h-full flex items-center justify-center border-orange-500 p-1 hover:border-b-2 font-semibold'>Update Product</Link>
            <Link to='/products' className='px-2 lg:px-3 h-full flex items-center justify-center border-orange-500 p-1 hover:border-b-2 font-semibold'>Product</Link>
        </div>
        <div className='w-auto h-full flex flex-row items-center justify-center gap-3 '>
            <Link to='/orders' className={`bg-orange-500 text-white px-4 p-1 font-semibold rounded-lg cursor-pointer `}>Check Orders</Link>
            <p className='text-2xl text-orange-500 px-4 cursor-pointer' onClick={()=> setIsSidebar(!isSidebar)}><HiOutlineBars3CenterLeft/></p>
        </div>
    </nav>
  )
}

export default Navbar
