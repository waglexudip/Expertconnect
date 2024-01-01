import React, { useState, useContext,useEffect } from "react";
import { message, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Signup() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [repo, setRepo] = useState("");
  const [des, setDes] = useState("");
  const { userin, setUserin } = useContext(AuthContext);

  function showe() {
    message.error("All input fields must be filled");
  }
  function shows() {
    message.error("provide github repo of the project");
  }
  async function upl(ev) {
    // console.log(,email,field,about,password);
    if (title && repo && des) {
      if(repo.slice(0,19) ==='https://github.com/'){
      ev.preventDefault();
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: JSON.stringify({ userin, title, repo, des }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 300) {
        message.success("Project has been added.");
        navigate("/Home");
      }
    }else shows();
    } else showe();
  }
  function redir(){
    if(!userin){
      navigate("/");
    }
  }
  useEffect(redir,[]);

  return (
    <div className="container">
      <div className="signupform">
        <h2>Upload your project here..</h2>
        <div className="signuptop">
          <input
            placeholder="title"
            className="signnam"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <input
            placeholder="github repo"
            className="signnam"
            value={repo}
            onChange={(ev) => setRepo(ev.target.value)}
          />

          <textarea
            rows="7"
            cols="80"
            placeholder="write project description in brief......"
            className="textput"
            value={des}
            onChange={(ev) => setDes(ev.target.value)}
          />
        </div>
        <div className="signlog">
          <Button type="primary" className="siupbut" onClick={upl}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}
