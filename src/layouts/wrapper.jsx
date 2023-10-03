import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";
import SideBarNot from "../components/NotLoggedInSideBar/SideBarNot";

function Wrapper() {
  const currentemail = localStorage.getItem("currentEmail");

  return (
    <>
      <Header />
      {currentemail ? <SideBar /> : <SideBarNot />}
    </>
  );
}

export default Wrapper;
