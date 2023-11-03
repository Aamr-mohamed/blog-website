import React from "react";
import Post from "../../components/posts/post";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../layouts/wrapper";
import GetJokes from "../../components/Jokes/jokes";
import { Col, Row, Container } from "react-bootstrap";
import Weather from "../../components/Weather/weathers.jsx";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
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
    : navigate("/new-post/");
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg="8">{userPosts}</Col>
          <Col lg="4">
            <MacAds />
            <Card
              className="my-2"
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">Friend List</CardTitle>
                <CardText>
                  <ul>friend 1</ul>
                  <ul>friend 2</ul>
                  <ul>friend 3</ul>
                </CardText>
              </CardBody>
            </Card>
            <Row className="mb-4">
              <Col lg="7">
                <GetJokes style={{ backgroundColor: "#fcfbf7" }} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Weather style={{ backgroundColor: "#fcfbf7" }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
