import React, { useEffect, useState } from "react";
import VideoSuggestionsCard from "./VideoSuggestionsCard";
import { useSearchParams } from "react-router-dom";
import { RELATED_VIDEOS_URL } from "../utils/constants";

const RelatedVideos = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  const [relatedVideoData, setRelatedVideoData] = useState([]);

  const getRelatedVideos = () => {
    fetch(RELATED_VIDEOS_URL + videoId)
      .then((res) => res.json())
      .then((data) => {
        // console.log("-----------------");
        // console.log(data);
        setRelatedVideoData(data.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRelatedVideos();
    // eslint-disable-next-line
  }, []);

  if (!relatedVideoData?.length) {
    return null;
  }

  return (
    <>
      <div className="mt-4 mr-6 py-2">
        {relatedVideoData.map((v, idx) => (
          <VideoSuggestionsCard key={idx} info={v} />
        ))}
      </div>
    </>
  );
};

export default RelatedVideos;
