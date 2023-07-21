import React from "react";

const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 h-80 shadow-lg rounded-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-slate-400">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
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
