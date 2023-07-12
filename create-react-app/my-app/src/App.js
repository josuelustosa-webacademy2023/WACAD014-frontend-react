import React, { Component } from "react";

import Table from "./Table/Table";
import NavBar from "./NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <h1>Olá, React!</h1>
        <Table />
      </div>
    );
  }
}

export default App;
