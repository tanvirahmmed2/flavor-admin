import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../components/Context'
import { FaGear } from "react-icons/fa6";

const Sidebar = () => {
  const { isSidebar, setIsSidebar } = useContext(ShopContext)

  const handleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  const handleLogout=()=>{
    localStorage.removeItem('admin_token')
  }
  return (
    <div className={`w-auto px-6 h-screen fixed left-0 py-6 flex flex-col items-start justify-between shadow-sm shadow-orange-500 ${isSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out bg-white  duration-500`}>
      <div className='flex flex-col gap-6'>
        <Link to='/' onClick={handleSidebar} className='text-2xl font-semibold'>Flavor-admin</Link>
        <div className='w-full flex flex-col items-start justify-start gap-2'>
          <Link to='/products'>Products</Link>
          <Link to='/addproduct'>Add Product</Link>
          <Link to='/updateproduct'>Update Product</Link>
          <Link to='/orders'>Order</Link>
          <Link to='/signin'>Sign In</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/reviews'></Link>
        </div>
      </div>
      <div className='w-full flex flex-col items-start justify-start gap-2'>
        <a href='/' onClick={handleLogout} className={`${localStorage.getItem('admin_token')? 'block': 'hidden'}`}>LogOut</a>
        <Link onClick={handleSidebar} to='/settings'><FaGear className='text-xl cursor-pointer hover:rotate-45 transition duration-500' /></Link>
      </div>
    </div>
  )
}

export default Sidebar
