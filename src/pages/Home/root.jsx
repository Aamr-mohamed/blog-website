import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../layouts/wrapper";
import GetJokes from "../../components/Jokes/jokes";
import Weather from "../../components/Weather/weathers.jsx";
import MacAds from "../../components/ads/macAds";
import PostCard from "../../components/posts/postCard.jsx";
import Friends from "../../components/friends/friendList.jsx";
import { useSelector } from "react-redux";
import NewPost from "../new-post/new-post.js";

export default function Home() {
  const navigate = useNavigate();
  const { _id, pictureName } = useSelector((state) => state.user);

  return (
    <Wrapper>
      <div className="w-full flex">
        <div className="w-3/5">
          <div style={{ marginBottom: "0.5rem" }}>
            <NewPost pictureName={pictureName} />
          </div>
          <PostCard userId={_id} />
        </div>
        <div className=" ml-20 w-1/4">
          <MacAds
            className="mb-5 mt-10"
            style={{ backgroundColor: "#fcfbf7" }}
          />
          <GetJokes className="mb-5" style={{ backgroundColor: "#fcfbf7" }} />
          <Weather className="mb-5" style={{ backgroundColor: "#fcfbf7" }} />
          <Friends userId={_id} />
        </div>
      </div>
    </Wrapper>
  );
}
