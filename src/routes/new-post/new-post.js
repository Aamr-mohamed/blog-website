import Header from "../components/Header";
import React from "react";
import { Alert } from "reactstrap";
import profile from "../images/profile-pic.jpg";

export default function NewPost() {
  const userName = localStorage.getItem("currentUser");

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <img
          src={profile}
          alt="Profile"
          class="rounded-circle"
          style={{
            width: "35px",
            height: "35px",
            marginTop: "3px",
            marginRight: "3px",
          }}
        />
        <span className="logged-prsn" style={{ marginTop: "7px" }}>
          {userName}
        </span>
        <br />
        <span>Whats on ur mind,{userName}</span>
      </div>
    </div>
  );
}
