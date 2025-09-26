import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext()

export const ContextProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)
  const [user, setUser] = useState(null)
  const [product, setProduct] = useState([])
  const [order, setOrder] = useState([])
  const [isAdmin, setIsAdmin] = useState(null) // null means "not loaded yet"

  // Restore user & admin state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('admin_user')
    const storedIsAdmin = localStorage.getItem('isAdmin')
    const token = localStorage.getItem('admin_token')

    if (token && storedIsAdmin === 'true') {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/product', {
          method: "GET",
          headers: { Accept: 'application/json' },
        })
        const data = await res.json()
        setProduct(data.product || []) // safely handle undefined
      } catch (err) {
        console.error('Error fetching products:', err)
      }
    }

    fetchProducts()
  }, [])

  const ContextValue = {
    isSidebar,
    setIsSidebar,
    user,
    setUser,
    product,
    setProduct,
    order,
    setOrder,
    isAdmin,
    setIsAdmin,
  }

  return <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
}
