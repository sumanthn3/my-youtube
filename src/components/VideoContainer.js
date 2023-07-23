import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  };
  const isDark = useSelector((store) => store.theme.isDark);
  //conditional rendering
  if (videos && !videos.length) {
    return <Shimmer />;
  }

  return (
    <div
      className={`flex flex-wrap justify-around ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {videos &&
        videos.map((video, idx) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            {" "}
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
