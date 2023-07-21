import React from "react";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
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
