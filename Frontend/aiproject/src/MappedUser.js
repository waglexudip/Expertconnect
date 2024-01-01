import React from "react";
import { Link } from "react-router-dom";
import { TransactionOutlined  } from "@ant-design/icons";
import {  Button } from "antd";

export default function MappedUser({
  _id,
  username,
  email,
  password,
  rated,
  aboutme,
  field,
  rating,
  totalraters,
}) {
const imgarr =[
  'https://github.com/waglexudip/velmar/blob/main/avatars/Screenshot%20from%202023-12-05%2007-46-19-modified(1).png?raw=true',
  'https://github.com/waglexudip/velmar/blob/main/avatars/Screenshot%20from%202023-12-05%2007-46-19-modified(2).png?raw=true',
  'https://github.com/waglexudip/velmar/blob/main/avatars/Screenshot%20from%202023-12-05%2007-46-19-modified(4).png?raw=true',
  'https://github.com/waglexudip/velmar/blob/main/avatars/Screenshot%20from%202023-12-05%2007-46-19-modified(5).png?raw=true',
  'https://github.com/waglexudip/velmar/blob/main/avatars/Screenshot%20from%202023-12-05%2007-46-19-modified(6).png?raw=true',
  'https://github.com/waglexudip/velmar/blob/main/avatars/Screenshot%20from%202023-12-05%2007-46-19-modified(7).png?raw=true',
  'https://github.com/waglexudip/velmar/blob/main/avatars/Screenshot%20from%202023-12-05%2007-46-19-modified(8).png?raw=true',
  'https://github.com/waglexudip/velmar/blob/main/avatars/Screenshot%20from%202023-12-05%2007-46-19-modified(9).png?raw=true',
  'https://github.com/waglexudip/velmar/blob/main/avatars/Screenshot%20from%202023-12-05%2007-46-19-modified.png?raw=true'
]

    
  return (
    <div className="usdiv">
      <Link to={'/Profile/'+username}>
      <img src={imgarr[Math.floor(Math.random()*imgarr.length)]} alt="logo"/>
      </Link>
      <h1 className="propname">{'@'+username}</h1>
      <Button
        className="sobo"
        type="primary"
        icon={<TransactionOutlined/>}
        
      >{' '+(rating.toFixed(1))}</Button>
      {/* <p className="profi">{rating}</p><TransactionOutlined /> */}
    </div>
  );
}
