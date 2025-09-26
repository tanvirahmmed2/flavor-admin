import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ShopContext } from './Context'

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useContext(ShopContext)

  // wait for context to load on refresh
  if (isAdmin === null) return null

  if (!isAdmin) return <Navigate to="/signin" replace />

  return children
}

export default ProtectedRoute
