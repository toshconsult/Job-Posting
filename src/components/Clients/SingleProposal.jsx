import { useContext, useEffect, useState } from "react"
import { UserContext } from "../UserContext"
import { MdOutlineMessage } from "react-icons/md"
import { useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Loader from "../Loader"

const SingleProposal = () => {
const {url, userToken} = useContext(UserContext)
const [proposal, setProposals] = useState({})
const [profileId, setProifleId] = useState('')
const [taskId, setTaskid] = useState('')
const [loading, setloading] = useState(false)
// console.log(taskId);
// console.log(profileId);

const {id} = useParams()
// const id = '67e183403a9bc14667f76a09'

useEffect(()=>{
   
    const getProposal = async ()=>{
        setloading(true)
        const response = await fetch(`${url}client/proposal/${id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${userToken}`,
                'content-type': 'application/json'
            }
        })
        if(response.ok){
            const data = await response.json()
            setProposals(data.proposal)
            setProifleId(data.proposal.tasker._id)
            setTaskid(data.proposal.task._id)
            setloading(false)
            // console.log(data);
            
        } else{
            // const err = await response.json()
            // console.log(err);
            setloading(false)
            
        }
    }
    getProposal()

},[id, url, userToken])
////------------------------------------ User Profile ---------------------------------////

const getProfile = async ()=> {
    const response = await fetch(`${url}user/profile/${profileId}`)
    if(response.ok){
        // const data = await response.json()
        // console.log(data);
        window.location.href = `/profile/${profileId}`
        
    } else{
        const err = await response.json()
        console.log(err);
        
    }
}



///------------------------------------ ASSIGN TASKS -------------- //////

    
    
    const assign = async ()=>{
        
        const response = await fetch(`${url}client/task/${taskId}/award/${profileId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }

        })
        if(response.ok){
           const data = await response.json()
    toast.success(data.message)
              console.log(data)
        } else {
            const error = await response.json()
            toast.error(error.error)
            console.log(error)
        }
    } 


  return (
    <div className="my-10 px-10 md:px-16">
        {loading ? <Loader /> : <>
        <div className="flex items-center justify-between">
            <div className="flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYwM33sSN7MtnLIq0k1qjhpoEtSstLE26gA&s" 
            className="h-20 bg-gray-400"/>
            <div onClick={getProfile} className="cursor-pointer">
                <p>{proposal?.tasker?.username}</p>
                <p>Web Developer</p>
            
            </div>
            </div>
            <div>
                <button> <MdOutlineMessage size={40} /> </button>
            </div>
            
        </div>
        <div className="  py-4">
        <ToastContainer />

            <h2 className="text-2xl font-semibold pb-3">Proposal Description</h2>
                <p>{proposal?.description}</p>
</div>
<div className="flex justify-between items-center">
    <div >
    <h4 className="font-semibold text-red-500 mb-2">Tasker&apos;s Bidding Price</h4>
    <button className="bg-gray-300 px-4 rounded-3xl ">₦{proposal?.price}</button>
    </div>
    <div>
        <button onClick={assign} className="bg-blue-900 px-4 py-2 rounded-3xl
         text-white cursor-pointer hover:bg-white hover:text-black hover:border hover:border-gray-200">Assign Task</button>
    </div>
</div>
</>}
    </div>
  )
}

export default SingleProposal