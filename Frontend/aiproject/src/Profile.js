import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import imgarr from "./Data";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Input, message } from "antd";
import Projects from "./Projects";

export default function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [prof, setProf] = useState(null);
  const [rat, setRat] = useState(1);
  const { userin, setUserin } = useContext(AuthContext);
  var ue = username;
  useEffect(() => {
    fetch(`http://localhost:5000/find/${username}`).then((response) => {
      response.json().then((Info) => {
        setProf(Info[0]);
        // ue = prof.username;
      });
    });
  }, []);
  function tot() {
    navigate("/Upload");
  }

  function redir() {
    if (!userin) {
      navigate("/");
    }
  }
  function Logout() {
    setUserin(null);
    navigate("/");
  }

  async function adrat() {
    if (rat <= 10 && rat >= 1) {
      const response = await fetch("http://localhost:5000/rate", {
        method: "POST",
        body: JSON.stringify({ rat, ue, userin }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.status === 303) {
        message.success("rating request sent");
      } else {
        message.error("failed");
      }
    } else {
      message.error("rating must be between 1 and 10");
    }
  }

  useEffect(redir, []);
  return (
    <div className="edv">
      {prof && (
        <div className="prome">
          <div className="las">
            <div style={{ marginTop: "35px" }}>
              <img
                src={imgarr[Math.floor(Math.random() * imgarr.length)]}
                alt="logo"
              />
            </div>
            <div className="medet">
              <h1 style={{ color: "#00FFFF" }}>{"@" + prof.username}</h1>
              <h3 style={{ color: "#D2042D", marginTop: "-1px" }}>
                {prof.field}
              </h3>
              <p style={{ color: "#0000FF", marginTop: "-1px" }}>
                {prof.rating}
              </p>

              <p style={{ color: "#00AFFF", marginTop: "-1px" }}>
                {prof.email}
              </p>

              <div style={{ maxWidth: "50vw", maxHeight: "40vh" }}>
                <p style={{ color: "#702963", marginTop: "-1px" }}>
                  {prof.aboutme}
                </p>
              </div>
            </div>
            {prof && prof.username === userin && (
              <Button type="primary" className="lasbut" onClick={tot}>
                upload project
              </Button>
            )}
          </div>
          <div className="prox">
            <Projects name={username} />
            {prof && prof.username === userin && (
              <Button type="primary" onClick={Logout}>
                Logout
              </Button>
            )}
          </div>

          {prof && prof.username !== userin && (
            <div className="ratdiv">
              <Input
                className="rat"
                placeholder=""
                value={rat}
                onChange={(ev) => setRat(ev.target.value)}
              />
              <Button className="rab" type="primary" onClick={adrat}>
                Add rating
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
