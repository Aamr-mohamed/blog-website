import React from "react";
import { useEffect } from "react";
import { customToast } from "../../utils/toasts";
import axios from "axios";
import { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Box } from "@mui/material";
import Friend from "./friends";

function Friends() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3001/users/${userId}/friends`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setFriends(result.data);
    } catch (error) {
      customToast("error", error.message);
    }
  };
  useEffect(() => {
    console.log(friends);
    getFriends();
  }, []);
  return (
    <Card>
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
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </Card>
  );
}

export default Friends;
