import React, { Component } from "react";

import NavBar from "./NavBar/NavBar";
import Produto from "./Pages/Produto/Produto";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Produto />
      </div>
    );
  }
}

export default App;
