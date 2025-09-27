import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ShopContext } from './Context'

const ProtectedRoute = ({ children }) => {
  const { isAdmin, user } = useContext(ShopContext)

  // wait for session check
  if (user===null) return <div>Please sign in or sign up</div> // or a spinner

  if (!isAdmin) return <Navigate to="/signin" replace />

  return children
}

export default ProtectedRoute
