import React from "react";
import Sidbar from "./Sidebar/sidbar";
import Dashboard from "./Admin-Dashboard/dashboard";
import TopNav from "./Nav/topNav";
import { useParams } from "react-router-dom";

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
