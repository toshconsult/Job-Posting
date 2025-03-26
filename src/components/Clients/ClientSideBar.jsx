 // src/components/Sidebar.jsx
 import { useContext, useEffect, useState } from "react";
 import { FaBars } from "react-icons/fa";
 import { MdCancel } from "react-icons/md";
 import { Switch } from "@headlessui/react";
 import { ChevronRight, LogOut } from "lucide-react";
 import { Link, useNavigate } from "react-router-dom";
 import { UserContext } from "../UserContext";
import Loader from "../Loader";

 
 const settingsOptions = [
   { text: "Dashboard", link: "/client-dashboard" },
   { text: "Wallet", link: "/client-wallet" },
   { text: "Tasks", link: "/client-tasks" },
   { text: "Community", link: "/community" },
   
 ];
 
 
   

const ClientSideBar = () => {
  const userToken = localStorage.getItem('token')
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(null);
  const { user, logout, url, getuser } = useContext(UserContext);
  const [loading, setLoading] = useState(false)
  // const {switchRole} = useContext(RoleContext)
  // console.log(role);
  
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const switchRole = async ()=>{
    setLoading(true)
    const response = await fetch(`${url}user/update-user-type`, {
        method: 'PUT',
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        }
    })

    if(response.ok){
        const data = await response.json()
        setRole(data.user.userType)
      setLoading(false)
        // console.log(data.user.userType)
    } else {
        const error = await response.json()
        console.log(error)
        setLoading(false)
    }
}


useEffect(()=>{
if(!user) getuser()
  
},[user, getuser])

useEffect(()=>{
if(user && user.userType != "client"){
  navigate('/dashboard')
}
},[navigate, user])

  return (
  
<>
{loading ? <Loader /> : <>
  
    <div className="flex ">
          <div
            className={`fixed  overflow-y-auto inset-y-0 left-0 z-50 w-64 bg-white shadow-xl md:pl-5 border-1 
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
              {/* Account Type Toggle */}
              <div className="bg-white p-4 rounded-lg">
                <span className="text-gray-800 font-medium">Account Type</span>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">{`As A ${
                    role ? role : user?.userType
                  }`}</span>
                  <Switch
                    checked={role}
                    onChange={switchRole}
                    onClick={getuser}
                    className={`${
                      role || user?.userType == "tasker" ? "bg-pink-500" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                  >
                    <span
                      className={`${
                        role || user?.userType  == "tasker" ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                    />
                  </Switch>
                </div>
              </div>
    
              {/* General Settings List */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">General Settings</h3>
                <div className="bg-white rounded-lg">
                  {settingsOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => navigate(option.link)}
                      className="w-full flex justify-between items-center p-4  cursor-pointer
                hover:bg-pink-500 hover:text-white transition"
                    >
                      <span className="text-gray-700">
                        <Link to={option.link}> {option.text} </Link>
                      </span>
                      <ChevronRight size={18} className="text-gray-500" />
                    </button>
                  ))}
                </div>
              </div>
    
              {/* Log Out Button */}
              <button
                className="cursor-pointer w-full flex items-center justify-center gap-2 mt-10 bg-pink-500 text-white py-3 rounded-lg text-lg font-semibold transition hover:bg-pink-600"
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
              className={`fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded focus:outline-none ${
                isOpen ? "hidden" : ""
              } `}
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
         </>}
        </>

  )
}

export default ClientSideBar