import React, { useRef } from "react";
import ProfilePic from "../../components/profilePic/profilePic";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import CoolButton from "../../components/Button/button";
import "./newPost.module.css";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "../../layouts/wrapper";

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
    if (!postData.email) {
      toast.warn("please login first", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/login/");
    } else if (
      existingPosts.find((post) => post.Title === NewTitle.current.value)
    ) {
      toast.warn("This post already created before", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      existingPosts.push(postData);
      localStorage.setItem("Post", JSON.stringify(existingPosts));
      toast.success("Post was created sucessfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      <Wrapper />
      <ToastContainer transition={Slide} />
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
            <CoolButton
              text="Submit"
              style={{
                background: "#3CB371",
                color: "#fff",
                border: "1px solid #eee",
                borderRadius: "20px",
                boxShadow: "5px 5px 5px #eee",
                width: "200px",
                textShadow: "none",
                height: "40px",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
