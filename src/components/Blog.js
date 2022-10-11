import React from "react";

const Blog = () => {
  return (
    <div className="py-12 min-h-screen md:min-h-[80vh] w-full text-center md:text-left">
      <section className="bg-base-100 text-primary-content">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Questions and answers
          </h2>
          <div className="flex flex-col text-2xl divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                1. What is the purpose of react-router?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The main purpose of react router is to enable full single page
                  application experience. In multi-page application or website,
                  we use anchor tag for navigation which send request to the
                  server for page we want to browse and then when it gets the
                  page from the server then the page get loaded. Which refresh
                  the whole page. In react app if we use anchor tag the page
                  gets refreshed which is not the single page application
                  experience. That’s why the react-router is used which enables
                  the full single application experience by re-rendering
                  different component without refreshing thorough routes.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                2. How does context api works?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  In react app prop drilling is used to pass data from parent
                  component to child component. But when there are too many
                  child components prop drilling gets hard to manage. Context
                  api is used to avoid the problems of prop drilling. Using
                  context api props are passed to child components without
                  drilling in each component. Simply declare a context using
                  useContext hook then pass the context using context.Provider.
                  Then the context can be used in the child components using
                  useContext hook.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                3. What is the use of useRef?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  useRef allows to persist values between renders. For example
                  if we try to count how many times our application renders
                  using the useState hook we will get caught in a infinite loop
                  because the hook itself causes a re-render. But if we use
                  useRef will not face this problem because it will not cause
                  re-render problem.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
