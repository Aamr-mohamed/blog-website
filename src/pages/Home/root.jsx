import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../layouts/wrapper";
import GetJokes from "../../components/Jokes/jokes";
import Weather from "../../components/Weather/weathers.jsx";
import MacAds from "../../components/ads/macAds";
import PostCard from "../../components/posts/postCard.jsx";
import Friends from "../../components/friends/friendList.jsx";

export default function Root() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="w-full flex">
        <div className="w-3/5 mt-10">
          <PostCard />
        </div>
        <div className=" ml-20 w-1/4">
          <MacAds
            className="mb-5 mt-10"
            style={{ backgroundColor: "#fcfbf7" }}
          />
          <GetJokes className="mb-5" style={{ backgroundColor: "#fcfbf7" }} />
          <Weather style={{ backgroundColor: "#fcfbf7" }} />
          <Friends />
        </div>
      </div>
    </Wrapper>
  );
}
