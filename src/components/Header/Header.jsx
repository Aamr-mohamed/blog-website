import React, { useEffect, useState } from "react";
import { setLogout } from "../../state/index";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// nav list component
const navListItems = [
  {
    label: "PROFILE",
    href: "/profile",
  },
  {
    label: "POSTS",
    href: "/new-post",
  },
  {
    label: "SETTINGS",
    href: "#",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, href }, key) => (
        <Typography
          key={label}
          as="a"
          href={href}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, pictureName, token, firstname, lastname } = useSelector(
    (state) => state.user
  );

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${_id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  if (!user) {
    return null;
  }

  const fullName = `${firstname} ${lastname}`;
  return (
    <Navbar
      className="mx-auto max-w-screen-3xl p-2  lg:pl-6 bg-transparent shadow-none border-none"
      style={{ backgroundColor: "#f8f4ec" }}
    >
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          onClick={() => navigate("/")}
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-2xl text-red-600"
        >
          Blogging Way
        </Typography>
        <div className="hidden lg:block ml-auto">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <Button
          size="sm"
          variant="text"
          onClick={() => {
            dispatch(setLogout());
            navigate("/login");
          }}
        >
          <span>Logout</span>
        </Button>

        <Avatar
          variant="circular"
          size="sm"
          alt="tania andrew"
          className="border border-gray-900 p-0.5"
          src={`http://localhost:3001/assets/${pictureName}`}
          onClick={() => navigate("/profile")}
        />
        <span>{fullName}</span>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
export default Header;
