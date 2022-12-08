import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function PricingCards() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <section id="pricing" className="colored-section">
        <h2 id="pricing-heading" className="section-heading">
          Cuotas
        </h2>
        <p className="pricing-par ">Nos adaptamos a tus necesidades.</p>

        <div className="row">
          <div className="pricing-col col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Semanal</h3>
              </div>
              <div className="card-body">
                <h2 className="price-text">$RD 200</h2>
              </div>
            </div>
          </div>

          <div className="pricing-col col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Quincenal</h3>
              </div>
              <div className="card-body">
                <h2 className="price-text">$RD 300</h2>
              </div>
            </div>
          </div>

          <div className="pricing-col col-lg-4">
            <div className="card">
              <div className="card-header">
                <h3>Mensual</h3>
              </div>
              <div className="card-body">
                <h2 className="price-text">$RD 600</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingCards;
