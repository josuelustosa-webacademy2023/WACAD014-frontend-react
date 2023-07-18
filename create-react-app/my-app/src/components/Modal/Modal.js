import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Table from "../Table/Table";

import { DADOS_PRODUTOS } from "../../utils/dados-produto.mock";

class Modal extends Component {
  state = {
    characters: DADOS_PRODUTOS,
  };

  removeLinha = (index) => {
    const { DADOS_PRODUTOS } = this.state;
    this.setState({
      characters: DADOS_PRODUTOS.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    console.log("DADOS", this.state.characters);
    let valorTotal = 0;

    this.state.characters?.forEach((item) => {
      const SubTotal = item.preco * item.quant_estoque;

      valorTotal += SubTotal;
    });

    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-white"
                id="exampleModalLabel"
              >
                Meu carrinho ({this.state.characters?.length})
              </h1>

              <div className="d-flex align-items-center">
                <span class="badge fs-5 text-bg-info">Total: R$ {valorTotal}</span>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="modal-body text-white">
              {this.state.characters?.length ? (
                <Table
                  dadosTabela={this.state.characters}
                  removeLinha={this.removeLinha}
                />
              ) : (
                <div className="fs-5 text-center text-white">
                  Seu carrinho está vazio &#58;&#40;
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                disabled={!this.state.characters?.length}
              >
                <FontAwesomeIcon icon={faTrash} className="font-awesome-icon" />
                Limpar carrinho
              </button>
              <button
                type="button"
                className="btn btn-success"
                disabled={!this.state.characters?.length}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="font-awesome-icon"
                />
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
