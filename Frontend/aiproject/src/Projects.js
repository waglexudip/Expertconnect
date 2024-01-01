import React from "react";
import { useEffect, useState } from "react";
import MaProjects from "./MaProjects";
export default function Projects(props) {
  const [pros, setPros] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/findproject/"+props.name).then((response) => {
      response.json().then((po) => {
        setPros(po);
      });
    });
  }, []);
  return (
    <>
    <div>
        {/* <h1 style={{color:"#FFFFFF"}}>PROJECTS</h1> */}
        </div>
      {pros.length > 0 && pros.map((fg) => <MaProjects {...fg} />)}
      
    </>
  );
}
