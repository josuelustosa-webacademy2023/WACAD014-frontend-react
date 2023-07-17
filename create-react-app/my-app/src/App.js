import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar";
import Produto from "./Pages/Produto/Produto";
//import Table from "./components/Table/Table";

import { characters } from "./utils/dados-table.mock";
import { DADOS_PRODUTOS } from "./utils/dados-produto.mock";

class App extends Component {
  state = {
    characters: characters,
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        {/* <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        /> */}
        <Produto dadosProduto={DADOS_PRODUTOS}/>
      </div>
    );
  }
}

export default App;
