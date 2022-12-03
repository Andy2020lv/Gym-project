import React from "react";
import InfoCard from "./InfoCard";
import PricingCards from "./PricingCards";
import CardData from "./InfoCardData";

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
        img2={CardData.data[1].img}
        text2={CardData.data[1].text}
        img3={CardData.data[2].img}
        text3={CardData.data[2].text}
      />
      <PricingCards />
    </div>
  );
}

export default HomeBody;
