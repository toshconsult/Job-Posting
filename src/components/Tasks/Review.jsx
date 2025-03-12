  import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"

const Review = () => {
 const {url, token} = useContext(UserContext)
 const navigate = useNavigate()
 

    const reviewTask = async ()=>{

        if(!token){
            navigate('/login')
        }

        const response = await fetch(`${url}api/v1/client/review`, {
           method: 'POST',
           headers:{
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/json'
           },
           body: JSON.stringify({
            "taskId": "67a0c3ecc87b320a39b14147",
            "message": "I love the way the task was handled",
            "rating": 3
        })

        })
        
        if (response.ok){
            const data = await response.json()
            console.log(data);
            
        } else {
            const data = await response.json()
            console.log(data.error);
        
            
        }

    }
useEffect(()=> {
 reviewTask()
}, [])

  return (
    <div>Review</div>
  )
}

export default Review