import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Button,
  Avatar,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  InputBase,
  Select,
  Typography,
  MenuItem,
  useTheme,
} from "@mui/material";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setMode } from "../../store/store";
import { DarkMode, LightMode } from "@mui/icons-material";

// nav list component

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const userId = useSelector((state) => state.user._id);
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

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
      style={{ backgroundColor: alt, marginBottom: "20px" }}
    >
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium  text-red-600"
        >
          Blogging Way
        </Typography>
        <div className="hidden lg:block ml-auto">
          <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode
                  sx={{
                    color: "dark",
                    fontSize: "25px",
                    // backgroundColor: "white",
                  }}
                />
              )}
            </IconButton>

            <Typography
              color={dark}
              as="a"
              href={`/profile/${userId}`}
              variant="small"
              className="font-medium text-blue-gray-500"
            >
              <MenuItem className="flex items-center gap-2 lg:rounded-full">
                <span> PROFILE</span>
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

        <Avatar
          variant="circular"
          size="sm"
          alt="tania andrew"
          className="border border-gray-900 p-0.5"
          src={`http://localhost:3001/assets/${user.pictureName}`}
          onClick={() => navigate(`/profile/${userId}`)}
        />
        <Select
          value={user.username}
          sx={{
            backgroundColor: neutralLight,
            width: "150px",
            borderRadius: "0.25rem",
            p: "0.25rem 1rem",
            "& .MuiSvgIcon-root": {
              pr: "0.25rem",
              width: "3rem",
            },
            "& .MuiSelect-select:focus": {
              backgroundColor: neutralLight,
            },
          }}
          input={<InputBase />}
        >
          <MenuItem value={user.username}>
            <Typography>{user.username}</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(setLogout());
              navigate("/");
            }}
          >
            Log Out
          </MenuItem>
        </Select>
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
