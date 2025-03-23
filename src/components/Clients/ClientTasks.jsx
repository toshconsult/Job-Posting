import  { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';


const ClientTasks = () => {

    const { url, userToken } = useContext(UserContext);
      const [loading, setLoading] = useState(false);
      const [tasks, setTasks] = useState([]);
      const navigate = useNavigate();
    //   const task = tasks?.tasks
    
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
    
    
    const [requests, setRequests] = useState([
        { title: "Looking For An Experience Designer", price: "Undefined" },
        { title: "Well-Organized Designer", price: "10k+ Per Hours" },
        { title: "Web Designer", price: "Undefined" },
        { title: "Professional Banner Designer", price: "Undefined" },
      ]);
  return (
    <div>
         <div className="mt-4 space-y-4 md:px-10">
        {tasks.length === 0 ? <h2 className='text-2xl font-semibold'>No tasks created yet</h2>: <>
              {requests.map((req, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border-1 border-[#F3F5FF]">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{req.title}</p>
                    <p className="text-gray-500">Edit</p>
                  </div>
                  <p className="text-gray-500 text-sm">Hello Everyone! I&apos;m Looking For An Experience Graphics...</p>
                  <button className="text-[#2F3C7E] mt-2">Show Details</button>
                </div>
              ))}
            </> }
            </div>
    </div>
  )
}

export default ClientTasks