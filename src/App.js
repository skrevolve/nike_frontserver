import React from "react";
// import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NrPage from "./pages/NrPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notice from "./components/Notice";
import MyPage from "./components/Mypage";
import OfflineInfo from "./components/OfflineInfo";
import Main from "./pages/Main";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/NrPage" element={<NrPage />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/OfflineInfo" element={<OfflineInfo />} />
      </Routes>
    </div>
  );
}

export default App;
