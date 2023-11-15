import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../store/store";

function PostCard({ isProfile = false, userId }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = localStorage.getItem("token");

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
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
