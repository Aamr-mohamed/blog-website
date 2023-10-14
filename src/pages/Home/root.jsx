import React from "react";
import Post from "../../components/posts/post";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../layouts/wrapper";
import GetJokes from "../../components/Jokes/jokes";
import { Col, Row, Container } from "react-bootstrap";
import Weather from "../../components/Weather/weathers.jsx";
import adPic from "../../assets/images/macAd.jpg";
import { Slide, ToastContainer } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Burger from "../../components/ads/Burger";

export default function Root() {
  const navigate = useNavigate();
  // localStorage.setItem("Post","")
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
          <Col lg="7">{userPosts}</Col>
          <Col lg="5">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img src={adPic} alt="Sample" />
              <CardBody>
                <CardTitle tag="h5">The Onion</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  @TheOnion
                </CardSubtitle>
                <CardText>
                  McDonald’s Appealing To Health-Conscious Consumers With New
                  ‘You Can’t Run From Us Forever’ Ad Campaign:
                  <a href="https://trib.al/bDvWfTz">https://trib.al/bDvWfTz</a>
                </CardText>
              </CardBody>
            </Card>
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
                <Burger />
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
