import React from "react";
import { useSelector } from "react-redux";
import {
  GrHomeRounded,
  GrDocumentVideo,
  GrStackOverflow,
  GrResume,
  GrHistory,
  GrMusic,
} from "react-icons/gr";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? (
    <div className="p-2 shadow-lg w-20">
      <Link to="/">
        <li className="flex flex-col justify-center items-center w-16 p-2 list-none hover:bg-gray-100 hover:rounded-md">
          <GrHomeRounded className="text-xl" />
          <p className="py-2 text-xs">Home</p>
        </li>
      </Link>
      <li className="flex flex-col justify-center items-center w-16 p-2 list-none hover:bg-gray-100 hover:rounded-md">
        <GrDocumentVideo className="text-xl" />
        <p className="py-2 text-xs">Shorts</p>
      </li>
      <li className="flex flex-col justify-center items-center w-16 p-2 list-none hover:bg-gray-100 hover:rounded-md">
        <GrStackOverflow className="text-xl" />
        <p className="py-2 text-xs">Subscriptions</p>
      </li>
      <li className="flex flex-col justify-center items-center w-16 p-2 list-none hover:bg-gray-100 hover:rounded-md">
        <GrResume className="text-xl" />
        <p className="py-2 text-xs">Library</p>
      </li>
    </div>
  ) : (
    <div className="p-5 shadow-lg w-60">
      <ul>
        <Link to="/">
          <li className="flex p-3 hover:bg-gray-100 hover:rounded-md">
            <GrHomeRounded className="text-xl" />
            <p className="px-2">Home</p>
          </li>
        </Link>
        <li className="flex p-3 hover:bg-gray-100 hover:rounded-md">
          <GrDocumentVideo className="text-xl" />
          <p className="px-2">Shorts</p>
        </li>

        <li className="flex p-3 hover:bg-gray-100 hover:rounded-md">
          <GrStackOverflow className="text-xl" />
          <p className="px-2">Subscriptions</p>
        </li>

        <li className="flex p-3 hover:bg-gray-100 hover:rounded-md">
          <GrResume className="text-xl" />
          <p className="px-2">Library</p>
        </li>
        <li className="flex p-3 hover:bg-gray-100 hover:rounded-md">
          <GrHistory className="text-xl" />
          <p className="px-2">History</p>
        </li>
      </ul>
      <h1 className="pt-5 font-bold">Subscriptions</h1>
      <li className="flex p-3 hover:bg-gray-100 hover:rounded-md">
        <GrResume className="text-xl" />
        <p className="px-2">Channel</p>
      </li>
      <h1 className="pt-5 font-bold">Explore</h1>
      <li className="flex p-3 hover:bg-gray-100 hover:rounded-md">
        <GrResume className="text-xl" />
        <p className="px-2">Trending</p>
      </li>
      <li className="flex p-3 hover:bg-gray-100 hover:rounded-md">
        <GrMusic className="text-xl" />
        <p className="px-2">Music</p>
      </li>
    </div>
  );
};

export default SideBar;
