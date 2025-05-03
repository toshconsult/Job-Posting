import {  useEffect, useState } from "react"
import Loader from "../Loader";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useUserStore from "../context/Store";

import skills from '/src/components/Skills.jsx'
import ClientSideBar from "./ClientSideBar";

const buttons = [
  "Photograph",
  "Furniture",
  "Barber",
  "Electrician",
  "Painter",
  "Baker",
  "Cleaning",
  "Tutoring",
];

const CreateTask = () => {

      const {url} = useUserStore()
      const [loading, setLoading] = useState(false)
      const [field, setField] = useState('')
      const [selectedSkills, setSelectedSkills] = useState([])
     const userToken = localStorage.getItem('token')
     console.log(userToken);
     
     
     const navigate = useNavigate()

     const [title, setTitle] = useState()
     const [description, setDescription] = useState('')
     const [price, setPrice] = useState('')
     const [duration, setDuration] = useState('')
     const [projectType, sertProjectType] = useState('')
     const [location, setLocation] = useState('')
     const [skillss, setSkills] = useState([])
     const [taskImage, setTaskImage] = useState(null)
// console.log(taskImage);

  
    
      const handleSelect = (skill) => {
        setSelectedSkills((prev) => {
         
          return prev.includes(skill)
            ? prev.filter((s) => s !== skill) 
            : [...prev, skill]; 
        });
      };

      useEffect(() => {
        setSkills(selectedSkills)
        
      }, [selectedSkills]);
      
      
     
      
    // !!!!!!!!!!-------------------------------------- FUCTION TO HANDLE SUBMIT --------------------------------------!!!!!!!!!!
      const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("Submitting data:", formdata); 

        const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("duration", duration);
      formData.append("projectType", projectType);
      formData.append("location", location);
      formData.append("skills", skillss);
      if (taskImage) formData.append("taskImage", taskImage);
      
      
        
        try {
          setLoading(true)
         
            
          const response = await fetch(`${url}client/create-task`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${userToken}`
            },
            body: formData
          }) 
    
          if(response.ok){
            const data = await response.json();
            console.log(data);
            
            setLoading(false)
            toast.success(data.message)
            navigate('/dashboard')
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
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      <ClientSideBar />
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 space-y-4 md:px-10 w-full">
          <h1 className="text-[25px] pb-6 pl-14 md:pl-0 font-semibold">
            Post Your Todo
          </h1>
          <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <ToastContainer />
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="text-[#333] font-semibold">
                  Todo Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  placeholder="Enter title"
                  onChange={(e)=>setTitle(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="description" className="text-[#333] font-semibold">
                  Description
                </label>
                <textarea
                  id="description"
                 value={description}
                  placeholder="Enter the todo description"
                  onChange={(e)=>setDescription(e.target.value)}
                  className="w-full h-[114px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="location" className="text-[#333] font-semibold">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  name="location"
                  placeholder="Enter location"
                  onChange={(e)=> setLocation(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="price" className="text-[#333] font-semibold">
                  Price ₦
                </label>
                <input
                  type="text"
                  value={price}
                  name="price"
                  placeholder="Enter price"
                  onChange={(e)=> setPrice(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="duration" className="text-[#333] font-semibold">
                Duration
                </label>
                <select
                  name="duration"
                  value={duration}
                  onChange={(e)=>setDuration(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF]"
                >
                  <option value="">Select Duration</option>
                  <option value="1">1 Month</option>
                  <option value="2">2 months</option>
                  <option value="3">3 months</option>
                  <option value="4">4 months</option>
                  <option value="5">5 months</option>
                  
                </select>
              </div>

              <div>
                <label htmlFor="projectType" className="text-[#333] font-semibold">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={projectType}
                  onChange={(e)=>sertProjectType(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF]"
                >
                  <option value="">Select project type</option>
                  <option value="Onsite">Onsite</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label htmlFor="taskImage" className="text-[#333] font-semibold">
                  Todo Image
                </label>
                <input
                  type="file"
                  // value={taskImage}
                  name="taskImage"
                  onChange={(e)=>setTaskImage(e.target.files[0])}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF]"
                />
              </div>

              <div>
                <label htmlFor="field" className="text-[#333] font-semibold">
                  Field
                </label>
                <select
                  name="field"
                  onChange={(e)=>setField(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF]"
                >
                  <option value="">Select a field</option>
                  {buttons.map((bt, i) => (
                    <option key={i} value={i}>
                      {bt}
                    </option>
                  ))}
                </select>
              </div>

              {field && (
                <div className="mt-2">
                  <label className="text-[#333] font-semibold">Skills</label>
                  <div className="grid grid-cols-2 gap-2 p-2 bg-[#f2f2f2] border-2 border-[#F3F5FF] rounded-md">
                    { skills[field].map((skill, i) => (
                      <label key={i} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={skill}
                          checked={selectedSkills.includes(skill)}
                          onChange={() => handleSelect(skill)}
                          className="w-4 h-4 text-[#333] border-gray-300 rounded focus:ring-[#EA1588]"
                        />
                        <span className="text-sm text-gray-700"> {skill }</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full max-w-xs py-4 bg-[#333] text-white rounded-3xl hover:bg-[#f2f2f2]
                 hover:text-[#333] hover:border-2 hover:border-[#333] transition-all"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default CreateTask