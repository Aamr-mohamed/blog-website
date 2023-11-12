import React from "react";
import { Card, Typography, Avatar } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";

function Post() {
  const token = localStorage.getItem("token");
  const [like, setLike] = useState(false);
  const userId = localStorage.getItem("userId");
  const [posts, setPosts] = useState([]);

  async function patchLike(postId) {
    const res = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    });
  }
  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPosts(data);
    // dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          username,
          Title,
          postContent,
          comments,
          likes,
          userPicturePath,
          picturePath,
          createdAt,
        }) => (
          <Card
            className="mb-2"
            style={{ backgroundColor: "#fcfbf7" }}
            key={_id}
          >
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
              <IconButton
                onClick={() => {
                  setLike(!like);
                  patchLike(_id);
                }}
              >
                {like ? (
                  <FavoriteOutlined sx={{ color: "#00D5FA" }} />
                ) : (
                  <FavoriteBorderOutlined />
                )}
              </IconButton>

              <IconButton>
                <ChatBubbleOutlineOutlined />
              </IconButton>

              <IconButton>
                <ShareOutlined />
              </IconButton>
            </div>

            <Typography className="text-muted ml-auto pr-2.5 pb-2.5">
              {createdAt}
            </Typography>
          </Card>
        )
      )}
    </>
  );
}

export default Post;
