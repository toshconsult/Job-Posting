import {  useEffect, useState, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUserStore from "../context/Store";

import Loader from "../Loader";
import { toast, ToastContainer } from "react-toastify";

const SingleTask = () => {
  const { url, user,   } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});
  const { id } = useParams();
  const sTask = task?.task
  const userToken  = localStorage.getItem('token')
  console.log(userToken);
  
  const navigate = useNavigate()
  
const [userP, setUserP] = useState({})
console.log(userP);

useEffect(() => {
  setLoading(true);
  const getTasks = async () => {
    try {
      
      const response = await fetch(`${url}user/task/${id}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        setTask(data);
        localStorage.setItem('taskTitle', JSON.stringify(data.task.title))
        setLoading(false);
      } else {
        const data = await response.json();
        console.log(data.error);
        setLoading(false);
        toast.error(data.error);
        // toast.error("Please login to view this page")
        // navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      
    }
  };

  
    getTasks();
    
  }, [userToken, user, id, url, navigate]);

  //////--------------------------------- GET USER PROFILE ---------------------------------------------/////////

  
  useEffect(() => {
  const getProfile = async () => {
    setLoading(true)
    const response = await fetch(`${url}user/profile/${sTask?.client}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${userToken}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setUserP(data.user);
      // console.log(data);
      setLoading(false)

     
      
    } else {
      const err = await response.json();
      console.log(err);
      setLoading(false)
    }
  };

    if (sTask?.client) {
      getProfile(sTask?.client);
    }
  }, [sTask?.client, url, userToken]);

  ///// ------------------------- Task Title ---------------------------////

 
  return (
  <>
     <ToastContainer />
     {sTask && (
    <div className="max-w-5xl mx-auto bg-[#f2f2f2] my-10 rounded-2xl  p-6">
    {loading ? <Loader /> : <>
    <div className="flex  md:items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src={userP?.profilePicture ? userP?.profilePicture : 'https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg'}
          alt={userP?.username}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{userP?.username}</h3>
          <p className="text-gray-500 text-sm">{userP?.isVerified ? 'Verified Client' : 'Not Verified'}</p>
        </div>
      </div>
  
      
      <div className="mt-4 md:mt-0">
        <button className="bg-[#333333] text-white px-5 py-2 rounded-lg text-sm font-medium">
          {sTask?.taskStatus || "Open"}
        </button>
      </div>
    </div>
  
    
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <div className="w-full h-60 md:h-72 rounded-lg shadow-sm border-1 border-blue-100 overflow-hidden">
          <img
            src={sTask?.taskImage}
            alt="Job Image"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="mt-4 text-gray-700">
          <p><span className="font-medium">Project Type:</span> {sTask?.projectType}</p>
          <p><span className="font-medium">Location:</span> {sTask?.location}</p>
        </div>
      </div>
  
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold">{sTask?.title}</h1>
  
        <h3 className="font-semibold text-lg mt-4">Job Description</h3>
        <p className="text-gray-600 leading-relaxed">{sTask?.description}</p>
  
        <h3 className="font-semibold text-lg mt-4">Skills Required</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {sTask?.skills?.map((skill, i) => (
            <span key={i} className="bg-gray-100 px-4 py-2 rounded-xl text-sm">
              {skill}
            </span>
          ))}
        </div>
        
        
        <div className="mt-6 flex justify-between text-lg font-semibold">
          <p> Price: <span className="text-green-600">₦{sTask?.price}</span></p>
          <p> Duration: {sTask?.duration} Months</p>
        </div>
  
        <div className="mt-6">
          <a href={
        sTask?.taskStatus === 'pending' ? `/apply-task/${sTask?._id}` : 
          sTask?.taskStatus === 'in-progress' ? `/submit-task/${sTask?._id}` :
           sTask?.taskStatus === 'completed' ? `/review/${sTask?._id}`: ''
        } >
          <button className="w-full bg-[#333333] hover:bg-[#727171]
          cursor-pointer text-white py-3 rounded-lg text-lg font-semibold">
          {sTask?.taskStatus === 'pending' ? 'Send Proposal' : 
          sTask?.taskStatus === 'in-progress' ? 'Submit' : sTask?.taskStatus === 'completed' ? 'Drop a review':  ''}
          </button>
          </a> 
        </div>
      </div>
    </div>
    </>}
  </div>
  )}
</>
  );
};

export default SingleTask;
