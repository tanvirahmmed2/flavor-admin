import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../components/Context'
import { FaGear } from "react-icons/fa6";

const Sidebar = () => {
    const {isSidebar, setIsSidebar}= useContext(ShopContext)

    const handleSidebar=()=>{
        setIsSidebar(!isSidebar)
    }
  return (
    <div className={`w-auto px-6 h-screen fixed left-0 py-6 flex flex-col items-start justify-between shadow-sm shadow-orange-500 ${isSidebar? 'translate-x-0': '-translate-x-full'} transition-transform ease-in-out bg-white  duration-500`}>
      <Link to='/' onClick={handleSidebar} className='text-2xl font-semibold'>Flavor-admin</Link>
      <div className='w-full flex flex-col items-start justify-start gap-2'>
        <Link to='/products'>Products</Link>
        <Link to='/addproduct'>Add Product</Link>
        <Link to='/updateproduct'>Update Product</Link>
        <Link to='/orders'>Order</Link>
        <Link to='/signin'>SignIn</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/reviews'></Link>
      </div>
      <div>
        <Link  onClick={handleSidebar} to='/settings'><FaGear className='text-xl cursor-pointer hover:rotate-45 transition duration-500'/></Link>
      </div>
    </div>
  )
}

export default Sidebar
