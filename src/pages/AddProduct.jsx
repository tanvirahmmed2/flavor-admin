import React, { useState, useContext } from 'react'
import { ShopContext } from '../components/Context'

const AddProduct = () => {
  const { product, setProduct } = useContext(ShopContext)
  const [problem, setProblem] = useState('')
  const [newProduct, setNewProduct] = useState({
    name: '',
    new_price: '',
    old_price: '',
    description: "",
    category: 'pizza',
    image: null
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'image') {
      setNewProduct((prev) => ({ ...prev, image: files[0] }))
    } else {
      setNewProduct((prev) => ({ ...prev, [name]: value }))
    }
  }

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newProduct.image) {
      setProblem('Please select an image')
      return
    }

    try {
      const formData = new FormData()
      Object.keys(newProduct).forEach((key) => {
        formData.append(key, newProduct[key])
      })

      const res = await fetch('http://localhost:5000/product/addproduct', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('admin_token')}`
        }
      })

      const data = await res.json()

      if (res.ok) {
        setProduct([...product, data.product || newProduct]) // update context state
        setNewProduct({
          name: '',
          new_price: '',
          old_price: '',
          description: "",
          category: 'pizza',
          image: null
        })
        setProblem('Product added successfully!')
      } else {
        setProblem(data.message || 'Failed to add product')
      }
    } catch (err) {
      console.error(err)
      setProblem('Something went wrong')
    }
  }

  return (
    <section className='w-full h-auto flex flex-col gap-6 items-center justify-center p-4'>
      <h1 className='text-2xl font-semibold'>Add Latest Item</h1>

      <form onSubmit={handleSubmit} className='w-full md:w-3/4 flex flex-col items-center justify-center gap-3'>
        {/* Name */}
        <div className='flex flex-col items-start gap-2 w-full md:w-3/5'>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            name='name'
            id='name'
            placeholder='Enter product name'
            className='w-full outline-none border-2 px-3 p-1 rounded-md'
            onChange={handleChange}
            value={newProduct.name}
          />
        </div>

        {/* Description */}
        <div className='flex flex-col items-start gap-2 w-full md:w-3/5'>
          <label htmlFor="description">Description</label>
          <textarea
            name='description'
            id='description'
            placeholder='Enter product details'
            className='w-full outline-none border-2 px-3 p-1 rounded-md'
            onChange={handleChange}
            value={newProduct.description}
          />
        </div>

        {/* Category */}
        <div className='flex flex-col items-start gap-2 w-full md:w-3/5'>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className='w-full outline-none border-2 px-3 p-1 rounded-md'
            onChange={handleChange}
            value={newProduct.category}
          >
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="drinks">Drinks</option>
            <option value="salad">Salad</option>
            <option value="pasta">Pasta</option>
          </select>
        </div>

        {/* Old Price */}
        <div className='flex flex-col items-start gap-2 w-full md:w-3/5'>
          <label htmlFor="old_price">Price</label>
          <input
            required
            type="text"
            name='old_price'
            id='old_price'
            placeholder='Enter product price'
            className='w-full outline-none border-2 px-3 p-1 rounded-md'
            onChange={handleChange}
            value={newProduct.old_price}
          />
        </div>

        {/* New Price */}
        <div className='flex flex-col items-start gap-2 w-full md:w-3/5'>
          <label htmlFor="new_price">Offer Price</label>
          <input
            required
            type="text"
            name='new_price'
            id='new_price'
            placeholder='Enter product offer price'
            className='w-full outline-none border-2 px-3 p-1 rounded-md'
            onChange={handleChange}
            value={newProduct.new_price}
          />
        </div>

        {/* Image */}
        <div className='flex flex-col items-start gap-2 w-full md:w-3/5'>
          <label htmlFor="image">Image</label>
          <input
            required
            type='file'
            name='image'
            id='image'
            className='w-full outline-none border-2 px-3 p-1 rounded-md'
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='px-4 p-1 bg-orange-500 text-white rounded-md'>Submit</button>
        {problem && <p className='text-red-500'>{problem}</p>}
      </form>
    </section>
  )
}

export default AddProduct
