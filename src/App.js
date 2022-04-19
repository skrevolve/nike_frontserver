import React from "react";
// import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nrpage from "./pages/NrPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Customer from "./pages/Customer";
import Notice from "./components/Notice";
import OfflineInfo from "./components/OfflineInfo";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/OfflineInfo" element={<OfflineInfo />} />
        <Route path="/Nrpage" element={<Nrpage />} />
      </Routes>
    </div>
  );
}

export default App;
