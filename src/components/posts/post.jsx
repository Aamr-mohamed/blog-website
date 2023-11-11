import React from "react";
import { Card, Typography, Avatar } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";

function Post() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");
  const pictureName = localStorage.getItem("pictureName");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    console.log(data);
    console.log(data[0].Title);
    setPosts(data);
    console.log(posts);
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
            <Typography className="pl-6 pt-3">{postContent}</Typography>
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
