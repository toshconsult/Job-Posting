import { useEffect } from "react";
import useAdminStore from "../components/context/AdminStore";
import AdminSidebar from "./SideBar";


const AdminDashboard = () => {

    const {getUsers, users, getTasks, tasks, getTrx, trx} = useAdminStore();

    useEffect(()=>{
        if(!users) getUsers()
        if(!tasks) getTasks()
        if(!trx) getTrx()
    },[])
  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      
    <AdminSidebar />
    <div className="mt-18 md:mt-4 space-y-4 md:px-10 w-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        <div className="shadow-xl p-10 border-1 border-blue-50 text-center bg-[#333] text-white rounded-lg">
            <h2 className="text-2xl font-semibold">{users?.length}</h2>
            <p>Total users</p>
        </div>

        <div className="shadow-xl p-10 border-1 border-blue-50 text-center bg-[#333] text-white rounded-lg">
            <h2 className="text-2xl font-semibold">{tasks?.length}</h2>
            <p>Active Tasks</p>
        </div>

        <div className="shadow-xl p-10 border-1 border-blue-50 text-center bg-[#333] text-white rounded-lg">
            <h2 className="text-2xl font-semibold">{trx?.length}</h2>
            <p>Total Transacts</p>
        </div>
    </div>

    <div>
        <h2 className="text-3xl font-semibold py-4">Post Update</h2>
    <form className="w-[100%] flex flex-col md:flex-row gap-4">
       <input type="file" placeholder="Post an update" className="bg-white md:w-[50rem] px-10 py-3"/>
        <button className="bg-[#333] md:w-[6rem] px-4 py-3 text-white">Post</button>
    </form>
    </div>
   
    </div>
    </div>
  );
};

export default AdminDashboard;















