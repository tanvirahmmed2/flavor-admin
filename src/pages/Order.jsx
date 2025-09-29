import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Order = () => {
  const { order } = useContext(ShopContext)
  return (
    <section className='w-full h-auto flex flex-col gap-6 items-center justify-center'>
      <h1 className='text-2xl font-semibold text-center'>Check your latest orders and serve</h1>
      <div className='w-full grid grid-cols-5 justify-items-center border-2'>
        <p>Name</p>
        <p>Order</p>
        <p>Quantity</p>
        <p>Bill</p>
        <p>Delivery</p>
      </div>
      {
        order ? <div className='w-full'>
          {order.map((res) => {
            const { name, order, quantity, bill } = res
            return <div className='w-full grid grid-cols-5 justify-items-center gap-2'>
              <h1>{name}</h1>
              <p>{order}</p>
              <p>{quantity}</p>
              <p>{bill}</p>
              <p>Delivery</p>
            </div>
          })}
        </div> : <p>No order found</p>
      }

    </section>
  )
}

export default Order
