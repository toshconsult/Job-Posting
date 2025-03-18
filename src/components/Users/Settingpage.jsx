import { ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../SideBar";

const data = [{text:'About us', link:'/about'}, 
    {text:'Our Team', link:'/team'}, 
    {text:'Our Partner', link:'/partner'}, ]

const Settingpage = () => {
    const navigate = useNavigate()
  return (

    
    <div>
        <Sidebar/>
        <div className="w-full max-w-lg mx-auto p-6 h-screen">
          <h2 className="text-xl font-semibold md:text-center mb-6">About</h2>

          {data.map((option, index) => (
            <button
              key={index}
              onClick={()=> navigate(option.link)}
              className="w-full flex justify-between items-center p-4  cursor-pointer
            hover:bg-pink-500 hover:text-white transition"
            >
              <span className="text-gray-700" 
             ><Link to={option.link}> {option.text} </Link></span>
              <ChevronRight size={18} className="text-gray-500" />
            </button>
          ))}
          
          </div>
      
    </div>
  )
}

export default Settingpage