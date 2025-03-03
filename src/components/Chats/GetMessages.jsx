
import {  useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import Loader from "../Loader";
import {  useNavigate } from "react-router-dom";
import image from '/src/assets/react.svg' 
import { IoIosCheckmark } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
const GetMessages = () => {
    const {url} = useContext(AuthContext)
    const {token} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState([])
   const navigate = useNavigate()
      
const getMessages = async ()=>{
    
    if (!token){
        navigate('/login')
    }
    setLoading(true)
    const response = await fetch(`${url}api/v1/chat/67ab605b68eebf099535176f/messages`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })

    if(response.ok){
        const data = await response.json()
        setMessages(data)
        console.log(data);
       setLoading(false) 
    } else {
        const data = await response.json()
        console.log(data.error);
        setLoading(false)
        
    }
}

useEffect(()=>{
    getMessages()
},[])


    const formatTime = (timestamp) => {
      return new Date(timestamp).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    }

 const sliceMessage = (message, maxlength = 20)=>{
    return message.length > maxlength ? message.slice(0, maxlength) + "...." : message
 }   

  return (
    <div>
        <h1 className="text-[25px] font-semibold pb-6 mt-14 px-10 md:text-center">Messages</h1>
        {loading ? <Loader /> : <>
        <div className="w-full gap-y-2 flex flex-col justify-center items-center">

        {
            messages.map(msg =>{
                return(
                    <div key={msg.sender._id} className="w-[328px] h-[67px] border-1 
                    border-[#F3F5FF] rounded-2xl flex flex-col justify-center items-center gap-y-10 my-2">
                        <div className="flex justify-between px-4 items-center w-full">
                            <div className="flex items-center gap-3 justify-between">
                            <img src={image}/>
                            <div>
                        <h2 className="font-bold">{msg.sender.username.toUpperCase()}</h2>
                        <p className="text-[11px]">{sliceMessage(msg.message)}</p>
                            </div>
                            </div>
                            <div>
                            <small>{formatTime(msg.createdAt)}</small>
                            <small className={msg.isRead ? 'text-blue-500': ''}>{msg.isRead ? <IoCheckmarkDone /> : <IoIosCheckmark />}</small>
                            </div>
                        </div>
                    </div>
                )
            })
        }
       </div>
       </>}
    </div>
  )
}

export default GetMessages