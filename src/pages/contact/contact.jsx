import React from "react";
import "./contact.css";
import Wrapper from "../../layouts/wrapper";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";
import SideBarNot from "../../components/NotLoggedInSideBar/SideBarNot";

function Contact() {
  const currentemail = localStorage.getItem("currentEmail");
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">{currentemail ? <SideBar /> : <SideBarNot />}</div>
      <div className="div3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        voluptatibus similique cumque in veniam libero vero! Quibusdam
        consectetur excepturi quod iste maxime animi velit distinctio eum quam,
        non, dolor corrupti?
      </div>
      <div className="div4"></div>
    </div>
  );
}

export default Contact;
