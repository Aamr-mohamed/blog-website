import React from "react";
import Wrapper from "../../layouts/wrapper";
import SideBar from "../../components/profiler/Profiler";
import { useState } from "react";
import axios from "axios";

function Contact() {
  return (
    <Wrapper>
      <div className="div2">{SideBar}</div>
      <div className="div3"></div>
      <div className="div4"></div>
    </Wrapper>
  );
}

export default Contact;
