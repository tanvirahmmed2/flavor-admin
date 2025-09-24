import React from 'react'

const AddProduct = () => {
  return (
    <section className='w-full h-auto flex flex-col gap-6 items-center justify-center p-4'>
      <h1 className='text-2xl font-semibold'>Add Latest Item</h1>
      <div className='w-full md:w-3/4 flex flex-col items-center justify-center gap-3'>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id='name' placeholder='enter product name' className='w-full outline-none border-2 px-3 p-1 rounded-md' />
        </div>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="description">Description</label>
          <textarea type="text" name='description' id='description' placeholder='enter product details' className='w-full outline-none border-2 px-3 p-1 rounded-md' />
        </div>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" className='w-full outline-none border-2 px-3 p-1 rounded-md'>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="drinks">Drinks</option>
            <option value="salad">Salad</option>
            <option value="pasta">Pasta</option>
          </select>
        </div>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="old_price">Price</label>
          <input type="number" name='old_price' id='old_price' placeholder='enter product price' className='w-full outline-none border-2 px-3 p-1 rounded-md' />
        </div>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="new_price">Offer Price</label>
          <input type="number" name='new_price' id='new_price' placeholder='enter product offer price' className='w-full outline-none border-2 px-3 p-1 rounded-md' />
        </div>
        <button className='px-4 p-1 bg-orange-500 text-white rounded-md'>Submit</button>
      </div>

    </section>
  )
}

export default AddProduct
