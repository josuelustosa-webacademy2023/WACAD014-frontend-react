import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css"

class CardGrid extends Component {
  render() {
    const { dadosCard } = this.props;

    return (
      <div class="row row-cols-1 row-cols-lg-3 g-4 py-4">
        {dadosCard.map((item, index) => (
          <div class="col" key={index}>
            <div class="card h-100 border-3 p-3">
              <img
                src={item.imagem}
                class="card-img-top py-3"
                alt={item.nome}
                title={item.nome}
                width={250}
                height={350}
              />
              <hr class="border-3" />
              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">
                    {item.nome} #{item.num_jogador}
                  </a>
                </h5>
                <div class="py-2">
                  <span class="badge text-bg-secondary py-2 me-2">
                    Código: {item.codigo}
                  </span>
                  <span class="badge text-bg-secondary py-2 me-2">
                    Condição: {item.condicao}/10
                  </span>
                  <span class="badge text-bg-secondary py-2">
                    Tamanho: {item.tamanho}
                  </span>
                </div>
                <h3 class="card-title">R$ {item.preco}</h3>
                <div class="mt-4 d-flex align-items-center">
                  <input
                    type="number"
                    class="form-control border-3 me-2 w-25"
                    id="numberItens"
                    defaultValue={0}
                    min={0}
                    max={item.quant_estoque}
                  />
                  <button
                    type="button"
                    class="btn btn-success text-white border-3 me-2"
                  >
                    <FontAwesomeIcon icon={faCartPlus} />
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning text-white border-3 me-2"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger text-white border-3 me-2"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CardGrid;
