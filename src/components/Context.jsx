import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext()

export const ContextProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)
  const [user, setUser] = useState(null)
  const [product, setProduct] = useState([])
  const [order, setOrder] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true) // ✅ NEW

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('http://localhost:5000/user/protected', {
          credentials: 'include' // send cookies
        })
        const data = await res.json()
        if (data.success) {
          setUser(data.user)
          setIsAdmin(data.user.isAdmin)
        } else {
          setUser(null)
          setIsAdmin(false)
        }
      } catch (err) {
        setUser(null)
        setIsAdmin(false)
      } finally {
        setLoading(false) // ✅ stop loading once fetch finishes
      }
    }
    checkSession()
  }, [])

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/product', {
          method: "GET",
          headers: { Accept: 'application/json' },
        })
        const data = await res.json()
        setProduct(data.product || [])
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
    loading, // ✅ pass down
  }

  return <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
}
