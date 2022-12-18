import React, { useEffect } from "react";
import andy from "./images/andy.jpg";
import elGuardia from "./images/elGuardia.jpg";
import starlyn2 from "./images/starlyn2.jpg";
import ricardo from "./images/ricardo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Trainers() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      id="trainers"
      className="black-section"
    >
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid">
            <h2 className="testimonial-text">Andy</h2>
            <img className="testimonial-img" src={andy} alt="dog-profile"></img>
            <em>Andy Hernandez. Entrenador personal</em>
          </div>

          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">Ricardo</h2>
            <img
              className="testimonial-img"
              src={ricardo}
              alt="lady-profile"
            ></img>
            <em>Ricardo Ventura. Entrenador de piso y personal.</em>
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">Chunito</h2>
            <img
              className="testimonial-img"
              src={starlyn2}
              alt="lady-profile"
            ></img>
            <em>Starlyn Toribio. Entrenador de piso y personal</em>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
