import {  useEffect } from "react";
import { Bell, RefreshCcw, Settings } from "lucide-react";
import Sidebar from "../SideBar";
import useUserStore from "../context/Store";

import AppliedTask from "../Tasks/AppliedTask";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { MdOutlineMessage } from "react-icons/md";

const Dashboard = () => {
  const { user, loading, getUser } = useUserStore();
  const navigate = useNavigate();

  console.log(user);
  
  // const token = localStorage.getItem('token')

  // useEffect(()=>{
  //   if(!token){
  //     window.location.href = '/login'
  //   }
  // },[token])
  
  useEffect(() => {
    if (user?.skillsets?.length === 0) {
      navigate("/interest");
    } else if (user && !("profileDescription" in user )) {
      navigate("/update-profile");
    } else if (user?.profileDescription === "undefined"){
      navigate('/update-profile')
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!user) {
    getUser()
    }
  }, [user, getUser])

  useEffect(() => {
    if (user && user.userType != "tasker") {
     window.location.href = "/client-dashboard";
    }
  }, [user]);

  return (
    <div className="flex ustify-center md:justify-normal min-h-screen md:gap-72">
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 p-6 pt-6">
            <div className="flex justify-between items-center">
            <Link to='/'>
          <h1 className="text-xl font-bold text-[#1E1E1E] pl-10 md:pl-0">
            Thebest<span className="text-[#2F3C7E]">Price</span>
          </h1>
          </Link>
              <div className="flex items-center gap-4">
               <Link to='/messages'> <MdOutlineMessage className="text-gray-500" size={20} /></Link>
                <Bell className="text-gray-500" />
               <Link to={`/profile/${user?._id}`} > <img
                  src={user?.profilePicture}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-yellow-400"
                /></Link>
              </div>
            </div>

            <div className="bg-[#333333] text-white p-4 rounded-xl mt-6 flex justify-between items-center">
              <div>
                <p className="font-bold">Welcome {user?.username}!!!</p>
                {!user?.isVerified ? (
                  <p className="text-sm">
                    You&apos;re One Way In. Complete Your KYC Verification
                  </p>
                ) : null}
              </div>
              {!user?.isVerified ? (
                <button className="bg-white text-[#F2F2F2] px-4 py-2 rounded-full">
                  Get Started
                </button>
              ) : null}
            </div>

            <h2 className="mt-8 text-lg font-semibold">
              Latest <span className="text-[#F2F2F2]">Update</span>
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-300 h-24 rounded-xl"></div>
              <div className="bg-gray-300 h-24 rounded-xl"></div>
              <div className="bg-gray-300 h-24 rounded-xl"></div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <h2 className="text-lg font-semibold">
                Applied <span className="text-[#F2F2F2]">Todo</span>
              </h2>
              <div className="flex gap-3">
                <RefreshCcw className="text-gray-500 cursor-pointer" />
                <Settings className="text-gray-500 cursor-pointer" />
              </div>
            </div>
            <p className="text-sm text-gray-500">
              List of todo you have applied for
            </p>

            <AppliedTask />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
