import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBoxesStacked,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import logoNav from "../assets/logo-manto-raiz.png";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-dark py-3" data-bs-theme="dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src={logoNav}
              alt="Logo Manto Raíz"
              width="100"
              height="100"
              class="d-inline-block align-text"
            />
            Manto Raíz
          </a>
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
                <a class="nav-link" href="#">
                  <FontAwesomeIcon icon={faHouse} style={{ marginRight: 8 }} />{" "}
                  Início
                </a>
              </li>
              <li class="nav-item pe-5">
                <a class="nav-link active" href="#" aria-current="page">
                  <FontAwesomeIcon
                    icon={faBoxesStacked}
                    style={{ marginRight: 8 }}
                  />
                  Produtos
                </a>
              </li>
              <li class="nav-item pe-5">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    style={{ marginRight: 8 }}
                  />
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ marginRight: 8 }}
                  />
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
