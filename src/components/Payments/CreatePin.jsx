import {  useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useUserStore from "../context/Store";

import ClientSideBar from "../Clients/ClientSideBar";
import Sidebar from "../SideBar";

const CreatePin = () => {
    const {url, userToken, user} = useUserStore()
    const [loading, setloading] = useState(false)

    const [formData, setFormData] = useState({
        pin: "",
        confirm_pin: "",
      });

    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }

const handleSubmit = async (e)=>{
    e.preventDefault()
setloading(true)
    const res = await fetch(`${url}user/create-pin`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    if(res.ok){
        const data = await res.json()
        toast.success(data.message || data.error) 
        // console.log(data);
        setloading(false)
        
    } else {
        const err = await res.json()
        toast.error(err.error)
        // console.log(err);
        setloading(false)
        
    }
}
    
  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      {user?.userType === "client" ? <ClientSideBar /> : <Sidebar />}
          
            <div className="mt-4 space-y-4 md:px-10 w-full">
              <h1 className="text-lg font-semibold mb-8 pl-14 md:pl-0">
                Create Pin
              </h1>
              <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                <ToastContainer />
    
                <div className="space-y-4">
                  <div>
                    <label htmlFor="pin" className="text-[#333] font-semibold">
                      Pin
                    </label>
                    <input
                      type="number"
                     
                      name="pin"
                      placeholder="Enter pin"
                      onChange={handleChange}
                      className="w-full bg-gray-50 h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                    />
                  </div>
                  </div>
    
                  <div className="space-y-4">
                  <div>
                    <label htmlFor="confirm_pin" className="text-[#333] font-semibold">
                    Confirm Pin
                    </label>
                    <input
                      type="number"
                     
                      name="confirm_pin"
                      placeholder="Confirm your pin"
                      onChange={handleChange}
                      className="w-full bg-gray-50 h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                    />
                  </div>
                  </div>
                  <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-full max-w-xs cursor-pointer py-4 bg-[#333] text-white rounded-3xl hover:bg-white hover:text-[#333] hover:border-2 hover:border-[#333] transition-all"
                  >
                    {loading ? "Creating..." : "Create Pin"}
                  </button>
                </div>
                  </form>
                  </div>
         
                  </div>
  )
}

export default CreatePin