import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function InfoCard(props) {
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
      <section id="cards">
        <div
          class="card col-lg-4 col-md-6 col-sm-12"
          style={{ width: "18rem" }}
        >
          <img src={props.img1} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">{props.text1}</p>
          </div>
        </div>
        <div
          class="card col-lg-4 col-md-6 col-sm-12"
          style={{ width: "18rem" }}
        >
          <img src={props.img2} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">{props.text2}</p>
          </div>
        </div>
        <div
          class="card col-lg-4 col-md-6 col-sm-12"
          style={{ width: "18rem" }}
        >
          <img src={props.img3} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">{props.text3}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoCard;
