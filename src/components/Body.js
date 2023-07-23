import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
const Body = () => {
  const [isMobileSide, setIsMobileSide] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileSide(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isDark = useSelector((store) => store.theme.isDark);
  return isMobileSide ? (
    <div className={isDark ? "bg-black" : "bg-white"}>
      <Head />
      <div className="flex pt-16">
        {/* <Sidebar /> */}
        <Outlet />
      </div>
    </div>
  ) : (
    <div className={isDark ? "bg-black" : "bg-white"}>
      <Head />
      <div className="flex pt-16">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
