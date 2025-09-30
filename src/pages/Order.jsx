import React, { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Order = () => {
  const { order } = useContext(ShopContext)

  return (
    <section className='w-full h-auto flex flex-col gap-6 items-center justify-center'>
      <h1 className='text-2xl font-semibold text-center'>Check your latest orders and serve</h1>

      <div className='w-full grid grid-cols-5 justify-items-center border-2 font-semibold p-2'>
        <p>Name</p>
        <p>Order</p>
        <p>PayMethod</p>
        <p>Bill</p>
        <p>Delivery</p>
      </div>

      {order && order.length > 0 ? (
        <div className='w-full'>
          {order.map((res) => {
            const { name, _id, totalAmount, paymethod, details } = res
            return (
              <div key={_id} className='w-full grid grid-cols-5 justify-items-center gap-2 p-2 border-b'>
                <h1>{name}</h1>
                <p>{Array.isArray(details) ? details.map(item => item.name).join(', ') : details}</p>
                <p>{paymethod}</p>
                <p>{totalAmount}</p>
                <p>Delivery</p>
              </div>
            )
          })}
        </div>
      ) : (
        <p className='text-gray-500 italic'>No order found</p>
      )}
    </section>
  )
}

export default Order
