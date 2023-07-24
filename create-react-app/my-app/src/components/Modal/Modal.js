import React from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Table from "../Table/Table";

const Modal = ({ dadosModal, removerItem }) => {
  const removerItemDaTabela = (index) => {
    const novaTabela = dadosModal.filter((item, i) => i !== index);

    removerItem(novaTabela);
    toast.error("Produto removido do carrinho");
  };

  const removerTodosItens = () => {
    removerItem([]);
    toast.error("Todos produtos foram removidos do carrinho");
  };

  let valorTotal = 0;

  dadosModal.forEach((item) => {
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
            <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">
              Meu carrinho ({dadosModal?.length})
            </h1>

            <div className="d-flex align-items-center">
              <span class="badge fs-5 text-bg-info">
                Total: R$ {valorTotal}
              </span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="modal-body text-white">
            {dadosModal?.length ? (
              <Table
                dadosTabela={dadosModal}
                removerItemDaTabela={removerItemDaTabela}
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
              disabled={!dadosModal?.length}
              onClick={removerTodosItens}
            >
              <FontAwesomeIcon icon={faTrash} className="font-awesome-icon" />
              Limpar carrinho
            </button>
            <button
              type="button"
              className="btn btn-success"
              disabled={!dadosModal?.length}
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
};

export default Modal;
