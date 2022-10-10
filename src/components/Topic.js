import React from "react";

const Topic = ({ topic }) => {
  const { name, logo } = topic;
  return (
    <div className="flex rounded-md bg-base-300 shadow-xl">
      <img src={logo} className="w-2/4" alt="Movie" />

      <div className="flex flex-col justify-center items-center w-full">
        <h2 className="text-3xl mb-6">{name}</h2>
        <button className="btn btn-primary">Take Quiz</button>
      </div>
    </div>
  );
};

export default Topic;
