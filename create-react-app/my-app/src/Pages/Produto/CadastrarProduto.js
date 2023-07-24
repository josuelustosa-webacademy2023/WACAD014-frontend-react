import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";

const CadastrarProduto = () => {
  return (
    <div class="container py-5">
      <div class="d-md-flex align-items-md-center justify-content-between">
        <h2 class="fs-2">Cadastar Produto</h2>
      </div>

      <form class="row g-3 py-4">
        <div class="col-md-12 mb-3">
          <label for="inputNomeManto" class="form-label">
            Nome
          </label>
          <input
            type="text"
            class="form-control form-control border-3"
            id="inputNomeManto"
            defaultValue="Manto "
          />
        </div>
        <div class="col-md-8 mb-3">
          <label for="inputUrl" class="form-label">
            URL Imagem
          </label>
          <input
            type="text"
            class="form-control form-control border-3"
            id="inputUrl"
            placeholder="https://"
          />
        </div>
        <div class="col-md-4 mb-3">
          <label for="inputNumJogador" class="form-label">
            Núm. Jogador
          </label>
          <input
            type="text"
            class="form-control form-control border-3"
            id="inputNumJogador"
            placeholder="1... ou S/N"
          />
        </div>
        <div class="col-md-3 mb-3">
          <label for="inputCondicao" class="form-label">
            Condição
          </label>
          <input
            type="number"
            class="form-control form-control border-3"
            id="inputCondicao"
            defaultValue={0}
            min={0}
            max={10}
          />
        </div>
        <div class="col-md-3 mb-3">
          <label for="inputQtd" class="form-label">
            Quantidade
          </label>
          <input
            type="number"
            class="form-control form-control border-3"
            id="inputQtd"
            defaultValue={1}
            min={1}
            max={1}
            disabled
          />
        </div>
        <div class="col-md-3 mb-3">
          <label for="inputTamanho" class="form-label">
            Tamanho
          </label>
          <select
            id="inputTamanho"
            class="form-select form-select border-3"
            defaultValue={1}
          >
            <option value="1">PP</option>
            <option value="2">P</option>
            <option value="3">M</option>
            <option value="4">G</option>
            <option value="5">GG</option>
            <option value="5">XG</option>
          </select>
        </div>
        <div class="col-md-3 mb-4">
          <label for="inputPreco" class="form-label">
            Preço (R$)
          </label>
          <input
            type="number"
            class="form-control form-control border-3"
            id="inputPreco"
            defaultValue={0}
            min={0}
          />
        </div>

        <div class="d-grid w-100">
          <button
            type="submit"
            class="btn btn-success text-white border-3"
          >
            <FontAwesomeIcon
              icon={faFloppyDisk}
              className="font-awesome-icon"
            />
            Salvar Cadastro
          </button>
        </div>
        <div class="d-grid w-100">
          <button
            type="reset"
            class="btn btn-secondary text-white border-3"
          >
            <FontAwesomeIcon icon={faTrash} className="font-awesome-icon" />
            Limpar dados
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastrarProduto;
