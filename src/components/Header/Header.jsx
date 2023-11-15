import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  MenuItem,
  Avatar,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { setLogout } from "../../store/store";

// nav list component

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const userId = useSelector((state) => state.user._id);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
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

  return (
    <Navbar
      className="mx-auto max-w-screen-3xl p-2  lg:pl-6 bg-transparent shadow-none border-none"
      style={{ backgroundColor: "#f8f4ec" }}
    >
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          onClick={() => navigate("/Home")}
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-2xl text-red-600"
        >
          Blogging Way
        </Typography>
        <div className="hidden lg:block ml-auto">
          <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <Typography
              as="a"
              href={`/profile/${userId}`}
              variant="small"
              color="gray"
              className="font-medium text-blue-gray-500"
            >
              <MenuItem className="flex items-center gap-2 lg:rounded-full">
                <span className="text-gray-900"> PROFILE</span>
              </MenuItem>
            </Typography>
          </ul>
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
            setLogout();
            navigate("/");
          }}
        >
          <span>Logout</span>
        </Button>

        <Avatar
          variant="circular"
          size="sm"
          alt="tania andrew"
          className="border border-gray-900 p-0.5"
          src={`http://localhost:3001/assets/${user.pictureName}`}
          onClick={() => navigate(`/profile/${userId}`)}
        />
        <span>{user.username}</span>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
          <Typography
            as="a"
            href={`/profile/${userId}`}
            variant="small"
            color="gray"
            className="font-medium text-blue-gray-500"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              <span className="text-gray-900"> PROFILE</span>
            </MenuItem>
          </Typography>
        </ul>
      </Collapse>
    </Navbar>
  );
}
export default Header;
