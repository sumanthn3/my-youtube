import React, { useState, useEffect } from "react";
import { GET_COMMENTS_URL } from "../utils/constants";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    const data = await fetch(GET_COMMENTS_URL + videoId);
    const json = await data.json();
    console.log(json?.items);
    setComments(json?.items);
  };
  return (
    <div>
      {comments &&
        comments.map((comment, idx) => (
          <div key={idx} className="flex flex-col space-y-2 p-2">
            <div className="flex items-center space-x-2">
              <img
                className="rounded-full w-10"
                src={
                  comment.snippet?.topLevelComment?.snippet
                    .authorProfileImageUrl
                }
                alt="dp"
              />
              <p className="font-bold">
                {comment.snippet?.topLevelComment?.snippet.authorDisplayName}
              </p>
            </div>
            <div className="text-ellipsis overflow-hidden">
              <p className="text-gray-700 p-2 mx-8 whitespace-break-spaces">
                {comment.snippet?.topLevelComment?.snippet.textOriginal}
              </p>
            </div>

            {/* <div className="pl-5 border border-l-black ml-5">
                <CommentsArray comments={comment.replies} />
            </div> */}
          </div>
        ))}
    </div>
  );
};

export default Comments;
