import React from "react";

function Footer() {
  return (
    <div className="black-section">
      <footer id="footer">
        <div className="container-fluid">
          <i className="fa-sharp fa-solid fa-dumbbell"></i>
          <p>
            {" "}
            <i className="fa-regular fa-address-card"></i> Contactanos al:{" "}
          </p>
          <p>
            Número: 809-264-9325 <i className="fa-sharp fa-solid fa-phone"></i>
          </p>
          <p>
            {/* Email: agym@gym.com <i className="fa-regular fa-envelope"></i> */}
          </p>
          <a href="https://www.google.com/maps/place/Star+Body+Fit/@19.3012791,-70.423182,20.51z/data=!4m5!3m4!1s0x8eae2b7602bf4d03:0xb9121fd62a96ac87!8m2!3d19.3013147!4d-70.4232327">
            Ubicación: Villa Tapia, Hermanas Mirabal{" "}
            <i className="fa-solid fa-location-dot"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
