import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "react-lorem-ipsum";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="py-2 shadow-sm">
      <AccountCircleIcon />

      <span className="p-2 text-gray-700 font-bold">{name}</span>
      <span className="">{message}</span>
    </div>
  );
};

export default ChatMessage;
