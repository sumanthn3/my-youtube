export const KEY = process.env.REACT_APP_YOUTUBE_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  KEY;
export const YOUTUBE_CAT_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=es&regionCode=US&key=" +
  KEY;
export const YOUTUBE_SUB_API =
  "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=" +
  KEY;
export const YOUTUBE_search_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const RELATED_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&key=${KEY}&relatedToVideoId=`;
export const GET_COMMENTS_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=35&key=${KEY}&videoId=`;

export const LIVE_CHAT_COUNT = 25;
export const VIDEO_DETAILS_FROM_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${KEY}&id=`;
export const CHANNEL_DETAILS_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${KEY}&id=`;
export const SEARCH_RESULTS_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${KEY}&safeSearch=moderate&q=`;
