import React from "react";
import BgBanner from "../BgBanner/BgBanner";

const Blog = () => {
  const title = "Question and Answer section";
  return (
    <div>
      <BgBanner title={title}></BgBanner>
      <h1>When should you use context API?</h1>

      <h3>
        Context API is used when some data needs to be accessible by many components at different nesting levels. If you only
        want to avoid passing some props through many component composition is often a simpler solution than should use
        context API.
      </h3>

      <h1>What is a custom hook? </h1>
      <h3>
        A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.
        Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook
        does not require a specific signature.
      </h3>

      <h1>What is useRef?</h1>
      <h3>
        useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference
        (aka ref). A reference is an object having a special property current .
      </h3>

      <h1>What is useMemo? </h1>
      <h3>
        useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful
        in optimizing the performance of a React component by eliminating repeating heavy computations.
      </h3>
    </div>
  );
};

export default Blog;
