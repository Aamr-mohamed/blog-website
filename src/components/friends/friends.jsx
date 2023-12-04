import axios from "axios";
import React, { useState } from "react";
import ProfilePic from "../profilePic/profilePic.jsx";
import { customToast } from "../../utils/toasts.js";
import { Button, Card, IconButton } from "@material-tailwind/react";
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../store/store.js";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../Buttons/flexBetween.jsx";
import { useNavigate } from "react-router-dom";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Friend({ friendId, name, userPicturePath }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends.find((friend) => friend._id === friendId);
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;

  const patchFriend = async () => {
    try {
      const result = await axios.patch(
        `${backendUrl}/users/${_id}/${friendId}`,
        null,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const array = result.data;
      dispatch(setFriends({ friends: array }));
      customToast("success", "Friend added successfully");
    } catch (error) {
      customToast("error", error.message);
    }
  };

  return (
    <FlexBetween pl={2}>
      <FlexBetween gap="1rem">
        <ProfilePic
          size="55px"
          image={userPicturePath}
          onClick={() => {
            navigate(`/profile/${friendId}`);
          }}
        />
        <Typography
          color={main}
          variant="h5"
          fontWeight="500"
          sx={{
            "&:hover": {
              color: palette.primary.light,
              cursor: "pointer",
            },
          }}
        >
          {name}
        </Typography>
        <IconButton
          onClick={() => patchFriend()}
          sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
        >
          {isFriend ? (
            <PersonRemoveOutlined sx={{ color: primaryDark }} />
          ) : (
            <PersonAddOutlined sx={{ color: primaryDark }} />
          )}
        </IconButton>
      </FlexBetween>
    </FlexBetween>
  );
}

export default Friend;
