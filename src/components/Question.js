import React from "react";

const Question = ({ data, index }) => {
  const { id, question, options, correctAnswer } = data;

  const questionCheckHandler = answer => {
    console.log(answer);
  };

  return (
    <div className="p-6 w-11/12 md:w-10/12 mx-auto shadow-xl rounded-lg my-12">
      <h2 className="text-center text-xl font-semibold">
        Quiz {index + 1}: {question}
      </h2>
      <div
        onChange={e => questionCheckHandler(e.target.value)}
        className="grid md:grid-cols-2 my-3 gap-2"
      >
        {options.map(option => (
          <div
            key={options.indexOf(option)}
            className="border border-l border-primary rounded-md p-5 cursor-pointer"
          >
            <input
              type="radio"
              value={option}
              name={id}
              className="cursor-pointer"
            />{" "}
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
