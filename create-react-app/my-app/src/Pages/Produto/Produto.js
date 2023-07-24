import React from "react";
import CardGrid from "../../components/CardGrid/CardGrid";

const Produto = ({ dadosProduto, adicionarProduto }) => {
  return (
    <div class="container py-5">
      <div class="d-md-flex align-items-md-center justify-content-between">
        <h2 class="fs-2">Produtos</h2>
        <form class="d-flex align-items-center">
          <select class="form-select border-3 me-2 w-auto" defaultValue={1}>
            <option value="1">Recentes primeiro</option>
            <option value="2">Antigos primeiro</option>
            <option value="3">Menor preço</option>
            <option value="4">Maior preço</option>
          </select>

          <select class="form-select border-3 me-2 w-50" defaultValue={1}>
            <option value="1">9</option>
            <option value="2">18</option>
            <option value="3">36</option>
          </select>
        </form>
      </div>

      <CardGrid dadosCard={dadosProduto} adicionarItem={adicionarProduto} />

      <div class="container mt-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link disabled" href="#" aria-label="Anterior">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link active" aria-current="page" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Próxima">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Produto;
