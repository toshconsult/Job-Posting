import { useContext, useEffect, useState } from "react"
import { UserContext } from "../UserContext"
import { MdOutlineMessage } from "react-icons/md"

const SingleProposal = () => {
const {url, userToken} = useContext(UserContext)
const [proposal, setProposals] = useState({})
const [profileId, setProifleId] = useState('')
// console.log(proposal);
console.log(profileId);


const id = '67e183403a9bc14667f76a09'
    const getProposal = async ()=>{
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
            // console.log(data);
            
        } else{
            const err = await response.json()
            console.log(err);
            
        }
    }

////------------------------------------ User Profile ---------------------------------////

const getProfile = async ()=> {
    const response = await fetch(`${url}user/profile/${profileId}`)
    if(response.ok){
        const data = await response.json()
        console.log(data);
        window.location.href = `/profile/${profileId}`
        
    } else{
        const err = await response.json()
        console.log(err);
        
    }
}

useEffect(()=>{
    getProposal()

},[])
  return (
    <div className="my-10 px-10 md:px-16">
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
            <h2 className="text-2xl font-semibold pb-3">Proposal Description</h2>
                <p>{proposal?.description}</p>
</div>
<div>
    <h4 className="font-semibold text-red-500 mb-2">Tasker&apos;s Bidding Price</h4>
    <button className="bg-gray-300 px-4 rounded-3xl ">₦{proposal?.price}</button>
</div>
    </div>
  )
}

export default SingleProposal