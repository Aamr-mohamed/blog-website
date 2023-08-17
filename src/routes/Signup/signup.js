import React, { useRef } from "react";
import "./signup.module.css";
import styles from "./signup.module.css";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import bcrypt from "bcryptjs-react";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import CoolButton from "../components/button";

export default function SignupForm() {
  localStorage.setItem("currentEmail", []);
  localStorage.setItem("currentUser", []);
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const dateRef = useRef();
  const genderRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handlesubmit = (e) => {
    const hashedPassword = bcrypt.hashSync(passwordRef.current.value, 10);
    var existingUsers = JSON.parse(localStorage.getItem("users"));
    if (existingUsers == null) existingUsers = [];
    // console.log(users);
    e.preventDefault();
    if (existingUsers.find((user) => user.email === emailRef.current.value)) {
      alert("This Email is already exists");
    } else if (
      existingUsers.find((user) => user.username === usernameRef.current.value)
    ) {
      alert("This Username is already exists");
    } else {
      var data = {
        username: usernameRef.current.value,
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        date: dateRef.current.value,
        gender: genderRef.current.value,
        email: emailRef.current.value,
        password: hashedPassword,
      };
      existingUsers.push(data);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      navigate("/login");
    }
  };
  return (
    <div
      className={styles.signup_page}
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/technology-background_23-2148119855.jpg?w=1380&t=st=1688998470~exp=1688999070~hmac=957eb0c4621e85c9ae1f4b85781a4407d450d2f59eb8badfdce7338ac38423ae")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className={styles.signup_cover}>
        <img src={logo} alt="Bloggingway Image" className={styles.logo} />
        <h1 className={styles.title}>Signup</h1>
        <form className="mb-3" onSubmit={handlesubmit}>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Firstname"
              className="mb-2"
            >
              <Form.Control
                type="text"
                placeholder=""
                ref={firstnameRef}
                required
              />
            </FloatingLabel>
          </div>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Lastname"
              className="mb-2"
            >
              <Form.Control
                type="text"
                placeholder=""
                ref={lastnameRef}
                required
              />
            </FloatingLabel>
          </div>

          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="mb-2"
            >
              <Form.Control
                type="text"
                placeholder=""
                ref={usernameRef}
                required
              />
            </FloatingLabel>
          </div>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-2"
            >
              <Form.Control
                type="email"
                placeholder=""
                ref={emailRef}
                required
              />
            </FloatingLabel>
          </div>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-2"
            >
              <Form.Control type="password" placeholder="" required />
            </FloatingLabel>
          </div>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Repeat Password"
              className="mb-2"
            >
              <Form.Control
                type="password"
                placeholder=""
                required
                ref={passwordRef}
              />
            </FloatingLabel>
          </div>
          <div>
            <Form.Control
              type="date"
              ref={dateRef}
              required
              className="mb-2"
            ></Form.Control>
          </div>

          <div>
            <Form.Select
              className="mb-2"
              aria-label="Floating label select example"
              ref={genderRef}
              required
            >
              <option selected>Please select one…</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
              <option value="non-binary">Neutral gender</option>
              <option value="non-binary">Genderfluid</option>
              <option value="non-binary">Gender expansive</option>
              <option value="non-binary">Cisgender</option>
              <option value="non-binary">Genderfluid</option>
              <option value="non-binary">Transgender</option>
              <option value="non-binary">Two Spirit</option>
              <option value="non-binary">Cat/Dog/Animals</option>
              <option value="other">Other</option>
              <option value="Prefer not to answer">Prefer not to Answer</option>
            </Form.Select>
          </div>

          <div>
            <Form>
              <Form.Check
                type="switch"
                inline
                id="custom-switch"
                label="Remember me"
              />
            </Form>
          </div>
          <div>
            <p>
              By creating an account <br /> you agree to our
              <a href="https://safety.google/intl/en/principles/">
                Terms & Privacy
              </a>
              .
            </p>
          </div>
          <div>
            <CoolButton text="SignUp" />
          </div>
        </form>

        <div>
          <p style={{ textAlign: "center" }}>Or Signup using</p>
        </div>
        <div>
          <Button
            as="button"
            href="https://www.facebook.com/login/"
            variant="primary"
            style={{ margin: "6px" }}
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
          </Button>
          <Button
            href="https://accounts.google.com/signin"
            variant="danger"
            style={{ margin: "6px" }}
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
          </Button>

          <Button
            href="https://github.com/login"
            variant="dark"
            style={{ margin: "6px" }}
          >
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
          </Button>
          <h5>Already have an account</h5>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/">homepage</Link>
        </div>
      </div>
    </div>
  );
}
