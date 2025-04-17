import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const ApproveSubmission = () => {

    const {url, userToken} = useContext(UserContext)

    const id = '67e01ef2317360117e92f91b'

    const approve = async ()=>{
        const res = await fetch(`${url}client/task/${id}/approve`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${userToken}`,
                "Content-Type": "application/json",
            }
        })

        if(res.ok){
            const data = await res.json()
            console.log(data);
            
        } else {
            const err = await res.json()
            console.log(err);
            
        }
    }

  return (
    <div onClick={approve}>ApproveSubmission</div>
  )
}

export default ApproveSubmission