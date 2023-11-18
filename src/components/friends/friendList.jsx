import React from "react";
import { useEffect } from "react";
import { customToast } from "../../utils/toasts";
import axios from "axios";
import { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Box } from "@mui/material";
import Friend from "./friends";
import { useSelector, useDispatch } from "react-redux";
import { setFriends } from "../../store/store";
import { useTheme } from "@mui/material";

function Friends({ userId }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const theme = useTheme();

  const getFriends = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3001/users/${userId}/friends`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const array = result.data;
      console.log(array);
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
        //   color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={friend.username}
            userPicturePath={friend.pictureName}
          />
        ))}
      </Box>
    </Card>
  );
}

export default Friends;
