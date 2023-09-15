import React from "react";
import "./profile.module.css";
import ProfilePic from "../../components/profilePic/profilePic";
import "../../index.css";
import Wrapper from "../../layouts/wrapper";

export default function Profile() {
  const userName = localStorage.getItem("currentUser");
  // useEffect(() => {
  //   const img = document.getElementsByClassName("cats");
  //   if (!img) {
  //     console.error("No 'img' element found in the document.");
  //     return;
  //   }

  //   fetch(
  //     "https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=cats",
  //     { mode: "cors" }
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (response) {
  //       img.src = response.data.images.original.url;
  //     })
  //     .catch((e) => {
  //       console.error("An error occurred:", e);
  //     });
  // }, []);

  return (
    <div>
      <Wrapper />
      <div className="pagetitle" style={{ marginLeft: "290px" }}>
        <h1>Profile</h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">Users</li>
          <li className="breadcrumb-item active">Profile</li>
        </ol>
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
                  <a href="https://twitter.com/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/" className="linkedin">
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
