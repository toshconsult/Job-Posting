import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../Loader";
import { UserContext } from "../UserContext";

const UpdatePin = () => {
    const {url, userToken} = useContext(UserContext)
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
    const res = await fetch(`${url}user/update-pin`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    if(res.ok){
        const data = await res.json()
        toast.success(data.message)
        setloading(false)
        
    } else {
        const err = await res.json()
        toast.error(err.error)
        setloading(false)
        console.log(err);
        
    }
}
    
  return (
    <div className="flex flex-col items-center md:items-start px-4 md:px-20">
          {loading ? (
            <Loader />
          ) : (
            <>
              <h1 className="text-[25px] pb-6 mt-14 md:text-center">
                Update <span className="text-[#EA1588]">Pin</span>
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
                      className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
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
                      className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                    />
                  </div>
                  </div>
                  <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-full max-w-xs cursor-pointer py-4 bg-[#EA1588] text-white rounded-3xl hover:bg-white hover:text-[#EA1588] hover:border-2 hover:border-[#EA1588] transition-all"
                  >
                    Create
                  </button>
                </div>
                  </form>
                  </>
          )}
                  </div>
  )
}

export default UpdatePin