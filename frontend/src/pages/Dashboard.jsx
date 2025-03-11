import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Move socket outside to prevent duplicate connections

function Dashboard() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const messagesEndRef = useRef(null);
  const [socketid, setSocketid] = useState("");
  const [roomcode, setRoomcode] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      setSocketid(socket.id);
      console.log(`Connected with ID: ${socket.id}`);
    });


    const handleOthers=(message)=>{
      setChat((prevChat)=>[...prevChat,{text:message,sender:"others"}])
    }

    const handleMessageReceived=(msg)=>{
      setChat((prevChat)=>[...prevChat,{text:msg,sender:"others"}])

    }
    
    socket.on("others",handleOthers)
    socket.on("message-received",handleMessageReceived)

    return ()=>{
      socket.off("others",handleOthers)
      socket.off("message-received",handleMessageReceived)
    }
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = { text: message, sender: "you" };

    if (roomcode === "") {
      socket.emit("messageToAll", message);
    } else {
      socket.emit("message", { message, roomcode });
    }

    setChat((prevChat) => [...prevChat, newMessage]);
    console.log(chat)
    setMessage("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">ChatApp</h1>
          <p>{`ID: ${socketid}`}</p>
        </div>
        <div className="h-64 bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-y-auto">
          {chat.length === 0 ? (
            <p className="text-gray-500 text-center">No messages yet</p>
          ) : (
            chat.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-lg max-w-xs ${
                  msg.sender === "you"
                    ? "bg-blue-500 text-white ml-auto text-right"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="mt-4">
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-2">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message..."
              rows="3"
            ></textarea>

            <textarea
              onChange={(e) => setRoomcode(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter room code (optional)..."
              rows="1"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
