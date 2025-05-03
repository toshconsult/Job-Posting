import {  useEffect, useState } from "react";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import useUserStore from "../context/Store";

import TaskNav from "./TaskNav";
import Sidebar from "../SideBar";


const AllTask = () => {
  const { url, userToken } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newT, setNewT] = useState([])
  const max = 200


  // const task = tasks?.tasks;
  // console.log(task);

const shuffledTask = (task = [])=>{
const arr = [...task]
  for (let i = arr?.length -1; i > 0; i-- ){

    const t = Math.floor(Math.random() * (i + 1) );
    [arr[i], arr[t]] = [arr[t], arr[i]]

  }
  return arr
}

const shuffled = shuffledTask(tasks)
// console.log(shuffled);

  // !!!!!!!!!!-------------------------------------- FUCTION TO GET ALL TASKS --------------------------------------!!!!!!!!!!
  useEffect(() => {
    const getTasks = async () => {
     
      try {
        setLoading(true);

        const response = await fetch(`${url}user/all-tasks`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTasks(data.tasks);
          setNewT(data.tasks)
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

    getTasks();
  }, [url, userToken]);


  const searchTask = (e)=>{
    const query = e.toLowerCase().trim();
    if (!query) {
      setTasks(newT); 
      return;
    }
    // console.log(query);
    
    const searchT = newT?.filter(t => t.title.toLowerCase().includes(query));
    console.log(searchT);
    
    setTasks(searchT);
    
  }

  return (
    // <></>
    <div className="flex mx-4 md:mx-0 md:justify-normal min-h-screen md:gap-60 lg:gap-72">
      <Sidebar />
      {loading ? (
       <Loader />
      ) : (
        <div className="mt-4 space-y-4 md:px-10 w-full">
          <div className="flex justify-around items-center">
          <h2 className="text-lg font-bold mb-4 pl-14 md:pl-0">Todo</h2>
          <div>
      
       <input type="text" placeholder="Search for todo"
        onChange={(e)=>searchTask(e.target.value)} 
       className="bg-white outline-0 w-[10rem] md:w-[20rem] py-1 mb-4 px-4 rounded-xl"/>
       
          </div>
          </div>
          <TaskNav/>
          <div className="grid place-items-center md:grid-cols-2 md:gap-6 lg:grid-cols-3 ">
          {shuffled?.length === 0 && (
            <h1 className="text-[25px] pb-6 mt-14 px-6 md:text-center">
             
              No Todo Available
            </h1>
          )}
          {shuffled?.map((task) => {

            return (
              <div
                key={task._id}
                className="w-[328px] md:w-[300px] lg:w-[328px] min-h-[200px] md:min-h-[300px]  p-4
                    shadow-xl rounded-2xl flex flex-col justify-center items-center gap-y-10 my-2"
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
        </div>
      )}
      
    </div>
  );
};

export default AllTask;
