import React from "react";
import Title from "./Title";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
        <a class="navbar-brand" href=".">
          A Gym
        </a>

        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="#footer">
              Contactos
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
        </ul>
      </nav>
      <Title />
    </div>
  );
}

export default Navbar;
