import React, { useState } from 'react'

const AddProduct = () => {
  const [problem, setProblem] = useState('')
  const [newProduct, setNewProduct] = useState({
    name: '',
    new_price: '',
    old_price: '',
    description: '',
    category: 'pizza', // default category to prevent empty submission
    image: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'image') {
      setNewProduct(prev => ({ ...prev, image: files[0] })) // save File object
    } else {
      setNewProduct(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('name', newProduct.name)
      formData.append('description', newProduct.description)
      formData.append('category', newProduct.category)
      formData.append('old_price', newProduct.old_price)
      formData.append('new_price', newProduct.new_price)
      formData.append('image', newProduct.image)

      // debug log to check if all fields exist
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1])
      }

      const res = await fetch('https://flavor-server.onrender.com/product/addproduct', {
        method: 'POST',
        credentials: 'include',
        body: formData
      })

      const data = await res.json()
      if (data.success) {
        setNewProduct({
          name: '',
          new_price: '',
          old_price: '',
          description: '',
          category: 'pizza',
          image: null
        })
        setProblem('Successfully added product')
      } else {
        setProblem(data.message || "Product couldn't be added")
      }
    } catch (error) {
      setProblem(error.message + " - Product couldn't be added")
    }
  }

  return (
    <section className='w-full h-auto flex flex-col gap-6 items-center justify-center p-4'>
      <h1 className='text-2xl font-semibold'>Add Latest Item</h1>
      <form onSubmit={handleSubmit} className='w-full md:w-3/4 flex flex-col items-center justify-center gap-3'>
        <div className='flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="name">Name</label>
          <input required type="text" name='name' id='name' placeholder='enter product name'
            className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.name} />
        </div>

        <div className='flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="description">Description</label>
          <textarea required name='description' id='description' placeholder='enter product details'
            className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.description} />
        </div>

        <div className='flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="category">Category</label>
          <select required name="category" id="category"
            className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.category}>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="drinks">Drinks</option>
            <option value="salad">Salad</option>
            <option value="pasta">Pasta</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>

        <div className='flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="old_price">Price</label>
          <input required type="number" name='old_price' id='old_price' placeholder='enter product price'
            className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.old_price} />
        </div>

        <div className='flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="new_price">Offer Price</label>
          <input required type="number" name='new_price' id='new_price' placeholder='enter product offer price'
            className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newProduct.new_price} />
        </div>

        <div className='flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
          <label htmlFor="image">Image</label>
          <input required type='file' name='image' id='image'
            className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} />
        </div>

        <button type='submit' className='px-4 p-1 bg-orange-500 text-white rounded-md'>Submit</button>
        <p>{problem}</p>
      </form>
    </section>
  )
}

export default AddProduct
