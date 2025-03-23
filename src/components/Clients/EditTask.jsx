import { useContext, useEffect, useState } from "react"
import Loader from "../Loader";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import skills from '/src/components/Skills.jsx'

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

const EditTask = () => {

      const {url, user, userToken} = useContext(UserContext)
      const [loading, setLoading] = useState(false)
      const [field, setField] = useState('')
      const [selectedSkills, setSelectedSkills] = useState([])
      const {id} = useParams()
     
     
     const navigate = useNavigate()
      const [formdata, setFormdata] = useState({
        title: '',
        description: '',
        duration: '',
        projectType: '',
        location: '',
        price: '',
        skills: selectedSkills,
        taskImage: null
       
      })
    console.log(formdata);
    
      const handleSelect = (skill) => {
        setSelectedSkills((prev) => {
         
          return prev.includes(skill)
            ? prev.filter((s) => s !== skill) 
            : [...prev, skill]; 
        });
      };

      useEffect(() => {
        // console.log(selectedSkills);
        formdata.skills = selectedSkills
      }, [selectedSkills]);
      
      // const handleFileChange = (e) => {
      //   const file = e.target.files[0]
      //   if (file) {
      //     setFormdata((prev) => ({ ...prev, taskImage: file }));
      //   }
      // };
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
        
        try {
          setLoading(true)
          // if (!userToken) {
          //   console.error("userToken is missing!");
          //  navigate('/login')

          // }

            
          const response = await fetch(`${url}client/edit-tasks/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify(formdata)
          }) 
    
          if(response.ok){
            const data = await response.json();
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
    <div className="flex flex-col items-center md:items-start px-4 md:px-20">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-[25px] pb-6 mt-14 md:text-center">
            Edit <span className="text-[#2F3C7E]">Task</span>
          </h1>
          <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <ToastContainer />
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="text-[#333] font-semibold">
                  Task Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter title"
                  onChange={handleChange}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="description" className="text-[#333] font-semibold">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter the task description"
                  onChange={handleChange}
                  className="w-full h-[114px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="location" className="text-[#333] font-semibold">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  onChange={handleChange}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="price" className="text-[#333] font-semibold">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter price"
                  onChange={handleChange}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="duration" className="text-[#333] font-semibold">
                Duration
                </label>
                <select
                  name="duration"
                  onChange={handleChange}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF]"
                >
                  <option value="">Select project type</option>
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
                  onChange={handleChange}
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
                  Task Image
                </label>
                <input
                  type="file"
                  name="taskImage"
                  onChange={handleChange}
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
                  <div className="grid grid-cols-2 gap-2 p-2 bg-white border-2 border-[#F3F5FF] rounded-md">
                    { skills[field].map((skill, i) => (
                      <label key={i} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={skill}
                          checked={selectedSkills.includes(skill)}
                          onChange={() => handleSelect(skill)}
                          className="w-4 h-4 text-[#EA1588] border-gray-300 rounded focus:ring-[#EA1588]"
                        />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full max-w-xs py-4 bg-[#EA1588] text-white rounded-3xl hover:bg-white hover:text-[#EA1588] hover:border-2 hover:border-[#EA1588] transition-all"
              >
                Post
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default EditTask