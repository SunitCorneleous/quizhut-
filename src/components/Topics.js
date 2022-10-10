import React, { useContext } from "react";
import { QuizContext } from "../App";
import Topic from "./Topic";

const Topics = () => {
  const topics = useContext(QuizContext);

  return (
    <div className="py-12">
      <div className="w-10/12 grid md:grid-cols-2 mx-auto gap-3 md:gap-6">
        {topics.map(topic => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
