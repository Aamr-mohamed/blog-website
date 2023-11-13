import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./post";

function PostCard() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPosts(data);
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
          <Post
            key={_id}
            postId={_id}
            postUserId={userId}
            username={username}
            Title={Title}
            postContent={postContent}
            comments={comments}
            likes={likes}
            userPicturePath={userPicturePath}
            picturePath={picturePath}
            createdAt={createdAt}
          />
        )
      )}
    </>
  );
}

export default PostCard;
