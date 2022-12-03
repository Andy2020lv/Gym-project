import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <section className="black-section">
      <div className="over-section-container">
        <div className="over-section">
          <img src="https://th.bing.com/th/id/OIP.YUnlEQZXcI2-Ow6x7TtvJgHaFs?pid=ImgDet&rs=1"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <img src="https://th.bing.com/th/id/OIP.YUnlEQZXcI2-Ow6x7TtvJgHaFs?pid=ImgDet&rs=1"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
      <Navbar />
    </section>
  );
}

export default Header;
