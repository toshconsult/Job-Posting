import { ChevronRight } from "lucide-react";
import useUserStore from "../context/Store";

import ClientSideBar from "../Clients/ClientSideBar";
import Sidebar from "../SideBar";

const data = [
  { text: "WhatsApp", link: "https://chat.whatsapp.com/F2N3dXkzmiQKtuT6QgNMND" },
  { text: "Telegram", link: "https://t.me/+xBSbcATc65VmNDlk" },
  { text: "Discord", link: "https://discord.gg/uAseXk7EgB" },
];

const OurCommunity = () => {
  
  const { user } = useUserStore();
  return (
    <div className="md:ml-10">
      {user?.userType === "client" ? <ClientSideBar /> : <Sidebar />}
      <div className="w-full max-w-lg mx-auto p-6 h-screen">
        <h2 className="text-xl font-semibold pl-14 md:pl-0 md:text-center mb-6">
          Our Communities
        </h2>

        {data.map((option, index) => (
          <a href={option.link} target="_blank" rel="noopener noreferrer" 
            key={index}
           
            className="group w-full flex justify-between items-center p-4 cursor-pointer hover:bg-[#333] transition"
          >
            <span className="text-gray-700 group-hover:text-white transition">
              {option.text}
            </span>
            <ChevronRight size={18} className="text-gray-500 transition" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurCommunity;
