import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-2 mx-2 h-8 text-sm bg-gray-200 rounded-md">
        {name}
      </button>
    </div>
  );
};

export default Button;
