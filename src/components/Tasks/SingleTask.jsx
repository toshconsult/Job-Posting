import { useContext, useEffect, useState, Fragment } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import Loader from "../Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
// import ApplyTask from "./ApplyTask"; // Import the ApplyTask component
// import image from '/src/assets/react.svg' 

 

import { ArrowLeft } from "lucide-react"


const SingleTask = () => {
  const { url, user, userToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false); // Modal state
  const sTask = task?.task
console.log(sTask);

  const getTasks = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(`${url}user/task/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        setTask(data);
        setLoading(false);
      } else {
        const data = await response.json();
        console.log(data.error);
        // navigate("/login");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [userToken, user]);

  return (
  
    <div className="max-w-5xl mx-auto bg-white my-10 rounded-2xl  p-6">
    
    <div className="flex  md:items-center justify-between">
     
      <div className="flex items-center space-x-4">
        <img
          src="https://spaces-wp.imgix.net/2016/06/coding-in-the-classroom.png?auto=compress,format&q=50"
          alt="Johnson Daniel"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">Johnson Daniel</h3>
          <p className="text-gray-500 text-sm">Certified Client</p>
        </div>
      </div>
  
      
      <div className="mt-4 md:mt-0">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
          {sTask?.taskStatus || "Open"}
        </button>
      </div>
    </div>
  
    {/* Job Content - Responsive 2-Column Layout */}
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Section (Image & Basic Details) */}
      <div className="md:col-span-1">
        <div className="w-full h-60 md:h-72 rounded-lg overflow-hidden">
          <img
            src={sTask?.taskImage}
            alt="Job Image"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Project Type & Location */}
        <div className="mt-4 text-gray-700">
          <p><span className="font-medium">Project Type:</span> {sTask?.projectType}</p>
          <p><span className="font-medium">Location:</span> {sTask?.location}</p>
        </div>
      </div>
  
      {/* Right Section (Details & Pricing) */}
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold">{sTask?.title}</h1>
  
        {/* Description */}
        <h3 className="font-semibold text-lg mt-4">Job Description</h3>
        <p className="text-gray-600 leading-relaxed">{sTask?.description}</p>
  
        {/* Skills Required */}
        <h3 className="font-semibold text-lg mt-4">Skills Required</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {sTask?.skills?.map((skill, i) => (
            <span key={i} className="bg-gray-100 px-4 py-2 rounded-xl text-sm">
              {skill}
            </span>
          ))}
        </div>
        
        
        {/* Pricing & Duration */}
        <div className="mt-6 flex justify-between text-lg font-semibold">
          <p>💰 Price: <span className="text-green-600">₦{sTask?.price}</span></p>
          <p>🕒 Duration: {sTask?.duration} Months</p>
        </div>
  
        {/* Send Proposal Button */}
        <div className="mt-6">
          <Link to={`/apply-task/${sTask?._id}`} >
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg text-lg font-semibold">
            Send Proposal
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  );
};

export default SingleTask;
