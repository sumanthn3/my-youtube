import React from "react";
// import { YOUTUBE_CAT_API } from "../utils/constants";
import Button from "./Button";
const list = [
  "All",
  "Music",
  "Gaming",
  "Mix",
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

  return (
    <div className="flex flex-wrap p-5">
      {/* {btnList &&
        btnList.map((item) => (
          <Button key={item.id} name={item.snippet.title} />
        ))}  */}
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
