import {  useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";


const AllTask = () => {

    
    const {url} = useContext(AuthContext)
    const {token} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
   const navigate = useNavigate()
    

   
  // !!!!!!!!!!-------------------------------------- FUCTION TO GET ALL TASKS --------------------------------------!!!!!!!!!!
    const getTasks = async () => {
      
      
      console.log(token);
  
      try {
        setLoading(true)
        if (!token) {
          console.error("Token is missing!");
         navigate('/login')

        }

          
        const response = await fetch(`${url}api/v1/task/get-tasks`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          
        }) 
  
        if(response.ok){
          const data = await response.json();
          console.log(data);
          
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
    {loading ? <Loader /> : <div>
    <h1 className="text-[25px] pb-6 mt-14 px-6 md:text-center">All
        <span className="text-[#EA1588] "> Tasks</span></h1>
   
    <div className="w-[328px] h-[197px] gap-y-2 flex flex-col justify-center">
       
        </div>
    </div> }
        </div>
  )
}

export default AllTask