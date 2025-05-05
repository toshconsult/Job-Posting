import {  useState } from "react"
import Loader from "../Loader"
import { toast, ToastContainer } from "react-toastify"
import useUserStore from "../context/Store"


const ForgotPassword = () => {
    const {url} = useUserStore()
    const [loading, setLoading] = useState(false)
    const [formdata, setFormdata] = useState({
        email: '',
    })

    const handleChange = (e) => { 
        const {name, value} = e.target
        setFormdata(prev => ({
            ...prev,
            [name]: value
        }))
        
    }
    
    const handleSubmit = async (e) => { 
        e.preventDefault()

        try {
            setLoading(true)
            const response = await fetch(`${url}user/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
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
    {/* <h4 className="font-semibold text-right pr-10 mt-4 md:hidden">Back &gt;</h4> */}
    <div className="w-full gap-y-2 flex flex-col justify-center">
      <h1 className="text-[25px] font-semibold pb-6 mt-14 px-10 md:text-center">Forgot <span className="text-[#333] ">Password</span></h1>
     <ToastContainer />
      <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 justify-center items-center">
        <input type="email" placeholder="Enter Your Email" required
        onChange={handleChange}
        name="email"
        className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
         placeholder:text-black placeholder:font-semibold bg-[#FFF5F6]" />
         
       
        {/* <p className="px-10 md:w-[30vw]">Make sure you enter a valid <span className="text-[#333]">email</span></p> */}
      <button type="submit" className="w-[328px] py-[20px] cursor-pointer bg-[#333] hover:bg-white rounded-3xl text-black hover:border-2 hover:border-[#F3F5FF]">Continue</button>
      </form>

    </div>
    </>
    }
  </div>
)
  
}

export default ForgotPassword