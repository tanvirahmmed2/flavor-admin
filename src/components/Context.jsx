import React, { createContext } from 'react'

export const ShopContext= createContext()


export const ContextProvider=({children})=>{





    
    const ContextValue={}
    return <ShopContext.Provider value={ContextValue}>

    </ShopContext.Provider>
}
