import AdminSidebar from "./SideBar";


const AdminDashboard = () => {
  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      
    <AdminSidebar />
    <div className="mt-4 space-y-4 md:px-10 w-full">
    <div className="grid grid-cols-3 gap-4">
        <div className="shadow-xl p-10 border-1 border-blue-50 text-center ">
            <h2 className="text-2xl font-semibold">100</h2>
            <p>Total users</p>
        </div>

        <div className="shadow-xl p-10 border-1 border-blue-50 text-center ">
            <h2 className="text-2xl font-semibold">100</h2>
            <p>Total users</p>
        </div>

        <div className="shadow-xl p-10 border-1 border-blue-50 text-center ">
            <h2 className="text-2xl font-semibold">100</h2>
            <p>Total users</p>
        </div>
    </div>

    <div>
        <h2 className="text-3xl font-semibold py-4">Post Update</h2>
    <form className="w-[100%] flex gap-4">
       <input type="file" placeholder="Post an update" className="bg-white w-[50rem] px-10 py-3"/>
        <button className="bg-[#333] w-[6rem] px-4 py-3 text-white">Post</button>
    </form>
    </div>
   
    </div>
    </div>
  );
};

export default AdminDashboard;















