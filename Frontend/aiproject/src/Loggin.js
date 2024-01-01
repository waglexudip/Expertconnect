import React, { useState,useContext } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { AuthContext } from "./AuthContext";


export default function Loggin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userin, setUserin } = useContext(AuthContext);

  function hor() {
    message.error("Login failed.Try again");
  }
  function wrng() {
    message.error("Username and password cannot be empty...");
  }
  async function Login(ev) {
    if (username && password) {
      ev.preventDefault();
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.status === 404) {
        hor();
      } else {
        navigate("/Home");
        setUserin(username);
        // setIsLoggedIn(true);
      }
    } else {
      wrng();
    }
  }
  return (
    <div className="container">
      <div className="inputic">
        <input
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        ></input>

        <Button id="ibut" type="primary"onClick={Login}>
          Logg in
        </Button>
        <div className="pnsu">
          <h3>Don't have an account??</h3>
          <button id="ibuti" onClick={() => navigate("/Signup")}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
