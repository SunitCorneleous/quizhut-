import React from "react";

const HeroHeader = () => {
  return (
    <header className="hero py-12 bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse w-10/12">
        <img
          src="https://i.ibb.co/Z1ptvNP/absolutvision-82-Tp-Eld0-e4-unsplash.jpg"
          className="md:w-2/4 rounded-lg shadow-2xl"
          alt="hero"
        />
        <div>
          <h1 className="md:text-5xl font-bold">
            Take quick quizzes for brainstorming!
          </h1>
          <p className="py-6 md:text-lg">
            We provide quizzes on different programming topics, which helps you
            to brainstorm any time any moment any where!
            <br />
            Get started now to find out more about the quizzes and have fun with
            learning.
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
