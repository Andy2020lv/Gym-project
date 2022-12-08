import React from "react";
import Title from "./Title";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-warning">
        <a className="navbar-brand" href=".">
          Star Body Fit
        </a>

        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="#clientes">
              Clientes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#trainers">
              Entrenadores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              Precios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer">
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
