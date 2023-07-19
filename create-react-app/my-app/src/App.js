import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar";
import Produto from "./Pages/Produto/Produto";

import { DADOS_PRODUTOS } from "./utils/dados-produto.mock";

class App extends Component {
  state = {
    produtos: DADOS_PRODUTOS,
    carrinho: [],
  };

  adicionarProdutoAoCarrinho = (novoProduto) => {
    const { carrinho } = this.state;

    const itemExistente = carrinho.find(
      (item) => item.codigo === novoProduto.codigo
    );

    if (itemExistente) {
      alert("Item já adicionado ao carrinho");
      return;
    }

    this.setState((stateAnterior) => ({
      carrinho: [...stateAnterior.carrinho, novoProduto],
    }));
    alert("Item adicionado ao carrinho");
    console.log("Produto add ao Carrinho", novoProduto);
  };

  removerProdutoDoCarrinho = (novoCarrinho) => {
    this.setState({
      carrinho: novoCarrinho,
    });
  };

  render() {
    const { carrinho } = this.state;

    return (
      <div>
        <NavBar
          dadosCarrinho={carrinho}
          removerProduto={this.removerProdutoDoCarrinho}
        />
        <Produto
          dadosProduto={this.state.produtos}
          adicionarPoduto={this.adicionarProdutoAoCarrinho}
        />
      </div>
    );
  }
}

export default App;
