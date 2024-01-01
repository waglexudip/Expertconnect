import React, { useState } from "react";
import { message, Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [usernam,setUsernam]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [conpass,setConpass]=useState('');
  const [field, setField] = useState("Blockchain developer");
  const [about, setAbout] = useState("");

   
  function succ() {
    message.success("signup successfull.Log in to continue..");
  }
  function showerr() {
    message.error("All input fields must be filled");
  }

  function sucf() {
    message.error("signup failed.username or email already in use");
  }
  function showem() {
    message.error("invalid email address");
  }
   
   
  async function register(ev) {
    console.log(usernam,email,field,about,password);
    if (
      usernam &&
      email &&
      password &&
      conpass &&
      about &&
      field &&
      conpass === password
    ) {
      if (email.slice(-10) === "@gmail.com") {
        ev.preventDefault();
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          body: JSON.stringify({ usernam, email, password, field, about }),
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 333) {
          sucf();
        } else {
          succ();
          navigate("/");
        }
      } else showem();
    } else showerr();
  }

   

   

  return (
    <div className="container">
      <div className="signupform">
        <h2>Create an account to continue..</h2>
        <div className="signuptop">
          <input
            placeholder="Username"
            className="signname"
            value={usernam}
            onChange={(ev) => setUsernam(ev.target.value)}
          />
          <input
            placeholder="Email address"
            className="signname"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            placeholder="password"
            className="signname"
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <input
            placeholder="confirm password"
            className="signname"
            type="password"
            value={conpass}
            onChange={(ev) => setConpass(ev.target.value)}
          />
          <p className="praf">select your area of expertise :</p>
          <select className="elects" value={field} onChange={(ev) => setField(ev.target.value)}>
            <option value="Blockchain developer">Blockchain developer</option>
            <option value="cloud architect">Cloud architect</option>
            <option value="App developer">App developer</option>
            {/* <option value="Database designer">Database designer</option> */}
            <option value="Data scientist">Data scientist</option>
            <option value="Frontend developer">Frontend developer</option>
            <option value="Backend developer">Backend developer</option>
            <option value="Fullstack developer">Fullstack developer</option>
            <option value="Desktop developer">Desktop developer</option>
          </select>
          <textarea
            rows="7"
            cols="80"
            placeholder="write something about yourself......"
            className="textput"
            value={about}
            onChange={(ev) => setAbout(ev.target.value)}
          />
        </div>
        <div className="signlog">
          <Button type="primary" className="siupbut" onClick={register}>
            sign up
          </Button>
          <Button
            type="primary"
            className="lginbut"
            onClick={() => navigate("/")}
          >
            logg in
          </Button>
        </div>
      </div>
    </div>
  );
}
