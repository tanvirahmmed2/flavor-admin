import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center gap-8'>
      <h1 className='text-3xl font-semibold'>Welcome Flavor Admin Site</h1>
      <p>Quick Links:</p>
      <div className={`w-3/4 flex flex-wrap gap-8 justify-center`}>
        <Link className='px-4 p-1 bg-orange-200 text-white rounded-lg hover:bg-orange-500 transition duration-500' to='/orders'>Order</Link>
        <Link className='px-4 p-1 bg-orange-200 text-white rounded-lg hover:bg-orange-500 transition duration-500' to='/addproduct'>Add Product</Link>
        <Link className='px-4 p-1 bg-orange-200 text-white rounded-lg hover:bg-orange-500 transition duration-500' to='/signin'>Sign In</Link>
        <Link className='px-4 p-1 bg-orange-200 text-white rounded-lg hover:bg-orange-500 transition duration-500' to='/signup'>Sign Up</Link>
        <Link className='px-4 p-1 bg-orange-200 text-white rounded-lg hover:bg-orange-500 transition duration-500' to='/updateproduct'>Update Product</Link>
        <Link className='px-4 p-1 bg-orange-200 text-white rounded-lg hover:bg-orange-500 transition duration-500' to='/products'>Products</Link>
      </div>
    </div>
  )
}

export default Home
