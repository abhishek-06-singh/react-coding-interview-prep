import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const Home = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => {
        if (value >= 100) {
          clearInterval(interval);
          return 100;
        } else {
          return value + 1;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gray-950 h-screen  flex  py-20 flex-col items-center gap-y-10">
      <h1 className="text-5xl font-bold text-amber-600">
        Progress Bar <span className="text-amber-600 animate-pulse">...</span>
      </h1>
      <ProgressBar value={value} />
    </div>
  );
};

export default Home;
