import { useContext, useEffect } from "react"
import { UserContext } from "../UserContext"


const AssignTask = () => {

    const {url, userToken} = useContext(UserContext)

    const assign = async ()=>{
        const response = fetch(`${url}api/v1/client/67a0c3ecc87b320a39b14147/approve`, {
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
            const error = await response.json()
            console.log(error)
        }
    } 

    useEffect(()=>{
        assign()
    }, [])

  return (
    <div>Assign-task</div>
  )
}

export default AssignTask