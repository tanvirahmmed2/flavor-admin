import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ShopContext } from './Context'

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(ShopContext)

  if (!user) {
    return <Navigate to="/signin" replace />
  }

  return children
}

export default ProtectedRoute
