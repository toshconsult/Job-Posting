import { createContext, useContext, useState } from "react"
import { UserContext } from "../UserContext"

export const RoleContext = createContext(null)
const RoleContextProvider = ({children}) => {
   const [role, setRole] = useState('')

  //  const {url, userToken} = useContext(UserContext)


   
    
   const contextValue = { role, setRole };

  return (
    <RoleContext.Provider value={contextValue}>
      {children}
    </RoleContext.Provider>
  )
}


export default RoleContextProvider

