import React from "react";
import { Routes,Route } from 'react-router-dom';
import "./App.css";
import NR_page from "./pages/NR_page";
import Login from "./components/Login";
import Sighup from "./components/Sighup";
import Notice from "./components/Notice";
import Main from "./pages/Main";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Sighup" element={<Sighup/>} />
        <Route path="/Notice" element={<Notice/>} />
        <Route path="/NR_page" element={<NR_page/>} />
      </Routes>
    </div>
  );
}

export default App;
