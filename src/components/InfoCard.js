import React from "react";

export default function InfoCard(props) {
  return (
    <div class="card col-lg-4 col-md-6 col-sm-12" style={{ width: "18rem" }}>
      <img src={props.img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <p class="card-text">{props.text}</p>
      </div>
    </div>
  );
}
