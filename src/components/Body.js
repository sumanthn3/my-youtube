import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex pt-16">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
