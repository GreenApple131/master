import React, { Component } from "react";
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'


import './App.css';
import Homepage from './components/Homepage'


function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
