import { useEffect } from "react";
import useUserStore from "../components/context/Store";
import AdminSidebar from "./SideBar";

const UsersTable = () => {
  const users = [
    {
      username: 'johndoe',
      email: 'johndoe@example.com',
      registrationDate: '2024-03-10',
    },
    {
      username: 'janesmith',
      email: 'janesmith@example.com',
      registrationDate: '2024-04-05',
    },
    {
      username: 'markdev',
      email: 'markdev@example.com',
      registrationDate: '2024-02-22',
    },
  ];




const {url, userToken} = useUserStore()
useEffect(()=>{
  const getUsers = async ()=>{
    const res = await fetch(`${url}admin/get-all-users`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    })

    if(res.ok){
      const data = await res.json()
      console.log(data);
      
    } else{
      const err = await res.json()
      console.log(err);
      
    }
  }

  getUsers()

}, [url, userToken])

  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      
    <AdminSidebar />
    <div className="mt-4 space-y-4 md:px-10 w-full">
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200 rounded-md">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Registration Date</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{user.username}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.registrationDate}</td>
                <td className="px-4 py-3 text-center">
                  <button className="bg-green-500 text-white px-3 py-1 rounded-md text-xs mr-2 hover:bg-green-600">
                    Verify
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default UsersTable;
