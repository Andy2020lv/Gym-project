import React from "react";

function InfoCard(props) {
  return (
    <div className="container-fluid colored-section cards-div">
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
