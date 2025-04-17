import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "../Loader";
import { useNavigate, useParams } from "react-router-dom";
import image from "/src/assets/react.svg";
import { IoIosCheckmark } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { UserContext } from "../context/UserContext";
import { Send } from "lucide-react";
import Sidebar from "../SideBar";

const StartChat = () => {
  const [messages, setMessages] = useState([]);
const [user, setUser] = useState(null);
  const { url, userToken } = useContext(UserContext);
console.log(user);

  const [message, setMessage] = useState("");
  const { id } = useParams();
  const recipientId = id;

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const sendMsg = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    try {
      const res = await fetch(`${url}chats`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipientId,
          message,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        // console.log(data);
        setMessages((prev) => [...prev, data]);
        setMessage("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const allMessages = async () => {
      const res = await fetch(`${url}chats/${id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setMessages(data);
      } else {
        const error = await res.json();
        console.log(error);
      }
    };

    allMessages(); // Load once initially

    // const interval = setInterval(() => {
    //   allMessages();
    // }, 7000);

    // return () => clearInterval(interval); // cleanup
  }, [url, userToken, id]);

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
        // console.log(data);
    }
}
    getProfile()
  }, [id, userToken, url]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex justify-center md:justify-normal min-h-screen md:gap-72">
      <Sidebar />

      <div
        className="flex flex-col h-[100vh] md:h-[95vh] w-full max-w-2xl mx-auto md:mt-10  
    border border-gray-200 shadow-sm rounded-lg bg-white"
      >
        {/* Header */}
        <div className="bg-[#333333] text-white p-4 rounded-t-lg font-semibold px-20 md:px-4 text-lg">
          Chat with {user?.username}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[80%] px-4 py-2 rounded-lg text-sm break-words relative ${
                msg.sender === id
                  ? "bg-white text-gray-800 mr-auto rounded-bl-none"
                  : "bg-[#333] text-white ml-auto rounded-br-none"
              }`}
            >
            
            <div className="flex items-center justify-between gap-6">
              {msg.text}
           
              <div
                className={`text-[10px] mt-1 ${
                  msg.sender === id
                    ? "text-right text-gray-400"
                    : "text-right text-gray-100"
                }`}
              >
                {formatTime(msg.createdAt)}
              </div>
               </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-3 flex items-center gap-2 border-t bg-white">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMsg()}
          />
          <button
            onClick={sendMsg}
            className="bg-[#333] hover:bg-[#525151] text-white p-2 rounded-full"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartChat;
