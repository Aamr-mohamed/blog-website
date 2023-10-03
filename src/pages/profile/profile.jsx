import React from "react";
import "./profile.module.css";
import ProfilePic from "../../components/profilePic/profilePic";
import "../../index.css";
import Wrapper from "../../layouts/wrapper";
import {
  Col,
  Row,
  Container,
  Breadcrumb,
  Card,
  Tab,
  Tabs,
} from "react-bootstrap";

export default function Profile() {
  const userName = localStorage.getItem("currentUser");
  // localStorage.setItem("about", "");
  // const about = JSON.parse(localStorage.getItem("about")) || "";

  return (
    <div>
      <Wrapper />
      <Container>
        <Row>
          <h1>Profile</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/profile">profile</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "30rem" }}>
              <div className="card-body d-flex flex-column align-items-center">
                <ProfilePic
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                />

                <Card.Title>{userName}</Card.Title>
                <Card.Text>ComingSoon</Card.Text>
              </div>
            </Card>
          </Col>
          <Col
            style={{
              backgroundColor: "white",
            }}
          >
            <Tabs id="fill-tab-example" fill className="myclass">
              <Tab
                eventKey="link-0"
                defaultActiveKey="/"
                title={<span style={{ color: "black" }}>Edit Profile</span>}
              >
                <br />
                <h3>About</h3>

                <p>
                  Recent engineering graduate with a strong passion for web
                  development. Proficient in HTML, CSS, JavaScript, PHP, and
                  eager to contribute technical skills to dynamic web projects.
                  Quick learner, problem solver, and team player committed to
                  creating innovative web solutions
                </p>
                <br />
                <h3>Profile details</h3>
                <Row>
                  <Col xl="3">Fullname</Col>
                  <Col xl="6">Amr mohamed</Col>
                </Row>
                <br />
                <Row>
                  <Col xl="3">Company</Col>
                  <Col xl="6">Lueilwitz, Wisoky and Leuschke</Col>
                </Row>
                <br />
                <Row>
                  <Col xl="3">Job</Col>
                  <Col xl="6">Web Developer</Col>
                </Row>
                <br />
                <Row>
                  <Col xl="3">Country</Col>
                  <Col xl="6">Egypt</Col>
                </Row>
                <br />
                <Row>
                  <Col xl="3">Address</Col>
                  <Col xl="6">A108 Adam Street, New York, NY 535022</Col>
                </Row>
                <br />
                <Row>
                  <Col xl="3">Phone</Col>
                  <Col xl="6">01281855126</Col>
                </Row>
                <br />
                <Row>
                  <Col xl="3">Email</Col>
                  <Col xl="6">amr1236661@gmail.com</Col>
                </Row>
                <br />
              </Tab>
              <Tab
                eventKey="link-1"
                title={<span style={{ color: "black" }}>Edit Profile</span>}
              ></Tab>
              <Tab
                eventKey="link-2"
                title={<span style={{ color: "black" }}>Settings</span>}
              >
                Settings
              </Tab>
              <Tab
                eventKey="link-3"
                title={<span style={{ color: "black" }}>Change Password</span>}
              >
                ChangePassword
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
