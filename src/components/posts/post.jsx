import React from "react";
import ProfilePic, { getProfilePic } from "../profilePic/profilePic";
import Like from "../likeButton/like";
import {
  CardImg,
  Card,
  CardHeader,
  CardText,
  CardSubtitle,
  CardTitle,
} from "reactstrap";

function Post({ postContent, title, createdAt }) {
  const userName = localStorage.getItem("currentUser");

  return (
    <>
      <Card className="mb-2">
        <div style={{ display: "flex", padding: "10px 0px 10px 10px" }}>
          <ProfilePic
            style={{ width: "45px", height: "45px", marginLeft: "20px" }}
          />
          <CardTitle style={{ padding: "10px 0px 0px 10px" }} tag="h5">
            {userName}
          </CardTitle>
        </div>
        <CardText style={{ padding: "0px 0px 0px 20px" }}>{title}</CardText>
        <CardText style={{ padding: "0px 0px 0px 20px" }}>
          {postContent}
        </CardText>
        <CardSubtitle
          className="text-muted align-self-end"
          style={{ padding: "0px 10px 10px 0px" }}
        >
          {createdAt}
        </CardSubtitle>
        <div className="likeComment" style={{}}>
          <Like />
        </div>
      </Card>

      {/* <div
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
      </div> */}
    </>
  );
}

export default Post;
