import React, { useRef, useState } from "react";
import "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import styles from "./login.module.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const svdEmail = useRef();
  const svdPassword = useRef();
  const users = JSON.parse(localStorage.getItem("users"));
  const verification = (e) => {
    // console.log(users);
    users.forEach((user) => {
      if (
        user.email === svdEmail.current.value &&
        user.password === svdPassword.current.value
      ) {
        var currentEmail = svdEmail.current.value;
        var currentUser = user.username;
        localStorage.setItem("currentEmail", currentEmail);
        localStorage.setItem("currentUser", currentUser);
        navigate("/");
      } else {
        console.log("m4 4a8al");
      }
    });
    e.preventDefault();
  };
  return (
    <div
      className={styles.login_page}
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/technology-background_23-2148119855.jpg?w=1380&t=st=1688998470~exp=1688999070~hmac=957eb0c4621e85c9ae1f4b85781a4407d450d2f59eb8badfdce7338ac38423ae")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className={styles.login_cover}>
        <img src={logo} alt="Bloggingway Image" className={styles.logo1} />
        <h1>Login</h1>
        <form className="form-floating" onSubmit={verification}>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder=""
              ref={svdEmail}
            ></input>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              ref={svdPassword}
            ></input>
            <label for="floatingPassword">Password</label>
          </div>
          <button className={styles.loginBtn}>Sign in</button>
        </form>
        <div>
          <p>Or login using</p>
        </div>
        <div>
          <button
            href="https://accounts.google.com/signin"
            className={styles.facebookIcn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="25"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            facebook
          </button>
          <button
            href="https://accounts.google.com/signin"
            className={styles.googleIcn}
            style={{
              alignContent: "center",
              textDecoration: "none",
              textColor: "black",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="25"
              fill="currentColor"
              className="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
            Google
          </button>

          <button className={styles.githubIcn} href="https://github.com/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="25"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            Github
          </button>
          <br />
          <h5>Dont have an account</h5>
          <Link to="/signup">signup</Link>
          <br />
          <Link to="/">homepage</Link>
        </div>
      </div>
    </div>
  );
}
