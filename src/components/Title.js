import React from "react";
import starGym from "./images/starGym.jpg";

function Title() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h1 className="big-heading">Star Gym</h1>
      </div>
      <div className="col col-lg-6">
        <img src={starGym} alt="home" width={"70%"} className="home-img"></img>
      </div>
    </div>
  );
}

export default Title;
