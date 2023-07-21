import React from "react";
// import { YOUTUBE_CAT_API } from "../utils/constants";
import Button from "./Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const list = [
  "All",
  "Music",
  "Gaming",
  "Mix",
  "New to you",
  "Watched",
  "Tollywood",
  "Apple",
  "Gadgets",
  "Live",
  "Debates",
  "Podcasts",
  "Trains",
  "Flights",
  "Telugu",
  "Computers",
  "React",
  "Indian Music",
  "Lessons",
  "Pawan Kalyan",
  "OG",
  "Nolan",
];
const ButtonList = () => {
  // const [btnList, setbtnList] = useState();
  // useEffect(() => {
  //   getButtonlist();
  // }, []);
  // const getButtonlist = async () => {
  //   const data = await fetch(YOUTUBE_CAT_API);
  //   const json = await data.json();
  //   console.log(json.items);
  //   setbtnList(json.items);
  // };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="grid grid-flow-col">
      <MdChevronLeft
        className="hover:scale-150 my-auto opacity-50 "
        size={30}
        onClick={slideLeft}
        aria-hidden="true"
      />
      <div
        id="slider"
        className="flex h-18 m-2 overflow-hidden whitespace-nowrap scroll-smooth"
      >
        {list.map((item) => (
          <Button key={item} name={item} />
        ))}
      </div>
      <MdChevronRight
        className="hover:scale-150 my-auto opacity-50 "
        size={30}
        onClick={slideRight}
        aria-hidden="true"
      />
    </div>
  );
};

export default ButtonList;
