import {  useEffect, useState } from "react";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import image from "/src/assets/react.svg";
import { IoIosCheckmark } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import Sidebar from "../SideBar";
import ClientSideBar from "../Clients/ClientSideBar";
import useUserStore from "../context/Store";

const GetMessages = () => {
  const { url, userToken, user } = useUserStore()
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);
  

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${url}chats/conversations`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          console.error("Failed to fetch messages");
          return;
        }

        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages", error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [url, userToken]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const sliceMessage = (message, maxlength = 20) => {
    return message.length > maxlength ? message.slice(0, maxlength) + "..." : message;
  };

  const getRecipient = (participants) => {
    
    return participants.find((p) => p?._id !== user?._id);
  };


  useEffect(() => {
   const getUser = async () => {
   const response = await fetch(`${url}user/profile/${userId}`)
   if(response.ok){
    const data = await response.json()
    console.log(data);
   }
}
   getUser()
},[url, userId])


const seen = (id) =>{
  messages?.forEach((msg) => {
    if (msg?._id === id) {
      msg.lastMessage.seen = true;
    }
  })
}
  return (
    <div>
     {user?.userType === "tasker" ? <Sidebar /> : <ClientSideBar />}   
      <h1 className="text-[25px] font-semibold pb-6 px-20 mt-5  md:mt-14 md:px-10 md:text-center">Messages</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-[90%] gap-y-2 flex mx-auto  flex-col justify-center items-center">
          {messages?.length > 0 ? (
            messages.map((msg) => {
              const recipient = getRecipient(msg?.participants || []);
              const linkId = recipient?._id;
             
              
              return (
                <Link to={`/chat/${linkId}`} key={msg?._id} className="w-full max-w-md">
                  <div
                  onClick={seen(msg?._id)}
                    className="w-full h-[67px] border border-[#F3F5FF] rounded-2xl flex items-center 
                    gap-4 p-3 bg-[#f2f2f2]  hover:shadow-sm transition"
                  >
                    <img
                      src={recipient?.profilePicture || image}
                      alt="user"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h2 className="font-bold text-sm">{recipient?.username?.toUpperCase()}</h2>
                      <p className="text-[11px] text-gray-600">{sliceMessage(msg.lastMessage?.text || "")}</p>
                    </div>
                    <div>
                      {/* <small>{formatTime(msg.lastMessage?.createdAt)}</small> */}
                      <small className={msg.lastMessage?.seen ? "text-blue-500" : ""}>
                        {msg.lastMessage?.seen ? <IoCheckmarkDone size={20}/> : <IoIosCheckmark size={30}/>}
                      </small>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-gray-500 mt-10">No conversations yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GetMessages;
