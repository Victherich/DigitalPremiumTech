import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const Context = createContext()


const ContextProvider = ({children}) => {

    const [active,setActive]=useState("Home")
    const [showTermsAndConditionsUI,setShowTermsAndConditionsUI]=useState(false)
  

  return (
    <Context.Provider value={{active,setActive,showTermsAndConditionsUI,setShowTermsAndConditionsUI}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
