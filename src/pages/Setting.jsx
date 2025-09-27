import React, { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Setting = () => {
  const {user}= useContext(ShopContext)
console.log(user)
  return (
    <section className='w-full flex flex-col items-center justify-center gap-6'>
      <h1 className='text-3xl'>User information</h1>
      {
        !user? <p>now user found</p>:<div className='w-full flex flex-col items-center justify-center gap-2'>
          <p className='text-lg  italic'>User _id: {user._id}</p>
          <p className='text-lg  italic'>User name: {user.name}</p>
          <p className='text-lg  italic'>User email: {user.email}</p>
          <p className='text-lg  italic'>User phone: {user.phone}</p>
          <p className='text-lg  italic'>Account creation: {user.createdAt}</p>
        </div>
      }
    </section>
  )
}

export default Setting
