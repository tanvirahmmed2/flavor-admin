import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Home from './layout/Home'
import Footer from './layout/Footer'

const App = () => {
  return (
    <div className='w-full relative overflow-x-hidden'>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
