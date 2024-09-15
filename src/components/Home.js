import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path); // This will navigate to the given path
  };

  return (
    <div className="Back">
      <div className="title">
        <h1>Fruit.Ai</h1>
        <div className="list">
          <ul>
            <li
              className="box1"
              onClick={() => handleClick("/Chat")}
              style={{ cursor: "pointer" }}
            >
              <div className="overlay"></div>
            </li>
            <li
              className="box2"
              onClick={() => handleClick("/home")}
              style={{ cursor: "pointer" }}
            >
              <div className="overlay"></div>
            </li>
            <li
              className="box3"
              onClick={() => handleClick("/home")}
              style={{ cursor: "pointer" }}
            >
              <div className="overlay"></div>
            </li>
            <li
              className="box4"
              onClick={() => handleClick("/translator")}
              style={{ cursor: "pointer" }}
            >
              <div className="overlay"></div>
            </li>
            <li
              className="box5"
              onClick={() => handleClick("/faq")}
              style={{ cursor: "pointer" }}
            >
              <div className="overlay"></div>
            </li>
            <li
              className="box6"
              onClick={() => handleClick("/about")}
              style={{ cursor: "pointer" }}
            >
              <div className="overlay"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
