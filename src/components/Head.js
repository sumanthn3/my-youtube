import React, { useEffect, useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import YouTube from "../Assets/yt.png";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_search_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import profile from "../Assets/profile.jpeg";
import { Link } from "react-router-dom";
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
    <div className="grid grid-flow-col p-3 shadow-lg fixed top-0 bg-white w-full">
      <div className="flex sm:col-span-1 col-span-3">
        {!isMobileHead && (
          <button onClick={() => toggleMenuHandler()}>
            <GiHamburgerMenu className="mx-2 text-2xl cursor-pointer" />
          </button>
        )}
        {/* <ImYoutube className="text-4xl text-red-600 my-1 ml-3" />
        <h1 className="font-bold text-2xl m-1">YouTube</h1> */}
        <Link to={"/"}>
          <img className="h-6 m-2" alt="youtube-logo" src={YouTube}></img>
        </Link>
      </div>
      <div className="flex sm:col-span-10 col-span-7 sm:px-10 justify-center">
        <input
          placeholder="Search"
          ref={inputRef}
          className="w-1/2 h-10 border-solid border-2 border-gray-300 rounded-l-full p-4"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        ></input>
        <Link to={`/searchresults?search_query=${searchQuery}`}>
          <div className="flex w-14 h-10 border-2 border-l-0 border-gray-300 rounded-r-full text-gray-400 items-center justify-center">
            <PiMagnifyingGlassBold className="text-2xl" />
          </div>
        </Link>
        {showSuggestions && (
          <div className="fixed bg-white py-2 mt-10 w-1/3 shadow-lg rounded-lg border border-gray-100">
            {suggestions.map((s, idx) => (
              <Link
                className="flex hover:bg-gray-400 rounded-full"
                key={s}
                to={`/searchresults?search_query=${s}`}
              >
                <PiMagnifyingGlassBold className="text-xl m-2 text-gray-400" />
                <p className="flex p-1 px-2">{s}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex sm:col-span-1 col-span-2 justify-end">
        {/* <IoNotifications className="text-3xl m-2" /> */}
        <button>
          {/* <FaCircleUser className="text-3xl mx-2" /> */}
          <img className="h-10" alt="youtube-logo" src={profile}></img>
        </button>
      </div>
    </div>
  );
};

export default Head;
