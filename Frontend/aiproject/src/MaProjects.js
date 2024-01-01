import React from 'react'
import { Button } from 'antd'
import { useNavigate } from "react-router-dom";

export default function MaProjects({
    _id,
    username,
    title,
    repo,
    des,
}) {
  const navigate = useNavigate();

  return (
    <div className='mps'>
        <div>
            <h1 style={{color:"#FFFFFF",marginBottom:"-15px"}}>{title}</h1>
            <p style={{ color: "#702963", maxWidth: "40vw", maxHeight: "20vh" }}>{des}</p>
        </div>
        <a href={repo} className='proxbut' target="_blank" rel="noopener noreferrer">
        view code
      </a>
        {/* <Button type='primary' className='proxbut' onClick={() => navigate(repo)}>view code</Button> */}
    </div>
  )
}
