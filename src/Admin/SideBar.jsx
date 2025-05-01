// src/components/Sidebar.jsx
import {  useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { ChevronRight, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";



import useUserStore from "../components/context/Store";
import Loader from "../components/Loader";




const AdminSidebar = () => {
//   const userToken = localStorage.getItem('token')
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout,   getUser } = useUserStore();
  const [loading, setLoading] = useState(false)
  
  
  const settingsOptions = [
    { text: "Dashboard", link: "/admin-dashboard" },
    { text: "Users", link: "/admin-users" },
    { text: "Tasks", link: "/admin-tasks" },
    { text: "Transactions", link: "/admin-transactions" },
  ];

  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


useEffect(()=>{
if(!user) getUser()
  
},[getUser, user])



  return (
    <div className="flex bg-[#f2f2f2]">
      {loading ? <Loader /> : <>
      <div
        className={`fixed  overflow-y-auto inset-y-0 left-0 z-50 w-64 bg-[#f2f2f2] shadow-xl md:pl-5 border-1 
    border-[#F3F5FF] transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-gray-700">
          <h2
            className={`${
              isOpen ? "block" : "hidden"
            } md:block text-xl font-bold`}
          >
            Menu
          </h2>
          <button
            onClick={toggleSidebar}
            className="md:hidden focus:outline-none"
          >
            <MdCancel className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
         

         
          <div className="mt-6">
            
            <div className="bg-[#f2f2f2] rounded-lg hover:text-white">
              {settingsOptions.map((option, index) => (
                <button
                key={index}
                onClick={() => navigate(option.link)}
                className="w-full flex justify-between items-center p-4 cursor-pointer
                hover:bg-[#333333] hover:text-white group"
              >
                <Link
                  to={option.link}
                  className="text-[#333333] group-hover:text-white w-full flex justify-between items-center"
                >
                  <span>{option.text}</span>
                  <ChevronRight size={18} />
                </Link>
              </button>
              
              ))}
            </div>
          </div>

          {/* Log Out Button */}
          <button
            className="cursor-pointer w-full flex items-center justify-center gap-2 mt-10
             bg-[#333333] text-white py-3 rounded-lg text-lg font-semibold transition hover:bg-[#666565]"
            onClick={logout}
          >
            <LogOut size={20} />
            Log Out
          </button>
        </nav>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className={`fixed top-4 left-4 z-50 p-2 bg-[#333333] text-white rounded focus:outline-none ${
            isOpen ? "hidden" : ""
          } `}
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>
      </>}
    </div>
  );
};

export default AdminSidebar;
