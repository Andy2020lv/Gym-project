import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Info(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className="container-fluid colored-section cards-div"
    >
      <section id="cards">{props.child}</section>
    </div>
  );
}
