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
import Forget from './user/Forget'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <div className='w-full relative overflow-x-hidden'>
      <Navbar/>
      <Sidebar/>
      <div className='w-full mt-24 min-h-screen flex flex-col items-center justify-center gap-6 p-4'>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/orders' element={<ProtectedRoute><Order/></ProtectedRoute>} />
          <Route path='/products' element={<ProtectedRoute><Products/></ProtectedRoute>} />
          <Route path='/reviews' element={<ProtectedRoute><Review/></ProtectedRoute>} />
          <Route path='/settings' element={<ProtectedRoute><Setting/></ProtectedRoute>} />
          <Route path='/addproduct' element={<ProtectedRoute><AddProduct/></ProtectedRoute>} />
          <Route path='/updateproduct' element={<ProtectedRoute><UpdateProduct/></ProtectedRoute>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/recover' element={<Forget/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
