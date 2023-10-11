import React, { useState } from "react";
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
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { ToastContainer, Toast, Slide } from "react-toastify";

export default function Profile() {
  const oldEmail = localStorage.getItem("currentEmail");
  console.log(oldEmail);
  const userName = localStorage.getItem("currentUser");
  // localStorage.setItem("about", "");
  // const about = JSON.parse(localStorage.getItem("about")) || "";
  const [values, setValues] = useState({ password: "" });
  const handleFormChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log("working");
  };
  return (
    <div>
      <Wrapper />
      <ToastContainer transition={Slide} />
      <Container style={{ marginLeft: "300px" }}>
        <Row>
          <h1>Profile</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/profile">profile</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col>
            <Card className="text-center" style={{ width: "25rem" }}>
              <ProfilePic
                style={{
                  width: "150px",
                  height: "150px",
                }}
              />
              <Card.Title tag="h2">{userName}</Card.Title>
              <Card.Text>ComingSoon</Card.Text>
            </Card>
          </Col>
          <Col
            xs={{ offset: 1 }}
            style={{
              backgroundColor: "white",
            }}
          >
            <Tabs id="fill-tab-example" fill className="myclass">
              <Tab
                eventKey="link-0"
                defaultActiveKey="/"
                title={<span style={{ color: "black" }}>Profile</span>}
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
              >
                <div>
                  <Form
                    style={{ display: "flex", direction: "row" }}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group controlId="Edit profile">
                      <Form.Label>Change UserName</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Change UserName"
                        onChange={handleFormChange}
                        name="password"
                      />
                      <Form.Label>Change Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Change Password"
                        onChange={handleFormChange}
                      />
                      <Form.Label>reEnter your Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="reEnter your Password"
                        onChange={handleFormChange}
                      />
                      <Form.Label>Change Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Change Email"
                        onChange={handleFormChange}
                      />
                      <Form.Label>Change your phone number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Change phone number"
                        onChange={handleFormChange}
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Tab>
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
