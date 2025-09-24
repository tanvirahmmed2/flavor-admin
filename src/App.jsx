import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Home from './layout/Home'
import Footer from './layout/Footer'
import Order from './pages/Order'
import Setting from './pages/Setting'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'
import Products from './pages/Products'
import Review from './pages/Review'
import Error from './components/Error'

const App = () => {
  return (
    <div className='w-full relative overflow-x-hidden'>
      <Navbar/>
      <Sidebar/>
      <div className='w-full mt-24 min-h-screen flex flex-col items-center justify-center gap-6'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/settings' element={<Setting/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/updateproduct' element={<UpdateProduct/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/reviews' element={<Review/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
