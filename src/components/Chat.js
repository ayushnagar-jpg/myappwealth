import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Chat.css";

const Chat = () => {
  const navi = useNavigate();

  const handleClick = (path) => {
    navi(path); // This will navigate to the given path
  };
  return (
    <div className="chat">
      <div
        className="n"
        onClick={() => handleClick("/chatbot")}
        style={{ cursor: "pointer" }}
      >
        click here
      </div>
    </div>
  );
};

export default Chat;
