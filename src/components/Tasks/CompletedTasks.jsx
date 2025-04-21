import  { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import Loader from '../Loader'
import TaskNav from './TaskNav'
import { Link } from 'react-router-dom'

export const CompletedTasks = () => {

    const {url, userToken} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [task, setTask] = useState([])
    const max = 200
    const sortedTasks = task
    ?.slice()
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    const filtered = sortedTasks?.filter(task =>
      task.status != 'completed'
    )

    console.log(task);
    
    useEffect(() => {
       
    const assigned = async () => {
        setLoading(true)
        const response = await fetch(`${url}user/all-completed-tasks`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${userToken}`,
                "content-type": "application/json",
            },
        });
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setTask(data.task)
            setLoading(false)
        } else {
            const err = await response.json()
            console.log(err);
        }
    }
    assigned()
}, [url, userToken])

  return (
    <div className="">
         {loading ? (
           <Loader />
         ) : (
           <>
             <TaskNav />
             <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 ">
             {task?.length === 0 && (
               <h1 className="text-[25px] pb-6 mt-14 px-6 md:text-center">
                 {" "}
                 No Task Available
               </h1>
             )}
             {filtered?.map((task) => {
   
               return (
                 <div
                   key={task._id}
                   className="w-[328px] md:w-[328px] min-h-[200px] md:min-h-[300px] border-1 p-4
                       border-[#333333] rounded-2xl flex flex-col justify-center items-center gap-y-10 my-2"
                 >
                   <h1 className="font-semibold text-[20px]">{task.title}</h1>
                   <p className="text-[#333] font-normal text-[14px]">
                     {task.description.length > max ? task.description.slice(0, max) + '....' : task.description}
                   </p>
                   <Link to={`/single-task/${task._id}`}>
                     <button
                       className="w-[263px] h-[40px] bg-[#333333] hover:bg-white
                            hover:text-black hover:border-1 cursor-pointer hover:border-[#333333] text-white rounded-md"
                     >
                       View Details
                     </button>
                   </Link>
                 </div>
               );
             })}
             </div>
           </>
         )}
         
       </div>
  )
}
