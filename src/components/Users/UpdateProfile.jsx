import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import Loader from "../Loader"
import { toast, ToastContainer } from "react-toastify"
import ClientSideBar from "../Clients/ClientSideBar"
import { Sidebar } from "lucide-react"


const UpdateProfile = () => {
    const {url, user} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const userToken = localStorage.getItem('token')
console.log(user);
    
    const [formdata, setFormdata] = useState({
        profilePicture: user?.profilePicture,
        jobTitle: user?.jobTitle,
        profileDescription: user?.profileDescription,
        location: user?.location
        })
     
// console.log(formdata);

const handleChange = (e) => {
  const { name, value, type, files } = e.target;

  setFormdata(prevData => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value
  }));
};
        
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
      const formData = new FormData()
      formData.append("profilePicture", formdata.profilePicture);
      formData.append("jobTitle", formdata.jobTitle);
      formData.append("profileDescription", formdata.profileDescription);
      formData.append("location", formdata.location);

        setLoading(true)
       const response = await fetch(`${url}user/update-profile`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${userToken}`,
          // 'content-type': 'application/json'
        },
        body: formData
       })
       if (response.ok){
        const data = await response.json()
        setLoading(false)
        console.log(data);
        toast.success(data.message)
        window.location.href = '/dashboard'
        // navigate('/dashboard')
        
       } else {
        const error = await response.json()
        console.log(error);
        setLoading(false)
        toast.error(error.error)
       }
     }
  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      {user?.userType === 'client' ? <ClientSideBar /> : <Sidebar />} 
    {loading || !user  ? <Loader /> :
          <div className="mt-4 space-y-4 md:px-10 w-full">
          <div className="w-full gap-y-2 flex flex-col">
          <h1 className="text-[25px] font-semibold pb-6 ">Update 
           Profile</h1>
          <ToastContainer />
            <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-4 justify-center items-center">
              
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Upload your profile picture:</label>
              <input type="file" placeholder="Upload your profile" 
              onChange={handleChange}
              name="profilePicture"
              
              className="w-[328px] md:w-[652px] h-[50px] rounded-md p-2 px-5 outline-0
               bg-gray-50  border border-blue-50" />
                </div>

                <div className="flex flex-col gap-2">
               <label className="font-semibold">Tagline: </label>
              <input type="text" placeholder="Cerfified Photographer."
              onChange={handleChange}
              name="jobTitle"
              value={formdata.jobTitle}
              className="w-[328px] md:w-[652px] rounded-md p-2 px-5 outline-0
               bg-gray-50 border border-blue-50" />
            </div>

                <div className="flex flex-col gap-2">
                <label className="font-semibold">Description: </label>
              <textarea type="text" placeholder="I am a phontographer with 5 years experience. I shoot various type of pictures include...." 
              onChange={handleChange}
              name="profileDescription"
              value={formdata?.profileDescription}
              className="w-[328px] md:w-[652px] min-h-[100px] rounded-md p-2 px-5 outline-0
                bg-gray-50 border border-blue-50" />
               </div>

               
               <div className="flex flex-col gap-2">
               <label className="font-semibold">Location: </label>
              <input type="text" placeholder="Tosh consult Inc. Ilorin, Kwara state" 
              onChange={handleChange}
              name="location"
              value={formdata.location}
              className="w-[328px] md:w-[652px] h-[50px] rounded-md p-2 px-5 outline-0
               bg-gray-50  border border-blue-50" />
               </div>
             {/* <ToastContainer /> */}
            <button type="submit" className="w-[328px] md:w-[652px] py-[20px] 
            cursor-pointer bg-[#333] hover:bg-white rounded-3xl text-white hover:text-black hover:border-2 hover:border-[#F3F5FF]">Continue</button>
            </form>
             
          </div>
          </div>
          }
        </div>
  )
}

export default UpdateProfile