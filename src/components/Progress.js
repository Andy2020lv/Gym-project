import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Progress(props) {
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
      <h1>Clientes</h1>
      <section className="row" id="cards">
        {props.child}
      </section>
    </div>
  );
}

{
  /* <div
data-aos="fade-zoom-in"
data-aos-offset="200"
data-aos-easing="ease-in-sine"
data-aos-duration="600"
className="container-fluid colored-section cards-div"
>
<h1>Clientes</h1>

<section className="row" id="cards">
  <div
    class="card col-lg-4 col-md-6 col-sm-12"
    style={{ width: "18rem" }}
  >
    <img
      src="https://th.bing.com/th/id/OIP.YUnlEQZXcI2-Ow6x7TtvJgHaFs?pid=ImgDet&rs=1"
      class="card-img-top"
      alt="..."
    ></img>
    <div class="card-body">
      <p class="card-text">{props.text}</p>
    </div>
  </div>
</section>
</div> */
}
