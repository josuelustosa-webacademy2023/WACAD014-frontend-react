import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar";
import Produto from "./Pages/Produto/Produto";

import { DADOS_PRODUTOS } from "./utils/dados-produto.mock";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Produto dadosProduto={DADOS_PRODUTOS} />
      </div>
    );
  }
}

export default App;
