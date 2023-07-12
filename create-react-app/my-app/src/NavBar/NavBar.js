import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            Loja
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Início
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Produtos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
