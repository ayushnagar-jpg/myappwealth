import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./About.css";
import mail from "../images/mail.png";
import lock from "../images/lock.png";

const About = () => {
  return (
    <div className="Backck">
      <div className="bx1">
        <div className="ima"></div>
      </div>
      <div className="bx2">
        <h1>Fruit.Ai</h1>
        <p>
          Whether you're looking to discover new fruits, understand their
          nutritional values, or find the perfect fruit for your diet, our
          AI-driven chatbot is here to assist. We provide personalized fruit
          recommendations tailored to your health needs, making it easier for
          you to integrate the best fruits into your daily routine.
        </p>
        <div className="bt">
          <button type="text">About</button>
        </div>
      </div>
    </div>
  );
};

export default About;
