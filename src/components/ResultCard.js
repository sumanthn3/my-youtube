import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ResultCard = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const isDark = useSelector((store) => store.theme.isDark);
  console.log(data);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (!data) return null;
  // console.log(data)

  const { snippet, id } = data;
  return isMobile ? (
    <Link to={`/watch?v=${id.videoId}`}>
      <div
        className={`p-2 m-2 w-72 h-80 shadow-lg rounded-lg transition duration-500 ease-in-out hover:scale-105 ${
          isDark ? "shadow-slate-800" : "shadow-slate-400"
        } `}
      >
        <img
          className="rounded-lg"
          src={snippet?.thumbnails?.medium?.url}
          alt="thumbnail"
        />
        <ul>
          <li className="font-bold">{snippet?.title}</li>
          <li>{snippet?.channelTitle}</li>
          <li>
            {/* {parseFloat((statistics.viewCount / 1000000).toFixed(1))}M Views */}
          </li>
        </ul>
      </div>
    </Link>
  ) : (
    <Link to={`/watch?v=${id.videoId}`}>
      <div className="flex ml-[5%] w-[100%] scroll-smooth mt-4 justify-around my-2 p-2 rounded-lg shadow-xl transition duration-400 ease-in-out hover:scale-[1.02] hover:shadow-slate-400 ">
        <img
          className="sm:h-44 sm:w-96 sm:mt-0 mt-20 h-20 w-25 shadow-lg rounded-lg"
          src={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
        />
        <div className="w-2/3 mx-4 ">
          <p className="text-xl font-bold mb-2 ">{snippet?.title}</p>
          <p className="text-md font-bold mb-2">{snippet?.channelTitle}</p>
          <p className="text-sm ">{snippet?.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
