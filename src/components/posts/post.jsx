import React from "react";
import { Card, Avatar } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPost } from "../../store/store";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import ProfilePic from "../profilePic/profilePic";
import { formatDistanceToNow } from "date-fns";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

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
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  const dark = palette.neutral.dark;

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

  const [timeAgo, setTimeAgo] = useState("");
  useEffect(() => {
    const originalDateTime = new Date(createdAt);
    const timeAgoString = formatDistanceToNow(originalDateTime, {
      addSuffix: true,
    });

    setTimeAgo(timeAgoString);
  }, [createdAt]);

  return (
    <Card
      className="mb-2"
      key={postId}
      style={{
        backgroundColor: palette.background.alt,
      }}
    >
      <div
        className="flex pt-2.5 pb-2.5 pl-2.5"
        onClick={() => {
          navigate(`/profile/${postUserId}`);
        }}
      >
        <ProfilePic image={userPicturePath} size="55px" />
        <Typography
          className="pt-2 pl-3 "
          variant="h4"
          color={dark}
          fontWeight="500"
          sx={{
            "&:hover": {
              color: palette.primary.light,
              cursor: "pointer",
            },
          }}
        >
          {username}
        </Typography>
      </div>
      <Typography
        color={main}
        variant="h4"
        className="pl-10 pt-3 font-bold pr-10"
      >
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
            src={`${backendUrl}/assets/${picturePath}`}
          />
        )}
      </div>
      <Typography
        className="pl-6 pt-3 pr-6"
        color={main}
        style={{ overflowWrap: "break-word" }}
      >
        {postContent}
      </Typography>

      <div className="">
        <IconButton onClick={patchLike}>
          {isLiked ? (
            <FavoriteOutlined sx={{ color: "rgb(220 38 38) " }} />
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

      <Typography
        ml="auto"
        pr={2.5}
        pb={2.5}
        className="text-muted ml-auto pr-2.5 pb-2.5"
      >
        {timeAgo}
      </Typography>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${username}-${i}`}>
              <Divider />
              <Typography sx={{ m: "0.5rem 0", pl: "1rem" }} color={main}>
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
