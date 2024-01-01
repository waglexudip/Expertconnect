import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Loggin from "./Loggin";
import Upload from "./Upload";
import Profile from "./Profile";
import { AuthProvider } from "./AuthContext";

import React from "react";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Loggin />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Upload" element={<Upload/>} />
            <Route exact path="/Profile/:username" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
