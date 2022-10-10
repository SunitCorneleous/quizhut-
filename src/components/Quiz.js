import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Quiz = () => {
  const quiz = useLoaderData();

  const { name, questions } = quiz.data;
  return (
    <div className="py-12 text-primary-content">
      <h1 className="text-center text-5xl font-semibold">Quiz of {name}</h1>
      <div className="w-10/12 mx-auto">
        {questions.map(question => (
          <Question
            key={question.id}
            data={question}
            index={questions.indexOf(question)}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
