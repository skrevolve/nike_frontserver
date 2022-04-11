import React from "react";
import { Routes,Route } from 'react-router-dom';
import "./App.css";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Notice from "./components/Notice";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Notice" element={<Notice/>} />
        <Route path="/Sidebar" element={<Sidebar/>} />
      </Routes>
    </div>
  );
}

export default App;
