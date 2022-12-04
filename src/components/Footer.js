import React from "react";

function Footer() {
  return (
    <div className="black-section">
      <footer id="footer">
        <div className="container-fluid">
          <p className="footer-text">© Copyright A Gym</p>
          <i class="fa-sharp fa-solid fa-dumbbell"></i>
          <p>
            {" "}
            <i class="fa-regular fa-address-card"></i> Contact us at:{" "}
          </p>
          <p>
            Number: 809-223-5642 <i class="fa-sharp fa-solid fa-phone"></i>
          </p>
          <p>
            Email: agym@gym.com <i class="fa-regular fa-envelope"></i>
          </p>
          <a href="https://www.google.com/maps/place/Star+Body+Fit/@19.3012791,-70.423182,20.51z/data=!4m5!3m4!1s0x8eae2b7602bf4d03:0xb9121fd62a96ac87!8m2!3d19.3013147!4d-70.4232327">
            Location: Villa Tapie, Dominican Republic{" "}
            <i class="fa-solid fa-location-dot"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
