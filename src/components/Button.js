import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Button = ({ name }) => {
  const isDark = useSelector((store) => store.theme.isDark);
  return (
    <div>
      <Link to={"/searchresults?search_query=" + name}>
        <div>
          <button
            className={`rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3 ${
              isDark ? "bg-gray-500 text-white" : "bg-slate-100 text-black"
            }`}
          >
            {name}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Button;
