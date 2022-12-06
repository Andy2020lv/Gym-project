import React from "react";
import Info from "./Info";
import InfoCard from "./InfoCard";
import ProgressCards from "./ProgressCards";
import Progress from "./Progress";
import progressData from "./ProgressData";
import Trainers from "./Trainers";
import PricingCards from "./PricingCards";
import CardData from "./InfoCardData";
import comunidad from "./images/comunidad.jpg";
import machines from "./images/machines.jpg";
import cambio from "./images/cambio.jpg";

function HomeBody() {
  // const InfoCard = CardData.map(function (x) {
  //   return <InfoCard img={x.data[0]} text={x.data[0]} />;
  // });

  const infoElements = CardData.map((element) => (
    <InfoCard img={element.img} text={element.text} />
  ));

  const progressElements = progressData.map((element) => (
    <ProgressCards img={element.img} text={element.text} />
  ));
  return (
    <div>
      {/* <Info
        img1={machines}
        text1={CardData.data[0].text}
        img2={comunidad}
        text2={CardData.data[1].text}
        img3={cambio}
        text3={CardData.data[2].text}
      /> */}
      <Info child={infoElements} />
      <Progress child={progressElements} />
      <Trainers />
      <PricingCards />
    </div>
  );
}

export default HomeBody;
