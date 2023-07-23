import React from "react";
import { useSelector } from "react-redux";

import {
  GoHome,
  GoPlay,
  GoStack,
  GoVideo,
  GoHistory,
  GoFileMedia,
  GoRocket,
} from "react-icons/go";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDark = useSelector((store) => store.theme.isDark);
  return !isMenuOpen ? (
    <div
      className={`h-[100vh] p-2 shadow-lg w-20 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <Link to="/">
        <li
          className={`flex flex-col justify-center items-center w-16 p-2 list-none hover:rounded-md ${
            isDark
              ? "text-white hover:bg-gray-600"
              : "text-black hover:bg-gray-100 "
          }`}
        >
          <GoHome
            className={`text-xl ${isDark ? "text-white" : "text-black"}`}
          />
          <p className="py-2 text-xs">Home</p>
        </li>
      </Link>
      <li
        className={`flex flex-col justify-center items-center w-16 p-2 list-none hover:rounded-md ${
          isDark
            ? "text-white hover:bg-gray-600"
            : "text-black hover:bg-gray-100"
        }`}
      >
        <GoVideo
          className={`text-xl ${isDark ? "text-white" : "text-black"}`}
        />
        <p className="py-2 text-xs">Shorts</p>
      </li>
      <li
        className={`flex flex-col justify-center items-center w-16 p-2 list-none hover:rounded-md ${
          isDark
            ? "text-white hover:bg-gray-600"
            : "text-black hover:bg-gray-100 "
        }`}
      >
        <GoStack
          className={`text-xl ${isDark ? "text-white" : "text-black"}`}
        />
        <p className="py-2 text-xs">Subscriptions</p>
      </li>
      <li
        className={`flex flex-col justify-center items-center w-16 p-2 list-none hover:rounded-md ${
          isDark
            ? "text-white hover:bg-gray-600"
            : "text-black hover:bg-gray-100 "
        }`}
      >
        <GoPlay className={`text-xl ${isDark ? "text-white" : "text-black"}`} />
        <p className="py-2 text-xs">Library</p>
      </li>
    </div>
  ) : (
    <div
      className={`p-5 h-[100vh] shadow-lg w-60 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <ul>
        <Link to="/">
          <li
            className={`flex p-3 hover:rounded-md ${
              isDark
                ? "text-white hover:bg-gray-600"
                : "text-black hover:bg-gray-100 "
            }`}
          >
            <GoHome
              className={`text-xl ${isDark ? "text-white" : "text-black"}`}
            />
            <p className="px-2">Home</p>
          </li>
        </Link>
        <li
          className={`flex p-3 hover:rounded-md ${
            isDark
              ? "text-white hover:bg-gray-600"
              : "text-black hover:bg-gray-100 "
          }`}
        >
          <GoVideo
            className={`text-xl ${isDark ? "text-white" : "text-black"}`}
          />
          <p className="px-2">Shorts</p>
        </li>

        <li
          className={`flex p-3 hover:rounded-md ${
            isDark
              ? "text-white hover:bg-gray-600"
              : "text-black hover:bg-gray-100 "
          }`}
        >
          <GoStack
            className={`text-xl ${isDark ? "text-white" : "text-black"}`}
          />
          <p className="px-2">Subscriptions</p>
        </li>

        <li
          className={`flex p-3 hover:rounded-md ${
            isDark
              ? "text-white hover:bg-gray-600"
              : "text-black hover:bg-gray-100 "
          }`}
        >
          <GoPlay
            className={`text-xl ${isDark ? "text-white" : "text-black"}`}
          />
          <p className="px-2">Library</p>
        </li>
        <li
          className={`flex p-3 hover:rounded-md ${
            isDark
              ? "text-white hover:bg-gray-600"
              : "text-black hover:bg-gray-100 "
          }`}
        >
          <GoHistory className="text-xl" />
          <p className="px-2">History</p>
        </li>
      </ul>
      <h1 className={`pt-5 font-bold ${isDark ? "text-white" : "text-black"}`}>
        Subscriptions
      </h1>
      <li
        className={`flex p-3 hover:rounded-md ${
          isDark
            ? "text-white hover:bg-gray-600"
            : "text-black hover:bg-gray-100 "
        }`}
      >
        <GoFileMedia className="text-xl" />
        <p className="px-2">Channel</p>
      </li>
      <h1 className={`pt-5 font-bold ${isDark ? "text-white" : "text-black"}`}>
        Explore
      </h1>
      <li
        className={`flex p-3 hover:rounded-md ${
          isDark
            ? "text-white hover:bg-gray-600"
            : "text-black hover:bg-gray-100 "
        }`}
      >
        <GoRocket className="text-xl" />
        <p className="px-2">Trending</p>
      </li>
      <li
        className={`flex p-3 hover:rounded-md ${
          isDark
            ? "text-white hover:bg-gray-600"
            : "text-black hover:bg-gray-100 "
        }`}
      >
        <GoPlay className="text-xl" />
        <p className="px-2">Music</p>
      </li>
    </div>
  );
};

export default SideBar;
