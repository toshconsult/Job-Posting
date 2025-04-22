
import { useContext} from "react";
import { UserContext } from "../context/UserContext";
import ClientSideBar from "./ClientSideBar";
import { Link } from "react-router-dom";

export default function ClientWallet() {

  
const  {balance} = useContext(UserContext)
  

    return (
        <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
       <ClientSideBar />
        <div className="mt-4 space-y-4 md:px-10 w-full">
        <h2 className="text-lg font-semibold mb-8 pl-14 ">Wallet</h2>
         
        <div className="mb-6">
          <div className="bg-[#333] text-white text-center py-6 rounded-lg mt-2">
            <p className="text-sm">Total Balance</p>
            <p className="text-3xl font-bold">{`₦${balance?.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`}</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center hover:bg-[#333] hover:text-white border cursor-pointer border-gray-300 rounded-lg py-2 text-gray-800">
          <Link to='/fund-wallet'> Fund Account </Link>
          </button>
          <button className="flex-1 flex items-center justify-center cursor-pointer hover:bg-[#f2f2f2]
           hover:text-[#333] hover:border hover:border-gray-300 bg-[#333] text-white rounded-lg py-2">
            <Link to='/withdraw'>  Withdraw</Link>
          </button>
        </div>
        
        {/* Earnings History */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Spending History</h3>
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
  