import axios from "axios";
import React from "react";
import ProfilePic from "../profilePic/profilePic.jsx";
import { customToast } from "../../utils/toasts.js";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";

function Friend(token, friendId, id, name, userPicturePath) {
  const friends = localStorage.getItem("friends");

  const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    try {
      const result = await axios.patch(
        `http:localhost:3001/users/${id}/${friendId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      customToast("success", "Friend added successfully");
    } catch (error) {
      customToast("error", error.message);
    }
  };

  return (
    <>
      <ProfilePic
        style={{
          objectFit: "cover",
          borderRadius: "50%",
          width: "55px",
          height: "55px",
        }}
        image={userPicturePath}
        onClick={() => {
          console.log("nice");
        }}
      />
      <Typography variant="h5">{name}</Typography>
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
    </>
  );
}

export default Friend;
