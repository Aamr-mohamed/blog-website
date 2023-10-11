import React from "react";
import Post from "../../components/posts/post";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../layouts/wrapper";
import GetJokes from "../../components/Jokes/jokes";
import { Col, Row, Container } from "react-bootstrap";
import Weather from "../../components/Weather/weathers.jsx";
import { Slide, ToastContainer } from "react-toastify";

export default function Root() {
  const navigate = useNavigate();
  // localStorage.setItem("Post","")
  const currentemail = localStorage.getItem("currentEmail");
  const posts = JSON.parse(localStorage.getItem("Post"));
  const userPosts = currentemail
    ? posts?.filter((post) => post.userEmail === currentemail)
        .map((post, index) => (
          <Post
            postkey={index.toString()}
            key={index}
            postContent={post.post}
            title={post.Title}
            createdAt={post.createdAt}
          />
        ))
    : navigate("/new-post/");
  return (
    <div
      style={{
        backgroundColor: "#f8f4ec",
        position: "relative",
      }}
    >      
        <Wrapper />
        <Container>
        <Row>
          <Col sm="5" xs={{  offset: 2 }}>
            {userPosts}
          </Col>
          <Col sm="2" xs={{offset:3}} >
            <Row >
              <GetJokes
                style={{ backgroundColor: "#fcfbf7", marginBottom: "30px" }}
              />
            </Row>
            <Row>
              <Weather style={{ backgroundColor: "#fcfbf7" }} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
