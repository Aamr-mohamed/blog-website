import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../store/store";
import { Typography } from "@mui/material";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function PostCard({ isProfile = false, userId }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = axios.get(`${backendUrl}/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response;
    console.log(data);
    setUser(data.data);
    // setUser();
  };

  const getUserPosts = async () => {
    const response = await fetch(`${backendUrl}/posts/${userId}/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getPosts = async () => {
    const response = await fetch(`${backendUrl}/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    getUser();
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []);

  return (
    <>
      {posts.length === 0 ? (
        <Typography>No posts yet</Typography>
      ) : (
        posts.map(
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
              isProfile={isProfile}
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
        )
      )}
    </>
  );
}

export default PostCard;
