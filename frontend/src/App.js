import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";

// function App() {
//   return (
//     <div className="App grid">
//       <Homepage className="main" />
//       <Sidebar  className="side" />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:8000/api/data/");
      const dataList = await res.json();
      this.setState({
        dataList,
      });
    } catch (e) {
      console.log(e);
    }
  }
  

  render() {
    return (
      <div className="App grid">
        <Homepage className="main" />
        <Sidebar data={this.state.dataList} className="side" />
      </div>
    );
  }
}

export default App;
