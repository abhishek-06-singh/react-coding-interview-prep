import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, selectDarkMode } from "./store/darkModeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectDarkMode);

  const toggleMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav
      className={`flex px-20 py-5 justify-center items-center text-center ${
        isDarkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex gap-5">
        <Link to="/"> Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <button onClick={toggleMode} className="text-3xl ml-auto">
        {isDarkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
      </button>
    </nav>
  );
};

export default Navbar;
