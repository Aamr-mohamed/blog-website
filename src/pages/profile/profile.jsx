import React, { useState, useRef } from "react";
import "./profile.module.css";
import ProfilePic from "../../components/profilePic/profilePic";
import "../../index.css";
import { getProfilePic } from "../../utils/common";
import Wrapper from "../../layouts/wrapper";
import {
  Col,
  Row,
  Container,
  Breadcrumb,
  Card,
  Tab,
  Tabs,
  Form,
} from "react-bootstrap";
import { Button } from "reactstrap";

export default function Profile() {
  // image picker form userPC to database "Coming soon"
  const fileRef = useRef(null);
  // till here
  const oldEmail = localStorage.getItem("currentEmail");
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
      <Wrapper>
        <Row>
          <Col>
            <h3>Profile</h3>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/profile">profile</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Card className="text-center" style={{ height: "20rem" }}>
              <input type="file" ref={fileRef} hidden accept="image/*" />

              <ProfilePic
                style={{
                  marginTop: "20px",
                  width: "150px",
                  height: "150px",
                }}
                onClick={() => {
                  console.log("nice");
                  fileRef.current.click();
                }}
              />

              <Card.Title tag="h2">{userName}</Card.Title>
              <Card.Text>ComingSoon</Card.Text>
            </Card>
          </Col>
          <Col
            lg={6}
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
                <h3>About</h3>
                <p>
                  Recent engineering graduate with a strong passion for web
                  development. Proficient in HTML, CSS, JavaScript, PHP, and
                  eager to contribute technical skills to dynamic web projects.
                  Quick learner, problem solver, and team player committed to
                  creating innovative web solutions
                </p>

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
                <div style={{ display: "flex" }}>
                  <Form
                    onSubmit={handleSubmit}
                    style={{ width: "100%", paddingRight: "30px" }}
                  >
                    <Form.Group controlId="Edit profile">
                      <h3 style={{ textAlign: "center" }} className="mt-2">
                        Edit Profile
                      </h3>
                      <Row>
                        <Col className="mt-2">
                          <span>Change username:</span>
                        </Col>
                        <Col xl={8}>
                          <Form.Control
                            className="mb-2 mt-2"
                            type="text"
                            placeholder=""
                            onChange={handleFormChange}
                            name="password"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="mt-2">
                          <span>Change last name:</span>
                        </Col>
                        <Col xl={8}>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            onChange={handleFormChange}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="mt-2">
                          <span>Change email:</span>
                        </Col>
                        <Col xl={8}>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder=""
                            onChange={handleFormChange}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col className="mt-2">
                          <span>Change phone number:</span>
                        </Col>
                        <Col xl={8}>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder=""
                            onChange={handleFormChange}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="mt-2">
                          <span>Change gender:</span>
                        </Col>
                        <Col xl={8}>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder=""
                            onChange={handleFormChange}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="mt-2">
                          <span>Change your birthday:</span>
                        </Col>
                        <Col xl={8}>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder=""
                            onChange={handleFormChange}
                          />
                        </Col>
                      </Row>
                      <div className="mb-3 mt-1" style={{ textAlign: "end" }}>
                        <Button color="success">Update</Button>
                      </div>
                    </Form.Group>
                  </Form>
                </div>
              </Tab>
              <Tab
                eventKey="link-2"
                title={<span style={{ color: "black" }}>Settings</span>}
              >
                settings
              </Tab>
              <Tab
                eventKey="link-3"
                title={<span style={{ color: "black" }}>Change Password</span>}
              >
                <div>
                  <h4 className="text-center mt-2 mb-4">Change Password</h4>
                  <Row>
                    <Col>
                      <span>Change password:</span>
                    </Col>
                    <Col xl={8}>
                      <Form.Control
                        className="mb-2"
                        type="password"
                        placeholder=""
                        onChange={handleFormChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>Re-enter your Password:</span>
                    </Col>
                    <Col xl={8}>
                      <Form.Control
                        className="mb-2"
                        type="password"
                        placeholder=""
                        onChange={handleFormChange}
                      />
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
}
