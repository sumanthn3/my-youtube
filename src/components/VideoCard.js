import React from "react";

const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>
          {parseFloat((statistics.viewCount / 1000000).toFixed(1))}M Views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
