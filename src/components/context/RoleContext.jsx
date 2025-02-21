import { createContext, useState } from "react"

export const RoleContext = createContext(null)
const RoleContextProvider = ({children}) => {
   const [role, setRole] = useState('')
    
   const contextValue = { role, setRole };

  return (
    <RoleContext.Provider value={contextValue}>
      {children}
    </RoleContext.Provider>
  )
}


export default RoleContextProvider

