import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as bsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile/",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login/",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Posts(Coming Soon)",
    path: "/new-post/",
    icon: <bsIcons.BsPostcardHeart />,
    cName: "nav-text",
  },
  {
    title: "Friends",
    path: "",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
