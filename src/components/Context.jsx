import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [reserve, setReserve] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('https://flavor-server.onrender.com/user/protected', {
          credentials: 'include',
        });
        const data = await res.json();
        if (data.success) {
          setUser(data.user);
          setIsAdmin(data.user.isAdmin);
        } else {
          setUser(null);
          setIsAdmin(false);
        }
      } catch (err) {
        setUser(null);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://flavor-server.onrender.com/product', {
          method: 'GET',
          headers: { Accept: 'application/json' },
        });
        const data = await res.json();
        setProduct(data.product || []);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  // Fetch reserve
  useEffect(() => {
    const fetchReserve = async () => {
      try {
        const res = await fetch('https://flavor-server.onrender.com/reserve', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await res.json();
        if (data.success) {
          setReserve(data.payload || []);
        }
      } catch (error) {
        console.error('Error fetching reserve:', error);
      }
    };
    fetchReserve();
  }, []);

  
  // Fetch order
useEffect(() => {
  const fetchOrder = async () => {
    try {
      const res = await fetch('https://flavor-server.onrender.com/order/getorders', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      if (data.success) {
        setOrder(data.payload || []);
      } else {
        console.error('Failed to fetch orders:', data.message);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };

  fetchOrder();
}, []); // fetch only once

console.log(order)


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
    loading,
    reserve,
    setReserve,
  };

  return <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>;
};
