import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, selectDarkMode } from "./store/darkModeSlice";
const Blog = () => {
  const isDarkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        isDarkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="justify-center items-center text-center p-5 rounded-lg shadow-md bg-black/5 dark:bg-pink-400/10">
        <h1 className="text-4xl font-semibold text-center">
          Hello This is The Blog Page
        </h1>
        <p className="text-lg font-thin text-center text-pink-400">
          Welcome to the Blog page of the dark mode practice project.
        </p>
      </div>
    </div>
  );
};

export default Blog;
