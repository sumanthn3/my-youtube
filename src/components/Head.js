import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import YouTube from "../Assets/yt.png";
// import { ImYoutube } from "react-icons/im";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_search_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
// import { useSelector } from "react-redux";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchQueries();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchQueries = async () => {
    const data = await fetch(YOUTUBE_search_API + searchQuery);
    const results = await data.json();
    console.log(results);
    setSuggestions(results[1]);
    dispatch(cacheResults({ [searchQuery]: results[1] }));
  };
  return (
    <div className="grid grid-flow-col p-3 mx-2 shadow-lg fixed top-0 bg-white w-full">
      <div className="flex col-span-1">
        <button onClick={() => toggleMenuHandler()}>
          <GiHamburgerMenu className="mx-2 text-2xl cursor-pointer" />
        </button>
        {/* <ImYoutube className="text-4xl text-red-600 my-1 ml-3" />
        <h1 className="font-bold text-2xl m-1">YouTube</h1> */}
        <img className="h-6 m-2" alt="youtube-logo" src={YouTube}></img>
      </div>
      <div className=" flex col-span-10 px-10">
        <input
          placeholder="Search"
          className="w-1/2 h-10 border-solid border-2 border-gray-300 rounded-l-full p-4"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        ></input>
        <div className="flex w-14 h-10 border-2 border-l-0 border-gray-300 rounded-r-full text-gray-400 items-center justify-center">
          <PiMagnifyingGlassBold className="text-2xl" />
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 mt-10 w-1/3 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <div className="flex " key={s}>
                  <PiMagnifyingGlassBold className="text-xl m-2 text-gray-400" />
                  <li className="py-2  hover:bg-gray-100 hover:rounded-md">
                    {s}
                  </li>
                </div>
              ))}
              {/* <li className="py-2 px-4 hover:bg-gray-100 hover:rounded-md">
              iphone 10
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 hover:rounded-md">
              iphone 11
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 hover:rounded-md">
              iphone 13
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 hover:rounded-md">
              iphone 12
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 hover:rounded-md">
              iphone 11
            </li> */}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 justify-end">
        <IoNotifications className="text-3xl m-2" />
        <button>
          <FaCircleUser className="text-3xl mx-2" />
        </button>
      </div>
    </div>
  );
};

export default Head;
