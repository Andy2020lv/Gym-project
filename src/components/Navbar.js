import React from "react";
import Title from "./Title";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-warning">
        <a class="navbar-brand" href=".">
          Star Body Fit
        </a>

        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="#clientes">
              Clientes
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#trainers">
              Entrenadores
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pricing">
              Precios
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">
              Contactos
            </a>
          </li>
        </ul>
      </nav>
      <Title />
    </div>
  );
}

export default Navbar;
