import {  useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import Loader from "../Loader";
import { useNavigate, useParams } from "react-router-dom";

const SingleTask = () => {
 
    const {url} = useContext(AuthContext)
    const {token} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);
    

   
  // !!!!!!!!!!-------------------------------------- FUCTION TO GET ALL TASKS --------------------------------------!!!!!!!!!!
    const getTasks = async () => {
      
      
    //   console.log(token);
  
      try {
        setLoading(true)
        if (!token) {
          console.error("Token is missing!");
         navigate('/login')

        }

          
        const response = await fetch(`${url}api/v1/client/get-task/${id}`)
        //   method: 'GET',
        //   headers: {
        //     'Authorization': `Bearer ${token}`,
        //     'Content-Type': 'application/json'
        //   },
          
        // }) 
  
        if(response.ok){
          const data = await response.json();
        //   console.log(data);
            setTasks(data)
          
          setLoading(false)
          
        } 
        else {
          const data = await response.json();
         console.log(data.error);
          setLoading(false)
         
        }
  
      } catch (error) {
        loading(false)
        console.log(error);
        
        
      }
    }

    useEffect(() => { 
        getTasks()
    }, [])

  return (
    <div className="flex flex-col items-center justify-center">
    {loading ? <Loader /> : <>
    <h1 className="text-[25px] pb-6 mt-14 px-6 md:text-center">All
        <span className="text-[#EA1588] "> Tasks</span></h1>
   
    
      {
            tasks.map(task => {
               
                
                return(
                    <div key={task.task._id} className="w-[328px] h-[197px] border-2 
                    border-[#F3F5FF] rounded-2xl flex flex-col justify-center items-center gap-y-10 my-2">
                        <h1 className=" font-semibold text-[20px]">{task.task.title}</h1>
                        <p className="text-[#333] font-normal text-[14px]">{task.task.description}</p>
                        <button className="w-[263px] h-[40px] bg-[#EA1588] hover:bg-white
                         hover:text-black hover:border-2 hover:border-[#F3F5FF] text-white rounded-md">View Details</button>
                    </div>
                )
            })
      }
    
        
    </> }
        </div>
  )
   
}

export default SingleTask