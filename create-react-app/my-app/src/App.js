import React, { Component } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";

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
      toast.info("Produto já adicionado ao carrinho");
    } else {
      this.setState((stateAnterior) => ({
        carrinho: [...stateAnterior.carrinho, novoProduto],
      }));

      toast.success("Produto adicionado ao carrinho");
    }
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
          adicionarProduto={this.adicionarProdutoAoCarrinho}
        />
        <ToastContainer autoClose={2000} transition={Flip} theme={"colored"} />
      </div>
    );
  }
}

export default App;
