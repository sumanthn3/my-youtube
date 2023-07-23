import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Sidebar from "./Sidebar";

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
  return isMobileSide ? (
    <div>
      <Head />
      <div className="flex pt-16">
        {/* <Sidebar /> */}
        <Outlet />
      </div>
    </div>
  ) : (
    <div>
      <Head />
      <div className="flex pt-16">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
