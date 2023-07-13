import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

class CardGrid extends Component {
  render() {
    return (
      <div class="row row-cols-1 row-cols-md-3 g-4 py-4">
        <div class="col">
          <div class="card h-100 border-3 p-3">
            <img
              src="https://images.classicfootballshirts.co.uk/pub/media/catalog/product/p/4/p45009272-1_3gldrl5ttdmzk8uo.jpg"
              class="card-img-top py-3"
              alt="..."
            />
            <hr class="border-3" />
            <div class="card-body">
              <h5 class="card-title">
                <a href="#">Manto 1 Flamengo 1987-90 #10</a>
              </h5>
              <div class="py-2">
                <span class="badge text-bg-secondary py-2 me-2">
                  Condição: 9/10
                </span>
                <span class="badge text-bg-secondary py-2">Tamanho: G</span>
              </div>
              <h3 class="card-title">R$ 300</h3>
              <div class="mt-4 d-flex align-items-center">
                <input
                  type="number"
                  class="form-control border-3 me-2 w-25"
                  id="numberItens"
                  defaultValue={1}
                  min={0}
                  max={10}
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
      </div>
    );
  }
}

export default CardGrid;
