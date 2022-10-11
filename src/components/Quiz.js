import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ResultContext } from "../App";
import Question from "./Question";

const Quiz = () => {
  const quiz = useLoaderData();
  const { result } = useContext(ResultContext);

  const { name, questions } = quiz.data;
  return (
    <div className="py-12 text-primary-content relative">
      <h1 className="text-center text-5xl font-semibold mt-6">
        Quiz of {name}
      </h1>
      <div className="bg-base-200 rounded-lg flex md:flex-col absolute right-[20px] top-[17px] md:top-[50px] p-3 border border-primary">
        <p className="mr-2 md:mr-0 text-lg font-semibold">
          right: <span className="text-green-700">{result.right}</span>
        </p>
        <p className="text-lg font-semibold">
          wrong: <span className="text-red-700">{result.wrong}</span>
        </p>
      </div>
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
