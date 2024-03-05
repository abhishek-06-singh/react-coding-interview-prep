import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  console.log(location);
  const pathname = location.pathname.split("/").filter((x) => x);
  return (
    <div className="p-2 text-lg font-bold bg-indigo-900/10 rounded-r-full mt-5">
      <Link to="/">Home</Link>{" "}
      {pathname.map((name, index) => (
        <span key={name}>
          {" "}
          /{" "}
          <Link to={`/${pathname.slice(0, index + 1).join("/")}`}>{name}</Link>
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
