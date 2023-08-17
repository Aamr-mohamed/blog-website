import Header from "../components/Header";
import React, { useRef } from "react";
import { Alert } from "reactstrap";
import profile from "../images/profile-pic.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const userName = localStorage.getItem("currentUser");
  const NewPost = useRef();
  const addPic = useRef();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    var existingPosts = JSON.parse(localStorage.getItem("addPost"));
    if (existingPosts == null) existingPosts = [];
    e.preventDefault();
    var postData = {
      post: NewPost.current.value,
      pic: addPic.current.value,
      user: userName,
    };
    existingPosts.push(postData);
    localStorage.setItem("addPost", JSON.stringify(existingPosts));
    console.log("post successfully added");
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
          <img
            src={profile}
            alt="Profile"
            class="rounded-circle"
            style={{
              width: "45px",
              height: "45px",
              marginTop: "3px",
              marginRight: "3px",
            }}
          />
          <span
            className="logged-person"
            style={{ marginTop: "7px", fontSize: "20px" }}
          >
            {userName}
          </span>
          <br />

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ marginLeft: "40px", fontSize: "20px" }}>
              Add your post
            </Form.Label>
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
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Add a file to the post</Form.Label>
            <Form.Control type="file" size="lg" ref={addPic} />
          </Form.Group>

          <button
            style={{
              backgroundColor: "#f67280",
              borderColor: "white",
              margin: "auto",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
