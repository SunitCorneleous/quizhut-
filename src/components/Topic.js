import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <div className="flex rounded-md bg-base-300 shadow-xl">
      <img src={logo} className="w-2/4" alt="Movie" />

      <div className="flex flex-col justify-center items-center w-full">
        <h2 className="text-3xl mb-6">{name}</h2>
        <Link to={`/${id}`} className="btn btn-primary">
          Take Quiz
        </Link>
      </div>
    </div>
  );
};

export default Topic;
