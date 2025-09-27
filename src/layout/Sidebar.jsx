import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../components/Context'
import { FaGear } from "react-icons/fa6";

const Sidebar = () => {
  const { isSidebar, setIsSidebar } = useContext(ShopContext)
  const navigate = useNavigate()

  const handleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:5000/user/signout', {
        method: 'POST',
        credentials: 'include', // send cookies if backend uses them
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json().catch(() => ({})) // safe parse

      // Always clear localStorage token on logout
      localStorage.removeItem('admin_token')

      if (data.success) {
        alert(data.message || 'Successfully logged out')
      } else {
        alert('Logout completed (server did not return success)')
      }

      navigate('/signin') // redirect user to signin page
    } catch (error) {
      console.error('Logout error:', error)
      alert('Logout failed: ' + error.message)
    }
  }

  const isLoggedIn = Boolean(localStorage.getItem('admin_token'))

  return (
    <div
      className={`w-auto px-6 h-screen fixed left-0 top-0 py-6 flex flex-col items-start justify-between shadow-sm shadow-orange-500 
      ${isSidebar ? 'translate-x-0' : '-translate-x-full'} 
      transition-transform ease-in-out bg-white duration-500 z-50`}
    >
      <div className='flex flex-col gap-6'>
        <Link to='/' onClick={handleSidebar} className='text-2xl font-semibold'>
          Flavor-admin
        </Link>
        <div className='w-full flex flex-col items-start justify-start gap-2'>
          <Link to='/products' onClick={handleSidebar}>Products</Link>
          <Link to='/addproduct' onClick={handleSidebar}>Add Product</Link>
          <Link to='/updateproduct' onClick={handleSidebar}>Update Product</Link>
          <Link to='/orders' onClick={handleSidebar}>Order</Link>
          {!isLoggedIn && (
            <>
              <Link to='/signin' onClick={handleSidebar}>Sign In</Link>
              <Link to='/signup' onClick={handleSidebar}>Sign Up</Link>
            </>
          )}
          <Link to='/reviews' onClick={handleSidebar}>Reviews</Link>
        </div>
      </div>

      <div className='w-full flex flex-col items-start justify-start gap-2'>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="text-left text-red-600 hover:underline"
          >
            Log Out
          </button>
        )}
        <Link onClick={handleSidebar} to='/settings'>
          <FaGear className='text-xl cursor-pointer hover:rotate-45 transition duration-500' />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
