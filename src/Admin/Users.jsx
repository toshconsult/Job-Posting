import { useEffect, useState } from "react";
import AdminSidebar from "./SideBar";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader";
import useAdminStore from "../components/context/AdminStore";

const UsersTable = () => {
  
  const [loading, setLoading] = useState(false)

const { url, getUsers, users, userss, adminToken, setUsers} = useAdminStore();
console.log("token", adminToken);


useEffect(()=>{
  if(!users)
  getUsers()

}, [])
console.log(users);


/////////////////--------------------- search user -------------------////////////////

  const fetchUser = (e)=>{
    const query = e.toLowerCase().trim();

    if(!query){
      setUsers(userss)
      return 
    }
     const getUser = users?.filter(user => user.email.toLowerCase().includes(query))
     setUsers(getUser)
    //  console.log(getUser);
  }



const verifyUsers = async (id)=>{
  setLoading(true)
  const res = await fetch(`${url}admin/verify-user/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${adminToken}`
    }
  })

  if(res.ok){
    const data = await res.json()
    toast.success(data.message)
    // console.log(data);
    setLoading(false)
  } else{
    const err = await res.json()
    toast.error(err.error)
    setLoading(false)
    
  }
}

// const fetchUser = 


  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
    <AdminSidebar />
    <div className="mt-4 space-y-4 md:px-10 w-full">
      <ToastContainer />
      {loading ? <Loader /> : <>
    <div className=" bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <input type="email" placeholder="Search user by email" 
      onChange={(e)=>fetchUser(e.target.value)}
      className="bg-gray-50 outline-0 border-0 px-10 py-2 rounded-2xl"/>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200 rounded-md">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Registration Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{user.username}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3">{user.isVerified}</td>
                <td className="px-4 py-3 text-center">
                  <button 
                  disabled = {user.isVerified === true}
                  onClick={()=>verifyUsers(user._id)}
                  className={`${user.isVerified === false ? "bg-red-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"} text-white px-3 py-1 rounded-md text-xs mr-2 `}>
                   {user.isVerified === false ? "Verify" : "Verified"}
                  </button>
                  {/* <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600">
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>}
    </div>
    </div>
  );
};

export default UsersTable;
