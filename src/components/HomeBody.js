import React from "react";
import InfoCard from "./InfoCard";
import Trainers from "./Trainers";
import PricingCards from "./PricingCards";
import CardData from "./InfoCardData";
import comunidad from "./images/comunidad.jpg";

function HomeBody() {
  console.log(CardData.data[0]);
  // const InfoCard = CardData.map(function (x) {
  //   return <InfoCard img={x.data[0]} text={x.data[0]} />;
  // });
  return (
    <div>
      <InfoCard
        img1={CardData.data[0].img}
        text1={CardData.data[0].text}
        img2={comunidad}
        text2={CardData.data[1].text}
        img3={CardData.data[2].img}
        text3={CardData.data[2].text}
      />
      <Trainers />
      <PricingCards />
    </div>
  );
}

export default HomeBody;
