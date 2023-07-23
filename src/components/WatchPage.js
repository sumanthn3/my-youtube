import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
// import CommentsContainer from "./CommentsContainer";
// import LiveChat from "./LiveChat";
import Comments from "./Comments";
import {
  prettifyNumber,
  publishedAt as publishedAtFunc,
} from "./../utils/helper";
import { CHANNEL_DETAILS_URL, VIDEO_DETAILS_FROM_ID } from "../utils/constants";

import { PiShareFatLight } from "react-icons/pi";
import { BiLike, BiDislike } from "react-icons/bi";
import RelatedVideos from "./RelatedVideos";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState();
  const [channelDetails, setChannelDetails] = useState();
  const [moreEnabled, setMoreEnabled] = useState(false);
  const [videoId] = useState(searchParams.get("v"));
  const isDark = useSelector((store) => store.theme.isDark);
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, [videoId]);

  const getVideoDetails = async () => {
    try {
      const data = await fetch(VIDEO_DETAILS_FROM_ID + searchParams.get("v"));
      const json = await data.json();
      console.log(json?.items[0]);
      setVideoDetails(json?.items[0]);

      // Call getChannelDetails only on success of getVideoDetails
      getChannelDetails(json?.items[0]?.snippet?.channelId);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  const getChannelDetails = async (channelId) => {
    try {
      const data = await fetch(CHANNEL_DETAILS_URL + channelId);
      const json = await data.json();
      console.log(json?.items[0].snippet?.thumbnails?.default?.url);
      setChannelDetails(json?.items[0]);
    } catch (error) {
      console.error("Error fetching channel details:", error);
    }
  };
  const description = videoDetails?.snippet?.description || "";
  return (
    <div
      className={`sm:flex grid-flow-col w-full ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="sm:w-[70%] w-full">
        <div className="flex">
          <div className="sm:p-5 p-0 w-full ">
            <iframe
              className="w-full sm:h-[600px] h-80"
              src={
                "https://www.youtube.com/embed/" +
                searchParams.get("v") +
                "?autoplay=1"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {/* <div className="p-5">
          <LiveChat /> 
          </div> */}
        </div>
        <div className="w-[100%] mt-3 mx-5">
          <h1 className="text-2xl font-semibold">
            {videoDetails?.snippet?.title}
          </h1>
        </div>
        <div className="sm:flex grid-flow-col justify-between">
          <div className="flex gap-5 mx-4">
            <img
              className="h-12 rounded-full w-12 object-cover"
              src={channelDetails?.snippet?.thumbnails?.default?.url}
              alt="dp"
            />
            <div>
              <p className="text-xl">{videoDetails?.snippet?.channelTitle}</p>
              <p className="text-m text-gray-500">
                {channelDetails?.statistics?.subscriberCount} Subscribers
              </p>
            </div>
            <button
              className={`rounded-full px-2 font-bold h-10 my-1 ${
                isDark ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Subscribe
            </button>
          </div>
          <div className="flex gap-2 py-4 px-2">
            <div className="flex border-2 rounded-full items-center px-2 h-10">
              <div className="flex border-2 border-y-0 border-l-0 border-gray-300 px-2">
                <BiLike className="mx-1 text-xl" />
                <p className="font-bold">
                  {videoDetails?.statistics?.likeCount}
                </p>
              </div>

              <div className="flex">
                {" "}
                <BiDislike className="mx-1 text-xl" />
              </div>
            </div>
            <div className="flex border-2 rounded-full items-center px-2 h-10">
              <PiShareFatLight className="mx-1 text-xl" />
              <button className="font-bold">Share</button>
            </div>
            <div className="flex border-2 rounded-full items-center px-2 h-10">
              <PiShareFatLight className="mx-1 text-xl" />
              <button className="font-bold">Save</button>
            </div>
            <div className="flex border-2 rounded-full items-center px-2 h-10">
              {/* <PiShareFatLight className="mx-1 text-xl" /> */}
              <button className="font-bold">...</button>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-lg p-4 mt-3 mx-2 ${
            isDark ? "bg-gray-500" : "bg-gray-100"
          }`}
        >
          <div className="flex font-semibold">
            <h2>
              {" "}
              {prettifyNumber(videoDetails?.statistics?.viewCount)} views
            </h2>
            <h2 className="ml-4">
              {publishedAtFunc(videoDetails?.snippet?.publishedAt)}
            </h2>
          </div>
          <div className=" whitespace-pre-line  scroll-hide">
            {/* {videoInfo?.items[0]?.snippet?.description} */}
            {moreEnabled ? description : description.slice(0, 150)}
            <h1
              className="cursor-pointer text-blue-600"
              onClick={() => setMoreEnabled((bool) => !bool)}
            >
              {moreEnabled ? " ...Show Less" : "...Show More"}
            </h1>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mx-5 my-2">
            {videoDetails?.statistics?.commentCount} Comments
          </h1>
        </div>
        {/* <CommentsContainer videoId={searchParams.get("v")} /> */}
        <Comments videoId={searchParams.get("v")} />
      </div>
      <div className="sm:w-[30%] w-full">
        <div>
          <h1 className="font-extrabold">Related Videos</h1>
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
