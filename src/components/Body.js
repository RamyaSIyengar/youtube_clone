import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      {/* <MainContainer />
        <WatchPage /> */}

      {/*  How do we make our app dynamic, when I click on a video on main page it should go to watch
        page and sidebar collapses - Outlet 
        How will we configure that what will be rendered in outlet
        in appRouter we have children option thats where we will configure how the Outlet renders */}
    </div>
  );
};

export default Body;
