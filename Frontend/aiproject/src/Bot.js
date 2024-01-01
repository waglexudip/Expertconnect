import React, { useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined, DingtalkOutlined ,SendOutlined } from "@ant-design/icons";

export default function Bot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [shbot, setShbot] = useState(false);

  function bottog() {
    if (shbot) {
      setShbot(false);
    } else {
      setShbot(true);
    }
  }
  async function Talktobot() {
    if (input) {
      var newmessage = {
        content: input,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newmessage]);
      const response = await fetch(
        "http://localhost:5005/webhooks/rest/webhook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await response.json();
      console.log(data[0].text);
      var botres = {
        content: data[0].text,
        sender: "bot",
      };

      setMessages((prevMessages) => [...prevMessages, botres]);
      setInput("");
    }
  }

  return (
    <>
      {shbot && (
        <div className="botui">
          <div className="bothead">
            <h2> Rasabot....</h2>
          </div>
          <div className="botmain">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.sender === "user" ? "usermes" : "botmes"}
              >
                <p>{message.content}</p>
              </div>
            ))}
          </div>
          <div className="askbot">
            <Input
              placeholder="Write a message to the bot...."
              className="botvar"
              value={input}
              onChange={(ev) => setInput(ev.target.value)}
            />
            <Button type="primary" onClick={Talktobot}
            icon={<SendOutlined />}
            >
            </Button>
          </div>
          {/* <Button className="sobotop"type="primary"icon={<DingtalkOutlined />}></Button> */}
        </div>
      )}
      <Button
        className="sobotop"
        type="primary"
        icon={<DingtalkOutlined />}
        onClick={bottog}
      ></Button>
    </>
  );
}
