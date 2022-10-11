import React from "react";

const Blog = () => {
  return (
    <div className="p-12 min-h-screen md:min-h-[80vh] w-full">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  aspernatur quae, eos explicabo odit minima libero veniam
                  similique quibusdam doloribus facilis ipsa accusantium vel
                  maiores corrupti! Libero voluptate a doloribus?
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                3. What is the use of useReff?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates aspernatur dolores in consequatur doloremque
                  inventore reprehenderit, consequuntur perspiciatis architecto.
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
