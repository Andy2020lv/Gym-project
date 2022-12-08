import React from "react";
import Navbar from "./Navbar";
import starlyn from "./images/starlyn.jpg";

function Header() {
  return (
    <section className="black-section">
      <div className="over-section-container">
        <div className="over-section">
          <img alt="" src={starlyn}></img>
          <p>Lider de Star Body Fit</p>
        </div>
      </div>
      <Navbar />
    </section>
  );
}

export default Header;
