import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";

export const QuizContext = createContext([]);
export const ResultContext = createContext({});

function App() {
  const [topic, setTopics] = useState([]);

  const [result, setResult] = useState({
    right: 0,
    wrong: 0,
  });

  const resultHandler = value => {
    for (const id in value) {
      if (id === "right") {
        setResult({ right: result.right + value[id], wrong: result.wrong });
      } else {
        setResult({ right: result.right, wrong: result.wrong + value[id] });
      }
    }
  };

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then(res => res.json())
      .then(data => setTopics(data.data));
  }, []);

  return (
    <>
      <ResultContext.Provider value={{ resultHandler, result }}>
        <QuizContext.Provider value={topic}>
          <RouterProvider router={router}></RouterProvider>
        </QuizContext.Provider>
      </ResultContext.Provider>
    </>
  );
}

export default App;
