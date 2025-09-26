import React, { createContext, useState } from 'react'

export const ShopContext = createContext()


export const ContextProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false)
    const [user, setUser]= useState(null)
    const [product, setProduct]=useState([])
    const [order, setOrder]= useState([])




    const ContextValue = {
        isSidebar, setIsSidebar,
        user, setUser,
        product, setProduct,
        order, setOrder

    }
    return <ShopContext.Provider value={ContextValue}>
        {children}
    </ShopContext.Provider>
}
