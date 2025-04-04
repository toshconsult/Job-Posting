// import { Sidebar } from "lucide-react";

import { useContext, useState, useEffect } from "react";
import Sidebar from "../SideBar";
import { UserContext } from "../UserContext";

export default function WalletPage() {

  const  {balance} = useContext(UserContext)
  
console.log(balance);

  

    return (
        <div>
       <Sidebar />
        <div className="max-w-md md:max-w-lg lg:max-w-xl mx-5 md:mx-auto pt-20 p-4 pl-20 md:pt-10">
        <h2 className="text-lg font-semibold mb-4">Wallet</h2>
          {/* <Sidebar /> */}
        
        {/* Earnings Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Earnings</h3>
          <div className="bg-pink-600 text-white text-center py-6 rounded-lg mt-2">
            <p className="text-sm">Total Balance</p>
            <p className="text-3xl font-bold">₦{balance}.00</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 text-gray-800">
            <span className="mr-2">💳</span> Fund Account
          </button>
          <button className="flex-1 flex items-center justify-center bg-pink-600 text-white rounded-lg py-2">
            <span className="mr-2">🏦</span> Withdraw
          </button>
        </div>
        
        {/* Earnings History */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Earnings History</h3>
          <div className="bg-gray-100 p-3 rounded-lg flex justify-between mb-2">
            <span>Task</span>
            <span className="font-semibold">#405,300</span>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg flex justify-between">
            <span>Referrals</span>
            <span className="font-semibold">#94,740</span>
          </div>
        </div>
      </div>
      </div>
    );
  }
  