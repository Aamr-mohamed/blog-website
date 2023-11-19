import React from "react";
import Header from "../components/Header/Header";
import Profiler from "../components/profiler/Profiler";

function Wrapper({ children }) {
  return (
    <>
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full flex flex-row">
        <div className="pl-8 pr-8 mt-5 w-1/5">
          <Profiler />
        </div>
        <div className="w-4/5">{children}</div>
      </div>
    </>
  );
}

export default Wrapper;
