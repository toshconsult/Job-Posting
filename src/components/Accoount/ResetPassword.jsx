import {  useEffect, useState } from "react"
import Loader from "../Loader"
import { toast, ToastContainer } from "react-toastify"
import useUserStore from "../context/Store"
import { useLocation } from "react-router-dom"


const ResetPassword = () => {
    const {url, userToken} = useUserStore()
   const [email, setEmail] = useState('')
   const [token, setToken] = useState('')
    const location  = useLocation()
    const [newPassword, setNewPassword] = useState('')
    const [loading, setLoading] = useState(false)
    
      useEffect(()=>{
        const params = new URLSearchParams(location.search);
        const tokenParam = params.get("token");
        const emailParam = params.get("email");
    
        if (tokenParam && emailParam) {
          setToken(tokenParam);
          setEmail(emailParam);
        }

    },[location.search])

    const handleSubmit = async (e) => { 
        e.preventDefault()

        try {
            setLoading(true)
            const response = await fetch(`${url}user/update-password?token=${token}&email=${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify({newPassword: newPassword})
            })
            if(response.ok){
                const data = await response.json()
                console.log(data);
                toast.success(data.message)
                setLoading(false)
            } else {
                const data = await response.json()
                toast.error(data.error)
                setLoading(false)
            }
        } catch (error) {
           console.log(error);
            
        }
    }




   
  return (
    <div>
    {loading ? <Loader /> :
    <>
   
    <div className="w-full gap-y-2 flex flex-col justify-center">
      <h1 className="text-[25px] font-semibold pb-6 mt-14 px-10 md:text-center">Reset <span className="text-[#333] ">Password</span></h1>
     <ToastContainer />
      <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 justify-center items-center">
        <input type="password" placeholder="Enter a new Password" required
        onChange={(e)=>setNewPassword(e.target.value)}
        name="password"
        className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
         placeholder:text-black placeholder:font-semibold bg-[#FFF5F6]" />
         
       
      <button type="submit" className="w-[328px] py-[20px] cursor-pointer bg-[#333] hover:bg-white rounded-3xl text-black hover:border-2 hover:border-[#F3F5FF]">Continue</button>
      </form>

    </div>
    </>
    }
  </div>
)
  
}

export default ResetPassword