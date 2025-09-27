import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../components/Context'

const SignIn = () => {
  const navigate = useNavigate()
  const { setUser, setIsAdmin } = useContext(ShopContext)
  const [problem, setProblem] = useState('')
  const [loginuser, setLogInUser] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLogInUser(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProblem('')

    try {
      const res = await fetch('http://localhost:5000/user/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // ✅ important for cookies
        body: JSON.stringify(loginuser)
      })

      const data = await res.json()

      if (data.success) {
        if (!data.user.isAdmin) {
          setProblem('Access denied. Only admins can log in.')
          return
        }

        // ✅ Update context
        setUser(data.user)
        setIsAdmin(true)

        // Clear form
        setLogInUser({ email: '', password: '' })

        navigate('/') // redirect after login
      } else {
        setProblem(data.message || 'Login failed')
      }
    } catch (error) {
      console.error(error)
      setProblem('Something went wrong, try again later.')
    }
  }

  return (
    <div className='w-full flex items-center justify-center'>
      <section className='w-full lg:w-1/2 h-auto flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className='w-full flex flex-col text-center items-center justify-center p-4'>
          <h1 className='text-2xl font-semibold'>Welcome to Admin Page</h1>
          <p>Sign in & run your business faster, secured and premium</p>
          <Link to='/signup' className='text-orange-500 italic'>New worker!</Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className='w-full p-4 rounded-lg flex flex-col items-center justify-center gap-3 bg-gray-50'
        >
          <div className='flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name='email'
              id='email'
              className='w-full outline-none border-2 px-3 p-1 rounded-md'
              onChange={handleChange}
              value={loginuser.email}
            />
          </div>
          <div className='flex flex-col items-start justify-start gap-2 w-full md:w-3/5'>
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              name='password'
              id='password'
              className='w-full outline-none border-2 px-3 p-1 rounded-md'
              onChange={handleChange}
              value={loginuser.password}
            />
          </div>
          <Link className='text-xs italic text-blue-600 my-4' to='/recover'>Forgot password?</Link>
          <button type='submit' className='px-4 p-1 bg-orange-500 text-white rounded-md'>Sign In</button>
          <p className='text-xs text-red-600'>{problem}</p>
        </form>
      </section>
    </div>
  )
}

export default SignIn
