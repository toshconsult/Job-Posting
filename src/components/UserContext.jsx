import { createContext, useEffect, useState } from "react"


export const UserContext = createContext({});

export const UserContextProvider = ({children}) =>{

    const [user, setUser] = useState(null);
    
    
    const [userToken, setUserToken] = useState(()=>{

        const storedToken = localStorage.getItem('token')
        return storedToken ? storedToken : null
    });


    const url = 'https://thebestng.onrender.com/'

    const getuser = async ()=>{
        const response = await fetch(`${url}api/v1/user/profile`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(response.ok){
            const data = await response.json()
            setUser(data)
        } else{
            const error = await response.json()
            console.log(error);
            setUser(null)
            
        }

    }

    useEffect(()=> {
        if(userToken){
            localStorage.setItem('token', userToken)
            getuser()
        } else {
            
            localStorage.removeItem('token')
        }
    }, [userToken])

    const contextvalue = {url, user, userToken}
    
    return(
    <UserContext.Provider value={contextvalue}>
        {children}
    </UserContext.Provider>
)

}