import React from "react-dom";

export default function ProgressCards(props) {
  return (
    <div class="card col-lg-4 col-md-6 col-sm-12" style={{ width: "18rem" }}>
      <img src={props.img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <p class="card-text">{props.text}</p>
      </div>
    </div>
  );
}
