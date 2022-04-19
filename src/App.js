import React from "react";
// import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NrPage from "./pages/NrPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notice from "./components/Notice";
import Mypage from "./components/Mypage";
import Customer from "./pages/Customer";
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
        <Route path="/Customer" element={<Customer />} />
        <Route path="/NrPage" element={<NrPage />} />
      </Routes>
    </div>
  );
}

export default App;
