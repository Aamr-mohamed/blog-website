import axios from "axios";
import React, { useState } from "react";
import ProfilePic from "../profilePic/profilePic.jsx";
import { customToast } from "../../utils/toasts.js";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../store/store.js";

function Friend({ friendId, name, userPicturePath }) {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends.find((friend) => friend._id === friendId);
  console.log(token);

  const patchFriend = async () => {
    try {
      const result = await axios.patch(
        `http://localhost:3001/users/${_id}/${friendId}`,
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
    <div className="flex justify-between items-center gap-1">
      <ProfilePic
        size="45px"
        image={userPicturePath}
        onClick={() => {
          console.log("nice");
        }}
      />
      <Typography variant="h5" fontWeight="500">
        {name}
      </Typography>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: "#001519", p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: "#99EEFD" }} />
        ) : (
          <PersonAddOutlined sx={{ color: "#99EEFD" }} />
        )}
      </IconButton>
    </div>
  );
}

export default Friend;
