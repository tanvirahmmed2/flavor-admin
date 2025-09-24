import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Home from './layout/Home'
import Footer from './layout/Footer'

const App = () => {
  return (
    <div>
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
