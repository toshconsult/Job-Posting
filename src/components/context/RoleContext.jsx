import { createContext,  useState } from "react"
import { UserContext } from "./UserContext"

export const RoleContext = createContext(null)
const RoleContextProvider = ({children}) => {
   const [role, setRole] = useState('')

  //  const {url, userToken} = useUserStore()


   
    
   const contextValue = { role, setRole };

  return (
    <RoleContext.Provider value={contextValue}>
      {children}
    </RoleContext.Provider>
  )
}


export default RoleContextProvider

