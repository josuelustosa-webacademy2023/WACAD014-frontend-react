import React, { useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";

import NavBar from "./components/NavBar/NavBar";
import Produto from "./Pages/Produto/Produto";

import { DADOS_PRODUTOS } from "./utils/dados-produto.mock";

const App = () => {
  const [produtos] = useState(DADOS_PRODUTOS);
  const [carrinho, setCarrinho] = useState([]);

  const adicionarProdutoAoCarrinho = (novoProduto) => {
    const itemExistente = carrinho.find(
      (item) => item.codigo === novoProduto.codigo
    );

    if (itemExistente) {
      toast.info("Produto já adicionado ao carrinho");
    } else {
      setCarrinho((carrinhoAnterior) => [...carrinhoAnterior, novoProduto]);
      toast.success("Produto adicionado ao carrinho");
    }
  };

  const removerProdutoDoCarrinho = (novoCarrinho) => {
    setCarrinho(novoCarrinho);
  };

  return (
    <div>
      <NavBar
        dadosCarrinho={carrinho}
        removerProduto={removerProdutoDoCarrinho}
      />
      <Produto
        dadosProduto={produtos}
        adicionarProduto={adicionarProdutoAoCarrinho}
      />
      <ToastContainer autoClose={2000} transition={Flip} theme={"colored"} />
    </div>
  );
};

export default App;
