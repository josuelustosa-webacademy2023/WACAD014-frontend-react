import React, { useState } from "react";
import { Routes as Router, Route } from "react-router-dom";
import { toast } from "react-toastify";

// Componentes
import NavBar from "../components/NavBar/NavBar";

// Páginas
import Produto from "../Pages/Produto/Produto";
import CadastrarProduto from "../Pages/Produto/CadastrarProduto";

import { DADOS_PRODUTOS } from "../utils/dados-produto.mock";

const Routes = () => {
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

  const routes = [
    {
      path: "/produtos",
      element: (
        <Produto
          dadosProduto={produtos}
          adicionarProduto={adicionarProdutoAoCarrinho}
        />
      ),
    },
    {
      path: "/produtos/cadastrar-produto",
      element: <CadastrarProduto />,
    },
  ];

  return (
    <div>
      <NavBar
        dadosCarrinho={carrinho}
        removerProduto={removerProdutoDoCarrinho}
      />

      <Router>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Router>
    </div>
  );
};

export default Routes;
