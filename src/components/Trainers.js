import React from "react";
import andy from "./images/andy.jpg";
import elGuardia from "./images/elGuardia.jpg";
import starlyn2 from "./images/starlyn2.jpg";

export default function Trainers() {
  return (
    <section id="trainers" className="black-section">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active container-fluid">
            <h2 class="testimonial-text">Andy</h2>
            <img class="testimonial-img" src={andy} alt="dog-profile"></img>
            <em>Andy Hernandez. Entrenador personal</em>
          </div>

          <div class="carousel-item container-fluid">
            <h2 class="testimonial-text">El Guardia</h2>
            <img
              class="testimonial-img"
              src={elGuardia}
              alt="lady-profile"
            ></img>
            <em>Eloy Sosa. Entrenador personal</em>
          </div>
          <div class="carousel-item container-fluid">
            <h2 class="testimonial-text">Ricardo</h2>
            <img
              class="testimonial-img"
              src="https://th.bing.com/th/id/OIP.Cd4BJv21oAq3NWXAbM4DlwHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7"
              alt="lady-profile"
            ></img>
            <em>Beverly, Illinois</em>
          </div>
          <div class="carousel-item container-fluid">
            <h2 class="testimonial-text">Chunito</h2>
            <img
              class="testimonial-img"
              src={starlyn2}
              alt="lady-profile"
            ></img>
            <em>Starlyn Toribio</em>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

//               src="https://th.bing.com/th/id/OIP.Cd4BJv21oAq3NWXAbM4DlwHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7"
