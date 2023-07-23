import React from "react";
import { useSelector } from "react-redux";
const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const isDark = useSelector((store) => store.theme.isDark);
  return (
    <div
      className={`p-2 m-2 sm:w-72 w-full sm:h-80 h-auto shadow-lg rounded-lg transition duration-500 ease-in-out hover:scale-105
    ${
      isDark
        ? "bg-black text-white shadow-slate-800"
        : "bg-white text-black shadow-slate-400"
    }`}
    >
      <img
        className="rounded-lg w-full h-60% sm:h-auto sm:w-auto"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />

      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>
          {parseFloat((statistics.viewCount / 1000000).toFixed(1))}M Views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
