import {  useState } from "react";
import { UserContext } from "../UserContext";

const StartSupport = () => {
  const { url, userToken, initChat } = useUserStore();
  const [messages, setMessages] = useState([]);
  const [usermessage, setUserMessage] = useState("");
// console.log(messages);

  // Send Message Function
  const sendMessage = async () => {
    if (!usermessage.trim()) return; // Prevent empty messages

    const userMessageObj = {
      id: Date.now(),
      sender: "You",
      text: usermessage,
      time: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessageObj]); 
    setUserMessage(""); 

    try {
      const response = await fetch(`${url}api/v1/chat/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          chatId: initChat?.chatId,
          message: usermessage,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, data]); 
      } else {
        console.log("Error:", await response.json());
      }
    } catch (error) {
      console.log("Network Error:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 my-5 p-4 max-w-md mx-auto md:max-w-lg rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3 mb-3">
        <h2 className="text-lg font-semibold">Chat With Bot</h2>
        <span className="text-green-500 text-sm">Online</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {initChat?.message && (
          <div className="px-4 py-2 rounded-lg max-w-xs bg-gray-200">
            {initChat.message}
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.sender === "You" ? "bg-green-500 text-white" : "bg-white"
              }`}
            >
              {msg.sender === "You" ? msg.text : msg.message}
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="mt-4 flex items-center border-t pt-3">
        <input
          type="text"
          value={usermessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border rounded-full text-sm outline-none"
        />
        <button
          className="ml-2 text-pink-500 text-lg cursor-pointer"
          onClick={sendMessage}
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default StartSupport;
