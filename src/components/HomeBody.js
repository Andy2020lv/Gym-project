import React from "react";
import Info from "./Info";
import InfoCard from "./InfoCard";
import ProgressCards from "./ProgressCards";
import Progress from "./Progress";
import progressData from "./ProgressData";
import Trainers from "./Trainers";
import PricingCards from "./PricingCards";
import CardData from "./InfoCardData";
import { nanoid } from "nanoid";

function HomeBody() {
  const infoElements = CardData.map((element) => (
    <InfoCard key={nanoid()} img={element.img} text={element.text} />
  ));

  const progressElements = progressData.map((element) => (
    <ProgressCards key={nanoid()} img={element.img} text={element.text} />
  ));
  return (
    <div>
      <Info child={infoElements} />
      <Progress child={progressElements} />
      <Trainers />
      <PricingCards />
    </div>
  );
}

export default HomeBody;
