import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import mail from "../images/mail.png";
import lock from "../images/lock.png";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // username = abc
  //password = 123
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === "abc" && password === "123") {
      navigate("/home"); // Redirect to home on successful login
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="background">
      <div class="login-cotainer">
        <h1>Login</h1>
        <p className="title-1">By signing in you are agreeing </p>
        <p className="title-2">
          our <span>Term and privacy policy</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="user">
            <input
              type="username"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />

            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          <div className="btn">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
