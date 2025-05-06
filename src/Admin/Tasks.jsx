// src/components/TasksTable.jsx

import { useEffect, useState } from "react";
import useAdminStore from "../components/context/AdminStore";
import AdminSidebar from "./SideBar";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader";

const TasksTable = () => {
  const [loading, setLoading] = useState(false)
  
  const {getTasks, tasks, url, adminToken} = useAdminStore()
  
  useEffect(()=>{
    if(!tasks) getTasks()
  },[])
  

  const deleteTask = async (id)=>{
    setLoading(true)
    const res = await fetch(`${url}admin/delete-task/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${adminToken}`
      }
    })
  
    if(res.ok){
      const data = await res.json()
      toast.success(data.message)
      // console.log(data);
      setLoading(false)
    } else{
      const err = await res.json()
      toast.error(err.error)
      setLoading(false)
      
    }
  }

  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      
    <AdminSidebar />
    <div className="mt-4 space-y-4 md:px-10 w-full">
      <ToastContainer />
      {loading ? <Loader /> : <>
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200 rounded-md">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Task Title</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{task.title}</td>
                <td className="px-4 py-3">{task.client}</td>
                <td className="px-4 py-3">₦{task?.price?.toLocaleString()}</td>
                <td className="px-4 py-3">{new Date(task.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3 text-center">
                  <button 
                  onClick={()=>deleteTask(task._id)}
                  className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-md text-xs hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>}
    </div>
    </div>
  );
};

export default TasksTable;
