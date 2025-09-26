import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  })
  const [problem, setProblem] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewUser((prev) => ({
      ...prev, [name]: value
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(newUser)
    try {
      const res = await fetch('http://localhost:5000/user/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      const data = await res.json()
      if (data.success) {

        setProblem('sign up successful')
        setNewUser({
          name: '',
          email: '',
          password: '',
          phone: ''
        })
      }else {
        setProblem(data.message || 'Login failed')
      }
    } catch (error) {
      setProblem(error)

    }
  }

  return (
    <div className='w-full flex items-center justify-center'>
      <section className='w-full lg:w-1/2 h-auto flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className='w-full flex flex-col items-center justify-center p-4 text-center'>
          <h1 className='text-2xl font-semibold'>Welcome to Admin Page</h1>
          <p>Sign up & run your business faster, secured and premium</p>
          <Link to='/signin' className='text-orange-500 italic'>Already worker!</Link>


        </div>


        <form onSubmit={handleSubmit} className='w-full p-4 rounded-lg flex flex-col items-center justify-center gap-3 bg-gray-50'>
          <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
            <label htmlFor="name">name</label>
            <input required type="text" name='name' id='name' className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newUser.name} />
          </div>
          <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
            <label htmlFor="phone">phone</label>
            <input required type="text" name='phone' id='phone' className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newUser.phone} />
          </div>
          <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
            <label htmlFor="email">email</label>
            <input required type="email" name='email' id='email' className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newUser.email} />
          </div>
          <div className=' flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
            <label htmlFor="password">password</label>
            <input required type="text" name='password' id='password' className='w-full outline-none border-2 px-3 p-1 rounded-md' onChange={handleChange} value={newUser.password} />
          </div>
          <button type='submit' className='px-4 p-1 bg-orange-500 text-white rounded-md'>Sign Up</button>
          <p className='text-xs text-red-600'>{problem}</p>
        </form>

      </section>
    </div>
  )
}

export default SignUp
