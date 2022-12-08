import React from "react";

export default function InfoCard(props) {
  return (
    <div
      className="card col-lg-4 col-md-6 col-sm-12"
      style={{ width: "18rem" }}
    >
      <img src={props.img} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}
