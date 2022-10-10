import React, { useContext } from "react";
import { QuizContext } from "../App";
import HeroHeader from "./HeroHeader";

const Home = () => {
  const topics = useContext(QuizContext);
  console.log(topics);
  return (
    <div>
      <HeroHeader></HeroHeader>
    </div>
  );
};

export default Home;
