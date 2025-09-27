import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
  const [problem, setProblem] = useState('')
  const [newProduct, setNewProduct] = useState({
    name: '',
    new_price: '',
    old_price: '',
    description: "",
    category: '',
    image: ''
  })

  const handleChange = (e) => {
  const { name, value, files } = e.target
  if (name === 'image') {
    setNewProduct((prev) => ({ ...prev, image: files[0] })) // save File object
  } else {
    setNewProduct((prev) => ({ ...prev, [name]: value }))
  }
}


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(newProduct)

      const res = await fetch('http://localhost:5000/product/addproduct', {
        method: "POST",
        headers: {
          Accept: 'application/json',

        },
        body: JSON.stringify(newProduct)
      })
      const data = await res.json()
      if (data.success) {
        setNewProduct({
          name: '',
          new_price: '',
          old_price: '',
          description: "",
          category: '',
          image: ''
        })
        setProblem('Successfully added product')
      }
    } catch (error) {
      setProblem(error + "product couldn't added")
    }
  }


  return (
    <section className='w-full h-auto flex flex-col gap-6 items-center justify-center p-4'>
      <h1 className='text-2xl font-semibold'>Add Latest Item</h1>


      <form onSubmit={handleSubmit} className='w-full md:w-3/4 flex flex-col items-center justify-center gap-3'>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="name">Name</label>
          <input required type="text" name='name' id='name' placeholder='enter product name' className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.name} />
        </div>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="description">Description</label>
          <textarea type="text" name='description' id='description' placeholder='enter product details' className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.description} />
        </div>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.category}>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="drinks">Drinks</option>
            <option value="salad">Salad</option>
            <option value="pasta">Pasta</option>
          </select>
        </div>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="old_price">Price</label>
          <input required type="text" name='old_price' id='old_price' placeholder='enter product price' className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.old_price} />
        </div>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="new_price">Offer Price</label>
          <input required type="text" name='new_price' id='new_price' placeholder='enter product offer price' className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.new_price} />
        </div>
        <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="image">Image</label>
          <input required type='file' alt='image' name='image' id='image' placeholder='enter product offer price' className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.image} />
        </div>
        <button type='submit' className='px-4 p-1 bg-orange-500 text-white rounded-md'>Submit</button>
        <p>{problem}</p>
      </form>

    </section>
  )
}

export default AddProduct
