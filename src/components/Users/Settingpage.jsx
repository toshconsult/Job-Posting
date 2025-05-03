import { ChevronRight } from "lucide-react";
import {  useNavigate } from "react-router-dom";
import useUserStore from "../context/Store";

import ClientSideBar from "../Clients/ClientSideBar";
import Sidebar from "../SideBar";

const data = [
  { text: "Edit Profile", link: "/update-profile" },
  { text: "Create Pin", link: "/create-pin" },
  { text: "Update Pin", link: "/update-pin" },
];

const Settingpage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const filteredData = user?.userType === "client"
  ? data.filter((item) => item.text !== "Edit Profile")
  : data;

  return (
    <div>
      {user?.userType === "client" ? <ClientSideBar /> : <Sidebar />}
      <div className="w-full max-w-lg mx-auto p-6 h-screen">
        <h2 className="text-xl font-semibold pl-14 md:pl-0 md:text-center mb-6">
          Settings
        </h2>

        {filteredData.map((option, index) => (
          <button
            key={index}
            onClick={() => navigate(option.link)}
            className="group w-full flex justify-between items-center p-4 cursor-pointer hover:bg-[#333] transition"
          >
            <span className="text-gray-700 group-hover:text-white transition">
              {option.text}
            </span>
            <ChevronRight size={18} className="text-gray-500 transition" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Settingpage;
