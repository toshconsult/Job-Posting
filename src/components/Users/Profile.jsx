
import {  useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import useUserStore from "../context/Store";

import Loader from "../Loader";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import NavBar from "../NavBar";

const Profile = () => {
  const { url, userToken } = useUserStore();
  const [user, setUser] = useState({});
  const { id } = useParams();
  console.log(id);
  
  
  const [reviews, setReviews] = useState(null)
  
  
  // const [task, setTask] = useState(null)
  console.log(reviews);
  const navigate = useNavigate();
  useEffect(() => {

  const getProfile = async () => {
    const response = await fetch(`${url}user/profile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${userToken}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data.user);
      setReviews(data.reviews)
      // console.log(data);
      const user = data.user;
      if (user.skillsets.length === 0) {
        navigate("/interest");
      }
      if (

        !user.location ||
        !user.profileDescription ||
        !user.jobTitle
      ) {
        navigate("/update-profile");
      }
    } else {
      const err = await response.json();
      console.log(err);
    }
  };

    getProfile();
  }, [id, userToken, url, navigate]);


  

  return (
    <>
      <NavBar />
    <div className="flex justify-center px-4 md:px-20 md:justify-normal min-h-screen md:gap-72">
      {!user?.profilePicture ? (
        <Loader />
      ) : (
        <>
         
              <div className="">
                <div className="w-[328px] md:w-[100%] h-[137px] px-6 border-1 border-[#F3F5FF]  rounded-2xl mt-10 my-6">
                  <div className=" flex gap-6 items-center ">
                    <div className="border-2 border-[#F3F5FF] rounded-full">
                      <img
                        src={user?.profilePicture}
                        className="rounded-full w-[70px] h-[60px] md:h-[67px]"
                      />
                    </div>
                    <div>
                      <p className="md:text-4xl mb-1 mt-6 md:mt-0 flex items-center">{user?.username}  <MdVerified size={20} 
                      className="text-blue-700 mt-2 pl-1"/> </p>
                      <div>
                        <p className="text-gray-600">{user?.jobTitle}</p>
                        <p className="">{user?.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[328px] md:w-[90vw] pb-4 px-6 border-1 border-[#F3F5FF] rounded-2xl my-6">
                  <div className="pt-3 flex justify-between">
                    <h2 className="font-semibold md:text-3xl">Description</h2>
                  </div>
                  <p className="pt-3">{user?.profileDescription}</p>
                </div>

                <div className="w-[328px] md:w-[90vw] px-6 border-1 border-[#F3F5FF] rounded-2xl my-6">
                  <div className="pt-3 flex justify-between">
                    <h2 className="font-semibold text-3xl">Skillset</h2>
                  </div>
                  <p className="pt-3 grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {user?.skillsets?.map((skills, index) => {
                      return (
                        <span
                          key={index}
                          className="bg-[#333333] text-[#f2f2f2] px-2 py-2  rounded-lg"
                        >
                          {skills}
                        </span>
                      );
                    })}
                  </p>
                </div>

                <div className="w-[328px] md:w-[90vw] px-6 border-1 border-[#F3F5FF] rounded-2xl my-6">
                  <h2 className="text-2xl font-bold mb-5">Reviews from completed job</h2>

                  <div>
                    {reviews.length === 0 && <h1>No review yet</h1>}
                    {reviews?.map((review, i)=>(
                      <div key={i}>
                    <div className="md:pl-4 border-1 border-[#F3F5FF] rounded-2xl my-2 pb-2" >
                    <h2 className="font-bold text-2xl">{review.projectTitle}</h2>
                      <div className="flex gap-5 items-center">
                        <div className="flex gap-4 items-center my-4">
                        <img src={review?.from?.profilePicture} className="rounded-full w-[40px] 
                        h-[40px] md:w-[45px] md:h-[40px]"/>
                        
                        <div>
                          
                        <h2 className="text-[#333] text-xl font-semibold">{review?.from?.username}</h2>
                        </div>
                        </div>
                      </div>
                      <div className="flex text-gray-500">
                      
                      <p className=" italic">{`" ${review?.comment} "`}</p>

                      </div>
                      <p className="flex items-center">
                      {Array.from({ length: review?.rating || 0 }, (_, index) => (
                        <FaStar key={index} className="text-amber-300" />
                      ))}
                    </p>
                      <p className="italic text-gray-400">{new Date(review?.createdAt).toLocaleDateString()}</p>
                     
                    </div>

                
                </div>

                ))}
                  </div>
                  </div>
              </div>
           
        </>
      )}
    </div>
    </>
  );
};

export default Profile;
