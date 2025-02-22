import { createContext} from "react"


export const AuthContext = createContext(null)
const AuthContextProvider = ({children}) => {
    const url = 'https://thebestng.onrender.com/'
    // const [user, setUser] = useState(null)
    const token = localStorage.getItem('token')
    // if(token){
    //     setUser(token)
    // }
    const contextValue = { 
        url,
        token,
       
    }
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

