// import { useState } from "react";
// import { Switch } from "@headlessui/react";
// import { ChevronRight, LogOut } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// const settingsOptions = [
//   {text:"Wallet",
//     link: '/wallet'
//   },
//    {text:"Profile",
//     link: '/profile' },
//    {text:"Referrals",
//     link: '/referrals'
//    },
//    {text:"Community",
//     link: '/community'
//    },
//    {text:"Availability",
//     link: '/availaibility'
//    }];

// const SettingsPage = () => {
//   const [enabled, setEnabled] = useState(true);
//   const navigate = useNavigate()
//   return (
//     <div className="w-full max-w-lg mx-auto p-6">
      
//       <h2 className="text-xl font-semibold md:text-center mb-6">Settings</h2>

//       {/* Account Type Toggle */}
//       <div className="bg-white p-4 rounded-lg">
//         <span className="text-gray-800 font-medium">Account Type</span>
//         <div className="flex justify-between items-center mt-2">
//           <span className="text-sm text-gray-500">{enabled ? "As A Client" : "As A Worker"}</span>
//           <Switch
//             checked={enabled}
//             onChange={setEnabled}
//             className={`${
//               enabled ? "bg-pink-500" : "bg-gray-300"
//             } relative inline-flex h-6 w-11 items-center rounded-full transition`}
//           >
//             <span
//               className={`${
//                 enabled ? "translate-x-6" : "translate-x-1"
//               } inline-block h-4 w-4 transform bg-white rounded-full transition`}
//             />
//           </Switch>
//         </div>
//       </div>

//       {/* General Settings List */}
//       <div className="mt-6">
//         <h3 className="text-lg font-medium mb-2">General Settings</h3>
//         <div className="bg-white rounded-lg">
//           {settingsOptions.map((option, index) => (
//             <button
//               key={index}
//               onClick={()=> navigate(option.link)}
//               className="w-full flex justify-between items-center p-4  cursor-pointer
//             hover:bg-pink-500 hover:text-white transition"
//             >
//               <span className="text-gray-700" 
//              ><Link to={option.link}> {option.text} </Link></span>
//               <ChevronRight size={18} className="text-gray-500" />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Log Out Button */}
//       <button className="w-full flex items-center justify-center gap-2 mt-10 bg-pink-500 text-white py-3 rounded-lg text-lg font-semibold transition hover:bg-pink-600">
//         <LogOut size={20} />
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default SettingsPage;
