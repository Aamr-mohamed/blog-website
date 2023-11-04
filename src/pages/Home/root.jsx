import React from "react";
import Post from "../../components/posts/post";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../layouts/wrapper";
import GetJokes from "../../components/Jokes/jokes";
import Weather from "../../components/Weather/weathers.jsx";
import MacAds from "../../components/ads/macAds";

export default function Root() {
  const navigate = useNavigate();
  const currentemail = localStorage.getItem("currentEmail");
  const posts = JSON.parse(localStorage.getItem("Post"));
  const userPosts = currentemail
    ? posts
        ?.filter((post) => post.userEmail === currentemail)
        .map((post, index) => (
          <Post
            postkey={index.toString()}
            key={index}
            postContent={post.post}
            title={post.Title}
            createdAt={post.createdAt}
          />
        ))
    : console.log("fy");
  // : navigate("/new-post/");
  return (
    <Wrapper>
      <div className="w-full flex">
        <div className="w-3/5 mt-10">{userPosts}</div>
        <div className="pr-24 ml-20 w-2/5">
          <MacAds
            className="mb-5 mt-10"
            style={{ backgroundColor: "#fcfbf7" }}
          />
          <GetJokes className="mb-5" style={{ backgroundColor: "#fcfbf7" }} />
          <Weather style={{ backgroundColor: "#fcfbf7" }} />
        </div>
      </div>
    </Wrapper>
  );
}
