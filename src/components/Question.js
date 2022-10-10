import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon } from "@heroicons/react/24/solid";

const Question = ({ data, index }) => {
  const { id, question, options, correctAnswer } = data;

  const notify = value => toast(`Your answer is ${value}`);
  const notifyTwo = value => toast(`Correct answer is ${value}`);

  const questionCheckHandler = answer => {
    if (answer === correctAnswer) {
      notify("correct");
    } else {
      notify("wrong");
    }
  };

  return (
    <div className="p-6 w-11/12 md:w-10/12 mx-auto shadow-xl rounded-lg my-12 border border-1 border-primary relative">
      <EyeIcon
        onClick={() => notifyTwo(correctAnswer)}
        className="h-7 w-7 text-primary hover:text-primary-focus absolute right-3 top-3 md:right-12 md:top-5 cursor-pointer"
      />
      <div className="w-9/12 mx-auto ">
        <h2 className="text-center text-xl font-semibold">
          Quiz {index + 1}: {question}
        </h2>
      </div>
      <div
        onChange={e => questionCheckHandler(e.target.value)}
        className=" my-3"
      >
        {options.map(option => (
          <div
            key={options.indexOf(option)}
            className="border border-l border-primary rounded-md p-5 cursor-pointer hover:bg-base-200 my-2 text-center"
          >
            <input
              type="radio"
              value={option}
              name={id}
              className="cursor-pointer "
            />{" "}
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
