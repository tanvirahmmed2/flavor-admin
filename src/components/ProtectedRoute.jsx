import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ShopContext } from './Context'

const ProtectedRoute = ({ children }) => {
  const { isAdmin, loading } = useContext(ShopContext)

  if (loading) {
    return <div>Loading...</div> // or spinner
  }

  if (!isAdmin) {
    return <Navigate to="/signin" replace />
  }

  return children
}

export default ProtectedRoute
