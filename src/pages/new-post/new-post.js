import React, { useRef } from "react";
import ProfilePic from "../../components/profilePic/profilePic";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./newPost.module.css";
import styles from "./newPost.module.css";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "../../layouts/wrapper";
import { customToast } from "../../utils/toasts";

export default function NewPost() {
  var date = Date.now();
  const email = localStorage.getItem("currentEmail");
  const userName = localStorage.getItem("currentUser");
  const NewPost = useRef();
  const NewTitle = useRef();
  const navigate = useNavigate();
  const handlesubmit = () => {  
    let postDb = localStorage.getItem("Post")
    var existingPosts = postDb ? JSON.parse(postDb) : [];
    console.log(existingPosts)
    console.log('wassup')
    var postData = {
      userEmail: email,
      Title: NewTitle.current.value,
      post: NewPost.current.value,
      createdAt: date,
    };
    if (!email) {
      customToast("warn", "please login first")
      navigate("/login/"); 
    } else if (
      existingPosts.find((post) => post.Title === NewTitle.current.value) 
    ) {
      customToast("warn", "This post was already created")
    } else {
      existingPosts.push(postData);
      localStorage.setItem("Post", JSON.stringify(existingPosts));
      customToast("success","Post was created successfully")
    }
  
  };

  return (
    <div>
      <Wrapper />
      
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
            <button
              type="button"
              className={styles.Btn1}
              onClick={handlesubmit}
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
            >Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
