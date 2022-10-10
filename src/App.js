import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";

export const QuizContext = createContext([]);

function App() {
  const [topic, setTopics] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then(res => res.json())
      .then(data => setTopics(data.data));
  }, []);

  return (
    <>
      <QuizContext.Provider value={topic}>
        <RouterProvider router={router}></RouterProvider>
      </QuizContext.Provider>
    </>
  );
}

export default App;
