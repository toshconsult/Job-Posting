import { createContext, useEffect, useMemo, useState } from "react"


export const UserContext = createContext({});

export const UserContextProvider = ({children}) =>{

    const [user, setUser] = useState();
    const [balance, setBalance] = useState()
    const [loading, setLoading] = useState(false);
    // const [initChat, setInit] = useState(null)
    
    const [userToken, setUserToken] = useState(()=>{

        const storedToken = localStorage.getItem('token')
        return storedToken ? storedToken : null
    });


    const url = 'https://airrandserver-nhc3.onrender.com/'

    /////////------------------------------------ Fetch User Profile ------------------------------------/////////////////////
    const getuser = async ()=>{
        setLoading(true)
        const response = await fetch(`${url}user/dashboard`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(response.ok){
            setLoading(false)
            const data = await response.json()
            setUser(data.userDetails.user)
            setBalance(data.userDetails.balance)
        } else{
            // const error = await response.json()
            console.log(response);
        //    localStorage.removeItem('token')
            setLoading(false)
            
        }

    }
    
    const logout = ()=>{
        setUser(null)
        setUserToken(null)
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    
  
    useEffect(()=> {
        if(userToken){
            getuser()
            localStorage.setItem('token', userToken)
        } else {
            
            localStorage.removeItem('token')
        }
    }, [])

    const contextvalue = useMemo(()=>({
        url, user, userToken, loading, balance,  logout, getuser
    }), [balance, loading, user, userToken, url])
    
    return(
    <UserContext.Provider value={contextvalue}>
        {children}
    </UserContext.Provider>
)

}