import  { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const ClientTasks = () => {

    const { url, userToken } = useContext(UserContext);
      const [loading, setLoading] = useState(false);
      const [tasks, setTasks] = useState([]);
      const navigate = useNavigate();
      const task = tasks?.tasks
    const maxContent = 150
    
      // !!!!!!!!!!-------------------------------------- FUCTION TO GET ALL TASKS --------------------------------------!!!!!!!!!!
      const getTasks = async () => {
        //   console.log(token);
    
        try {
          setLoading(true);
          if (!userToken) {
            navigate("/login");
          }
    
          const response = await fetch(`${url}client/get-all-posted-tasks`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${userToken}`,
              "Content-Type": "application/json",
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setTasks(data);
    
            setLoading(false);
          } else {
            const error = await response.json();
            console.log(error.error);
            setLoading(false);
          }
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      };
    
      useEffect(() => {
        getTasks();
      }, []);
    
// !!!!!!!!!!-------------------------------------- FUCTION TO GET ALL TASKS --------------------------------------!!!!!!!!!!
  

   
  return (
    <div>
         <div className="mt-4 space-y-4 md:px-10">
        {task?.length === 0 ? <h2 className='text-2xl font-semibold'>No tasks created yet</h2>: <>
              {task?.map((task, index) => (
               
                <div key={index} className="bg-white p-4 rounded-xl border-1 border-[#F3F5FF]">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{task.title}</p>
                    
                    <p className="text-gray-500"> <Link to={`/edit-task/${task._id}`}> Edit </Link></p>
                   
                  </div>
                  <p className="text-gray-500 text-sm pr-8">{task.description.length > maxContent ? task.description.slice(0, maxContent) + '......' : task.description}</p>
                  <div className='flex justify-between w-full'>
                 <Link to={`/single-task/${task._id}`} > <button className="text-[#2F3C7E] mt-2 cursor-pointer">Show Details</button></Link>
                 <p className="text-red-600"> <Link to={`/delete-task/${task._id}`}> Delete </Link></p>
               
                </div>
                </div>
              ))}
            </> }
            </div>
    </div>
  )
}

export default ClientTasks