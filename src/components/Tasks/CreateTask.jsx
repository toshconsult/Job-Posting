import { useContext, useState } from "react"
import Loader from "../Loader";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";


const CreateTask = () => {

      const {url, token} = useContext(UserContext)
      const [loading, setLoading] = useState(false)
     const navigate = useNavigate()
      const [formdata, setFormdata] = useState({
        title: '',
        mustHave: '',
        description: '',
        location: '',
        pricing: '',
        date: '',
        video: ''
       
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata(prevData => ({
        ...prevData,
        [name]: value,  
       
        }));
      }
     
    // !!!!!!!!!!-------------------------------------- FUCTION TO HANDLE SUBMIT --------------------------------------!!!!!!!!!!
      const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("Submitting data:", formdata); 
        console.log(token);
    
        try {
          setLoading(true)
          if (!token) {
            console.error("Token is missing!");
           navigate('/login')

          }

            
          const response = await fetch(`${url}api/v1/client/create-task`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formdata)
          }) 
    
          if(response.ok){
            const data = await response.json();
            setLoading(false)
            toast.success(data.message)
          } 
          else {
            const data = await response.json();
          //  console.log(data.error);
            setLoading(false)
            toast.error(data.error)
          }
    
        } catch (error) {
          loading(false)
          console.log(error);
          
          
        }
      }

  return (
    <div className="flex flex-col items-center justify-center">
        {loading ? <Loader /> : <>
        <h1 className="text-[25px] pb-6 mt-14 px-10 md:text-center">Post Your 
            <span className="text-[#EA1588] "> Task</span></h1>
       <form onSubmit={handleSubmit}>
        <ToastContainer />
        <div className="w-[328px] gap-y-2 flex flex-col justify-center">
            <label htmlFor="title" className="text-[#333] font-semibold">Post Title</label>
            <input type="text" id="title" placeholder="Enter title" name="title"
            onChange={handleChange}
            className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
           placeholder:text-black border-2 border-[#F3F5FF] "/>

        <label htmlFor="title" className="text-[#333]">A Must Have</label>
            <textarea id="title" placeholder="Tell tasker what they need to have in order to complete the task. e.g tools, cleaning products etc" 
            onChange={handleChange}
            name="mustHave"
            className="w-[328px] h-[79px] rounded-md p-2 px-5 outline-0 py-4
           placeholder:text-black placeholder:text-[12px] border-2 border-[#F3F5FF] "/>

            <label htmlFor="Description" className="text-[#333]">Description</label>
            <textarea id="Description" placeholder="Enter the task description" 
            onChange={handleChange}
            name="description"
            className="w-[328px] h-[114px] rounded-md p-2 px-5 outline-0 py-4
           placeholder:text-black placeholder:text-[12px] border-2 border-[#F3F5FF] "/>

            <label htmlFor="location" className="text-[#333]">Location</label>
            <input type="text" placeholder="Enter location" 
            name="location"
            onChange={handleChange}
            className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
           placeholder:text-black border-2 border-[#F3F5FF] "/>

            <label htmlFor="price" className="text-[#333]">Price</label>
            <input type="text" placeholder="Enter price" 
            onChange={handleChange}
            name="pricing"
            className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
           placeholder:text-black border-2 border-[#F3F5FF] "/>

            <label htmlFor="date" className="text-[#333]">Date</label>
            <input type="date" placeholder="Enter date" 
            onChange={handleChange}
            name="date"
            className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
           placeholder:text-black border-2 border-[#F3F5FF] "/>

            <label htmlFor="video" className="text-[#333]">Video</label>
            <input type="file" placeholder="Upload a video" 
            onChange={handleChange}
            name="video"
            className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
           placeholder:text-black border-2 border-[#F3F5FF] "/>

        <button type="submit" className="w-[328px] my-5 py-[20px] cursor-pointer 
        bg-[#EA1588] hover:bg-white rounded-3xl text-black hover:border-2 hover:border-[#F3F5FF]">Post</button>
       
        </div>
       </form>
       </>  }
    </div>
  )
}

export default CreateTask