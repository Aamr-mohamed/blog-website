import React from "react";
import { Card, Typography, Avatar } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import { Box, Divider, IconButton } from "@mui/material";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";

function Post({
  postId,
  postUserId,
  username,
  Title,
  postContent,
  comments,
  likes,
  userPicturePath,
  picturePath,
  createdAt,
}) {
  let likeCount = Object.keys(likes).length;
  const [isComments, setIsComments] = useState(false);
  const [like, setLike] = useState();
  let [likeCounter, setLikeCounter] = useState(likeCount);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  async function patchLike() {
    const res = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    });
    const updatedPost = await res.json();

    const isLiked = Boolean(updatedPost.likes[userId]);
    if (isLiked) {
      console.log("true");
      setLikeCounter((likeCounter += 1));
      setLike(true);
    } else {
      console.log("false");
      setLikeCounter((likeCounter -= 1));
      setLike(false);
    }
  }

  return (
    <Card className="mb-2" style={{ backgroundColor: "#fcfbf7" }} key={postId}>
      <div className="flex pt-2.5 pb-2.5 pl-2.5">
        <Avatar
          variant="circular"
          size="sm"
          alt="tania andrew"
          className="border border-gray-900 p-0.5"
          src={`http://localhost:3001/assets/${userPicturePath}`}
        />
        <Typography className="pt-2 pl-3" variant="h5">
          {username}
        </Typography>
      </div>
      <Typography className="pl-10">{Title}</Typography>
      <div className="flex justify-center w-full h-full">
        {picturePath && (
          <img
            className="w-1/2 h-1/2"
            alt="post"
            style={{
              borderRadius: "0.75rem",
              marginTop: "0.75rem",
            }}
            src={`http://localhost:3001/assets/${picturePath}`}
          />
        )}
      </div>
      <Typography className="pl-6 pt-3">{postContent}</Typography>

      <div className="">
        <IconButton onClick={patchLike}>
          {like ? (
            <FavoriteOutlined sx={{ color: "#00D5FA" }} />
          ) : (
            <FavoriteBorderOutlined />
          )}
          <Typography>{likeCounter}</Typography>
        </IconButton>

        <IconButton
          onClick={() => {
            setIsComments(!isComments);
          }}
        >
          <ChatBubbleOutlineOutlined />
          <Typography>{comments.length}</Typography>
        </IconButton>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </div>

      <Typography className="text-muted ml-auto pr-2.5 pb-2.5">
        {createdAt}
      </Typography>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${username}-${i}`}>
              <Divider />
              <Typography sx={{ m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </Card>
  );
}

export default Post;
