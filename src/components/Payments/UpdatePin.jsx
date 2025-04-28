import {  useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useUserStore from "../context/Store";

import ClientSideBar from "../Clients/ClientSideBar";
import Sidebar from "../SideBar";
import axios from "axios";

const UpdatePin = () => {
    const {url, userToken, user} = useUserStore()
    const [loading, setloading] = useState(false)

    const [formData, setFormData] = useState({
        old_pin: "",
        new_pin: "",
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
    const res = await axios({
        method: "POST",
        url: `${url}user/update-pin`,
        data: formData,
        headers: {
          Authorization: `Bearer ${userToken}`,
        }
      })

    toast.success(res.data.message || res.data.error)
    setloading(false)
}
    
  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      {user?.userType === "client" ? <ClientSideBar /> : <Sidebar />}
          
            <div className="mt-4 space-y-4 md:px-10 w-full">
              <h1 className="text-lg font-semibold mb-8 pl-14 md:pl-0">
                Update <span className="text-[#333]">Pin</span>
              </h1>
              <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                <ToastContainer />
    
                <div className="space-y-4">
                  <div>
                    <label htmlFor="old_pin" className="text-[#333] font-semibold">
                      Old Pin
                    </label>
                    <input
                      type="number"
                     
                      name="old_pin"
                      placeholder="Enter your old pin"
                      onChange={handleChange}
                      className="w-full bg-gray-50 h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                    />
                  </div>
                  </div>
    
                  <div className="space-y-4">
                  <div>
                    <label htmlFor="new_pin" className="text-[#333] font-semibold">
                    Confirm Pin
                    </label>
                    <input
                      type="number"
                     
                      name="new_pin"
                      placeholder="Confirm your new pin"
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
                   {loading ? 'Updating...' : 'Update Pin'}
                  </button>
                </div>
                  </form>
                  </div>
          
                  </div>
  )
}

export default UpdatePin