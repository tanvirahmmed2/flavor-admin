import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <section className='w-full lg:w-1/2 h-auto flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className='w-full flex flex-col items-center justify-center p-4 text-center'>
          <h1 className='text-2xl font-semibold'>Welcome to Admin Page</h1>
          <p>Sign up & run your business faster, secured and premium</p>
          <Link to='/signin' className='text-orange-500 italic'>Already worker!</Link>


        </div>
        <div className='w-full p-4 rounded-lg flex flex-col items-center justify-center gap-3 bg-gray-50'>
          <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
            <label htmlFor="username">username</label>
            <input type="text" name='username' id='username' className='w-full outline-none border-2 px-3 p-1 rounded-md' />
          </div>
          <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
            <label htmlFor="phone">phone</label>
            <input type="text" name='phone' id='phone' className='w-full outline-none border-2 px-3 p-1 rounded-md' />
          </div>
          <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
            <label htmlFor="email">email</label>
            <input type="email" name='email' id='email' className='w-full outline-none border-2 px-3 p-1 rounded-md' />
          </div>
          <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
            <label htmlFor="password">password</label>
            <input type="text" name='password' id='password' className='w-full outline-none border-2 px-3 p-1 rounded-md' />
          </div>
          <button className='px-4 p-1 bg-orange-500 text-white rounded-md'>Sign Up</button>

        </div>

      </section>
    </div>
  )
}

export default SignUp
