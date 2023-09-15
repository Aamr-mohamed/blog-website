import React from "react";
import Post from "../../components/posts/post";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../layouts/wrapper";

export default function Root() {
  const navigate = useNavigate();
  const currentemail = localStorage.getItem("currentEmail");
  const posts = JSON.parse(localStorage.getItem("Post"));
  const userPosts = currentemail
    ? posts
        .filter((post) => post.userEmail === currentemail)
        .map((post, index) => (
          <Post
            postkey={index.toString()}
            key={index}
            postContent={post.post}
            title={post.Title}
            createdAt={post.createdAt}
          />
        ))
    : navigate("/");
  return (
    <div
      style={{
        backgroundColor: "#f8f4ec",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div>
        <Wrapper />
      </div>
      {userPosts}
    </div>
  );
}
