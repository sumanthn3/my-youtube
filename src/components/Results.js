import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ResultCard from "./ResultCard";
import { useDispatch } from "react-redux";
import { CardShimmer } from "./Shimmer";
import { SEARCH_RESULTS_URL } from "../utils/constants";
import { closeMenu } from "../utils/appSlice";

const Results = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const query = searchParams.get("search_query");

  useEffect(() => {
    fetchSearchResults(SEARCH_RESULTS_URL, query);
    dispatch(closeMenu());
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [query]);

  const fetchSearchResults = async (SEARCH_RESULTS_URL) => {
    const data = await fetch(SEARCH_RESULTS_URL + query);
    const jsonData = await data.json();
    setSearchResults(jsonData?.items);
    console.log(jsonData?.items);
  };
  if (searchResults && !searchResults.length) {
    return <CardShimmer />;
  }
  //early return

  return (
    <>
      <div className="w-10/12">
        <h1 className="p-5 text-xl font-bold">
          Search results for:
          <span className="font-extrabold text-xl"> {query}</span>
        </h1>

        {searchResults.map((result) => (
          <ResultCard
            key={
              result?.id?.videoId ? result?.id?.videoId : result?.id?.channelId
            }
            data={result}
            isChannel={result?.id?.kind === "youtube#channel" ? true : false}
          />
        ))}
      </div>
    </>
  );
};

export default Results;
