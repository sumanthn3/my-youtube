import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  return (
    <div>
      <Link to={"/searchresults?search_query=" + name}>
        <div>
          <button className="bg-slate-100 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            {name}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Button;
