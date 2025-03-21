import { createContext, useEffect, useState } from "react"


export const UserContext = createContext({});

export const UserContextProvider = ({children}) =>{

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [initChat, setInit] = useState(null)
    
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
            setUser(data)
        } else{
            // const error = await response.json()
            console.log(response);
            // setUser(null)
            setLoading(false)
            
        }

    }
    
    const logout = ()=>{
        setUser(null)
        setUserToken(null)
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    
    ////------------------------------------- Initiate Support -------------------------------------/////////////////////
const initiateSupport = async ()=>{
    
    try {
        
        const response = await fetch(`${url}api/v1/support/start`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }
            
        })

        if(response.ok){
            const data = await response.json()
            // console.log(data);
            setInit(data)
        } else {
            const error = await response.json()
            console.log(error);
        }
    } catch (error) {
       console.log(error);
        
    }
}

useEffect(()=>{
    if(userToken){
        getuser()
        initiateSupport()
    }}, [])
    useEffect(()=> {
        if(userToken){
            getuser()
            localStorage.setItem('token', userToken)
        } else {
            
            localStorage.removeItem('token')
        }
    }, [userToken])

    const contextvalue = {url, user, userToken, loading, initChat, logout, getuser}
    
    return(
    <UserContext.Provider value={contextvalue}>
        {children}
    </UserContext.Provider>
)

}