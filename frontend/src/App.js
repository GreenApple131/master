import React, { Component } from "react";
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'


import './App.css';
import Homepage from './components/Homepage'
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App grid">
      <Homepage className="main" />
      <Sidebar className="side" />
    </div>
  );
}

export default App;
