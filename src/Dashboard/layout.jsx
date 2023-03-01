import React from "react";
import Sidbar from "./Sidebar/sidbar";
import Dashboard from "./Admin Dashboard/dashboard";
import TopNav from "./Nav/topNav";

export default function Layout() {
  return (
    <div className="layout">
      <Sidbar></Sidbar>
      <div className="main__layout">
        {/* <TopNav></TopNav> */}
        <div className="content">
          <Dashboard></Dashboard>
        </div>
      </div>
    </div>
  );
}
