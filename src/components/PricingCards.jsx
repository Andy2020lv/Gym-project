import React from "react";

function PricingCards() {
  return (
    <div>
      <section id="pricing" class="colored-section">
        <h2 id="pricing-heading" class="section-heading">
          Cuotas
        </h2>
        <p className="pricing-par ">Cuotas</p>

        <div class="row">
          <div class="pricing-col col-lg-4 col-md-6">
            <div class="card">
              <div class="card-header">
                <h3>Semanal</h3>
              </div>
              <div class="card-body">
                <h2 class="price-text">$RD 150</h2>
                {/* <p></p> */}
                {/* <p>Unlimited App Ussage</p> */}
              </div>
            </div>
          </div>

          <div class="pricing-col col-lg-4 col-md-6">
            <div class="card">
              <div class="card-header">
                <h3>Quincenal</h3>
              </div>
              <div class="card-body">
                <h2 class="price-text">$RD 300</h2>
                {/* <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <p>Unlimited App Usage</p> */}
                {/* <button class="btn btn-lg btn-dark" type="button">
                  Sign Up
                </button> */}
              </div>
            </div>
          </div>

          <div class="pricing-col col-lg-4">
            <div class="card">
              <div class="card-header">
                <h3>Mensual</h3>
              </div>
              <div class="card-body">
                <h2 class="price-text">$RD 600</h2>
                {/* <p>Pirority Listing</p>
                <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <p>Unlimited App Usage</p>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingCards;
