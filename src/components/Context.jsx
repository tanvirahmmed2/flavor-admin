import React, { createContext, useState } from 'react'

export const ShopContext = createContext()


export const ContextProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false)





    const ContextValue = {
        isSidebar,
        setIsSidebar,
    }
    return <ShopContext.Provider value={ContextValue}>

    </ShopContext.Provider>
}
