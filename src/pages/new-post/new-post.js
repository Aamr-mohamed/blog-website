import Header from "../../components/Header/Header";
import React, { useRef } from "react";
import { Alert } from "reactstrap";
import ProfilePic from "../../components/profilePic/profilePic";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import CoolButton from "../../components/Button/button";
import "./newPost.module.css";

export default function NewPost() {
  var date = Date.now();
  const email = localStorage.getItem("currentEmail");
  const userName = localStorage.getItem("currentUser");
  const NewPost = useRef();
  const navigate = useNavigate();
  const NewTitle = useRef();
  const handlesubmit = (e) => {
    var existingPosts = JSON.parse(localStorage.getItem("Post"));
    if (existingPosts == null) existingPosts = [];
    e.preventDefault();
    var postData = {
      userEmail: email,
      Title: NewTitle.current.value,
      post: NewPost.current.value,
      createdAt: date,
    };
    if (postData.email == []) {
      alert("please login first");
      navigate("/login/");
    } else if (
      existingPosts.find((post) => post.Title === NewTitle.current.value)
    ) {
      alert("This post already created before");
    } else {
      existingPosts.push(postData);
      localStorage.setItem("Post", JSON.stringify(existingPosts));
      alert("Post was created sucessfully");
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <form onSubmit={handlesubmit}>
        <div
          style={{
            position: "relative",
            alignSelf: "center",
            justifyContent: "center",
            width: "40%",
            height: "100%",
            margin: "auto",
            marginTop: "40px",
          }}
        >
          <div style={{ display: "flex" }}>
            <ProfilePic style={{ width: "45px", height: "45px" }} />
            <p
              style={{
                marginTop: "10px",
                fontSize: "20px",
                marginLeft: "15px",
              }}
            >
              {userName}
            </p>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ marginLeft: "40px", fontSize: "20px" }}>
              Add your post
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              style={{ marginBottom: "10px" }}
              size="lg"
              ref={NewTitle}
            />
            <Form.Control
              as="textarea"
              type="text"
              rows={4}
              size="lg"
              placeholder="What's on your mind"
              ref={NewPost}
              required
            />
          </Form.Group>

          <div
            style={{
              alignSelf: "right",
              justifyContent: "right",
              display: "flex",
            }}
          >
            <CoolButton text="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
