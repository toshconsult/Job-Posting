import { useContext, useEffect, useState } from "react";
import { Bell, Gift, RefreshCcw, Settings } from "lucide-react";
import Sidebar from '../SideBar'
import Loader from "../Loader";
import { UserContext } from "../UserContext";
import AppliedTask from "../Tasks/AppliedTask";

const Dashboard = () => {
    const {user, loading,} = useContext(UserContext)
    const userDetail = user?.userDetails?.user
    // console.log(userDetail);
    
        // useEffect(()=>{
    //   window.location.reload()
    // },[userDetail.userType])


      return (
        <div className="flex ustify-center md:justify-normal min-h-screen md:gap-72">
         
          {/* Sidebar */}
          <Sidebar />
    
          {/* Main Content */}
          <div className="flex-1 p-6 pt-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-[#1E1E1E]">Thebest<span className="text-pink-500">Price</span></h1>
              <div className="flex items-center gap-4">
                <Gift className="text-gray-500" />
                <Bell className="text-gray-500" />
                <img
                  src={userDetail?.profilePicture}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-yellow-400"
                />
              </div>
            </div>
    
            {/* KYC Alert */}
            <div className="bg-pink-500 text-white p-4 rounded-xl mt-6 flex justify-between items-center">
              <div>
                <p className="font-bold">Welcome {userDetail?.username}!!!</p>
                <p className="text-sm">You&apos;re One Way In. Complete Your KYC Verification</p>
              </div>
              <button className="bg-white text-pink-500 px-4 py-2 rounded-full">Get Started</button>
            </div>
    
            {/* Latest Update */}
            <h2 className="mt-8 text-lg font-semibold">Latest <span className="text-pink-500">Update</span></h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-300 h-24 rounded-xl"></div>
              <div className="bg-gray-300 h-24 rounded-xl"></div>
              <div className="bg-gray-300 h-24 rounded-xl"></div>
            </div>
    
            {/* Client Requests */}
            <div className="flex justify-between items-center mt-8">
              <h2 className="text-lg font-semibold">Clients <span className="text-pink-500">Request</span></h2>
              <div className="flex gap-3">
                <RefreshCcw className="text-gray-500 cursor-pointer" />
                <Settings className="text-gray-500 cursor-pointer" />
              </div>
            </div>
            <p className="text-sm text-gray-500">Send Your Offer To Your Clients</p>
    
            <AppliedTask/>
          </div>
         
        </div>
      );
  
}

export default Dashboard