import React, { useState, useContext, useEffect } from "react";

import "./Home.css";
import { Button, message } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import Bot from "./Bot";
import Users from "./Users";
import { AuthContext } from "./AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const [ser, setSer] = useState("");
  const { userin, setUserin } = useContext(AuthContext);
  const navigate = useNavigate();

  function redir() {
    if (!userin) {
      navigate("/");
    }
  }
  function fug() {
    message.error("user doesnot exit");
  }

  function sec() {
    navigate("/Profile/"+ ser)
  }

  useEffect(redir, []);
  return (
    <div className="containerone">
      <div className="tophome">
        <Link to={"/Profile/" + userin}>
          <Button
            className="xbut"
            type="primary"
            icon={<UserOutlined />}
          ></Button>
        </Link>
        <input
          className="hput"
          placeholder=""
          value={ser}
          onChange={(ev) => setSer(ev.target.value)}
        />
        <Button
          className="xbut"
          type="primary"
          icon={<SearchOutlined />}
          onClick={sec}
        ></Button>
      </div>
      <div className="homemid">
        <div className="usersprof">
          <Users />
        </div>
        <Bot />
      </div>
      {/* <div className="sobop">
      <Button className="sobotop"type="primary"icon={<DingtalkOutlined />}></Button>
      </div> */}
    </div>
  );
}
