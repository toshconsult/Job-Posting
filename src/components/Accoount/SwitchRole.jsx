import { useContext, useEffect } from "react"
import { UserContext } from "../UserContext"


const SwitchRole = () => {
    const {user, url, userToken} = useContext(UserContext)


    const switchRole = async ()=>{
        const response = fetch(`${url}api/v1/switch-role`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }
        })

        if(response.ok){
            const data = await response.json()
            console.log(data)
        } else {
            const error = await (await response).json()
            console.log(error)
        }
    }
useEffect(()=>{
    switchRole()
}, [])


  return (
    <div>SwitchRole</div>
  )
}

export default SwitchRole