import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { loremIpsum, name, surname, Avatar, username } from "react-lorem-ipsum";
import { generateMessage } from "../utils/helper";
const LiveChat = () => {
  const [liveInputText, setLiveInputText] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      //API poling
      console.log("API called after evry 2 sec");

      dispatch(
        addMessage({
          name: username(),
          message: generateMessage(),
        })
      );
    }, 2000); //poll every 2sec

    //garbage collection- clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="  mx-1 p-2   mt-5 border border-black h-[550px] w-full bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div className=" ">
          {chatMessages.map((chatMessage, index) => (
            <ChatMessage
              key={index}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Ramya", message: liveInputText }));
          setLiveInputText(""); //to clear the input
        }}
        className="w-full p-2 ml-2  "
      >
        <input
          className="w-80 p-2 rounded-lg bg-gray-100"
          type="text"
          placeholder="Chat ..."
          value={liveInputText}
          onChange={(e) => setLiveInputText(e.target.value)}
        />
        <button className="p-1 m-1 bg-black text-white rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
