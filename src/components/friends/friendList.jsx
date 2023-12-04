import React from "react";
import { useEffect } from "react";
import { customToast } from "../../utils/toasts";
import axios from "axios";
import { useState } from "react";
import { Card } from "@material-tailwind/react";
import { Box, Typography } from "@mui/material";
import Friend from "./friends";
import { useSelector, useDispatch } from "react-redux";
import { setFriends } from "../../store/store";
import { useTheme } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Friends({ userId }) {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const theme = useTheme();

  const getFriends = async () => {
    try {
      const result = await axios.get(`${backendUrl}/users/${userId}/friends`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const array = result.data;

      if (array.length === 0) {
        return;
      }

      dispatch(setFriends({ friends: array }));
    } catch (error) {
      customToast("error", error.message);
    }
  };
  useEffect(() => {
    getFriends();
  }, []);
  return (
    <Card style={{ backgroundColor: theme.palette.background.alt }}>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem", pt: "1rem", pl: "1rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <PeopleOutlineIcon
              fontSize="large"
              color="error"
              icon="fa-solid fa-user-group"
            />
            <Typography p={2} color={palette.neutral.dark}>
              You dont have any friend yet
            </Typography>
          </div>
        ) : (
          friends.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={friend.username}
              userPicturePath={friend.pictureName}
            />
          ))
        )}
      </Box>
    </Card>
  );
}

export default Friends;
