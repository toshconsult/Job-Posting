import {  useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import Loader from "../Loader";
import {  useNavigate } from "react-router-dom";
import image from '/src/assets/react.svg' 
import { IoIosCheckmark } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";

const StartChat = () => {
    const {url} = useContext(AuthContext)
    const {token} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState([])
   const navigate = useNavigate()

   const chat = async ()=>{
    if(!token){
        navigate('/login')
    }
    const response = await fetch(`${url}api/v1/chat/create`, {
        method: 'POST',
        headers: {
             'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
                "userId2": "67a0be169e1b6b20ad921a57"
            })
        
    })
    if(response.ok){
        const data = await response.json()
        console.log(data);
        
    } else {
        const data = await response.json()
        console.log(data.error);
    
        
    }
   }

   useEffect(()=> {
    chat()
   }, [])

  return (
    <div>StartChat</div>
  )
}

export default StartChat