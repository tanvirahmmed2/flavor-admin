import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Home from './layout/Home'
import Footer from './layout/Footer'
import Order from './pages/Order'

const App = () => {
  return (
    <div className='w-full relative overflow-x-hidden'>
      <Navbar/>
      <Sidebar/>
      <div className='w-full m-24 flex flex-col items-center justify-center gap-6'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/orders' element={<Order/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
