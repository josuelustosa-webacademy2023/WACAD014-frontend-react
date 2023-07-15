import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar";
//import Produto from "./Pages/Produto/Produto";
import Table from "./components/Table/Table";

import { CHARACTERS } from "./utils/dados-table.mock";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <Produto /> */}
        <Table characterData={CHARACTERS} />
      </div>
    );
  }
}

export default App;
