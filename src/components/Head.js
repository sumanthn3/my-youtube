import React, { useEffect, useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import YouTube from "../Assets/yt.png";
import YouTubeDark from "../Assets/youtube_logo_dark.jpg";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_search_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import profile from "../Assets/profile.jpeg";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { toggleTheme } from "../utils/themeSlice";

// import VideoCard from "./VideoCard";
// import { ImYoutube } from "react-icons/im";
// import { FaCircleUser } from "react-icons/fa6";
// import { IoNotifications } from "react-icons/io5";
// import { useSelector } from "react-redux";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const inputRef = useRef();
  const [isMobileHead, setIsMobileHead] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileHead(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
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
  const getSearchQueries = async () => {
    const data = await fetch(YOUTUBE_search_API + searchQuery);
    const results = await data.json();
    console.log(results);
    setSuggestions(results[1]);
    dispatch(cacheResults({ [searchQuery]: results[1] }));
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const themeHandler = () => {
    dispatch(toggleTheme());
  };
  const isDark = useSelector((store) => store.theme.isDark);
  useEffect(() => {
    console.log(isDark);
  }, [isDark]);
  return (
    <div
      className={`grid grid-flow-col p-3 shadow-lg fixed top-0 w-full ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="flex sm:col-span-1 col-span-3">
        {!isMobileHead && (
          <button onClick={() => toggleMenuHandler()}>
            <GiHamburgerMenu
              className={`mx-2 text-2xl cursor-pointer ${
                isDark ? "text-white" : "text-black"
              }`}
            />
          </button>
        )}
        {/* <ImYoutube className="text-4xl text-red-600 my-1 ml-3" />
        <h1 className="font-bold text-2xl m-1">YouTube</h1> */}
        {isDark ? (
          <Link to={"/"}>
            <img className="h-6 m-2" alt="youtube-logo" src={YouTubeDark}></img>
          </Link>
        ) : (
          <Link to={"/"}>
            <img className="h-6 m-2" alt="youtube-logo" src={YouTube}></img>
          </Link>
        )}
      </div>
      <div className="flex sm:col-span-10 col-span-7 sm:px-10 justify-center">
        <input
          placeholder="Search"
          ref={inputRef}
          className={`w-1/2 h-10 border-solid border-2 border-gray-300 rounded-l-full p-4 ${
            isDark ? "bg-black text-white" : "bg-white text-black"
          }`}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        ></input>
        <Link to={`/searchresults?search_query=${searchQuery}`}>
          <div className="flex w-14 h-10 border-2 border-l-0 border-gray-300 rounded-r-full text-gray-400 items-center justify-center">
            <PiMagnifyingGlassBold className="text-2xl" />
          </div>
        </Link>
        {showSuggestions && (
          <div
            className={`fixed py-2 mt-10 w-1/3 shadow-lg rounded-lg border ${
              isDark
                ? "bg-black border-gray-500 text-white"
                : "bg-white border-gray-100 text-black"
            }`}
          >
            {suggestions.map((s, idx) => (
              <Link
                className={`flex rounded-full ${
                  isDark ? "hover:bg-gray-400 " : "hover:bg-gray-100"
                }`}
                key={s}
                to={`/searchresults?search_query=${s}`}
              >
                <PiMagnifyingGlassBold
                  className={`text-xl m-2 ${
                    isDark ? "text-gray-100" : "text-gray-400"
                  }`}
                />
                <p className="flex p-1 px-2">{s}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex sm:col-span-1 col-span-2 justify-end">
        {/* <IoNotifications className="text-3xl m-2" /> */}

        {isDark ? (
          <button
            className="border-2 rounded-full "
            onClick={() => themeHandler()}
          >
            <MdLightMode className="mx-2 text-2xl cursor-pointer text-white" />
          </button>
        ) : (
          <button
            className="border-2 rounded-full "
            onClick={() => themeHandler()}
          >
            <MdDarkMode className="mx-2 text-2xl cursor-pointer" />
          </button>
        )}

        <button>
          {/* <FaCircleUser className="text-3xl mx-2" /> */}
          <img className="h-10 mx-2" alt="youtube-logo" src={profile}></img>
        </button>
      </div>
    </div>
  );
};

export default Head;
