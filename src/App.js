import React from "react";
// import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nrpage from "./pages/NrPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notice from "./components/Notice";
import Mypage from "./components/Mypage";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Nrpage" element={<Nrpage />} />
      </Routes>
    </div>
  );
}

export default App;
