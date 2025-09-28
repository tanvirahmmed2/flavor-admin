import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ShopContext } from './Context'

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useContext(ShopContext)

  
  setTimeout(() => {
    if (!isAdmin) return <Navigate to="/signin" replace />
  }, 2000);

  

  return children
}

export default ProtectedRoute
