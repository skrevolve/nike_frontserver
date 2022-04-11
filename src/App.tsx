import React from "react";
import { Routes,Route } from 'react-router-dom';
import "./App.css";
import NR_page from "./pages/NR_page";
import Login from "./components/Login";
import Notice from "./components/Notice";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Notice" element={<Notice/>} />
        <Route path="/NR_page" element={<NR_page/>} />
      </Routes>
    </div>
  );
}

export default App;
