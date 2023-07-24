import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBoxesStacked,
  faPlus,
  faList,
  faUserGear,
  faRightToBracket,
  faUserPlus,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal/Modal";

import logoNav from "../../assets/images/logo-manto-raiz.png";

const NavBar = ({ dadosCarrinho, removerProduto }) => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark py-3" data-bs-theme="dark">
      <div class="container">
        <Link class="navbar-brand" to="/produtos">
          <img
            src={logoNav}
            alt="Logo Manto Raiz"
            width="100"
            height="100"
            class="d-inline-block align-text"
          />
          Manto Raiz
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item pe-5">
              <Link class="nav-link" to="/produtos">
                <FontAwesomeIcon icon={faHouse} className="font-awesome-icon" />{" "}
                Início
              </Link>
            </li>
            <li class="nav-item dropdown pe-lg-5">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon
                  icon={faBoxesStacked}
                  className="font-awesome-icon"
                />
                Produtos
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/produtos">
                    <FontAwesomeIcon
                      icon={faList}
                      className="font-awesome-icon"
                    />
                    Lista de Produtos
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/produtos/cadastrar-produto">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="font-awesome-icon"
                    />
                    Cadastrar Produto
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown mb-3 pe-lg-5">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUserGear} /> Usuário
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="#">
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      className="font-awesome-icon"
                    />
                    Login
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      className="font-awesome-icon"
                    />
                    Signup
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <div class="d-grid w-100">
                <button
                  type="button"
                  class="nav-link btn btn-success text-white border-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <FontAwesomeIcon icon={faCartPlus} /> Carrinho
                </button>
              </div>
            </li>
          </ul>
          <Modal dadosModal={dadosCarrinho} removerItem={removerProduto} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
