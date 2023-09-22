import React from "react";
import Post from "../../components/posts/post";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../layouts/wrapper";
import GetJokes from "../../components/Jokes/jokes";
import { Col, Row, Container } from "react-bootstrap";
import Weather from "../../components/Weather/weathers.jsx";

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
        minHeight: "100dvh",
        position: "relative",
      }}
    >
      <div>
        <Wrapper />
      </div>
      <Row style={{ width: "1920px" }}>
        <Col sm="7" xs={{ size: 8, offset: 2 }}>
          {userPosts}
        </Col>
        <Col sm="2">
          <Row>
            <GetJokes
              style={{ backgroundColor: "#fcfbf7", marginBottom: "30px" }}
            />
          </Row>
          <Row>
            <Weather style={{ backgroundColor: "#fcfbf7" }} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
