import React, { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Products = () => {
  const { product } = useContext(ShopContext)

  return (
    <section className='w-full h-auto flex flex-col items-center justify-center gap-6'>
      <h1 className='text-2xl font-semibold'>All Products List</h1>

      {/* Table Header */}
      <div className='w-full grid grid-cols-5 justify-items-center border-2 bg-gray-200'>
        <p>Name</p>
        <p>Description</p>
        <p>Price</p>
        <p>Offer Price</p>
        <p>Remove</p>
      </div>

      {/* Products */}
      {product.length === 0 ? (
        <p className='text-center mt-4'>No products available</p>
      ) : (
        product.map((item, index) => {
          const { _id, name, old_price, new_price, description } = item
          return (
            <div key={_id || index} className='w-full grid grid-cols-5 justify-items-center border-2'>
              <p>{name}</p>
              <p>{description}</p>
              <p>{old_price}</p>
              <p>{new_price}</p>
              <p>
                <button className='text-red-500 hover:underline'>Remove</button>
              </p>
            </div>
          )
        })
      )}
    </section>
  )
}

export default Products
