import React from "react";
import { Card, Typography, Avatar } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPost } from "../../store/store";
import { Box, Divider, IconButton } from "@mui/material";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import ProfilePic from "../profilePic/profilePic";

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
  const [isComments, setIsComments] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user._id);
  const token = useSelector((state) => state.token);
  const isLiked = Boolean(likes[userId]);
  const likeCount = Object.keys(likes).length;

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

    dispatch(setPost({ post: updatedPost }));
  }

  return (
    <Card className="mb-2" style={{ backgroundColor: "#fcfbf7" }} key={postId}>
      <div className="flex pt-2.5 pb-2.5 pl-2.5">
        <ProfilePic
          image={userPicturePath}
          size="55px"
          onClick={() => {
            navigate(`/profile/${postUserId}`);
          }}
        />
        <Typography
          className="pt-2 pl-3 "
          variant="h5"
          onClick={() => {
            navigate(`/profile/${postUserId}`);
          }}
        >
          {username}
        </Typography>
      </div>
      <Typography variant="h5" className="pl-10 font-bold">
        {Title}
      </Typography>
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
      <Typography className="pl-6 pt-3 ">{postContent}</Typography>

      <div className="">
        <IconButton onClick={patchLike}>
          {isLiked ? (
            <FavoriteOutlined sx={{ color: "#00D5FA" }} />
          ) : (
            <FavoriteBorderOutlined />
          )}
          <Typography>{likeCount}</Typography>
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
