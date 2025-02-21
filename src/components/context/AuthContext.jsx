import { createContext} from "react"


export const AuthContext = createContext(null)
const AuthContextProvider = ({children}) => {
    const url = 'https://thebestng.onrender.com/'
    
    const contextValue = { 
        url,
     
    }
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

