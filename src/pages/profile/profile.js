import React from "react";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import "./profile.module.css";
import ProfilePic from "../../components/profilePic/profilePic";

export default function Profile() {
  const userName = localStorage.getItem("currentUser");

  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        className="pagetitle"
        style={{ marginLeft: "290px", marginTop: "30px" }}
      >
        <h1>Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">Users</li>
            <li className="breadcrumb-item active">Profile</li>
          </ol>
        </nav>
      </div>
      <section className="section profile" style={{ marginLeft: "290px" }}>
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <ProfilePic
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                />
                <h2>{userName}</h2>
                <h3>ComingSoon</h3>
                <div className="social-links mt-2">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
