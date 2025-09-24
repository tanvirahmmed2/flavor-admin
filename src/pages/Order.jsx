import React from 'react'

const Order = () => {
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

    </section>
  )
}

export default Order
