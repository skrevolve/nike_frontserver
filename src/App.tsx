import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* <div>!!!!!!!!!!!!!!!나이키 메인화면 수정중!!!!!!!!!!!!!</div> */}
      <Footer />
    </div>
  );
}

export default App;
