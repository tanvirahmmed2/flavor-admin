import React, { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Setting = () => {
  const { user } = useContext(ShopContext)
  console.log(user)

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          User Information
        </h1>
        {!user ? (
          <p className="text-center text-red-500 font-medium">
            No user found
          </p>
        ) : (
          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">User ID:</span>
              <span className="italic">{user._id}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Name:</span>
              <span className="italic">{user.name}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Email:</span>
              <span className="italic">{user.email}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Phone:</span>
              <span className="italic">{user.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Account Created:</span>
              <span className="italic">{new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Setting
