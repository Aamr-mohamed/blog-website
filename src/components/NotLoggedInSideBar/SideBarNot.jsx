import React from "react";
import { Link } from "react-router-dom";
import { SidebarDataNot } from "./SidebarDataNot";
import "../Sidebar/Sidebar.css";
import { IconContext } from "react-icons";

function SideBarNot() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar"></div>
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            <li className="navbar-toggle"></li>
            {SidebarDataNot.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default SideBarNot;
