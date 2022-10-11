import React, { useContext } from "react";
import { QuizContext } from "../App";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const data = useContext(QuizContext);

  return (
    <div className="py-12 w-full md:w-10/12 mx-auto flex flex-col justify-center items-center min-h-screen md:min-h-[80vh]">
      <div className="mb-4">
        <h2 className="text-center my-4 text-3xl font-semibold mb-8 px-1">
          Total quizzes for each topic
        </h2>
        <LineChart width={350} height={200} data={data}>
          <Line type="monotone" dataKey="total" stroke="#FE5E41" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
