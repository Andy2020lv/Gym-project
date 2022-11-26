import React from "react";
import InfoCard from "./InfoCard";

function HomeBody() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <img
        className="home-img"
        src="https://i.ytimg.com/vi/sOtV44B0pXQ/hqdefault.jpg"
        alt="home"
      ></img>
      <InfoCard />
    </div>
  );
}
export default HomeBody;
