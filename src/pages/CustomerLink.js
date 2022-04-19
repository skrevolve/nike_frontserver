import React from "react";
// import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import Notice from "../components/Notice";
import OfflineInfo from "../components/OfflineInfo";

function CustomerLink() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Notice />} />
        <Route path="/OfflineInfo" element={<OfflineInfo />} />
      </Routes>
    </div>
  );
}

export default CustomerLink;
