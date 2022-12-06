import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Progress(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="clientes"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className="container-fluid diff-section cards-div"
    >
      <h1>Clientes</h1>
      <section className="row" id="cards">
        {props.child}
      </section>
    </div>
  );
}
