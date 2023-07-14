export const KEY = "";

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
export const LIVE_CHAT_COUNT = 25;
