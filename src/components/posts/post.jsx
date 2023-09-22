import React from "react";
import ProfilePic from "../profilePic/profilePic";
import Like from "../likeButton/like";

function Post({ postContent, title, createdAt }) {
  const userName = localStorage.getItem("currentUser");

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          width: "700px",
          resize: "both",
          border: "none",
          overflow: "auto",
          borderRadius: "5px",
          backgroundColor: "#fcfbf7",
        }}
      >
        <div
          style={{
            width: "700px",
            margin: "auto",
            marginTop: "30px",
            borderBottom: "solid",
            borderColor: "#ebeef4",
          }}
        >
          <div style={{ display: "flex" }}>
            <ProfilePic
              style={{ width: "45px", height: "45px", marginLeft: "20px" }}
            />
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
          <div>
            <h2 style={{ marginLeft: "30px" }}>{title}</h2>
            <br />
            <h3 style={{ marginLeft: "40px", whiteSpace: "normal" }}>
              {postContent}
            </h3>
            <br />
            <p
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "30px",
              }}
            >
              {createdAt}
            </p>
          </div>
          <div
            className="likeComment"
            style={{ borderTop: "solid", borderColor: "#ebeef4" }}
          >
            <Like />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
