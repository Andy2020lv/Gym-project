import React from "react";
import Title from "./Title";
import InfoCard from "./InfoCard";

// function HomeBody() {
//   return (
//     <div style={{ backgroundColor: "black" }}>
//       <img
//         className="home-img"
//         src="https://i.ytimg.com/vi/sOtV44B0pXQ/hqdefault.jpg"
//         alt="home"
//       ></img>
//       <InfoCard />
//     </div>
//   );
// }

function HomeBody() {
  return (
    <div className="black-section">
      <Title /> <InfoCard />
    </div>
  );
}
export default HomeBody;
