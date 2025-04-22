import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { MdOutlineMessage, MdVerified } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../Loader";
import ClientSideBar from "./ClientSideBar";

const SingleProposal = () => {
  const { url, userToken } = useContext(UserContext);
  const [proposal, setProposals] = useState({});
  const [profileId, setProifleId] = useState("");
  const [taskId, setTaskid] = useState("");
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState(null)
  
  // console.log(taskId);
  // console.log(profileId);

  const { id } = useParams();
  
  useEffect(() => {
    const getProposal = async () => {
      setloading(true);
      const response = await fetch(`${url}client/proposal/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProposals(data.proposal);
        setProifleId(data.proposal.tasker._id);
        setTaskid(data.proposal.task._id);
        setloading(false);
       
        console.log(data);
      } else {
        // const err = await response.json()
        // console.log(err);
        setloading(false);
      }
    };
    getProposal();
  }, [id, url, userToken]);
  ////------------------------------------ User Profile ---------------------------------////

  const getProfile = async () => {
    const response = await fetch(`${url}user/profile/${profileId}`);
    if (response.ok) {
      // const data = await response.json()
      // console.log(data);
      window.location.href = `/profile/${profileId}`;
    } else {
      const err = await response.json();
      console.log(err);
    }
  };

  ////////////------------------------------- Fetch profile ------------------------------/////////

  useEffect(()=>{
  const fetchProfile = async () => {
    const response = await fetch(`${url}user/profile/${profileId}`);
    if (response.ok) {
      const data = await response.json()
      setUser(data.user)
      console.log(data.user);
     
    } else {
      const err = await response.json();
      console.log(err);
    }
  
  }
  fetchProfile()
  
},[profileId, url])

  ///------------------------------------ ASSIGN TASKS -------------- //////

  const assign = async () => {
    const response = await fetch(
      `${url}client/task/${taskId}/award/${profileId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${userToken}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      toast.success(data.message);
      console.log(data);
      
    } else {
      const error = await response.json();
      toast.error(error.error);
      console.log(error);
      
    }
  };

  

  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">

      <ClientSideBar />
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 space-y-4 md:px-10 w-full">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <img
                src={user?.profilePicture ? user?.profilePicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYwM33sSN7MtnLIq0k1qjhpoEtSstLE26gA&s"}
                className="h-14 rounded-full"
              />
              <div onClick={getProfile} className="cursor-pointer">
                <p className="text-xl font-semibold flex gap-3 items-center">{proposal?.tasker?.username} 
                  {user?.isVerified && ( <MdVerified size={20} className="text-blue-600"/> )} 
                  </p>
                <p>{user?.jobTitle}</p>
              </div>
            </div>
            <div>
              
              <Link to={`/chat/${profileId}`}>
              <button className="cursor-pointer">
                
                <MdOutlineMessage size={40} />
              </button>
              </Link>
            </div>
          </div>
          <div className="  py-4">
            <ToastContainer />

            <h2 className="text-2xl font-semibold pb-3">
              Proposal Description
            </h2>
            <p>{proposal?.description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-red-500 mb-2">
                Tasker&apos;s Bidding Price
              </h4>
              <button className="bg-gray-300 px-4 rounded-3xl ">
                ₦{proposal?.price}
              </button>
            </div>
            <div>
              <button
                onClick={assign}
                className="bg-blue-900 px-4 py-2 rounded-3xl
         text-white cursor-pointer hover:bg-white hover:text-black hover:border hover:border-gray-200"
              >
                Assign Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProposal;
