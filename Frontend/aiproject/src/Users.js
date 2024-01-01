import React from "react";
import { useEffect, useState } from "react";
import MappedUser from "./MappedUser";
export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users").then((response) => {
      response.json().then((posts) => {
        setUsers(posts);
      });
    });
  }, []);
  return (
    <>
      {users.length > 0 && users.map((users) => <MappedUser {...users} />)}
    </>
  );
}
