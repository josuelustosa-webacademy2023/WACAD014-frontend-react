import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";

class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
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
                Meu carrinho
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-white">
              Seu carrinho está vazio &#58;&#40;
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger">
                <FontAwesomeIcon icon={faTrash} className="font-awesome-icon" />
                Limpar carrinho
              </button>
              <button type="button" className="btn btn-success">
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
