import React from 'react'

const Products = () => {
  return (
    <section className='w-full h-auto flex flex-col items-center justify-center gap-6'>
      <h1 className='text-2xl font-semibold'>All Products List</h1>
      <div className='w-full grid grid-cols-5  justify-items-center border-2'>
        <p>Name</p>
        <p>Description</p>
        <p>Price</p>
        <p>Offer Price</p>
        <p>Remove</p>
      </div>

    </section>
  )
}

export default Products
